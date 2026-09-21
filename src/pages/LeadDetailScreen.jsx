import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, Calendar, CheckSquare, Plus, Clock, MessageSquare, AlertCircle, ExternalLink } from 'lucide-react';
import { productCategories } from '../data/productFeaturesData';
import { api } from '../services/api';

function LeadDetailScreen({ leadId, leads, setLeads, onBack, currentUser }) {
  const lead = leads.find(l => l.id === leadId || l._id === leadId);

  const [activityInput, setActivityInput] = useState({ type: 'Call', content: '' });
  const [reminderInput, setReminderInput] = useState('');

  if (!lead) {
    return (
      <div className="content-card" style={{ textAlign: 'center', padding: '3rem' }}>
        <AlertCircle size={48} style={{ color: 'var(--danger)', marginBottom: '1rem' }} />
        <h2>Lead Not Found</h2>
        <button className="btn btn-primary" onClick={onBack} style={{ marginTop: '1rem' }}>
          <ArrowLeft size={16} /> Back to Leads
        </button>
      </div>
    );
  }

  const handleLogActivity = async (e) => {
    e.preventDefault();
    if (!activityInput.content) return;

    const authorName = currentUser?.name || 'Rahul Deshmukh';
    const newActivity = {
      id: `act-${Date.now()}`,
      type: activityInput.type,
      content: activityInput.content,
      date: new Date().toISOString().split('T')[0],
      user: authorName
    };

    // Optimistic UI state update
    setLeads(leads.map(l => {
      if (l.id === lead.id || l._id === lead.id) {
        return {
          ...l,
          activities: [
            newActivity,
            ...(l.activities || [])
          ]
        };
      }
      return l;
    }));

    try {
      const res = await api.addActivity(lead.id || lead._id, {
        type: activityInput.type,
        content: activityInput.content
      });
      if (res?.data && Array.isArray(res.data)) {
        setLeads(prev => prev.map(l => {
          if (l.id === lead.id || l._id === lead.id) {
            return {
              ...l,
              activities: res.data
            };
          }
          return l;
        }));
      }
    } catch (err) {
      console.warn('Could not persist activity to backend:', err);
    }

    setActivityInput({ type: 'Call', content: '' });
  };

  const handleAddReminder = async (e) => {
    e.preventDefault();
    if (!reminderInput) return;

    const dueDate = new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0];
    const newReminder = {
      id: `rem-${Date.now()}`,
      task: reminderInput,
      dueDate,
      completed: false
    };

    setLeads(leads.map(l => {
      if (l.id === lead.id || l._id === lead.id) {
        return {
          ...l,
          reminders: [
            ...(l.reminders || []),
            newReminder
          ]
        };
      }
      return l;
    }));

    try {
      await api.addReminder(lead.id || lead._id, {
        task: reminderInput,
        dueDate
      });
    } catch (err) {
      console.warn('Could not persist reminder to backend:', err);
    }

    setReminderInput('');
  };

  const toggleReminderCompleted = (reminderId) => {
    setLeads(leads.map(l => {
      if (l.id === lead.id || l._id === lead.id) {
        return {
          ...l,
          reminders: (l.reminders || []).map(r => r.id === reminderId ? { ...r, completed: !r.completed } : r)
        };
      }
      return l;
    }));
  };

  const moveStage = async (newStage) => {
    const authorName = currentUser?.name || 'Rahul Deshmukh';
    const newActivity = {
      id: `act-${Date.now()}`,
      type: 'StatusChange',
      content: `Pipeline stage updated to: ${newStage}`,
      date: new Date().toISOString().split('T')[0],
      user: authorName
    };

    setLeads(leads.map(l => {
      if (l.id === lead.id || l._id === lead.id) {
        return {
          ...l,
          stage: newStage,
          activities: [
            newActivity,
            ...(l.activities || [])
          ]
        };
      }
      return l;
    }));

    try {
      await api.updateLead(lead.id || lead._id, { stage: newStage });
    } catch (err) {
      console.warn('Could not persist stage update to backend:', err);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header / Navigation Bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button className="btn btn-secondary" onClick={onBack} style={{ padding: '0.5rem' }}>
          <ArrowLeft size={16} />
        </button>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', textTransform: 'capitalize' }}>{lead.name}</h2>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.25rem' }}>
            <span className={`badge ${lead.type.toLowerCase().replace(/ \/ | /g, '-')}`}>{lead.type}</span>
            <span className="badge stage-new">{lead.location}</span>
          </div>
        </div>
      </div>

      {/* Main Details Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem', alignItems: 'start' }}>
        {/* Left Side: Contact Information Card */}
        <div className="content-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card-title-bar">
            <h2>Lead Details</h2>
          </div>
          
          <div className="meta-list">
            <div className="meta-row">
              <span className="meta-label">Contact Person</span>
              <span className="meta-val" style={{ fontWeight: '600', fontSize: '0.95rem' }}>{lead.contactPerson}</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Phone Number</span>
              <span className="meta-val" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={14} style={{ color: 'var(--text-muted)' }} /> {lead.phone}
              </span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Email Address</span>
              <span className="meta-val" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={14} style={{ color: 'var(--text-muted)' }} /> {lead.email}
              </span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Location</span>
              <span className="meta-val">{lead.location}</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">CRM pipeline stage</span>
              <select 
                className="form-select" 
                style={{ marginTop: '0.25rem' }}
                value={lead.stage} 
                onChange={(e) => moveStage(e.target.value)}
              >
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Interested">Interested</option>
                <option value="Demo Scheduled">Demo Scheduled</option>
                <option value="Proposal Sent">Proposal Sent</option>
                <option value="Won">Won</option>
                <option value="Lost">Lost</option>
              </select>
            </div>
          </div>

          {/* Required Product Modules / Demand Track */}
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
            <span className="meta-label">Demanded / Required Product Modules</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.5rem' }}>
              {lead.requiredModules && lead.requiredModules.length > 0 ? (
                lead.requiredModules.map((mod, idx) => {
                  const matchedCat = productCategories.find(c => 
                    c.name?.toLowerCase().trim() === mod?.toLowerCase().trim() || 
                    c.id?.toLowerCase().trim() === mod?.toLowerCase().trim() || 
                    c.slug?.toLowerCase().trim() === mod?.toLowerCase().trim()
                  );
                  if (matchedCat) {
                    return (
                      <Link
                        key={idx}
                        to={`/product-features/${matchedCat.slug}`}
                        title={`View ${matchedCat.name} product showcase & video demo`}
                        className="badge"
                        style={{
                          background: 'var(--accent-light)',
                          color: 'var(--accent)',
                          fontWeight: '600',
                          padding: '0.3rem 0.65rem',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          border: '1px solid rgba(99, 102, 241, 0.3)',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <span>{matchedCat.name}</span>
                        <ExternalLink size={11} style={{ opacity: 0.7 }} />
                      </Link>
                    );
                  }
                  return (
                    <span key={idx} className="badge" style={{ background: 'var(--accent-light)', color: 'var(--accent)', fontWeight: '600', padding: '0.25rem 0.6rem' }}>
                      {mod}
                    </span>
                  );
                })
              ) : (
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>General CRM Interest</span>
              )}
            </div>
          </div>

          {lead.notes && (
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
              <span className="meta-label">Description / Notes</span>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: '1.4' }}>
                {lead.notes}
              </p>
            </div>
          )}
        </div>

        {/* Right Side: Followups & Activities timelines */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Reminders section */}
          <div className="content-card">
            <div className="card-title-bar">
              <h2>Follow-up Reminders</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
              {lead.reminders && lead.reminders.length > 0 ? (
                lead.reminders.map(rem => (
                  <div key={rem.id} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem', 
                    fontSize: '0.9rem',
                    padding: '0.625rem',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255,255,255,0.01)',
                    border: '1px solid var(--border)'
                  }}>
                    <input 
                      type="checkbox" 
                      checked={rem.completed} 
                      onChange={() => toggleReminderCompleted(rem.id)}
                      style={{ transform: 'scale(1.1)', cursor: 'pointer' }}
                    />
                    <span style={{ 
                      textDecoration: rem.completed ? 'line-through' : 'none', 
                      color: rem.completed ? 'var(--text-muted)' : 'var(--text-primary)', 
                      flexGrow: 1 
                    }}>
                      {rem.task}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Clock size={12} /> Due: {rem.dueDate}
                    </span>
                  </div>
                ))
              ) : (
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>No active reminders configured for this lead.</p>
              )}
            </div>
            
            <form onSubmit={handleAddReminder} style={{ display: 'flex', gap: '0.5rem' }}>
              <input 
                type="text" 
                placeholder="Schedule a new follow-up action item..." 
                className="form-input" 
                value={reminderInput}
                onChange={(e) => setReminderInput(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-secondary">
                <Plus size={16} /> Add Task
              </button>
            </form>
          </div>

          {/* Activity Timeline */}
          <div className="content-card">
            <div className="card-title-bar">
              <h2>Interaction Timeline</h2>
            </div>
            
            {/* Log a new activity */}
            <form onSubmit={handleLogActivity} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.75rem', 
              marginBottom: '1.5rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid var(--border)' 
            }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <select 
                  className="form-select" 
                  style={{ width: '120px' }}
                  value={activityInput.type} 
                  onChange={(e) => setActivityInput({ ...activityInput, type: e.target.value })}
                >
                  <option value="Call">Call</option>
                  <option value="Email">Email</option>
                  <option value="Meeting">Meeting</option>
                  <option value="Note">General Note</option>
                </select>
                <input 
                  type="text" 
                  placeholder="Record summary of the call, meeting details..." 
                  className="form-input"
                  value={activityInput.content}
                  onChange={(e) => setActivityInput({ ...activityInput, content: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                Post to Timeline
              </button>
            </form>

            <div className="timeline">
              {lead.activities && lead.activities.length > 0 ? (
                lead.activities.map(act => (
                  <div className="timeline-item" key={act.id} style={{ marginBottom: '1.25rem' }}>
                    <div className="timeline-icon">
                      {act.type === 'Call' ? <Phone size={12} /> : act.type === 'Email' ? <Mail size={12} /> : <MessageSquare size={12} />}
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                          {act.type} logged by {(act.user === 'Admin' && act.type !== 'System' && currentUser?.name) ? currentUser.name : (act.user || currentUser?.name || 'User')}
                        </span>
                        <span>{act.date}</span>
                      </div>
                      <div className="timeline-body" style={{ marginTop: '0.25rem' }}>{act.content}</div>
                    </div>
                  </div>
                ))
              ) : (
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>No historical logs available.</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LeadDetailScreen;
