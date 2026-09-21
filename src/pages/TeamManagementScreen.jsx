import React, { useState, useEffect } from 'react';
import { Users, UserPlus, Shield, Phone, Mail, MapPin, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { api } from '../services/api';

function TeamManagementScreen() {
  const [bdes, setBdes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddBdeModal, setShowAddBdeModal] = useState(false);
  
  // New BDE Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: 'password123',
    phone: '',
    title: 'Sales Executive (BDE)',
    region: 'Maharashtra'
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
        region: 'Maharashtra'
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

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button className="btn btn-secondary" onClick={fetchBDEs} title="Refresh team roster">
            <RefreshCw size={14} /> Refresh
          </button>
          <button className="btn btn-primary" onClick={() => setShowAddBdeModal(true)}>
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
        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Users size={18} style={{ color: 'var(--accent)' }} /> Registered Sales Representatives (BDE Roster)
        </h3>

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
                {bdes.map(bde => (
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
                    <td style={{ padding: '0.85rem 0.75rem', textAlign: 'right' }}>
                      <button 
                        className={`btn ${bde.isActive ? 'btn-secondary' : 'btn-primary'} btn-sm`}
                        onClick={() => handleToggleStatus(bde.id)}
                        style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem' }}
                      >
                        {bde.isActive ? 'Deactivate' : 'Activate'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
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
                <input 
                  type="password" 
                  className="form-input"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required 
                />
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
