import React from 'react';
import { Users, Calendar, Send, TrendingUp, Trophy, CheckCircle2 } from 'lucide-react';

function KPICards({ leads, campaigns, currentUser }) {
  const totalLeads = leads.length;
  const demoScheduled = leads.filter(l => l.stage === 'Demo Scheduled').length;
  const wonLeads = leads.filter(l => l.stage === 'Won').length;
  const emailsSent = campaigns.reduce((acc, c) => acc + (c.sentCount || 0), 0);
  const isAdmin = currentUser?.role === 'ADMIN';
  const winRate = totalLeads > 0 ? Math.round((wonLeads / totalLeads) * 100) : 0;

  return (
    <section className="kpi-grid">
      {/* Total CRM Leads */}
      <div className="kpi-card">
        <div className="kpi-card-header">
          <span>Total CRM Leads</span>
          <div className="kpi-icon-chip">
            <Users size={17} />
          </div>
        </div>
        <div className="kpi-value">{totalLeads}</div>
        <div className="kpi-footer">
          <span className="trend-pill up">
            <TrendingUp size={12} /> +12%
          </span>
          <span>pipeline this week</span>
        </div>
      </div>

      {/* Demos Scheduled */}
      <div className="kpi-card">
        <div className="kpi-card-header">
          <span>Demos Scheduled</span>
          <div className="kpi-icon-chip warning">
            <Calendar size={17} />
          </div>
        </div>
        <div className="kpi-value">{demoScheduled}</div>
        <div className="kpi-footer">
          <span style={{ color: 'var(--text-muted)' }}>Active client presentations</span>
        </div>
      </div>

      {/* 3rd Metric: Total Won for Admin, SES Dispatched for Reps */}
      {isAdmin ? (
        <div className="kpi-card">
          <div className="kpi-card-header">
            <span>Total Won Deals</span>
            <div className="kpi-icon-chip success">
              <Trophy size={17} />
            </div>
          </div>
          <div className="kpi-value">{wonLeads}</div>
          <div className="kpi-footer">
            <span className="trend-pill up">
              <CheckCircle2 size={12} /> {winRate}%
            </span>
            <span>closed conversion rate</span>
          </div>
        </div>
      ) : (
        <div className="kpi-card">
          <div className="kpi-card-header">
            <span>SES Emails Dispatched</span>
            <div className="kpi-icon-chip info">
              <Send size={16} />
            </div>
          </div>
          <div className="kpi-value">{emailsSent.toLocaleString()}</div>
          <div className="kpi-footer">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--success)', fontWeight: '600' }}>
              <span className="pulsing-beacon-dot"></span>
              <span>Domain Active</span>
            </span>
            <span>• High deliverability</span>
          </div>
        </div>
      )}
    </section>
  );
}

export default KPICards;
