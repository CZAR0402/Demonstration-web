import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ChevronRight, ChevronLeft, MoveHorizontal, GripVertical } from 'lucide-react';
import { 
  DndContext, 
  DragOverlay, 
  useDraggable, 
  useDroppable, 
  PointerSensor, 
  useSensor, 
  useSensors 
} from '@dnd-kit/core';
import { api } from '../services/api';

// Draggable individual lead card
function DraggableKanbanCard({ lead, onViewLead }) {
  const leadId = String(lead.id || lead._id);
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: leadId,
    data: { lead }
  });

  const style = {
    opacity: isDragging ? 0.3 : 1,
    cursor: isDragging ? 'grabbing' : 'grab',
    touchAction: 'none'
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style} 
      {...listeners} 
      {...attributes}
      className="kanban-card" 
      onClick={() => onViewLead && onViewLead(leadId)}
      title={`Drag to re-stage or click to view details for ${lead.name}`}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.4rem' }}>
        <div className="kanban-card-title" style={{ flexGrow: 1 }}>{lead.name}</div>
        <GripVertical size={13} style={{ color: 'var(--text-muted)', opacity: 0.5, marginTop: '2px', flexShrink: 0 }} />
      </div>
      <div className="kanban-card-meta">{lead.contactPerson}</div>
      <div style={{ marginTop: '0.65rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{lead.location}</span>
        <button 
          className="btn btn-secondary" 
          style={{ padding: '0.2rem 0.45rem', fontSize: '0.675rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
          onClick={(e) => {
            e.stopPropagation();
            onViewLead && onViewLead(leadId);
          }}
          title="View full details"
        >
          <span>View</span>
          <ChevronRight size={11} />
        </button>
      </div>
    </div>
  );
}

// Visual overlay card shown during active dragging
function DragOverlayCard({ lead }) {
  if (!lead) return null;
  return (
    <div 
      className="kanban-card" 
      style={{ 
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.35)', 
        border: '2px solid var(--accent)', 
        background: 'var(--bg-card)',
        cursor: 'grabbing',
        width: '248px',
        boxSizing: 'border-box',
        pointerEvents: 'none'
      }}
    >
      <div className="kanban-card-title" style={{ color: 'var(--accent)' }}>{lead.name}</div>
      <div className="kanban-card-meta">{lead.contactPerson}</div>
      <div style={{ marginTop: '0.65rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{lead.location}</span>
        <span className="badge" style={{ fontSize: '0.65rem', background: 'var(--accent-light)', color: 'var(--accent)', fontWeight: '600' }}>
          Moving...
        </span>
      </div>
    </div>
  );
}

// Droppable stage slab / column
function DroppableKanbanColumn({ stage, count, children, isOver }) {
  const { setNodeRef } = useDroppable({
    id: stage,
    data: { stage }
  });

  return (
    <div 
      ref={setNodeRef} 
      className={`kanban-column ${isOver ? 'column-drop-active' : ''}`}
    >
      <div className="column-header">
        <span className="column-title">{stage}</span>
        <span className="column-count">{count}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1, minHeight: '100px' }}>
        {children}
      </div>
    </div>
  );
}

function PipelineScreen({ leads, setLeads, onViewLead, setSelectedLeadId, setActiveTab, currentUser }) {
  const stages = ['New', 'Contacted', 'Interested', 'Demo Scheduled', 'Proposal Sent', 'Won', 'Lost'];
  const [activeLead, setActiveLead] = useState(null);
  const [activeOverStage, setActiveOverStage] = useState(null);
  const boardRef = useRef(null);

  // Require 5px drag distance before activating drag so normal clicks work smoothly
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const scrollBoard = (direction) => {
    if (boardRef.current) {
      const scrollOffset = direction === 'left' ? -320 : 320;
      boardRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  const handleDragStart = (event) => {
    const { active } = event;
    const found = leads.find(l => String(l.id || l._id) === String(active.id));
    setActiveLead(found || null);
  };

  const handleDragOver = (event) => {
    const { over } = event;
    setActiveOverStage(over ? over.id : null);
  };

  const handleDragEnd = async (event) => {
    const { active, over } = event;
    setActiveLead(null);
    setActiveOverStage(null);

    if (!over) return;

    const leadId = String(active.id);
    const targetStage = over.id;

    const targetLead = leads.find(l => String(l.id || l._id) === leadId);
    if (!targetLead || targetLead.stage === targetStage) return;

    const previousStage = targetLead.stage;
    const authorName = currentUser?.name || 'Sales Representative';

    // Optimistic UI state update
    const updated = leads.map(l => {
      if (String(l.id || l._id) === leadId) {
        return {
          ...l,
          stage: targetStage,
          activities: [
            {
              id: `act-${Date.now()}`,
              type: 'StatusChange',
              content: `Stage updated from '${previousStage}' to '${targetStage}'`,
              date: new Date().toISOString().split('T')[0],
              user: authorName
            },
            ...(l.activities || [])
          ]
        };
      }
      return l;
    });

    if (setLeads) {
      setLeads(updated);
    }

    // Persist to MongoDB backend
    try {
      await api.updateLead(leadId, { stage: targetStage });
    } catch (err) {
      console.warn('Could not sync stage change to server:', err.message);
    }
  };

  return (
    <div className="content-card" style={{ padding: '1.25rem' }}>
      {/* Title Bar with Horizontal Slider Controls */}
      <div className="card-title-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
        <div>
          <h2 style={{ fontSize: '1.15rem', fontWeight: '700' }}>CRM Pipeline Stages</h2>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
            Drag and drop leads between stage slabs, or use slider controls to scroll horizontally across all stages.
          </p>
        </div>
        
        {/* Slider Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={() => scrollBoard('left')}
            style={{ padding: '0.35rem 0.65rem', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', borderRadius: '8px' }}
            title="Slide left"
          >
            <ChevronLeft size={15} />
            <span>Slide Left</span>
          </button>
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={() => scrollBoard('right')}
            style={{ padding: '0.35rem 0.65rem', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', borderRadius: '8px' }}
            title="Slide right"
          >
            <span>Slide Right</span>
            <ChevronRight size={15} />
          </button>
        </div>
      </div>

      {/* DndContext Wrapping Kanban Board */}
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="kanban-board" ref={boardRef}>
          {stages.map(stage => {
            const stageLeads = leads.filter(l => l.stage === stage);
            const isOver = activeOverStage === stage;

            return (
              <DroppableKanbanColumn 
                key={stage} 
                stage={stage} 
                count={stageLeads.length}
                isOver={isOver}
              >
                {stageLeads.map(lead => (
                  <DraggableKanbanCard 
                    key={lead.id || lead._id} 
                    lead={lead} 
                    onViewLead={onViewLead} 
                  />
                ))}
                
                {stageLeads.length === 0 && (
                  <div style={{ 
                    padding: '2rem 0.75rem', 
                    textAlign: 'center', 
                    color: 'var(--text-muted)', 
                    fontSize: '0.75rem', 
                    border: '1px dashed var(--border)', 
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.01)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}>
                    <MoveHorizontal size={16} style={{ opacity: 0.4 }} />
                    <span>Drop lead slab here</span>
                  </div>
                )}
              </DroppableKanbanColumn>
            );
          })}
        </div>

        {/* Floating drag preview overlay portaled to document.body to eliminate offset from parent backdrop-filter */}
        {typeof document !== 'undefined' && createPortal(
          <DragOverlay 
            dropAnimation={{ duration: 180, easing: 'cubic-bezier(0.18, 0.67, 0.6, 1.22)' }}
            style={{ zIndex: 99999 }}
          >
            {activeLead ? <DragOverlayCard lead={activeLead} /> : null}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  );
}

export default PipelineScreen;
