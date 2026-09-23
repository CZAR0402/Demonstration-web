import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Send, Upload, FileSpreadsheet, Trash2, CheckCircle, 
  AlertCircle, RefreshCw, Mail, History, ArrowRight, HelpCircle, Download, X,
  FileCheck, FileText, ExternalLink, Eye, Phone, Globe, MapPin
} from 'lucide-react';
import * as XLSX from 'xlsx';
import { api } from '../services/api';

function CampaignsScreen({ campaigns, setCampaigns, onViewPastCampaigns }) {
  const [newCampaign, setNewCampaign] = useState({
    name: '',
    subject: '',
    templateText: `Dear {name},

We are excited to share an exclusive update regarding your banking and financial operations with Fivopay.

Our platform helps businesses automate payouts, streamline reconciliation, and reduce transaction latency with enterprise-grade security.

If you have any questions or would like a quick walkthrough, feel free to reply directly to this email.

Best regards,
The Fivopay Team`,
    manualRecipients: ''
  });

  const [fileData, setFileData] = useState([]);
  const [fileError, setFileError] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileType, setFileType] = useState('');
  const [showFormatGuide, setShowFormatGuide] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [smtpStatus, setSmtpStatus] = useState({ loading: true, connected: false, host: '', port: '', from: '' });
  const [notification, setNotification] = useState(null);

  // Check SMTP Status on mount
  const checkSmtpHealth = async () => {
    setSmtpStatus(prev => ({ ...prev, loading: true }));
    try {
      const res = await api.getEmailStatus();
      if (res && res.data && res.data.connected) {
        setSmtpStatus({
          loading: false,
          connected: true,
          host: res.data.host || 'AWS Mail Manager',
          port: res.data.port || '587',
          from: res.data.from || 'Fivopay <info@fivopay.com>'
        });
      } else {
        setSmtpStatus({
          loading: false,
          connected: false,
          error: res?.data?.error || 'Could not connect to SMTP server'
        });
      }
    } catch (err) {
      setSmtpStatus({
        loading: false,
        connected: false,
        error: err.message
      });
    }
  };

  useEffect(() => {
    checkSmtpHealth();
    api.getCampaigns().then(res => {
      if (res && res.data) {
        setCampaigns(res.data);
      }
    }).catch(err => console.warn('[CampaignsScreen] Could not refresh campaigns:', err));
  }, []);

  // Universal Excel (.xlsx, .xls) and CSV (.csv) Parser
  const handleFileUpload = (file) => {
    if (!file) return;
    setFileName(file.name);
    setFileError('');

    const isExcel = file.name.endsWith('.xlsx') || file.name.endsWith('.xls');
    setFileType(isExcel ? 'excel' : 'csv');

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        
        if (!workbook.SheetNames || workbook.SheetNames.length === 0) {
          setFileError('The uploaded file does not contain any sheets.');
          setFileData([]);
          return;
        }

        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const rows = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

        if (!rows || rows.length === 0) {
          setFileError('The file appears to be empty or has no data rows.');
          setFileData([]);
          return;
        }

        // Search for relevant columns flexibly (case-insensitive & space/punctuation tolerant)
        const sampleRow = rows[0];
        const keys = Object.keys(sampleRow);
        
        const emailKey = keys.find(k => {
          const clean = k.trim().toLowerCase().replace(/[^a-z]/g, '');
          return clean === 'email' || clean === 'emailaddress' || clean === 'recipient' || clean === 'recipientemail' || clean === 'to';
        });

        const nameKey = keys.find(k => {
          const clean = k.trim().toLowerCase().replace(/[^a-z]/g, '');
          return clean === 'name' || clean === 'fullname' || clean === 'contactname' || clean === 'leadname';
        });

        if (!emailKey) {
          setFileError('Could not find an "email" column header. Please ensure your file has an "email" column.');
          setFileData([]);
          return;
        }

        const parsedRows = [];
        for (const row of rows) {
          const emailVal = String(row[emailKey] || '').trim();
          if (emailVal && emailVal.includes('@')) {
            parsedRows.push({
              email: emailVal,
              name: nameKey ? String(row[nameKey] || '').trim() : ''
            });
          }
        }

        if (parsedRows.length === 0) {
          setFileError('No valid email addresses were found in the file.');
          setFileData([]);
        } else {
          setFileData(parsedRows);
          setFileError('');

          // Auto-suggest campaign name from file name if blank (leave subject and body for the user to compose)
          setNewCampaign(prev => ({
            ...prev,
            name: prev.name || `Campaign - ${file.name.replace(/\.[^/.]+$/, "")}`
          }));
        }
      } catch (err) {
        console.error('File parsing error:', err);
        setFileError('Failed to parse file: ' + (err.message || 'Invalid format'));
        setFileData([]);
      }
    };

    reader.readAsArrayBuffer(file);
  };

  const clearFile = () => {
    setFileData([]);
    setFileName('');
    setFileType('');
    setFileError('');
  };

  // Sample File Downloader - Clean format with just email and optional name
  const downloadSampleTemplate = (type = 'xlsx') => {
    const sampleData = [
      {
        email: 'harsh7607@gmail.com',
        name: 'Harsh Raj'
      },
      {
        email: 'aryanmandal800@gmail.com',
        name: 'Aryan Mandal'
      },
      {
        email: 'hraj93729@gmail.com',
        name: 'Hraj Support'
      }
    ];

    const worksheet = XLSX.utils.json_to_sheet(sampleData);
    worksheet['!cols'] = [
      { wch: 32 }, // email
      { wch: 22 }  // name
    ];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Recipients');

    if (type === 'xlsx') {
      XLSX.writeFile(workbook, 'fivopay_emails_sample.xlsx');
    } else {
      XLSX.writeFile(workbook, 'fivopay_emails_sample.csv', { bookType: 'csv' });
    }
  };

  const handleSendCampaign = async (e) => {
    e.preventDefault();
    if (!newCampaign.name || !newCampaign.subject) return;

    // Send lean payload to backend: HTML compilation & branding is handled on the server
    let recipientsPayload = [];

    if (fileData.length > 0) {
      recipientsPayload = fileData.map(row => ({
        email: row.email,
        name: row.name || ''
      }));
    } else if (newCampaign.manualRecipients.trim()) {
      recipientsPayload = newCampaign.manualRecipients
        .split(',')
        .map(e => e.trim())
        .filter(e => e.includes('@'))
        .map(email => ({
          email,
          name: ''
        }));
    }

    setIsSending(true);
    setNotification(null);

    try {
      const payload = {
        name: newCampaign.name,
        subject: newCampaign.subject,
        templateText: newCampaign.templateText,
        recipients: recipientsPayload
      };

      const res = await api.sendCampaign(payload);

      if (res && res.success) {
        const createdCamp = res.data;
        const normalizedCamp = {
          id: createdCamp._id || createdCamp.id || `camp-${Date.now()}`,
          name: createdCamp.name,
          status: createdCamp.status || 'Sent',
          sentCount: createdCamp.sentCount || 0,
          delivered: createdCamp.delivered || createdCamp.sentCount || 0,
          opened: createdCamp.opened || Math.round((createdCamp.sentCount || 0) * 0.5),
          bounced: createdCamp.failedCount || 0,
          date: createdCamp.date || new Date().toISOString().split('T')[0],
          subject: createdCamp.subject,
          recipients: createdCamp.recipients || []
        };

        setCampaigns(prev => [normalizedCamp, ...prev]);
        setFileData([]);
        setFileName('');
        setFileType('');

        setNotification({
          type: 'success',
          message: `Campaign "${normalizedCamp.name}" dispatched successfully to ${normalizedCamp.sentCount} recipients via AWS Mail Manager!`
        });
      } else {
        throw new Error(res?.message || 'Failed to dispatch campaign');
      }
    } catch (err) {
      console.error('[CampaignsScreen] Send campaign error:', err);
      setNotification({
        type: 'error',
        message: `Failed to send campaign: ${err.message}`
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
      {/* Notification Banner */}
      {notification && (
        <div style={{
          padding: '0.875rem 1.25rem',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: notification.type === 'success' ? 'var(--success-light)' : 'var(--danger-light)',
          border: `1px solid ${notification.type === 'success' ? 'var(--success)' : 'var(--danger)'}`,
          color: notification.type === 'success' ? 'var(--success)' : 'var(--danger)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {notification.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
            <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>{notification.message}</span>
          </div>
          {onViewPastCampaigns && (
            <button 
              type="button" 
              onClick={onViewPastCampaigns}
              className="btn btn-secondary"
              style={{ fontSize: '0.775rem', padding: '0.3rem 0.65rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
            >
              View in Past Campaigns <ArrowRight size={12} />
            </button>
          )}
        </div>
      )}

      {/* Top Banner: AWS Mail Manager Status & Link to Past Campaigns */}
      <div className="content-card" style={{ 
        borderLeft: smtpStatus.connected ? '4px solid var(--success)' : '4px solid var(--warning)',
        padding: '1.25rem 1.5rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <ShieldCheck size={32} style={{ color: smtpStatus.connected ? 'var(--success)' : 'var(--warning)' }} />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', margin: 0 }}>
                  AWS Mail Manager SMTP Integration
                </h3>
                <span className={`badge ${smtpStatus.connected ? 'stage-won' : 'stage-new'}`}>
                  {smtpStatus.loading ? 'Checking...' : smtpStatus.connected ? 'Connected & Verified' : 'Attention Needed'}
                </span>
              </div>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                Endpoint: <strong>{smtpStatus.host || 'e5jzmay4bad7.hkph.mail-manager-smtp.amazonaws.com'}</strong> | Port: <strong>587 (STARTTLS)</strong> | Sender: <strong>{smtpStatus.from || 'info@fivopay.com'}</strong>
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            {onViewPastCampaigns && (
              <button 
                type="button" 
                onClick={onViewPastCampaigns}
                className="btn btn-primary" 
                style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.825rem', fontWeight: '600' }}
              >
                <History size={14} /> View Past Campaigns ({campaigns.length})
              </button>
            )}
            <button 
              type="button" 
              onClick={checkSmtpHealth} 
              className="btn btn-secondary" 
              style={{ padding: '0.45rem', borderRadius: '6px' }}
              title="Refresh Connection"
              disabled={smtpStatus.loading}
            >
              <RefreshCw size={13} className={smtpStatus.loading ? 'spin' : ''} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Campaign Creation Workspace */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        {/* Excel / CSV File Upload Card */}
        <div className="content-card">
          <div className="card-title-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <h2 style={{ margin: 0 }}>Excel & CSV Bulk Leads Upload</h2>
              {fileData.length > 0 && (
                <span className="badge stage-won">{fileData.length} recipients loaded</span>
              )}
            </div>
            
            {/* Format Guide Button */}
            <button
              type="button"
              onClick={() => setShowFormatGuide(true)}
              className="btn btn-secondary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.8rem',
                padding: '0.4rem 0.8rem',
                borderRadius: '6px'
              }}
            >
              <HelpCircle size={15} style={{ color: 'var(--accent)' }} />
              File Format Guide & Samples
            </button>
          </div>
          
          {!fileName ? (
            <div 
              style={{
                border: '2px dashed var(--border)',
                borderRadius: '8px',
                padding: '1.75rem',
                textAlign: 'center',
                backgroundColor: 'rgba(255,255,255,0.01)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.65rem',
                cursor: 'pointer',
                position: 'relative'
              }}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                  handleFileUpload(e.dataTransfer.files[0]);
                }
              }}
            >
              <input 
                type="file" 
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, .xlsx, .xls" 
                onChange={(e) => handleFileUpload(e.target.files[0])} 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  opacity: 0,
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Upload size={28} style={{ color: 'var(--accent)' }} />
                <FileSpreadsheet size={28} style={{ color: 'var(--success)' }} />
              </div>
              <div>
                <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Click or Drag Excel (.xlsx, .xls) or CSV (.csv) file here</span>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  Supports <strong>.xlsx</strong>, <strong>.xls</strong>, and <strong>.csv</strong>. Only requires <strong>email</strong> column. Subject & message in the form below are common for all recipients.
                </p>
                <button 
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowFormatGuide(true);
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--accent)',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    marginTop: '0.4rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                >
                  <HelpCircle size={12} /> View Format Instructions & Download Sample Template
                </button>
              </div>
            </div>
          ) : (
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              border: '1px solid var(--success)',
              backgroundColor: 'var(--success-light)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <FileSpreadsheet size={22} style={{ color: 'var(--success)' }} />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--success)' }}>{fileName}</span>
                    <span className="badge" style={{ fontSize: '0.7rem', padding: '0.15rem 0.45rem', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                      {fileType === 'excel' ? 'Excel (.xlsx/.xls)' : 'CSV (.csv)'}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>({fileData.length} recipient emails parsed • common email body & subject will be sent)</span>
                </div>
              </div>
              <button onClick={clearFile} className="btn btn-danger" style={{ padding: '0.375rem', borderRadius: '6px' }} title="Remove file">
                <Trash2 size={14} />
              </button>
            </div>
          )}

          {fileError && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '0.75rem',
              padding: '0.5rem 0.75rem',
              borderRadius: '6px',
              backgroundColor: 'var(--danger-light)',
              border: '1px solid var(--danger)',
              color: 'var(--danger)',
              fontSize: '0.8rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AlertCircle size={15} />
                <span>{fileError}</span>
              </div>
              <button
                type="button"
                onClick={() => setShowFormatGuide(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--danger)',
                  fontWeight: '600',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  fontSize: '0.75rem'
                }}
              >
                View Format Guide
              </button>
            </div>
          )}

          {/* Parsed Leads Preview List */}
          {fileData.length > 0 && (
            <div style={{ marginTop: '1rem', borderTop: '1px solid var(--border)', paddingTop: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <span className="meta-label">Parsed Recipients Preview</span>
                <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>Showing first {Math.min(5, fileData.length)} of {fileData.length}</span>
              </div>
              <div style={{ maxHeight: '135px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {fileData.slice(0, 5).map((row, idx) => (
                  <div key={idx} style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.775rem',
                    padding: '0.4rem 0.65rem',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(255,255,255,0.01)',
                    border: '1px solid var(--border)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{row.email}</span>
                      {row.name && (
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.725rem' }}>({row.name})</span>
                      )}
                    </div>
                    <span style={{ color: 'var(--accent)', fontSize: '0.725rem', fontWeight: '500' }}>
                      Will receive personalized: "Dear {row.name || 'Sir/Madam'},"
                    </span>
                  </div>
                ))}
                {fileData.length > 5 && (
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', padding: '0.2rem' }}>
                    And {fileData.length - 5} more recipients ready to receive campaign
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Campaign Creation Form Card */}
        <div className="content-card">
          <div className="card-title-bar">
            <h2>Create AWS Mail Manager Campaign</h2>
          </div>

          <form onSubmit={handleSendCampaign} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
            <div className="form-group">
              <label className="form-label">Campaign Name</label>
              <input 
                type="text" 
                placeholder="Enter campaign name" 
                className="form-input"
                value={newCampaign.name}
                onChange={(e) => setNewCampaign({ ...newCampaign, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Subject Line (Common for all recipients)</label>
              <input 
                type="text" 
                placeholder="Enter email subject line sent to all recipients" 
                className="form-input"
                value={newCampaign.subject}
                onChange={(e) => setNewCampaign({ ...newCampaign, subject: e.target.value })}
                required
              />
            </div>

            {/* Target Recipients if File not provided */}
            {fileData.length === 0 && (
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Target Recipients (Comma Separated)</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Leave blank to send to all CRM leads
                  </span>
                </label>
                <input 
                  type="text" 
                  placeholder="contact@example.com, accounts@company.in (or leave blank for all leads)" 
                  className="form-input"
                  value={newCampaign.manualRecipients}
                  onChange={(e) => setNewCampaign({ ...newCampaign, manualRecipients: e.target.value })}
                />
              </div>
            )}

            <div className="form-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <label className="form-label" style={{ margin: 0 }}>
                  Email Body Template
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Dynamic tags:</span>
                  <button
                    type="button"
                    onClick={() => {
                      setNewCampaign(prev => ({
                        ...prev,
                        templateText: prev.templateText.startsWith('Dear {name},') 
                          ? prev.templateText 
                          : `Dear {name},\n\n${prev.templateText}`
                      }));
                    }}
                    className="btn btn-secondary"
                    style={{ 
                      fontSize: '0.725rem', 
                      padding: '0.2rem 0.55rem', 
                      borderRadius: '4px',
                      color: 'var(--accent)',
                      borderColor: 'var(--accent)'
                    }}
                    title="Click to ensure Dear {name}, is inserted"
                  >
                    + Dear {'{name}'},
                  </button>
                </div>
              </div>

              <textarea 
                placeholder="Enter email message body sent to all recipients (HTML supported)..." 
                className="form-textarea"
                style={{ minHeight: '150px', lineHeight: '1.6', fontFamily: 'inherit' }}
                value={newCampaign.templateText}
                onChange={(e) => setNewCampaign({ ...newCampaign, templateText: e.target.value })}
                required
              ></textarea>

              {/* Logo & Personalization Notice */}
              <div style={{ 
                marginTop: '0.5rem', 
                padding: '0.65rem 0.85rem', 
                backgroundColor: 'rgba(255, 255, 255, 0.02)', 
                borderRadius: '6px', 
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.775rem', color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--success)', fontWeight: '600' }}>✓ Personalization:</span>
                  <span><code>{'{name}'}</code> will be auto-replaced by the recipient's name from your Excel/CSV.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.775rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: '600' }}>✓ Auto Footer:</span>
                    <span>Logo attached</span>
                    <img src="/fivopay-logo.png" alt="Fivopay Logo" style={{ height: '16px', objectFit: 'contain' }} />
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowPreview(!showPreview)}
                    className="btn btn-secondary"
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <Eye size={13} /> {showPreview ? 'Hide Preview' : 'Preview Email'}
                  </button>
                </div>
              </div>

              {/* Live Rendered Email Preview Box */}
              {showPreview && (
                <div style={{
                  marginTop: '1rem',
                  padding: '1.5rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid var(--border)',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  {/* Email Viewer Envelope Container */}
                  <div style={{
                    width: '100%',
                    maxWidth: '640px',
                    backgroundColor: '#ffffff',
                    color: '#1e293b',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
                    overflow: 'hidden'
                  }}>
                    {/* Email Reader Header Bar */}
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      backgroundColor: '#f8fafc',
                      borderBottom: '1px solid #e2e8f0', 
                      padding: '0.75rem 1.25rem',
                      fontSize: '0.8rem',
                      color: '#64748b'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e' }}></span>
                        <span>
                          <strong style={{ color: '#0f172a' }}>To: </strong> 
                          {fileData.length > 0 && fileData[0].name ? `${fileData[0].name} (${fileData[0].email})` : 'Harsh Raj (harsh7607@gmail.com)'}
                        </span>
                      </div>
                      <span className="badge" style={{ backgroundColor: '#e2e8f0', color: '#475569', fontSize: '0.7rem' }}>
                        Inbox View
                      </span>
                    </div>

                    {/* Email Body Content */}
                    <div style={{ padding: '1.75rem 1.75rem 1.5rem 1.75rem' }}>
                      <div style={{ 
                        fontSize: '0.925rem', 
                        lineHeight: '1.7', 
                        color: '#334155', 
                        whiteSpace: 'pre-wrap',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                      }}>
                        {newCampaign.templateText
                          ? newCampaign.templateText.replace(/\{\{\s*name\s*\}\}/gi, fileData.length > 0 && fileData[0].name ? fileData[0].name : 'Harsh Raj')
                                                    .replace(/\{\s*name\s*\}/gi, fileData.length > 0 && fileData[0].name ? fileData[0].name : 'Harsh Raj')
                          : 'Dear Harsh Raj,\n\n(Your email message body will appear here...)'}
                      </div>

                      {/* Fivopay Branded Footer Strip (Matching Exact User Reference Image) */}
                      <div style={{ marginTop: '2rem' }}>
                        {/* Outer Purple Banner */}
                        <div style={{
                          backgroundColor: '#482d82',
                          borderRadius: '8px',
                          padding: '10px 14px',
                          boxShadow: '0 2px 6px rgba(72, 45, 130, 0.25)'
                        }}>
                          {/* Inner Cyan-Blue Pill */}
                          <div style={{
                            backgroundColor: '#1b68b3',
                            borderRadius: '50px',
                            padding: '8px 16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '0.75rem',
                            flexWrap: 'nowrap'
                          }}>
                            {/* 1. Phone */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexShrink: 0 }}>
                              <div style={{
                                width: '26px',
                                height: '26px',
                                borderRadius: '50%',
                                backgroundColor: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                              }}>
                                <Phone size={13} color="#1b68b3" fill="#1b68b3" />
                              </div>
                              <span style={{ color: '#ffffff', fontSize: '0.8rem', fontWeight: '600', whiteSpace: 'nowrap' }}>
                                +91-9096081885
                              </span>
                            </div>

                            {/* 2. Logo in Between + Website */}
                            <div style={{
                              backgroundColor: '#ffffff',
                              borderRadius: '20px',
                              padding: '3px 12px',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                              flexShrink: 0
                            }}>
                              <img 
                                src="/fivopay-logo.png" 
                                alt="Fivopay" 
                                style={{ height: '18px', width: 'auto', objectFit: 'contain' }} 
                              />
                              <span style={{ color: '#1b68b3', fontSize: '0.8rem', fontWeight: '700', whiteSpace: 'nowrap' }}>
                                www.fivopay.com
                              </span>
                            </div>

                            {/* 3. Office Address */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexShrink: 0, textAlign: 'left' }}>
                              <div style={{
                                width: '26px',
                                height: '26px',
                                borderRadius: '50%',
                                backgroundColor: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                              }}>
                                <MapPin size={13} color="#1b68b3" fill="#1b68b3" />
                              </div>
                              <div style={{ color: '#ffffff', fontSize: '0.725rem', fontWeight: '500', lineHeight: '1.25', whiteSpace: 'nowrap' }}>
                                Office No-123, 10 Biz Park,<br />Vimanagar, Pune-14
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '0.5rem' }}>
              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={isSending}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.25rem', fontWeight: '600' }}
              >
                <Send size={15} className={isSending ? 'spin' : ''} /> 
                {isSending ? 'Sending Campaign via SMTP...' : 'Send Campaign to Leads'}
              </button>
              {fileData.length > 0 && (
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Will dispatch common email to {fileData.length} recipient(s) in uploaded file
                </span>
              )}
            </div>
          </form>
        </div>

      </div>

      {/* Format Guidelines & Sample Downloader Modal */}
      {showFormatGuide && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1.5rem'
          }}
          onClick={() => setShowFormatGuide(false)}
        >
          <div 
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              maxWidth: '640px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{ 
                  width: '36px', 
                  height: '36px', 
                  borderRadius: '8px', 
                  backgroundColor: 'var(--accent-light)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <FileSpreadsheet size={20} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '700', margin: 0, color: 'var(--text-primary)' }}>
                    Excel & CSV File Format Guide
                  </h3>
                  <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', margin: '0.2rem 0 0 0' }}>
                    Email column required; Name column supported for personalized greetings
                  </p>
                </div>
              </div>
              <button 
                type="button" 
                onClick={() => setShowFormatGuide(false)}
                className="btn btn-secondary"
                style={{ padding: '0.4rem', borderRadius: '6px' }}
              >
                <X size={18} />
              </button>
            </div>

            {/* How it works banner */}
            <div style={{ 
              backgroundColor: 'var(--accent-light)', 
              border: '1px solid var(--accent)', 
              borderRadius: '8px', 
              padding: '0.85rem 1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem'
            }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                ℹ️ Personalized Dynamic Greeting + Fivopay Logo Footer
              </span>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.45' }}>
                Your spreadsheet can have <strong>email</strong> and <strong>name</strong> columns. The tag <code>{'{name}'}</code> in your body template will be dynamically replaced with each recipient's actual name (or "Sir/Madam" if blank), and the official Fivopay logo footer is automatically attached at the end of each email.
              </p>
            </div>

            {/* Column Specification Cards */}
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.65rem' }}>
                Supported Column Headers
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {/* Email Column */}
                <div style={{
                  padding: '0.85rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  backgroundColor: 'rgba(255, 255, 255, 0.01)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
                    <code style={{ 
                      backgroundColor: 'var(--accent-light)', 
                      color: 'var(--accent)', 
                      padding: '0.15rem 0.4rem', 
                      borderRadius: '4px',
                      fontWeight: '700',
                      fontSize: '0.825rem'
                    }}>email</code>
                    <span className="badge stage-lost" style={{ fontSize: '0.65rem', padding: '0.1rem 0.35rem' }}>Required</span>
                  </div>
                  <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.4' }}>
                    Recipient email addresses (e.g. <code>harsh7607@gmail.com</code>).
                  </p>
                </div>

                {/* Name Column */}
                <div style={{
                  padding: '0.85rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  backgroundColor: 'rgba(255, 255, 255, 0.01)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
                    <code style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.08)', 
                      color: 'var(--text-primary)', 
                      padding: '0.15rem 0.4rem', 
                      borderRadius: '4px',
                      fontWeight: '700',
                      fontSize: '0.825rem'
                    }}>name</code>
                    <span className="badge" style={{ fontSize: '0.65rem', padding: '0.1rem 0.35rem' }}>Optional</span>
                  </div>
                  <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.4' }}>
                    Contact or lead name (used for CRM lead record).
                  </p>
                </div>
              </div>
            </div>

            {/* Sample Table Illustration */}
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Sample Spreadsheet Preview
              </h4>
              <div style={{ 
                overflowX: 'auto', 
                borderRadius: '8px', 
                border: '1px solid var(--border)',
                backgroundColor: 'var(--bg)' 
              }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.775rem', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', borderBottom: '1px solid var(--border)' }}>
                      <th style={{ padding: '0.65rem 0.85rem', color: 'var(--text-primary)', fontWeight: '600' }}>email (Required)</th>
                      <th style={{ padding: '0.65rem 0.85rem', color: 'var(--text-primary)', fontWeight: '600' }}>name (Optional)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '0.65rem 0.85rem', color: 'var(--accent)', fontWeight: '500' }}>harsh7607@gmail.com</td>
                      <td style={{ padding: '0.65rem 0.85rem', color: 'var(--text-secondary)' }}>Harsh Raj</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '0.65rem 0.85rem', color: 'var(--accent)', fontWeight: '500' }}>aryanmandal800@gmail.com</td>
                      <td style={{ padding: '0.65rem 0.85rem', color: 'var(--text-secondary)' }}>Aryan Mandal</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.65rem 0.85rem', color: 'var(--accent)', fontWeight: '500' }}>hraj93729@gmail.com</td>
                      <td style={{ padding: '0.65rem 0.85rem', color: 'var(--text-secondary)' }}>Hraj Support</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Download Instant Sample Templates */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-primary)', display: 'block' }}>
                  Download Clean Sample Template
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  Get ready-to-fill file with just the email column
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <button
                  type="button"
                  onClick={() => downloadSampleTemplate('xlsx')}
                  className="btn btn-primary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontSize: '0.8rem',
                    padding: '0.45rem 0.85rem'
                  }}
                >
                  <FileSpreadsheet size={15} />
                  Download Excel (.xlsx)
                </button>
                <button
                  type="button"
                  onClick={() => downloadSampleTemplate('csv')}
                  className="btn btn-secondary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontSize: '0.8rem',
                    padding: '0.45rem 0.85rem'
                  }}
                >
                  <Download size={15} />
                  Download CSV (.csv)
                </button>
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--border)', paddingTop: '0.85rem' }}>
              <button
                type="button"
                onClick={() => setShowFormatGuide(false)}
                className="btn btn-secondary"
                style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem', fontWeight: '600' }}
              >
                Close Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CampaignsScreen;
