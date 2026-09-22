import React, { useState, useEffect } from 'react';
import { 
  Shield, Mail, Search, RefreshCw, Eye, Download, Users, CheckCircle2, 
  Send, AlertCircle, X, Calendar
} from 'lucide-react';
import { api } from '../services/api';

function AdminCampaignsScreen() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [performerFilter, setPerformerFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const fetchAllCampaigns = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await api.getCampaigns();
      if (res && res.data) {
        setCampaigns(res.data);
      } else {
        setCampaigns([]);
      }
    } catch (err) {
      setError(err.message || 'Failed to retrieve campaigns list.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCampaigns();
  }, []);

  // Extract unique performer names for filter dropdown
  const uniquePerformers = Array.from(
    new Set(
      campaigns
        .map(c => c.createdByName || 'Sales Executive (BDE)')
        .filter(Boolean)
    )
  );

  // Filtered campaigns
  const filteredCampaigns = campaigns.filter(camp => {
    const performer = camp.createdByName || 'Sales Executive (BDE)';
    const performerEmail = camp.createdByEmail || '';
    const campName = camp.name || '';
    const campSubject = camp.subject || '';
    const recipientSample = camp.recipients?.map(r => r.email).join(' ') || '';

    const query = searchTerm.toLowerCase();
    const matchesSearch = 
      campName.toLowerCase().includes(query) ||
      campSubject.toLowerCase().includes(query) ||
      performer.toLowerCase().includes(query) ||
      performerEmail.toLowerCase().includes(query) ||
      recipientSample.toLowerCase().includes(query);

    const matchesPerformer = 
      performerFilter === 'ALL' || performer.toLowerCase() === performerFilter.toLowerCase();

    const matchesStatus = 
      statusFilter === 'ALL' || (camp.status || 'Sent').toUpperCase() === statusFilter.toUpperCase();

    return matchesSearch && matchesPerformer && matchesStatus;
  });

  // Export audit report to CSV
  const handleExportCSV = () => {
    if (campaigns.length === 0) {
      alert('No campaigns available to export.');
      return;
    }

    const headers = ['Campaign Name', 'Subject', 'Performed By', 'Performer Email', 'Performer Role', 'Dispatched Date', 'Total Sent', 'Delivered', 'Failed', 'Status'];
    const rows = campaigns.map(c => [
      `"${(c.name || '').replace(/"/g, '""')}"`,
      `"${(c.subject || '').replace(/"/g, '""')}"`,
      `"${(c.createdByName || 'Sales Executive (BDE)').replace(/"/g, '""')}"`,
      `"${c.createdByEmail || ''}"`,
      `"${c.createdByRole || 'SALES'}"`,
      `"${c.date || (c.createdAt ? new Date(c.createdAt).toLocaleDateString() : '')}"`,
      c.sentCount || 0,
      c.delivered || c.sentCount || 0,
      c.failedCount || 0,
      `"${c.status || 'Sent'}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Fivopay_Campaigns_Audit_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Aggregated Stats
  const totalCampaigns = campaigns.length;
  const totalEmailsSent = campaigns.reduce((acc, c) => acc + (c.sentCount || 0), 0);
  const totalDelivered = campaigns.reduce((acc, c) => acc + (c.delivered || c.sentCount || 0), 0);
  const overallDeliveryRate = totalEmailsSent > 0 ? Math.round((totalDelivered / totalEmailsSent) * 100) : 100;
  const activeDispatchersCount = uniquePerformers.length;

  const getInitials = (name) => {
    if (!name) return 'SE';
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="admin-campaigns-screen" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Governance Header */}
      <div className="top-bar" style={{ marginBottom: 0 }}>
        <div className="page-title">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <Shield size={18} style={{ color: 'var(--accent)' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.05em' }}>
              Admin Governance & SES Audit
            </span>
          </div>
          <h1>All Email Campaigns & Performer Logs</h1>
          <p>Supervise all outbound email campaigns across sales representatives (BDEs), examine delivery metrics, and track performer audit logs.</p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button className="btn btn-secondary" onClick={fetchAllCampaigns} title="Refresh campaigns list">
            <RefreshCw size={14} className={loading ? 'spin' : ''} /> Refresh
          </button>
          <button className="btn btn-primary" onClick={handleExportCSV} title="Export Campaign Audit Trail as CSV">
            <Download size={15} /> Export Audit CSV
          </button>
        </div>
      </div>

      {/* KPI Overview Summary */}
      <div className="kpi-grid" style={{ marginBottom: 0 }}>
        <div className="kpi-card">
          <div className="kpi-card-header">
            <span>Total Campaigns Run</span>
            <Mail size={16} style={{ color: 'var(--accent)' }} />
          </div>
          <div className="kpi-value">{totalCampaigns}</div>
          <div className="kpi-footer" style={{ color: 'var(--text-muted)' }}>
            Across all sales team members
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-card-header">
            <span>Total Outbound Emails</span>
            <Send size={16} style={{ color: 'var(--success)' }} />
          </div>
          <div className="kpi-value" style={{ color: 'var(--success)' }}>
            {totalEmailsSent.toLocaleString()}
          </div>
          <div className="kpi-footer" style={{ color: 'var(--text-muted)' }}>
            Dispatched via AWS Mail Manager
          </div>
        </div>


        <div className="kpi-card">
          <div className="kpi-card-header">
            <span>Active Dispatchers</span>
            <Users size={16} style={{ color: '#ec4899' }} />
          </div>
          <div className="kpi-value" style={{ color: '#ec4899' }}>
            {activeDispatchersCount}
          </div>
          <div className="kpi-footer" style={{ color: 'var(--text-muted)' }}>
            Team members running campaigns
          </div>
        </div>
      </div>

      {error && (
        <div style={{ padding: '1rem', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', color: '#ef4444', fontSize: '0.85rem' }}>
          <AlertCircle size={16} style={{ display: 'inline', marginRight: '0.5rem' }} /> {error}
        </div>
      )}

      {/* Main Content Card: Filter Bar & Table */}
      <div className="content-card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '0.75rem', 
          paddingBottom: '0.85rem', 
          borderBottom: '1px solid var(--border)' 
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '700', margin: 0, color: 'var(--text-primary)' }}>
                Campaign Dispatch Roster
              </h3>
              <span className="badge stage-won" style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem' }}>
                {filteredCampaigns.length} {filteredCampaigns.length === 1 ? 'Record' : 'Records'}
              </span>
            </div>
            <p style={{ margin: '0.15rem 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Outbound email campaigns dispatched via AWS SES with performer identity logs
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            {/* Search Input */}
            <div style={{ position: 'relative', width: '200px' }}>
              <Search size={13} style={{ position: 'absolute', left: '9px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="text"
                placeholder="Search campaigns..."
                className="form-input"
                style={{ paddingLeft: '1.85rem', height: '34px', fontSize: '0.785rem' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Performer Filter Dropdown */}
            <select
              className="form-select"
              style={{ height: '34px', fontSize: '0.785rem', minWidth: '150px' }}
              value={performerFilter}
              onChange={(e) => setPerformerFilter(e.target.value)}
              title="Filter by who dispatched the campaign"
            >
              <option value="ALL">All Team Members</option>
              {uniquePerformers.map((performer, idx) => (
                <option key={idx} value={performer}>
                  {performer}
                </option>
              ))}
            </select>

            {/* Status Filter */}
            <select
              className="form-select"
              style={{ width: '105px', height: '34px', fontSize: '0.785rem' }}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="ALL">All Status</option>
              <option value="SENT">Sent</option>
              <option value="FAILED">Failed</option>
            </select>
          </div>
        </div>

        {/* Clean Responsive Table without overflow */}
        {loading ? (
          <div style={{ padding: '2.5rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            Loading enterprise campaign logs & performer records...
          </div>
        ) : (
          <div style={{ width: '100%', overflowX: 'auto' }}>
            <table className="custom-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ width: '28%', padding: '0.75rem 0.85rem', fontSize: '0.725rem' }}>Campaign</th>
                  <th style={{ width: '25%', padding: '0.75rem 0.85rem', fontSize: '0.725rem' }}>Dispatched By</th>
                  <th style={{ width: '15%', padding: '0.75rem 0.85rem', fontSize: '0.725rem' }}>Recipients</th>
                  <th style={{ width: '12%', padding: '0.75rem 0.85rem', fontSize: '0.725rem' }}>Date</th>
                  <th style={{ width: '10%', padding: '0.75rem 0.85rem', fontSize: '0.725rem' }}>Delivery</th>
                  <th style={{ width: '10%', padding: '0.75rem 0.85rem', fontSize: '0.725rem', textAlign: 'right' }}>Audit</th>
                </tr>
              </thead>
              <tbody>
                {filteredCampaigns.length === 0 ? (
                  <tr>
                    <td colSpan="6" style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                        <Mail size={32} style={{ opacity: 0.3, color: 'var(--accent)' }} />
                        <span style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                          {campaigns.length === 0 ? 'No Email Campaigns Recorded' : 'No Campaigns Match Your Criteria'}
                        </span>
                        <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
                          {campaigns.length === 0 
                            ? 'Campaigns dispatched by Sales BDEs or Admins will appear here.' 
                            : 'Try adjusting your search query or performer filter.'}
                        </span>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredCampaigns.map(camp => {
                    const sent = camp.sentCount || 0;
                    const delivered = camp.delivered || sent;
                    const { name: cleanPerformer, tag: performerTag } = parsePerformer(camp.createdByName, camp.createdByRole);
                    const performerEmail = camp.createdByEmail || '';
                    const performerRole = (camp.createdByRole || 'SALES').toUpperCase();
                    const initials = getInitials(cleanPerformer);
                    const isAdminPerformer = performerRole === 'ADMIN' || performerTag.toLowerCase().includes('admin');

                    const recipientCount = camp.recipients ? camp.recipients.length : sent;
                    const recipientSample = camp.recipients && camp.recipients.length > 0
                      ? camp.recipients[0].email
                      : 'CRM Leads Group';

                    return (
                      <tr key={camp.id || camp._id} style={{ transition: 'background 0.15s ease' }}>
                        {/* Campaign Name & Subject */}
                        <td style={{ padding: '0.75rem 0.85rem' }}>
                          <div style={{ 
                            fontWeight: '600', 
                            color: 'var(--text-primary)', 
                            fontSize: '0.875rem',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: '240px'
                          }} title={camp.name}>
                            {camp.name || 'Untitled Campaign'}
                          </div>
                          <div style={{ 
                            fontSize: '0.75rem', 
                            color: 'var(--text-secondary)', 
                            marginTop: '0.15rem',
                            maxWidth: '240px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                          }} title={camp.subject}>
                            {camp.subject || 'No Subject'}
                          </div>
                        </td>

                        {/* Performed By Column with Avatar & Badge */}
                        <td style={{ padding: '0.75rem 0.85rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <div style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '50%',
                              background: isAdminPerformer 
                                ? 'linear-gradient(135deg, #a855f7, #6366f1)' 
                                : 'linear-gradient(135deg, #6366f1, #3b82f6)',
                              color: '#ffffff',
                              fontWeight: '700',
                              fontSize: '0.725rem',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
                              flexShrink: 0
                            }}>
                              {initials}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                                <span style={{ 
                                  fontWeight: '600', 
                                  color: 'var(--text-primary)', 
                                  fontSize: '0.825rem',
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  maxWidth: '130px'
                                }} title={cleanPerformer}>
                                  {cleanPerformer}
                                </span>
                                <span style={{
                                  fontSize: '0.625rem',
                                  padding: '0.05rem 0.3rem',
                                  borderRadius: '4px',
                                  fontWeight: '700',
                                  letterSpacing: '0.03em',
                                  flexShrink: 0,
                                  background: isAdminPerformer ? 'rgba(168, 85, 247, 0.12)' : 'rgba(99, 102, 241, 0.12)',
                                  color: isAdminPerformer ? '#c084fc' : 'var(--accent)',
                                  border: isAdminPerformer ? '1px solid rgba(168, 85, 247, 0.25)' : '1px solid rgba(99, 102, 241, 0.25)'
                                }}>
                                  {performerTag}
                                </span>
                              </div>
                              {performerEmail && (
                                <span style={{ 
                                  fontSize: '0.7rem', 
                                  color: 'var(--text-muted)',
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  maxWidth: '160px'
                                }} title={performerEmail}>
                                  {performerEmail}
                                </span>
                              )}
                            </div>
                          </div>
                        </td>

                        {/* Recipients */}
                        <td style={{ padding: '0.75rem 0.85rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                            <Mail size={12} style={{ color: 'var(--text-muted)' }} />
                            <span>{recipientCount} {recipientCount === 1 ? 'recipient' : 'recipients'}</span>
                          </div>
                          <div style={{ 
                            fontSize: '0.7rem', 
                            color: 'var(--text-muted)', 
                            marginTop: '0.1rem',
                            maxWidth: '150px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                          }} title={recipientSample}>
                            {recipientSample}
                          </div>
                        </td>

                        {/* Dispatched Date */}
                        <td style={{ padding: '0.75rem 0.85rem', color: 'var(--text-secondary)', fontSize: '0.785rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', whiteSpace: 'nowrap' }}>
                            <Calendar size={12} style={{ color: 'var(--text-muted)' }} />
                            <span>{camp.date || (camp.createdAt ? new Date(camp.createdAt).toISOString().split('T')[0] : 'Recent')}</span>
                          </div>
                        </td>

                        {/* Delivery */}
                        <td style={{ padding: '0.75rem 0.85rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                            <span style={{ fontWeight: '700', fontSize: '0.825rem', color: 'var(--text-primary)' }}>
                              {delivered}/{sent}
                            </span>
                            <span style={{
                              display: 'inline-block',
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              background: camp.failedCount > 0 ? 'var(--danger)' : 'var(--success)'
                            }} />
                          </div>
                          <div style={{ fontSize: '0.675rem', color: camp.failedCount > 0 ? 'var(--danger)' : 'var(--success)', fontWeight: '500' }}>
                            {camp.failedCount > 0 ? `${camp.failedCount} failed` : '100% delivered'}
                          </div>
                        </td>

                        {/* Audit Action Button */}
                        <td style={{ padding: '0.75rem 0.85rem', textAlign: 'right' }}>
                          <button 
                            type="button" 
                            onClick={() => setSelectedCampaign(camp)}
                            className="btn btn-secondary" 
                            style={{ 
                              padding: '0.25rem 0.55rem', 
                              fontSize: '0.75rem', 
                              display: 'inline-flex', 
                              alignItems: 'center', 
                              gap: '0.3rem',
                              height: '28px'
                            }}
                            title="Inspect full performer and delivery logs"
                          >
                            <Eye size={12} /> Logs
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Campaign Details & Performer Audit Modal */}
      {selectedCampaign && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          backdropFilter: 'blur(4px)'
        }}>
          <div className="content-card" style={{ width: '620px', maxWidth: '94vw', maxHeight: '88vh', overflowY: 'auto', padding: '1.75rem' }}>
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.85rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <Shield size={16} style={{ color: 'var(--accent)' }} />
                  <span style={{ fontSize: '0.725rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.04em' }}>
                    Campaign Audit & Delivery Proof
                  </span>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: 0, color: 'var(--text-primary)' }}>
                  {selectedCampaign.name}
                </h3>
              </div>
              <button 
                type="button" 
                onClick={() => setSelectedCampaign(null)} 
                className="btn btn-secondary" 
                style={{ padding: '0.35rem', borderRadius: '50%' }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Performer Attribution Card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(168, 85, 247, 0.08))',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              borderRadius: '8px',
              padding: '1rem 1.25rem',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                }}>
                  {getInitials(selectedCampaign.createdByName)}
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: '700' }}>
                    Performed By
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span>{selectedCampaign.createdByName || 'Sales Executive (BDE)'}</span>
                    <span style={{
                      fontSize: '0.625rem',
                      padding: '0.05rem 0.35rem',
                      borderRadius: '4px',
                      background: 'rgba(99, 102, 241, 0.2)',
                      color: 'var(--accent)',
                      border: '1px solid rgba(99, 102, 241, 0.3)'
                    }}>
                      {selectedCampaign.createdByRole || 'SALES'}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
                    {selectedCampaign.createdByEmail || 'Verified Team Account'}
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: '700' }}>
                  Execution Date
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                  {selectedCampaign.date || 'Recent'}
                </div>
                <div style={{ fontSize: '0.725rem', color: 'var(--success)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.3rem', justifyContent: 'flex-end', marginTop: '0.1rem' }}>
                  <span className="pulsing-beacon-dot"></span>
                  <span>AWS Mail Manager (STARTTLS)</span>
                </div>
              </div>
            </div>

            {/* Performance Metric Boxes */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div className="metric-box">
                <div className="metric-num">{selectedCampaign.sentCount || 0}</div>
                <div className="metric-lbl">Total Dispatched</div>
              </div>
              <div className="metric-box">
                <div className="metric-num" style={{ color: 'var(--success)' }}>
                  {selectedCampaign.delivered || selectedCampaign.sentCount || 0}
                </div>
                <div className="metric-lbl">Delivered</div>
              </div>
              <div className="metric-box">
                <div className="metric-num" style={{ color: 'var(--accent)' }}>
                  {selectedCampaign.opened || Math.round((selectedCampaign.delivered || 0) * 0.45)}
                </div>
                <div className="metric-lbl">Opened (Est.)</div>
              </div>
              <div className="metric-box">
                <div className="metric-num" style={{ color: selectedCampaign.failedCount ? 'var(--danger)' : 'var(--text-muted)' }}>
                  {selectedCampaign.failedCount || 0}
                </div>
                <div className="metric-lbl">Bounced / Failed</div>
              </div>
            </div>

            {/* Subject Line */}
            <div style={{ marginBottom: '1rem' }}>
              <span className="meta-label">Subject Line</span>
              <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                {selectedCampaign.subject}
              </div>
            </div>

            {/* Email Message Content */}
            {selectedCampaign.templateText && (
              <div style={{ marginBottom: '1.25rem' }}>
                <span className="meta-label">Dispatched Email Content</span>
                <div style={{
                  padding: '0.85rem',
                  borderRadius: '6px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--border)',
                  fontSize: '0.825rem',
                  lineHeight: '1.6',
                  maxHeight: '140px',
                  overflowY: 'auto',
                  whiteSpace: 'pre-line',
                  marginTop: '0.35rem'
                }}>
                  {selectedCampaign.templateText}
                </div>
              </div>
            )}

            {/* Recipient Logs */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <span className="meta-label">Recipient Logs & Delivery Proof</span>
                <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                  {selectedCampaign.recipients ? selectedCampaign.recipients.length : selectedCampaign.sentCount || 0} targeted lead(s)
                </span>
              </div>

              <div style={{ maxHeight: '180px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {selectedCampaign.recipients && selectedCampaign.recipients.length > 0 ? (
                  selectedCampaign.recipients.map((rec, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.775rem',
                      padding: '0.5rem 0.75rem',
                      borderRadius: '6px',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid var(--border)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Mail size={13} style={{ color: 'var(--text-muted)' }} />
                        <div>
                          <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{rec.email}</span>
                          {rec.name && <span style={{ marginLeft: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.725rem' }}>({rec.name})</span>}
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        {rec.sentAt && (
                          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                            {new Date(rec.sentAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        )}
                        <span className={`badge ${rec.status === 'Failed' ? 'stage-lost' : 'stage-won'}`} style={{ padding: '0.1rem 0.4rem', fontSize: '0.675rem' }}>
                          {rec.status || 'Sent'}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.775rem',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '6px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid var(--border)'
                  }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Delivered via AWS SES Mail Manager</span>
                    <span className="badge stage-won">Delivered</span>
                  </div>
                )}
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
              <button 
                type="button" 
                onClick={() => setSelectedCampaign(null)} 
                className="btn btn-primary"
                style={{ padding: '0.5rem 1.25rem' }}
              >
                Close Audit Logs
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminCampaignsScreen;
