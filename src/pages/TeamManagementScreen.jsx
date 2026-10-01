import React, { useState, useEffect } from 'react';
import { Users, UserPlus, Shield, Phone, Mail, MapPin, CheckCircle, AlertCircle, RefreshCw, Eye, EyeOff, ChevronLeft, ChevronRight } from 'lucide-react';
import { api } from '../services/api';

const ITEMS_PER_SLIDE = 10;

function TeamManagementScreen() {
  const [bdes, setBdes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddBdeModal, setShowAddBdeModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  
  // New BDE Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: 'password123',
    phone: '',
    title: 'Sales Executive (BDE)',
    region: ''
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const fetchBDEs = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await api.getBDEs();
      setBdes(res.data || []);
    } catch (err) {
      setError(err.message || 'Failed to load Sales BDE team roster.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBDEs();
  }, []);

  const handleCreateBde = async (e) => {
    e.preventDefault();
    setFormError('');

    // Validation checks
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setFormError('Full Name must be at least 2 characters.');
      return;
    }
    if (!/^[a-zA-Z\s.'-]+$/.test(formData.name.trim())) {
      setFormError('Full Name must contain letters and spaces only.');
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (!formData.password || formData.password.length < 6) {
      setFormError('Password must be at least 6 characters.');
      return;
    }
    if (formData.phone && formData.phone.length !== 10) {
      setFormError(`Phone number must be exactly 10 digits (${formData.phone.length}/10 entered).`);
      return;
    }

    setFormSubmitting(true);

    try {
      await api.createBDE(formData);
      setShowAddBdeModal(false);
      setFormData({
        name: '',
        email: '',
        password: 'password123',
        phone: '',
        title: 'Sales Executive (BDE)',
        region: ''
      });
      fetchBDEs();
    } catch (err) {
      setFormError(err.message || 'Failed to create BDE account.');
    } finally {
      setFormSubmitting(false);
    }
  };

  const handleToggleStatus = async (id) => {
    try {
      await api.toggleBDEStatus(id);
      fetchBDEs();
    } catch (err) {
      alert(`Error updating BDE status: ${err.message}`);
    }
  };

  // Calculate slide pagination
  const totalSlides = Math.max(1, Math.ceil(bdes.length / ITEMS_PER_SLIDE));
  const startIndex = (currentSlide - 1) * ITEMS_PER_SLIDE;
  const endIndex = Math.min(startIndex + ITEMS_PER_SLIDE, bdes.length);
  const currentSlideBdes = bdes.slice(startIndex, startIndex + ITEMS_PER_SLIDE);

  useEffect(() => {
    if (currentSlide > totalSlides) {
      setCurrentSlide(totalSlides);
    }
  }, [totalSlides, currentSlide]);

  return (
    <div className="team-management-screen" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Screen Header */}
      <div className="top-bar" style={{ marginBottom: 0 }}>
        <div className="page-title">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <Shield size={18} style={{ color: 'var(--accent)' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.05em' }}>
              Admin Governance & RBAC
            </span>
          </div>
          <h1>Sales BDE Team & Role Roster</h1>
          <p>Manage Sales Executives (BDEs), assign territorial regions, and track individual lead conversion metrics.</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <button 
            className="btn btn-secondary" 
            onClick={fetchBDEs} 
            disabled={loading}
            title="Refresh team roster"
            style={{ 
              height: '40px', 
              padding: '0 1rem', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              fontSize: '0.85rem',
              fontWeight: '600',
              whiteSpace: 'nowrap',
              borderRadius: '8px'
            }}
          >
            <RefreshCw size={15} className={loading ? 'spin' : ''} /> Refresh
          </button>
          <button 
            className="btn btn-primary" 
            onClick={() => setShowAddBdeModal(true)}
            title="Register a new Sales BDE"
            style={{ 
              height: '40px', 
              padding: '0 1.15rem', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              fontSize: '0.85rem',
              fontWeight: '600',
              whiteSpace: 'nowrap',
              borderRadius: '8px'
            }}
          >
            <UserPlus size={16} /> Add New Sales BDE
          </button>
        </div>
      </div>

      {/* KPI Overview Summary */}
      <div className="kpi-grid" style={{ marginBottom: 0 }}>
        <div className="kpi-card">
          <div className="kpi-card-header">
            <span>Total Active Sales BDEs</span>
            <Users size={16} style={{ color: 'var(--accent)' }} />
          </div>
          <div className="kpi-value">{bdes.filter(b => b.isActive).length}</div>
          <div className="kpi-footer" style={{ color: 'var(--text-muted)' }}>
            Active Field Executives
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-card-header">
            <span>Total Assigned Portfolio</span>
            <Shield size={16} style={{ color: 'var(--success)' }} />
          </div>
          <div className="kpi-value" style={{ color: 'var(--success)' }}>
            {bdes.reduce((acc, b) => acc + (b.assignedCount || 0), 0)}
          </div>
          <div className="kpi-footer" style={{ color: 'var(--text-muted)' }}>
            Assigned CRM Leads
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-card-header">
            <span>Closed Won Portfolio</span>
            <CheckCircle size={16} style={{ color: 'var(--accent)' }} />
          </div>
          <div className="kpi-value" style={{ color: 'var(--accent)' }}>
            {bdes.reduce((acc, b) => acc + (b.wonCount || 0), 0)}
          </div>
          <div className="kpi-footer" style={{ color: 'var(--text-muted)' }}>
            Deals Sanctioned
          </div>
        </div>
      </div>

      {error && (
        <div style={{ padding: '1rem', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', color: '#ef4444', fontSize: '0.85rem' }}>
          <AlertCircle size={16} style={{ display: 'inline', marginRight: '0.5rem' }} /> {error}
        </div>
      )}

      {/* BDE Team Roster Table */}
      <div className="content-card" style={{ padding: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', margin: 0, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Users size={18} style={{ color: 'var(--accent)' }} /> Registered Sales Representatives (BDE Roster)
            </h3>
            <span className="badge stage-won" style={{ fontSize: '0.7rem', padding: '0.15rem 0.55rem', fontWeight: 600 }}>
              {bdes.length} {bdes.length === 1 ? 'Representative' : 'Representatives'}
            </span>
            {totalSlides > 1 && (
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '500' }}>
                (Slide {currentSlide} of {totalSlides})
              </span>
            )}
          </div>
        </div>

        {loading ? (
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
            Loading Sales BDE Team Data...
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table className="leads-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Sales BDE Name</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Contact Info</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Region & Role</th>
                  <th style={{ textAlign: 'center', padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Assigned Portfolio</th>
                  <th style={{ textAlign: 'center', padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Closed Deals</th>
                  <th style={{ textAlign: 'center', padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Account Status</th>
                  <th style={{ textAlign: 'right', padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {bdes.length === 0 ? (
                  <tr>
                    <td colSpan="7" style={{ textAlign: 'center', padding: '3.5rem 1.5rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', maxWidth: '400px', margin: '0 auto' }}>
                        <div style={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '14px',
                          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(168, 85, 247, 0.12))',
                          border: '1px solid rgba(99, 102, 241, 0.22)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '1rem',
                          color: 'var(--accent)'
                        }}>
                          <Users size={24} />
                        </div>
                        <h4 style={{ margin: '0 0 0.35rem 0', fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                          No Sales Representatives Added Yet
                        </h4>
                        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                          Add your field sales executives to assign territory regions, delegate lead portfolios, and track individual closed deals.
                        </p>
                        <button
                          className="btn btn-primary"
                          onClick={() => setShowAddBdeModal(true)}
                          style={{ marginTop: '1rem', fontSize: '0.775rem', padding: '0.45rem 1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                        >
                          <UserPlus size={14} /> Add First Sales BDE
                        </button>
                      </div>
                    </td>
                  </tr>
                ) : (
                  currentSlideBdes.map(bde => (
                    <tr key={bde.id} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '0.85rem 0.75rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <div style={{
                            width: '36px', height: '36px', borderRadius: '50%',
                            background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                            color: '#fff', fontWeight: '700', fontSize: '0.85rem',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                          }}>
                            {bde.name.charAt(0)}
                          </div>
                          <div>
                            <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--text-primary)' }}>{bde.name}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{bde.title}</div>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '0.85rem 0.75rem' }}>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <Mail size={13} style={{ color: 'var(--text-muted)' }} /> {bde.email}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.2rem' }}>
                          <Phone size={12} /> {bde.phone || 'N/A'}
                        </div>
                      </td>
                      <td style={{ padding: '0.85rem 0.75rem' }}>
                        <div style={{ fontSize: '0.825rem', fontWeight: '600', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <MapPin size={13} style={{ color: 'var(--accent)' }} /> {bde.region}
                        </div>
                        <span className="badge" style={{ marginTop: '0.25rem', fontSize: '0.675rem', background: 'rgba(99, 102, 241, 0.1)', color: '#6366f1', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
                          {bde.role}
                        </span>
                      </td>
                      <td style={{ padding: '0.85rem 0.75rem', textAlign: 'center' }}>
                        <span style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--text-primary)' }}>
                          {bde.assignedCount || 0} Leads
                        </span>
                      </td>
                      <td style={{ padding: '0.85rem 0.75rem', textAlign: 'center' }}>
                        <span style={{ fontSize: '0.95rem', fontWeight: '800', color: '#10b981' }}>
                          {bde.wonCount || 0} Won
                        </span>
                      </td>
                      <td style={{ padding: '0.85rem 0.75rem', textAlign: 'center' }}>
                        <span className={`status-badge ${bde.isActive ? 'stage-closed-won' : 'stage-closed-lost'}`}>
                          {bde.isActive ? 'Active' : 'Disabled'}
                        </span>
                      </td>
                      <td style={{ padding: '0.85rem 0.75rem', textAlign: 'right', whiteSpace: 'nowrap' }}>
                        <button 
                          className={`btn ${bde.isActive ? 'btn-secondary' : 'btn-primary'} btn-sm`}
                          onClick={() => handleToggleStatus(bde.id)}
                          style={{ 
                            fontSize: '0.75rem', 
                            padding: '0.35rem 0.75rem',
                            whiteSpace: 'nowrap',
                            minWidth: '85px',
                            fontWeight: '600'
                          }}
                        >
                          {bde.isActive ? 'Deactivate' : 'Activate'}
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Slide Pagination & Navigation Controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
          paddingTop: '0.85rem',
          marginTop: '0.5rem',
          borderTop: '1px solid var(--border)'
        }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            {bdes.length > 0 ? (
              <>
                Showing <strong style={{ color: 'var(--text-primary)' }}>{startIndex + 1}</strong>–<strong style={{ color: 'var(--text-primary)' }}>{endIndex}</strong> of <strong style={{ color: 'var(--text-primary)' }}>{bdes.length}</strong> representatives
              </>
            ) : (
              <span>0 representatives</span>
            )}
          </div>

          {totalSlides > 1 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setCurrentSlide(prev => Math.max(1, prev - 1))}
                disabled={currentSlide === 1}
                title="Previous Slide"
                style={{
                  height: '30px',
                  padding: '0 0.65rem',
                  fontSize: '0.75rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  opacity: currentSlide === 1 ? 0.4 : 1,
                  cursor: currentSlide === 1 ? 'not-allowed' : 'pointer'
                }}
              >
                <ChevronLeft size={13} /> Previous
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                {Array.from({ length: totalSlides }, (_, idx) => idx + 1).map(slideNum => {
                  const isActive = slideNum === currentSlide;
                  const slideStart = (slideNum - 1) * ITEMS_PER_SLIDE + 1;
                  const slideEnd = Math.min(slideNum * ITEMS_PER_SLIDE, bdes.length);
                  return (
                    <button
                      key={slideNum}
                      type="button"
                      onClick={() => setCurrentSlide(slideNum)}
                      className={`btn btn-sm ${isActive ? 'btn-primary' : 'btn-secondary'}`}
                      style={{
                        height: '30px',
                        minWidth: '65px',
                        padding: '0 0.65rem',
                        fontSize: '0.75rem',
                        fontWeight: isActive ? '700' : '500',
                        border: isActive ? '1px solid var(--accent)' : '1px solid var(--border)'
                      }}
                      title={`Slide ${slideNum} (Representatives ${slideStart}–${slideEnd})`}
                    >
                      Slide {slideNum}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setCurrentSlide(prev => Math.min(totalSlides, prev + 1))}
                disabled={currentSlide === totalSlides}
                title="Next Slide"
                style={{
                  height: '30px',
                  padding: '0 0.65rem',
                  fontSize: '0.75rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  opacity: currentSlide === totalSlides ? 0.4 : 1,
                  cursor: currentSlide === totalSlides ? 'not-allowed' : 'pointer'
                }}
              >
                Next <ChevronRight size={13} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Add New BDE Modal */}
      {showAddBdeModal && (
        <div className="modal-overlay" onClick={() => setShowAddBdeModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px' }}>
            <div className="modal-header">
              <h2>Add New Sales Representative (BDE)</h2>
              <button className="close-btn" onClick={() => setShowAddBdeModal(false)}>×</button>
            </div>

            {formError && (
              <div style={{ padding: '0.75rem', background: 'rgba(239,68,68,0.1)', color: '#ef4444', borderRadius: '6px', fontSize: '0.8rem', marginBottom: '1rem' }}>
                {formError}
              </div>
            )}

            <form onSubmit={handleCreateBde} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="e.g. Anand Kulkarni"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address (Login ID)</label>
                <input 
                  type="email" 
                  className="form-input"
                  placeholder="e.g. anand@fivopay.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Default Password</label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    className="form-input"
                    style={{ paddingRight: '2.5rem' }}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required 
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '4px'
                    }}
                    title={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <label className="form-label" style={{ margin: 0 }}>Phone Number</label>
                  <span style={{ fontSize: '0.7rem', color: formData.phone?.length === 10 ? 'var(--success)' : 'var(--text-muted)' }}>
                    {formData.phone?.length || 0}/10 digits
                  </span>
                </div>
                <input 
                  type="tel" 
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={10}
                  className="form-input"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Territorial Region</label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="e.g. Kolhapur & Sangli"
                  value={formData.region}
                  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddBdeModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" disabled={formSubmitting}>
                  {formSubmitting ? 'Creating BDE...' : 'Create BDE Account'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeamManagementScreen;
