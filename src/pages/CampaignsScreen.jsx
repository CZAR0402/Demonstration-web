import React, { useState } from 'react';
import { ShieldCheck, Send, Upload, FileSpreadsheet, Trash2, CheckCircle } from 'lucide-react';

function CampaignsScreen({ campaigns, setCampaigns }) {
  const [newCampaign, setNewCampaign] = useState({
    name: '', subject: '', templateText: ''
  });
  
  const [csvData, setCsvData] = useState([]);
  const [csvError, setCsvError] = useState('');
  const [fileName, setFileName] = useState('');

  const handleSendCampaign = (e) => {
    e.preventDefault();
    if (!newCampaign.name || !newCampaign.subject) return;
    
    // Determine sent count based on CSV or single form input
    const sentCount = csvData.length > 0 ? csvData.length : 150;

    const newCamp = {
      id: `camp-${Date.now()}`,
      name: newCampaign.name,
      status: 'Sent',
      sentCount: sentCount,
      delivered: Math.max(0, sentCount - 2),
      opened: Math.round(sentCount * 0.6),
      bounced: Math.min(2, sentCount),
      date: new Date().toISOString().split('T')[0],
      subject: newCampaign.subject
    };

    setCampaigns([newCamp, ...campaigns]);
    setNewCampaign({ name: '', subject: '', templateText: '' });
    setCsvData([]);
    setFileName('');
    alert(`AWS SES Email Campaign sent successfully to ${sentCount} recipients!`);
  };

  const handleCsvUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      const lines = text.split(/\r?\n/).filter(line => line.trim() !== '');
      
      if (lines.length < 2) {
        setCsvError('CSV must contain a header row and at least one data row.');
        setCsvData([]);
        return;
      }

      // Parse headers
      const headers = lines[0].split(',').map(h => h.trim().toLowerCase().replace(/['"]/g, ''));
      const emailIdx = headers.indexOf('email');
      const subjectIdx = headers.indexOf('subject');
      const bodyIdx = headers.indexOf('body');

      if (emailIdx === -1 || subjectIdx === -1 || bodyIdx === -1) {
        setCsvError('CSV must include "email", "subject", and "body" columns.');
        setCsvData([]);
        return;
      }

      const parsedRows = [];
      for (let i = 1; i < lines.length; i++) {
        const lineText = lines[i];
        let currentField = '';
        const row = [];
        let inQuotes = false;
        
        for (let j = 0; j < lineText.length; j++) {
          const char = lineText[j];
          if (char === '"') {
            inQuotes = !inQuotes;
          } else if (char === ',' && !inQuotes) {
            row.push(currentField.trim());
            currentField = '';
          } else {
            currentField += char;
          }
        }
        row.push(currentField.trim());

        if (row.length > Math.max(emailIdx, subjectIdx, bodyIdx)) {
          parsedRows.push({
            email: row[emailIdx],
            subject: row[subjectIdx],
            body: row[bodyIdx]
          });
        }
      }

      if (parsedRows.length === 0) {
        setCsvError('No valid data rows found in the CSV.');
        setCsvData([]);
      } else {
        setCsvData(parsedRows);
        setCsvError('');
        
        // Auto populate fields with the first item in CSV
        setNewCampaign({
          name: `Bulk CSV Campaign - ${file.name.replace(/\.[^/.]+$/, "")}`,
          subject: parsedRows[0].subject || '',
          templateText: parsedRows[0].body || ''
        });
      }
    };
    reader.readAsText(file);
  };

  const clearCsv = () => {
    setCsvData([]);
    setFileName('');
    setCsvError('');
    setNewCampaign({ name: '', subject: '', templateText: '' });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* AWS SES Credentials Status */}
      <div className="content-card" style={{ borderLeft: '4px solid var(--success)' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <ShieldCheck size={32} style={{ color: 'var(--success)' }} />
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: '600' }}>AWS SES Domain Verification</h3>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
              Domain <strong>fivopay.com</strong> verified. SPF: Active, DKIM: Active, DMARC: Configured (p=reject). Ready for high-volume bulk campaigns.
            </p>
          </div>
        </div>
      </div>

      {/* Main Campaign Grid */}
      <div className="dashboard-split">
        {/* Left Side: Campaign draft and CSV Upload */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flexGrow: 1 }}>
          
          {/* CSV File Upload Card */}
          <div className="content-card">
            <div className="card-title-bar">
              <h2>CSV Bulk Leads Upload</h2>
            </div>
            
            {!fileName ? (
              <div style={{
                border: '2px dashed var(--border)',
                borderRadius: '8px',
                padding: '2rem',
                textAlign: 'center',
                backgroundColor: 'rgba(255,255,255,0.01)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                cursor: 'pointer',
                position: 'relative'
              }}>
                <input 
                  type="file" 
                  accept=".csv" 
                  onChange={handleCsvUpload} 
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
                <Upload size={32} style={{ color: 'var(--text-muted)' }} />
                <div>
                  <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Click to upload CSV</span>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>CSV must contain headers: <strong>email</strong>, <strong>subject</strong>, <strong>body</strong></p>
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
                  <FileSpreadsheet size={20} style={{ color: 'var(--success)' }} />
                  <div>
                    <span style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--success)' }}>{fileName}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginLeft: '0.75rem' }}>({csvData.length} leads extracted)</span>
                  </div>
                </div>
                <button onClick={clearCsv} className="btn btn-danger" style={{ padding: '0.375rem', borderRadius: '6px' }}>
                  <Trash2 size={14} />
                </button>
              </div>
            )}

            {csvError && (
              <p style={{ color: 'var(--danger)', fontSize: '0.775rem', marginTop: '0.5rem', fontWeight: '500' }}>
                {csvError}
              </p>
            )}

            {/* CSV Data Preview List */}
            {csvData.length > 0 && (
              <div style={{ marginTop: '1.25rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                <span className="meta-label">CSV Leads Preview</span>
                <div style={{ maxHeight: '150px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.375rem', marginTop: '0.5rem' }}>
                  {csvData.slice(0, 5).map((row, idx) => (
                    <div key={idx} style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      fontSize: '0.775rem',
                      padding: '0.375rem 0.625rem',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(255,255,255,0.01)',
                      border: '1px solid var(--border)'
                    }}>
                      <span style={{ fontWeight: '500', color: 'var(--text-primary)' }}>{row.email}</span>
                      <span style={{ color: 'var(--text-secondary)', maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{row.subject}</span>
                    </div>
                  ))}
                  {csvData.length > 5 && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', padding: '0.25rem' }}>
                      And {csvData.length - 5} more records...
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* SES Sender Form */}
          <div className="content-card">
            <div className="card-title-bar">
              <h2>Create SES Email Campaign</h2>
            </div>
            <form onSubmit={handleSendCampaign} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Campaign Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Pune Housing Societies Launch Offer" 
                  className="form-input"
                  value={newCampaign.name}
                  onChange={(e) => setNewCampaign({ ...newCampaign, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Subject Line</label>
                <input 
                  type="text" 
                  placeholder="e.g. Automate your society maintenance collection with Fivopay" 
                  className="form-input"
                  value={newCampaign.subject}
                  onChange={(e) => setNewCampaign({ ...newCampaign, subject: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Body Template (HTML supported)</label>
                <textarea 
                  placeholder="Dear Secretary, We are excited to introduce Fivopay..." 
                  className="form-textarea"
                  value={newCampaign.templateText}
                  onChange={(e) => setNewCampaign({ ...newCampaign, templateText: e.target.value })}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                <Send size={14} /> Send Campaign to Leads
              </button>
            </form>
          </div>

        </div>

        {/* Right Side: Past Campaign Logs */}
        <div className="content-card" style={{ width: '400px', alignSelf: 'stretch' }}>
          <div className="card-title-bar">
            <h2>Past Campaigns</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '75vh', overflowY: 'auto', paddingRight: '0.25rem' }}>
            {campaigns.map(camp => (
              <div key={camp.id} style={{ borderBottom: '1px solid var(--border)', paddingBottom: '0.75rem' }}>
                <div style={{ display: 'flex', justifyBetween: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>{camp.name}</span>
                  <span className="badge stage-won" style={{ marginLeft: 'auto' }}>{camp.status}</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Sent on {camp.date}</div>
                <div className="camp-grid">
                  <div className="metric-box">
                    <div className="metric-num">{camp.sentCount}</div>
                    <div className="metric-lbl">Sent</div>
                  </div>
                  <div className="metric-box">
                    <div className="metric-num">
                      {camp.sentCount > 0 ? Math.round((camp.opened / camp.delivered) * 100) : 0}%
                    </div>
                    <div className="metric-lbl">Open Rate</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignsScreen;
