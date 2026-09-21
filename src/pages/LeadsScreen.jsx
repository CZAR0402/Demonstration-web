import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { 
  Search, Eye, X, Plus, UserCheck, Shield, UserPlus, Layers, 
  RotateCcw, Landmark, Building2, Briefcase, ChevronRight, AlertCircle 
} from 'lucide-react';
import { api } from '../services/api';
import { productCategories, moduleGroups } from '../data/productFeaturesData';

const AVAILABLE_MODULES = productCategories.map(cat => cat.name);

function LeadsScreen({ 
  leads, 
  setLeads, 
  showAddLead, 
  setShowAddLead,
  onViewLead,
  currentUser
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [filterModule, setFilterModule] = useState('All');
  const [assignModalLead, setAssignModalLead] = useState(null);
  const [bdesList, setBdesList] = useState([]);
  const [assigning, setAssigning] = useState(false);
  const [activePopover, setActivePopover] = useState(null);
  const closePopoverTimerRef = useRef(null);

  const handleBadgeMouseEnter = (e, lead) => {
    if (closePopoverTimerRef.current) {
      clearTimeout(closePopoverTimerRef.current);
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const openUpward = spaceBelow < 280;

    setActivePopover({
      lead,
      top: openUpward ? rect.top - 6 : rect.bottom + 6,
      left: Math.max(12, Math.min(rect.left, window.innerWidth - 340)),
      openUpward
    });
  };

  const handleBadgeMouseLeave = () => {
    closePopoverTimerRef.current = setTimeout(() => {
      setActivePopover(null);
    }, 180);
  };

  const handlePopoverMouseEnter = () => {
    if (closePopoverTimerRef.current) {
      clearTimeout(closePopoverTimerRef.current);
    }
  };

  const handlePopoverMouseLeave = () => {
    closePopoverTimerRef.current = setTimeout(() => {
      setActivePopover(null);
    }, 180);
  };

  const isAdmin = currentUser?.role === 'ADMIN';

  // Fetch BDE roster for Admin lead assignment
  useEffect(() => {
    if (isAdmin) {
      api.getBDEs()
        .then(res => setBdesList(res.data || []))
        .catch(err => console.warn('Could not load BDE roster:', err));
    }
  }, [isAdmin]);

  // Form states for creating a new lead
  const [newLead, setNewLead] = useState({
    name: '', type: 'Cooperative Bank', contactPerson: '',
    email: '', phone: '', location: '', notes: '',
    assignedTo: '',
    requiredModules: []
  });

  const [formErrors, setFormErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateLead = (data) => {
    const errs = {};

    // Entity Name
    if (!data.name || !data.name.trim()) {
      errs.name = 'Entity Name is required';
    } else if (data.name.trim().length < 3) {
      errs.name = 'Entity Name must be at least 3 characters';
    }

    // Contact Person
    if (!data.contactPerson || !data.contactPerson.trim()) {
      errs.contactPerson = 'Contact Person is required';
    } else if (data.contactPerson.trim().length < 2) {
      errs.contactPerson = 'Contact Person must be at least 2 characters';
    } else if (!/^[a-zA-Z\s.'-]+$/.test(data.contactPerson.trim())) {
      errs.contactPerson = 'Letters and spaces only (no digits)';
    }

    // Email (if provided)
    if (data.email && data.email.trim()) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(data.email.trim())) {
        errs.email = 'Enter a valid email address (e.g. contact@entity.com)';
      }
    }

    // Phone (strictly digits only, must be 10 digits if provided)
    if (data.phone && data.phone.trim()) {
      const p = data.phone.trim();
      if (!/^\d+$/.test(p)) {
        errs.phone = 'Phone number must contain digits only';
      } else if (p.length !== 10) {
        errs.phone = `Phone number must be exactly 10 digits (${p.length}/10)`;
      }
    }

    // Location (if provided)
    if (data.location && data.location.trim() && data.location.trim().length < 2) {
      errs.location = 'Location must be at least 2 characters';
    }

    return errs;
  };

  const handleFieldBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const errs = validateLead(newLead);
    setFormErrors(prev => ({ ...prev, [field]: errs[field] || '' }));
  };

  const handleAddLeadSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all inputs as touched
    setTouched({
      name: true,
      contactPerson: true,
      email: true,
      phone: true,
      location: true
    });

    const validationErrors = validateLead(newLead);
    setFormErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const selectedBde = bdesList.find(b => b.id === newLead.assignedTo);
    const assignedName = selectedBde ? selectedBde.name : (newLead.assignedTo ? 'Assigned' : 'Unassigned');

    try {
      const payload = {
        ...newLead,
        assignedToName: assignedName
      };
      const res = await api.createLead(payload);
      if (res.data) {
        setLeads([res.data, ...leads]);
      }
    } catch (err) {
      // Fallback local create if server fails
      const created = {
        ...newLead,
        id: `lead-${Date.now()}`,
        stage: 'New',
        assignedToName: assignedName,
        activities: [{ id: `act-${Date.now()}`, type: 'System', content: 'Lead created.', date: new Date().toISOString().split('T')[0], user: currentUser?.name || 'User' }],
        reminders: []
      };
      setLeads([created, ...leads]);
    }

    handleCloseAddLead();
  };

  const handleCloseAddLead = () => {
    setNewLead({ name: '', type: 'Cooperative Bank', contactPerson: '', email: '', phone: '', location: '', notes: '', assignedTo: '', requiredModules: [] });
    setFormErrors({});
    setTouched({});
    setShowAddLead(false);
  };

  const handleAssignSubmit = async (bdeUserId) => {
    if (!assignModalLead) return;
    setAssigning(true);

    try {
      const res = await api.assignLead(assignModalLead.id, bdeUserId);
      if (res.data) {
        setLeads(leads.map(l => l.id === assignModalLead.id ? {
          ...l,
          assignedTo: res.data.assignedTo,
          assignedToName: res.data.assignedToName
        } : l));
      }
    } catch (err) {
      // Local fallback update
      const bdeObj = bdesList.find(b => b.id === bdeUserId);
      setLeads(leads.map(l => l.id === assignModalLead.id ? {
        ...l,
        assignedTo: bdeUserId,
        assignedToName: bdeObj ? bdeObj.name : (bdeUserId ? 'Assigned' : 'Unassigned')
      } : l));
    } finally {
      setAssigning(false);
      setAssignModalLead(null);
    }
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          lead.contactPerson.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          lead.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'All' || lead.type === filterType;
    const matchesModule = filterModule === 'All' || (lead.requiredModules && lead.requiredModules.includes(filterModule));
    return matchesSearch && matchesType && matchesModule;
  });

  const getEntityInitials = (name) => {
    if (!name) return 'LD';
    const clean = name.replace(/[^a-zA-Z0-9\s]/g, '').trim();
    const parts = clean.split(/\s+/);
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return clean.substring(0, 2).toUpperCase();
  };

  const getAvatarClass = (type) => {
    if (type?.includes('Bank')) return 'bank';
    if (type?.includes('Society')) return 'society';
    return 'auditor';
  };

  const formatEntityName = (name) => {
    if (!name) return '';
    return name
      .split(' ')
      .map(word => {
        const lower = word.toLowerCase();
        if (['ca', 'co-op', 'coop', 'fd', 'rd', 'ai', 'bde', 'crm'].includes(lower)) {
          return lower === 'co-op' ? 'Co-op' : lower.toUpperCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  };

  const banksCount = leads.filter(l => l.type === 'Cooperative Bank').length;
  const societiesCount = leads.filter(l => l.type === 'Cooperative Society').length;
  const auditorsCount = leads.filter(l => l.type === 'CA Firm / Auditor').length;

  const isFiltered = searchQuery !== '' || filterType !== 'All' || filterModule !== 'All';

  const resetFilters = () => {
    setSearchQuery('');
    setFilterType('All');
    setFilterModule('All');
  };

  return (
    <div className="main-view-panel">
      {/* Quick Category Filter Pills */}
      <div className="quick-filter-bar">
        <button 
          className={`quick-filter-pill ${filterType === 'All' ? 'active' : ''}`}
          onClick={() => setFilterType('All')}
        >
          <span>All Leads</span>
          <span className="quick-filter-count">{leads.length}</span>
        </button>
        <button 
          className={`quick-filter-pill ${filterType === 'Cooperative Bank' ? 'active' : ''}`}
          onClick={() => setFilterType('Cooperative Bank')}
        >
          <Landmark size={13} />
          <span>Cooperative Banks</span>
          <span className="quick-filter-count">{banksCount}</span>
        </button>
        <button 
          className={`quick-filter-pill ${filterType === 'Cooperative Society' ? 'active' : ''}`}
          onClick={() => setFilterType('Cooperative Society')}
        >
          <Building2 size={13} />
          <span>Cooperative Societies</span>
          <span className="quick-filter-count">{societiesCount}</span>
        </button>
        <button 
          className={`quick-filter-pill ${filterType === 'CA Firm / Auditor' ? 'active' : ''}`}
          onClick={() => setFilterType('CA Firm / Auditor')}
        >
          <Briefcase size={13} />
          <span>CA & Auditors</span>
          <span className="quick-filter-count">{auditorsCount}</span>
        </button>

        {isFiltered && (
          <button 
            className="quick-filter-pill"
            style={{ marginLeft: 'auto', color: 'var(--accent)', borderColor: 'rgba(99, 102, 241, 0.3)' }}
            onClick={resetFilters}
          >
            <RotateCcw size={12} />
            <span>Reset Filters</span>
          </button>
        )}
      </div>

      {/* Search and Filters Control Bar */}
      <div className="content-card" style={{ padding: '1rem 1.25rem' }}>
        <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', flexGrow: 1, minWidth: '240px' }}>
            <Search size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              placeholder="Search societies, banks, locations, CA firms..." 
              className="form-input" 
              style={{ paddingLeft: '2.4rem', paddingRight: '3rem' }} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
              >
                <X size={14} />
              </button>
            )}
          </div>
          <div style={{ width: '190px' }}>
            <select className="form-select" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
              <option value="All">All Entity Types</option>
              <option value="Cooperative Bank">Cooperative Banks</option>
              <option value="Cooperative Society">Cooperative Societies</option>
              <option value="CA Firm / Auditor">CA & Auditors</option>
            </select>
          </div>
          <div style={{ width: '230px' }}>
            <select className="form-select" value={filterModule} onChange={(e) => setFilterModule(e.target.value)}>
              <option value="All">All Product Modules</option>
              {productCategories.map(cat => (
                <option key={cat.id} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Lead Table */}
      <div className="content-card">
        <div className="card-title-bar">
          <div>
            <h2>Lead Registry</h2>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.15rem' }}>
              {isAdmin ? 'Admin View: Full Lead Database & Sales Rep Assignment' : `Assigned Territory Portfolio for ${currentUser?.name || 'Sales Rep'}`}
            </span>
          </div>
          <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontWeight: '600' }}>
            Showing {filteredLeads.length} of {leads.length} Leads
          </span>
        </div>
        <div className="table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th style={{ minWidth: '280px', width: '28%' }}>Entity Name</th>
                <th style={{ minWidth: '140px', width: '13%' }}>Type</th>
                <th style={{ minWidth: '140px', width: '13%' }}>Demanded Modules</th>
                <th style={{ minWidth: '180px', width: '18%' }}>Contact Person</th>
                <th style={{ minWidth: '160px', width: '14%' }}>Assigned Sales BDE</th>
                <th style={{ minWidth: '110px', width: '12%' }}>Stage</th>
                <th style={{ minWidth: '85px', textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: '3.5rem 1rem', color: 'var(--text-muted)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem' }}>
                      <Shield size={36} style={{ opacity: 0.25, color: 'var(--accent)' }} />
                      <span style={{ fontWeight: '600', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>No matching leads found</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Try adjusting your search keywords or clear current filters.</span>
                      <button className="btn btn-secondary btn-sm" onClick={resetFilters} style={{ marginTop: '0.5rem' }}>
                        Reset All Filters
                      </button>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredLeads.map(lead => (
                  <tr 
                    key={lead.id} 
                    onClick={() => onViewLead(lead.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <td>
                      <div className="entity-cell">
                        <div className={`entity-avatar ${getAvatarClass(lead.type)}`}>
                          {getEntityInitials(lead.name)}
                        </div>
                        <div style={{ minWidth: 0, flex: 1 }}>
                          <div className="entity-info-name" title={lead.name}>
                            {formatEntityName(lead.name)}
                          </div>
                          <div className="entity-info-sub">
                            {lead.location && <span className="entity-location">{lead.location}</span>}
                            {lead.location && lead.phone && <span className="entity-sub-dot">•</span>}
                            {lead.phone && <span className="entity-phone">{lead.phone}</span>}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className={`badge ${lead.type.toLowerCase().replace(/ \/ | /g, '-')}`}>
                        {lead.type}
                      </span>
                    </td>
                    <td>
                      {lead.requiredModules && lead.requiredModules.length > 0 ? (
                        <div 
                          style={{ position: 'relative', display: 'inline-block' }}
                          onMouseEnter={(e) => handleBadgeMouseEnter(e, lead)}
                          onMouseLeave={handleBadgeMouseLeave}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div 
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.45rem',
                              padding: '0.35rem 0.75rem',
                              borderRadius: '20px',
                              background: 'var(--accent-light)',
                              border: '1px solid rgba(99, 102, 241, 0.28)',
                              color: 'var(--accent)',
                              fontSize: '0.75rem',
                              fontWeight: '600',
                              cursor: 'pointer',
                              transition: 'all 0.15s ease',
                              whiteSpace: 'nowrap'
                            }}
                            title={lead.requiredModules.join(' • ')}
                          >
                            <Layers size={13} />
                            <span>{lead.requiredModules.length} {lead.requiredModules.length === 1 ? 'Module' : 'Modules'}</span>
                            <span style={{ 
                              fontSize: '0.65rem', 
                              padding: '1px 5px', 
                              borderRadius: '10px', 
                              background: 'var(--accent)', 
                              color: '#ffffff',
                              fontWeight: '700',
                              lineHeight: '1.2'
                            }}>
                              {lead.requiredModules.length}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <span style={{ 
                          fontSize: '0.75rem', 
                          color: 'var(--text-muted)', 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '0.35rem',
                          padding: '0.25rem 0.6rem',
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid var(--border)'
                        }}>
                          <Layers size={11} style={{ opacity: 0.5 }} />
                          0 Modules
                        </span>
                      )}
                    </td>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontWeight: '600', fontSize: '0.85rem' }}>{lead.contactPerson || 'Not Specified'}</span>
                        {lead.email && <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>{lead.email}</span>}
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: lead.assignedToName && lead.assignedToName !== 'Unassigned' ? 'linear-gradient(135deg, #10b981, #059669)' : 'var(--border)',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.65rem',
                          fontWeight: '700',
                          flexShrink: 0
                        }}>
                          {lead.assignedToName && lead.assignedToName !== 'Unassigned' ? lead.assignedToName.substring(0, 2).toUpperCase() : '?'}
                        </div>
                        <span style={{ fontSize: '0.825rem', fontWeight: '600', color: lead.assignedToName && lead.assignedToName !== 'Unassigned' ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                          {lead.assignedToName || 'Unassigned'}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className={`badge stage-${lead.stage.toLowerCase().replace(' ', '-')}`}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor', display: 'inline-block' }}></span>
                        <span>{lead.stage}</span>
                      </span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }} onClick={(e) => e.stopPropagation()}>
                        <button 
                          className="table-action-btn" 
                          onClick={() => onViewLead(lead.id)}
                          title="View lead details"
                        >
                          <Eye size={13} />
                          <span>View</span>
                        </button>

                        {isAdmin && (!lead.assignedToName || lead.assignedToName === 'Unassigned' || !lead.assignedTo) && (
                          <button 
                            className="btn btn-primary btn-sm" 
                            style={{ padding: '0.3rem 0.55rem', fontSize: '0.725rem' }}
                            onClick={() => setAssignModalLead(lead)}
                            title="Assign to Sales BDE"
                          >
                            <UserPlus size={12} /> Assign
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Admin Assign Lead Modal */}
      {assignModalLead && (
        <div className="modal-overlay" onClick={() => setAssignModalLead(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '460px' }}>
            <div className="modal-header">
              <div>
                <h2>Assign Lead to Sales Executive</h2>
                <span style={{ fontSize: '0.785rem', color: 'var(--accent)', fontWeight: '600' }}>
                  {assignModalLead.name}
                </span>
              </div>
              <button className="close-btn" onClick={() => setAssignModalLead(null)}>
                <X size={18} />
              </button>
            </div>

            <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Select a Sales BDE from your active roster to assign primary ownership of this lead:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => handleAssignSubmit(null)}
                style={{ justifyContent: 'flex-start', padding: '0.65rem 0.85rem', fontSize: '0.825rem' }}
                disabled={assigning}
              >
                <X size={14} style={{ color: 'var(--danger)' }} /> Leave Unassigned
              </button>

              {bdesList.map(bde => (
                <button
                  key={bde.id}
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => handleAssignSubmit(bde.id)}
                  style={{
                    justifyContent: 'flex-start', display: 'flex', alignItems: 'center', gap: '0.65rem',
                    padding: '0.65rem 0.85rem', fontSize: '0.825rem',
                    background: assignModalLead.assignedTo === bde.id ? 'var(--accent-light)' : 'var(--bg)',
                    borderColor: assignModalLead.assignedTo === bde.id ? 'var(--accent)' : 'var(--border)'
                  }}
                  disabled={assigning}
                >
                  <div style={{
                    width: '26px', height: '26px', borderRadius: '50%', background: 'var(--accent)', color: '#fff',
                    fontSize: '0.725rem', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    {bde.name.charAt(0)}
                  </div>
                  <div style={{ textAlign: 'left', flexGrow: 1 }}>
                    <div style={{ fontWeight: '700', color: 'var(--text-primary)' }}>{bde.name}</div>
                    <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>{bde.region} • {bde.assignedCount || 0} Leads</div>
                  </div>
                  {assignModalLead.assignedTo === bde.id && (
                    <UserCheck size={16} style={{ color: 'var(--accent)' }} />
                  )}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button className="btn btn-secondary" onClick={() => setAssignModalLead(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Add Lead Dialog Modal (Wide Rectangular Layout) */}
      {showAddLead && (
        <div className="modal-overlay" onClick={handleCloseAddLead}>
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()} 
            style={{ 
              maxWidth: '960px', 
              width: '94vw', 
              maxHeight: '90vh', 
              padding: 0,
              display: 'flex', 
              flexDirection: 'column', 
              borderRadius: '16px', 
              overflow: 'hidden',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Header */}
            <div className="modal-header" style={{ margin: 0, padding: '1.25rem 1.75rem', borderBottom: '1px solid var(--border)', background: 'var(--bg-card)' }}>
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '700', margin: 0 }}>Add Lead to Registry</h2>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0.2rem 0 0 0' }}>
                  Enter entity details and pick demanded banking capabilities
                </p>
              </div>
              <button className="close-btn" onClick={handleCloseAddLead} style={{ margin: 0 }}>
                <X size={18} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleAddLeadSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
              {/* Scrollable 2-Column Body */}
              <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem 1.75rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1.15fr', gap: '1.75rem' }}>
                  {/* Left Column: Entity & Contact Details */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {Object.keys(formErrors).some(k => formErrors[k]) && (
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        padding: '0.55rem 0.75rem', 
                        borderRadius: '8px', 
                        background: 'var(--danger-light)', 
                        border: '1px solid rgba(239, 68, 68, 0.3)', 
                        color: 'var(--danger)', 
                        fontSize: '0.75rem', 
                        fontWeight: '500' 
                      }}>
                        <AlertCircle size={14} style={{ flexShrink: 0 }} />
                        <span>Please correct the highlighted errors before submitting.</span>
                      </div>
                    )}

                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Entity Name *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Pune Central Cooperative Society" 
                        className="form-input" 
                        value={newLead.name}
                        onChange={(e) => {
                          const val = e.target.value;
                          setNewLead(prev => ({ ...prev, name: val }));
                          if (touched.name) {
                            setFormErrors(prev => ({
                              ...prev,
                              name: !val.trim() ? 'Entity Name is required' : val.trim().length < 3 ? 'Entity Name must be at least 3 characters' : ''
                            }));
                          }
                        }}
                        onBlur={() => handleFieldBlur('name')}
                        style={touched.name && formErrors.name ? { borderColor: 'var(--danger)', boxShadow: '0 0 0 2px rgba(239, 68, 68, 0.15)' } : {}}
                      />
                      {touched.name && formErrors.name && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px', color: 'var(--danger)', fontSize: '0.72rem', fontWeight: '500' }}>
                          <AlertCircle size={11} /> {formErrors.name}
                        </div>
                      )}
                    </div>
                    <div className="form-row" style={{ margin: 0, gap: '0.75rem' }}>
                      <div className="form-group" style={{ margin: 0 }}>
                        <label className="form-label">Category *</label>
                        <select 
                          className="form-select"
                          value={newLead.type}
                          onChange={(e) => setNewLead({ ...newLead, type: e.target.value })}
                        >
                          <option value="Cooperative Bank">Cooperative Bank</option>
                          <option value="Cooperative Society">Cooperative Society</option>
                          <option value="CA Firm / Auditor">CA Firm / Auditor</option>
                        </select>
                      </div>
                      <div className="form-group" style={{ margin: 0 }}>
                        <label className="form-label">Contact Person *</label>
                        <input 
                          type="text" 
                          placeholder="e.g. Ramesh Patil" 
                          className="form-input" 
                          value={newLead.contactPerson}
                          onChange={(e) => {
                            const val = e.target.value;
                            setNewLead(prev => ({ ...prev, contactPerson: val }));
                            if (touched.contactPerson) {
                              let err = '';
                              if (!val.trim()) err = 'Contact Person is required';
                              else if (val.trim().length < 2) err = 'Minimum 2 characters';
                              else if (!/^[a-zA-Z\s.'-]+$/.test(val.trim())) err = 'Letters and spaces only (no numbers)';
                              setFormErrors(prev => ({ ...prev, contactPerson: err }));
                            }
                          }}
                          onBlur={() => handleFieldBlur('contactPerson')}
                          style={touched.contactPerson && formErrors.contactPerson ? { borderColor: 'var(--danger)', boxShadow: '0 0 0 2px rgba(239, 68, 68, 0.15)' } : {}}
                        />
                        {touched.contactPerson && formErrors.contactPerson && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px', color: 'var(--danger)', fontSize: '0.72rem', fontWeight: '500' }}>
                            <AlertCircle size={11} /> {formErrors.contactPerson}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="form-row" style={{ margin: 0, gap: '0.75rem' }}>
                      <div className="form-group" style={{ margin: 0 }}>
                        <label className="form-label">Email</label>
                        <input 
                          type="email" 
                          placeholder="contact@entity.com" 
                          className="form-input"
                          value={newLead.email}
                          onChange={(e) => {
                            const val = e.target.value;
                            setNewLead(prev => ({ ...prev, email: val }));
                            if (touched.email) {
                              let err = '';
                              if (val.trim() && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val.trim())) {
                                err = 'Invalid email address';
                              }
                              setFormErrors(prev => ({ ...prev, email: err }));
                            }
                          }}
                          onBlur={() => handleFieldBlur('email')}
                          style={touched.email && formErrors.email ? { borderColor: 'var(--danger)', boxShadow: '0 0 0 2px rgba(239, 68, 68, 0.15)' } : {}}
                        />
                        {touched.email && formErrors.email && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px', color: 'var(--danger)', fontSize: '0.72rem', fontWeight: '500' }}>
                            <AlertCircle size={11} /> {formErrors.email}
                          </div>
                        )}
                      </div>
                      <div className="form-group" style={{ margin: 0 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                          <label className="form-label" style={{ margin: 0 }}>Phone</label>
                          <span style={{ 
                            fontSize: '0.68rem', 
                            fontWeight: '600',
                            color: newLead.phone.length === 10 ? 'var(--success)' : newLead.phone.length > 0 ? 'var(--accent)' : 'var(--text-muted)' 
                          }}>
                            {newLead.phone.length}/10 digits
                          </span>
                        </div>
                        <input 
                          type="tel" 
                          inputMode="numeric"
                          pattern="[0-9]*"
                          maxLength={10}
                          placeholder="10-digit number" 
                          className="form-input"
                          value={newLead.phone}
                          onChange={(e) => {
                            // Take strictly only digits, maximum 10 digits
                            const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
                            setNewLead(prev => ({ ...prev, phone: digits }));
                            if (touched.phone) {
                              let err = '';
                              if (digits && digits.length !== 10) {
                                err = `Must be 10 digits (${digits.length}/10)`;
                              }
                              setFormErrors(prev => ({ ...prev, phone: err }));
                            }
                          }}
                          onBlur={() => handleFieldBlur('phone')}
                          style={touched.phone && formErrors.phone ? { borderColor: 'var(--danger)', boxShadow: '0 0 0 2px rgba(239, 68, 68, 0.15)' } : {}}
                        />
                        {touched.phone && formErrors.phone && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px', color: 'var(--danger)', fontSize: '0.72rem', fontWeight: '500' }}>
                            <AlertCircle size={11} /> {formErrors.phone}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Location</label>
                      <input 
                        type="text" 
                        placeholder="City, State (e.g. Kolhapur, Maharashtra)" 
                        className="form-input"
                        value={newLead.location}
                        onChange={(e) => {
                          const val = e.target.value;
                          setNewLead(prev => ({ ...prev, location: val }));
                          if (touched.location) {
                            let err = '';
                            if (val.trim() && val.trim().length < 2) err = 'Location must be at least 2 characters';
                            setFormErrors(prev => ({ ...prev, location: err }));
                          }
                        }}
                        onBlur={() => handleFieldBlur('location')}
                        style={touched.location && formErrors.location ? { borderColor: 'var(--danger)', boxShadow: '0 0 0 2px rgba(239, 68, 68, 0.15)' } : {}}
                      />
                      {touched.location && formErrors.location && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px', color: 'var(--danger)', fontSize: '0.72rem', fontWeight: '500' }}>
                          <AlertCircle size={11} /> {formErrors.location}
                        </div>
                      )}
                    </div>
                    {isAdmin && (
                      <div className="form-group" style={{ margin: 0 }}>
                        <label className="form-label">Assign Sales BDE</label>
                        <select 
                          className="form-select"
                          value={newLead.assignedTo}
                          onChange={(e) => setNewLead({ ...newLead, assignedTo: e.target.value })}
                        >
                          <option value="">Leave Unassigned (Shared Pool)</option>
                          {bdesList.map(bde => (
                            <option key={bde.id} value={bde.id}>
                              {bde.name} ({bde.region})
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                    <div className="form-group" style={{ margin: 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                        <label className="form-label" style={{ margin: 0 }}>Initial Notes & Requirements</label>
                        <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{newLead.notes.length}/500</span>
                      </div>
                      <textarea 
                        placeholder="Describe current core banking setup, timeline, notes..." 
                        className="form-textarea"
                        maxLength={500}
                        style={{ minHeight: '65px', resize: 'vertical' }}
                        value={newLead.notes}
                        onChange={(e) => setNewLead(prev => ({ ...prev, notes: e.target.value.slice(0, 500) }))}
                      ></textarea>
                    </div>
                  </div>

                  {/* Right Column: Required Product Modules Selection */}
                  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
                      <label className="form-label" style={{ margin: 0, fontWeight: '700' }}>
                        Demanded Modules ({newLead.requiredModules.length})
                      </label>
                      {newLead.requiredModules.length > 0 && (
                        <button 
                          type="button" 
                          onClick={() => setNewLead({ ...newLead, requiredModules: [] })}
                          style={{ background: 'none', border: 'none', color: 'var(--accent)', fontSize: '0.725rem', cursor: 'pointer', textDecoration: 'underline', fontWeight: '600' }}
                        >
                          Clear Selection
                        </button>
                      )}
                    </div>
                    <div style={{ 
                      flex: 1,
                      maxHeight: '360px', 
                      overflowY: 'auto', 
                      padding: '0.85rem', 
                      border: '1px solid var(--border)', 
                      borderRadius: '10px', 
                      background: 'var(--bg)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.85rem'
                    }}>
                      {moduleGroups.map(group => {
                        const groupCategories = productCategories.filter(cat => cat.group === group.name);
                        return (
                          <div key={group.name}>
                            <div style={{ 
                              fontSize: '0.68rem', 
                              fontWeight: '700', 
                              textTransform: 'uppercase', 
                              letterSpacing: '0.05em', 
                              color: 'var(--accent)', 
                              marginBottom: '0.35rem', 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '0.35rem' 
                            }}>
                              <span>{group.name} Modules</span>
                              <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)', fontWeight: '500' }}>({groupCategories.length})</span>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                              {groupCategories.map(cat => {
                                const isSelected = newLead.requiredModules.includes(cat.name);
                                return (
                                  <button
                                    key={cat.id}
                                    type="button"
                                    onClick={() => {
                                      if (isSelected) {
                                        setNewLead({ ...newLead, requiredModules: newLead.requiredModules.filter(m => m !== cat.name) });
                                      } else {
                                        setNewLead({ ...newLead, requiredModules: [...newLead.requiredModules, cat.name] });
                                      }
                                    }}
                                    title={cat.shortDescription}
                                    style={{
                                      fontSize: '0.72rem',
                                      fontWeight: isSelected ? '600' : '500',
                                      padding: '0.35rem 0.65rem',
                                      borderRadius: '6px',
                                      border: `1px solid ${isSelected ? 'var(--accent)' : 'var(--border)'}`,
                                      backgroundColor: isSelected ? 'var(--accent-light)' : 'var(--bg-card)',
                                      color: isSelected ? 'var(--accent)' : 'var(--text-secondary)',
                                      cursor: 'pointer',
                                      transition: 'all 0.15s ease',
                                      textAlign: 'left'
                                    }}
                                  >
                                    {isSelected ? '✓ ' : '+ '} {cat.name}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Fixed Footer */}
              <div style={{ 
                padding: '1rem 1.75rem', 
                borderTop: '1px solid var(--border)', 
                background: 'var(--bg-card)', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center' 
              }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {newLead.requiredModules.length > 0 ? (
                    <span style={{ color: 'var(--accent)', fontWeight: '600' }}>
                      ✓ {newLead.requiredModules.length} product module{newLead.requiredModules.length === 1 ? '' : 's'} assigned to this lead
                    </span>
                  ) : (
                    <span>No specific modules selected (General CRM lead)</span>
                  )}
                </div>
                <div style={{ display: 'flex', gap: '0.65rem' }}>
                  <button type="button" className="btn btn-secondary" onClick={handleCloseAddLead}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary" style={{ minWidth: '120px' }}>
                    Create Lead
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Portal Popover for Demanded Modules - escapes table overflow clipping */}
      {activePopover && activePopover.lead && createPortal(
        <div
          onMouseEnter={handlePopoverMouseEnter}
          onMouseLeave={handlePopoverMouseLeave}
          style={{
            position: 'fixed',
            top: activePopover.openUpward ? 'auto' : `${activePopover.top}px`,
            bottom: activePopover.openUpward ? `${window.innerHeight - activePopover.top}px` : 'auto',
            left: `${activePopover.left}px`,
            minWidth: '280px',
            maxWidth: '340px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '0.85rem',
            boxShadow: '0 20px 45px -4px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.08)',
            zIndex: 9999,
            pointerEvents: 'auto'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '0.6rem', 
            paddingBottom: '0.45rem', 
            borderBottom: '1px solid var(--border)' 
          }}>
            <span style={{ 
              fontSize: '0.7rem', 
              fontWeight: '700', 
              textTransform: 'uppercase', 
              color: 'var(--accent)', 
              letterSpacing: '0.04em', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '5px' 
            }}>
              <Layers size={12} /> Demanded Modules ({activePopover.lead.requiredModules?.length || 0})
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', maxHeight: '230px', overflowY: 'auto' }}>
            {activePopover.lead.requiredModules?.map((mod, i) => {
              const matchedCat = productCategories.find(c => 
                c.name?.toLowerCase().trim() === mod?.toLowerCase().trim() || 
                c.id?.toLowerCase().trim() === mod?.toLowerCase().trim() || 
                c.slug?.toLowerCase().trim() === mod?.toLowerCase().trim()
              );
              return matchedCat ? (
                <Link
                  key={i}
                  to={`/product-features/${matchedCat.slug}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePopover(null);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.725rem',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    padding: '0.35rem 0.5rem',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid transparent',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--accent-light)';
                    e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                    e.currentTarget.style.color = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                >
                  <span style={{ color: 'var(--accent)', fontWeight: '700' }}>✓</span>
                  <span style={{ flex: 1 }}>{matchedCat.name}</span>
                  <ChevronRight size={11} style={{ opacity: 0.5 }} />
                </Link>
              ) : (
                <div key={i} style={{ fontSize: '0.725rem', color: 'var(--text-secondary)', padding: '0.25rem 0.5rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ color: 'var(--accent)' }}>•</span>
                  <span>{mod}</span>
                </div>
              );
            })}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

export default LeadsScreen;
