import React, { useState, useEffect } from 'react';
import { 
  Inbox, RefreshCw, Send, CheckCircle, Search, Mail, Eye, X, History
} from 'lucide-react';
import { api } from '../services/api';

function PastCampaignsScreen({ campaigns, setCampaigns, onComposeNew }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [loading, setLoading] = useState(false);

  const refreshCampaigns = async () => {
    setLoading(true);
    try {
      const res = await api.getCampaigns();
      if (res && res.data) {
        setCampaigns(res.data);
      }
    } catch (err) {
      console.warn('[PastCampaignsScreen] Error fetching campaigns:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshCampaigns();
  }, []);

  const filteredCampaigns = campaigns.filter(camp => {
    const matchesSearch = 
      (camp.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (camp.subject || '').toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = 
      statusFilter === 'ALL' || (camp.status || 'Sent').toUpperCase() === statusFilter.toUpperCase();

    return matchesSearch && matchesStatus;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      <div className="content-card">
        {/* Card Header & Controls */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '1rem', 
          paddingBottom: '1rem', 
          borderBottom: '1px solid var(--border)' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', margin: 0 }}>Past Campaigns</h2>
            <span className="badge stage-won">
              {filteredCampaigns.length} {filteredCampaigns.length === 1 ? 'Campaign' : 'Campaigns'}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            {/* Search Input */}
            <div style={{ position: 'relative', width: '240px' }}>
              <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="text"
                placeholder="Search campaigns..."
                className="form-input"
                style={{ paddingLeft: '2rem', height: '36px', fontSize: '0.8rem' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Status Filter */}
            <select
              className="form-select"
              style={{ width: '120px', height: '36px', fontSize: '0.8rem' }}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="ALL">All Status</option>
              <option value="SENT">Sent</option>
              <option value="FAILED">Failed</option>
            </select>

            {/* Refresh Button */}
            <button 
              type="button" 
              onClick={refreshCampaigns} 
              className="btn btn-secondary"
              disabled={loading}
              title="Refresh Campaigns"
              style={{ height: '36px', padding: '0 0.6rem' }}
            >
              <RefreshCw size={14} className={loading ? 'spin' : ''} />
            </button>

            {/* Compose Campaign Button */}
            <button 
              type="button" 
              onClick={onComposeNew} 
              className="btn btn-primary"
              style={{ height: '36px', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: '600' }}
            >
              <Send size={13} /> Compose Campaign
            </button>
          </div>
        </div>

        {/* Campaigns Table */}
        <div className="table-container" style={{ marginTop: '0.75rem' }}>
          <table className="custom-table" style={{ width: '100%' }}>
            <thead>
              <tr>
                <th style={{ width: '28%' }}>Campaign & Subject</th>
                <th style={{ width: '24%' }}>Recipients</th>
                <th style={{ width: '15%' }}>Dispatched On</th>
                <th style={{ width: '12%' }}>Status</th>
                <th style={{ width: '11%' }}>Delivery</th>
                <th style={{ width: '10%', textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCampaigns.length === 0 ? (
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center', padding: '3.5rem 1rem', color: 'var(--text-muted)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem' }}>
                      <Inbox size={36} style={{ opacity: 0.35, color: 'var(--accent)' }} />
                      <span style={{ fontWeight: '600', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                        {campaigns.length === 0 ? 'No Campaigns Dispatched Yet' : 'No Campaigns Match Your Search'}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {campaigns.length === 0 
                          ? 'Create and dispatch your first email campaign via AWS SES.'
                          : 'Try clearing your search query.'}
                      </span>
                      {campaigns.length === 0 && (
                        <button className="btn btn-primary btn-sm" onClick={onComposeNew} style={{ marginTop: '0.5rem' }}>
                          <Send size={13} /> Compose First Campaign
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ) : (
                filteredCampaigns.map(camp => {
                  const sent = camp.sentCount || 0;
                  const delivered = camp.delivered || sent;
                  const recipientSample = camp.recipients && camp.recipients.length > 0
                    ? camp.recipients[0].email
                    : 'All Active Leads';

                  return (
                    <tr key={camp.id || camp._id}>
                      {/* Campaign Name & Subject */}
                      <td>
                        <div style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                          {camp.name || 'Untitled Campaign'}
                        </div>
                        <div style={{ 
                          fontSize: '0.785rem', 
                          color: 'var(--text-secondary)', 
                          marginTop: '0.2rem',
                          maxWidth: '280px',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}>
                          {camp.subject || 'No Subject'}
                        </div>
                      </td>

                      {/* Recipients */}
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.825rem', color: 'var(--text-primary)' }}>
                          <Mail size={13} style={{ color: 'var(--text-muted)' }} />
                          <span style={{ fontWeight: '500' }}>{recipientSample}</span>
                        </div>
                        {camp.recipients && camp.recipients.length > 1 && (
                          <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                            +{camp.recipients.length - 1} more recipient(s)
                          </div>
                        )}
                      </td>

                      {/* Date */}
                      <td style={{ color: 'var(--text-secondary)', fontSize: '0.825rem' }}>
                        {camp.date || (camp.createdAt ? new Date(camp.createdAt).toISOString().split('T')[0] : 'Today')}
                      </td>

                      {/* Status */}
                      <td>
                        <span className={`badge ${camp.status === 'Failed' ? 'stage-lost' : 'stage-won'}`}>
                          {camp.status || 'Sent'}
                        </span>
                      </td>

                      {/* Delivery Stats */}
                      <td>
                        <div style={{ fontWeight: '700', fontSize: '0.875rem' }}>
                          {delivered} / {sent}
                        </div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                          {camp.failedCount ? `${camp.failedCount} failed` : '100% success'}
                        </div>
                      </td>

                      {/* Actions */}
                      <td style={{ textAlign: 'center' }}>
                        <button 
                          type="button" 
                          onClick={() => setSelectedCampaign(camp)}
                          className="btn btn-secondary" 
                          style={{ padding: '0.3rem 0.65rem', fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                        >
                          <Eye size={12} /> View Logs
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Campaign Details Modal */}
      {selectedCampaign && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.65)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          backdropFilter: 'blur(4px)'
        }}>
          <div className="content-card" style={{ width: '560px', maxWidth: '92vw', maxHeight: '85vh', overflowY: 'auto', padding: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.75rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', margin: 0, color: 'var(--text-primary)' }}>
                  {selectedCampaign.name}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.35rem' }}>
                  <span className={`badge ${selectedCampaign.status === 'Failed' ? 'stage-lost' : 'stage-won'}`}>
                    {selectedCampaign.status || 'Sent'}
                  </span>
                  <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
                    Sent on {selectedCampaign.date} via AWS SES
                  </span>
                </div>
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

            {/* Performance Metric Boxes */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
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
                <div className="metric-num" style={{ color: selectedCampaign.failedCount ? 'var(--danger)' : 'var(--text-muted)' }}>
                  {selectedCampaign.failedCount || 0}
                </div>
                <div className="metric-lbl">Failed</div>
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
                  maxHeight: '130px',
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                <span className="meta-label">Recipient Logs</span>
                <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                  {selectedCampaign.recipients ? selectedCampaign.recipients.length : selectedCampaign.sentCount || 0} recipient(s)
                </span>
              </div>

              <div style={{ maxHeight: '160px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {selectedCampaign.recipients && selectedCampaign.recipients.length > 0 ? (
                  selectedCampaign.recipients.map((rec, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.775rem',
                      padding: '0.45rem 0.75rem',
                      borderRadius: '6px',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid var(--border)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Mail size={13} style={{ color: 'var(--text-muted)' }} />
                        <span style={{ fontWeight: '500' }}>{rec.email}</span>
                      </div>
                      <span className={`badge ${rec.status === 'Failed' ? 'stage-lost' : 'stage-won'}`} style={{ padding: '0.1rem 0.4rem', fontSize: '0.675rem' }}>
                        {rec.status || 'Sent'}
                      </span>
                    </div>
                  ))
                ) : (
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.775rem',
                    padding: '0.45rem 0.75rem',
                    borderRadius: '6px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid var(--border)'
                  }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Delivered via AWS SES</span>
                    <span className="badge stage-won">Delivered</span>
                  </div>
                )}
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
              <button 
                type="button" 
                onClick={() => setSelectedCampaign(null)} 
                className="btn btn-secondary"
                style={{ padding: '0.5rem 1rem' }}
              >
                Close Logs
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PastCampaignsScreen;
