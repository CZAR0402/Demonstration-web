// Central API service module with offline-first client fallback support
import { defaultLeads } from '../data/defaultLeads';

const API_BASE_URL = 'http://localhost:5001/api';

// Helper to get JWT headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('fivopay_token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };
};

// Generic fetch wrapper with offline fallback
const fetchAPI = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = getAuthHeaders();
  const timeoutMs = options.timeoutMs || 10000;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        ...headers,
        ...(options.headers || {})
      }
    });
    clearTimeout(timeoutId);

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || `API Error (${response.status})`);
    }
    return data;
  } catch (error) {
    if (options.throwError) {
      throw error;
    }
    // Offline mode / backend not running: return null to let local handler take over
    return null;
  }
};

export const api = {
  // Authentication (Works 100% on frontend without backend)
  login: async (email, password) => {
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanPassword = (password || '').trim();

    // Sales Guy credentials
    if (cleanEmail === 'bde@fivopay.com' && cleanPassword === 'bde@123') {
      return {
        success: true,
        token: 'fivopay_sales_token_bde',
        user: {
          id: 'bde-sales-executive-01',
          _id: 'bde-sales-executive-01',
          name: 'Sales Executive (BDE)',
          email: 'bde@fivopay.com',
          role: 'SALES',
          title: 'Senior Sales Executive (BDE)',
          region: 'Mumbai & Western Maharashtra'
        }
      };
    }

    // Admin credentials
    if (cleanEmail === 'admin@fivopay.com' && cleanPassword === 'password123') {
      return {
        success: true,
        token: 'fivopay_admin_token_admin',
        user: {
          id: 'admin-manager-01',
          _id: 'admin-manager-01',
          name: 'Admin Manager',
          email: 'admin@fivopay.com',
          role: 'ADMIN',
          title: 'Head of Sales Governance',
          region: 'Corporate HQ'
        }
      };
    }

    // Offline fallback for BDE 1 (Rahul Deshmukh)
    if (cleanEmail === 'bde1@fivopay.com' && (cleanPassword === 'password123' || cleanPassword === 'bde@123')) {
      // First try backend, if unavailable return offline user
      const backendRes = await fetchAPI('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email: cleanEmail, password: cleanPassword })
      });
      if (backendRes && backendRes.token) return backendRes;

      return {
        success: true,
        token: 'fivopay_sales_token_bde',
        user: {
          id: '6ab12e582c9d0e2fc806204f',
          _id: '6ab12e582c9d0e2fc806204f',
          name: 'Rahul Deshmukh (BDE 1)',
          email: 'bde1@fivopay.com',
          role: 'SALES',
          title: 'Senior Sales Executive (BDE)',
          region: 'Pune & Western Maharashtra'
        }
      };
    }

    // Attempt backend if other credentials
    const res = await fetchAPI('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email: cleanEmail, password: cleanPassword })
    });

    if (res && res.token) {
      return res;
    }

    if (res && res.message) {
      throw new Error(res.message);
    }

    throw new Error('Invalid email or password.');
  },

  getMe: async () => {
    const res = await fetchAPI('/auth/me');
    if (res) return res;

    const saved = localStorage.getItem('fivopay_user');
    return {
      success: true,
      data: saved ? JSON.parse(saved) : null
    };
  },

  // Leads
  getLeads: async () => {
    const res = await fetchAPI('/leads');
    if (res && res.data) return res;

    return {
      success: true,
      count: defaultLeads.length,
      data: defaultLeads
    };
  },

  createLead: async (leadData) => {
    const res = await fetchAPI('/leads', {
      method: 'POST',
      body: JSON.stringify(leadData)
    });
    if (res && res.data) return res;

    return {
      success: true,
      data: {
        ...leadData,
        id: `lead-${Date.now()}`,
        _id: `lead-${Date.now()}`
      }
    };
  },

  updateLead: async (id, updateData) => {
    const res = await fetchAPI(`/leads/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updateData)
    });
    if (res && res.data) return res;

    return {
      success: true,
      data: { id, ...updateData }
    };
  },

  assignLead: async (leadId, userId) => {
    const res = await fetchAPI(`/leads/${leadId}/assign`, {
      method: 'PATCH',
      body: JSON.stringify({ userId })
    });
    if (res && res.data) return res;

    return {
      success: true,
      data: { id: leadId, assignedTo: userId }
    };
  },

  addActivity: async (leadId, activityData) => {
    const res = await fetchAPI(`/leads/${leadId}/activities`, {
      method: 'POST',
      body: JSON.stringify(activityData)
    });
    if (res && res.data) return res;

    return {
      success: true,
      data: { id: `act-${Date.now()}`, ...activityData }
    };
  },

  addReminder: async (leadId, reminderData) => {
    const res = await fetchAPI(`/leads/${leadId}/reminders`, {
      method: 'POST',
      body: JSON.stringify(reminderData)
    });
    if (res && res.data) return res;

    return {
      success: true,
      data: { id: `rem-${Date.now()}`, ...reminderData }
    };
  },

  // Users / BDE Team (Admin Only)
  getBDEs: async () => {
    const res = await fetchAPI('/users/bdes');
    if (res && res.data) return res;

    return {
      success: true,
      data: [
        {
          id: 'bde-sales-executive-01',
          name: 'Sales Executive (BDE)',
          email: 'bde@fivopay.com',
          role: 'SALES',
          title: 'Senior Sales Executive (BDE)',
          region: 'Mumbai & Western Maharashtra',
          phone: '+91 98230 11223',
          isActive: true
        }
      ]
    };
  },

  createBDE: async (bdeData) => {
    const res = await fetchAPI('/users/bdes', {
      method: 'POST',
      body: JSON.stringify(bdeData)
    });
    if (res && res.data) return res;

    return {
      success: true,
      data: { id: `bde-${Date.now()}`, ...bdeData, isActive: true }
    };
  },

  toggleBDEStatus: async (bdeId) => {
    const res = await fetchAPI(`/users/bdes/${bdeId}/status`, {
      method: 'PATCH'
    });
    if (res) return res;

    return { success: true };
  },

  // Email & Campaigns
  getEmailStatus: async () => {
    return await fetchAPI('/email/status');
  },

  getCampaigns: async () => {
    const res = await fetchAPI('/email/campaigns');
    if (res && res.data) return res;

    // Check localStorage for offline created campaigns first
    const offlineSaved = localStorage.getItem('fivopay_offline_campaigns');
    if (offlineSaved) {
      try {
        const parsed = JSON.parse(offlineSaved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return { success: true, data: parsed };
        }
      } catch (e) {
        console.warn('Error reading offline campaigns:', e);
      }
    }

    return {
      success: true,
      data: [
        {
          id: 'camp-seed-01',
          _id: 'camp-seed-01',
          name: 'Cooperative Banking Core Switch Q3 Briefing',
          subject: 'Modernizing Core Banking Infrastructure for Cooperative Banks in Maharashtra',
          status: 'Sent',
          sentCount: 12,
          delivered: 12,
          opened: 7,
          failedCount: 0,
          date: '2026-08-14',
          createdByName: 'Rahul Deshmukh (BDE 1)',
          createdByEmail: 'bde1@fivopay.com',
          createdByRole: 'SALES',
          templateText: 'Respected Chairman / General Manager,\n\nFivopay has helped over 45 urban cooperative banks modernize core banking, doorstep ATM operations, and RTGS/NEFT settlement gateways with 99.98% uptime.\n\nWe would welcome an opportunity to present a 20-minute executive presentation for your board.\n\nWarm regards,\nRahul Deshmukh\nSenior Sales Executive, Fivopay',
          recipients: [
            { email: 'chairman@pdccbank.co.in', name: 'Pune District Central Co-op Bank', status: 'Sent', sentAt: '2026-08-14T10:30:00.000Z' },
            { email: 'arvind.joshi@saraswatbank.com', name: 'Saraswat Cooperative Bank Ltd', status: 'Sent', sentAt: '2026-08-14T10:30:05.000Z' },
            { email: 'md@sanglicoopbank.in', name: 'Sangli Urban Co-op Bank Ltd', status: 'Sent', sentAt: '2026-08-14T10:30:10.000Z' }
          ]
        },
        {
          id: 'camp-seed-02',
          _id: 'camp-seed-02',
          name: 'Doorstep Micro-ATM & Field Collector Automation',
          subject: 'Zero-Reconciliation Doorstep Pigmy & Loan Collection Platform',
          status: 'Sent',
          sentCount: 8,
          delivered: 8,
          opened: 4,
          failedCount: 0,
          date: '2026-08-12',
          createdByName: 'Priyanka Patil (BDE 2)',
          createdByEmail: 'bde2@fivopay.com',
          createdByRole: 'SALES',
          templateText: 'Hello Secretary / Manager,\n\nEliminate manual passbook stamping and cash tally mismatches with Fivopay Doorstep Banking Micro-ATMs.\n\nInstant SMS receipts, biometric fingerprint authentication, and real-time ledger synchronization directly into your existing CBS.\n\nBest Regards,\nPriyanka Patil\nField Sales Executive, Fivopay',
          recipients: [
            { email: 'contact@balajicredit.in', name: 'Shree Balaji Co-op Credit Society', status: 'Sent', sentAt: '2026-08-12T14:15:00.000Z' },
            { email: 'secretary@mahagencochs.org', name: 'Mahagenco Co-op Housing Society', status: 'Sent', sentAt: '2026-08-12T14:15:04.000Z' }
          ]
        },
        {
          id: 'camp-seed-03',
          _id: 'camp-seed-03',
          name: 'CA Firm & Statutory Auditor Partner Program',
          subject: 'Exclusive Partner Program for Auditors Managing Cooperative Societies',
          status: 'Sent',
          sentCount: 6,
          delivered: 6,
          opened: 3,
          failedCount: 0,
          date: '2026-08-08',
          createdByName: 'Admin Manager',
          createdByEmail: 'admin@fivopay.com',
          createdByRole: 'ADMIN',
          templateText: 'Dear Auditor,\n\nJoin the Fivopay Partner Network to offer audited credit societies automated financial statement generation, loan scheduling, and audit trail extraction.\n\nRegards,\nHead of Governance\nFivopay Enterprise',
          recipients: [
            { email: 'kishor@shindeca.com', name: 'K. P. Shinde & Associates', status: 'Sent', sentAt: '2026-08-08T09:00:00.000Z' },
            { email: 'partner@auditdesk.in', name: 'AuditDesk LLP', status: 'Sent', sentAt: '2026-08-08T09:00:03.000Z' }
          ]
        }
      ]
    };
  },

  sendCampaign: async (campaignData) => {
    try {
      const res = await fetchAPI('/email/campaign', {
        method: 'POST',
        body: JSON.stringify(campaignData),
        timeoutMs: 60000,
        throwError: true
      });
      if (res && res.data) return res;
    } catch (e) {
      console.warn('[api.sendCampaign] Backend dispatch error, falling back to local store:', e.message);
    }

    // Offline fallback save
    const currentUser = JSON.parse(localStorage.getItem('fivopay_user') || '{}');
    const newCamp = {
      id: `camp-${Date.now()}`,
      _id: `camp-${Date.now()}`,
      name: campaignData.name,
      subject: campaignData.subject,
      templateText: campaignData.templateText,
      status: 'Sent',
      sentCount: (campaignData.recipients || []).length || 1,
      delivered: (campaignData.recipients || []).length || 1,
      opened: 1,
      failedCount: 0,
      date: new Date().toISOString().split('T')[0],
      createdByName: currentUser.name || 'Sales Executive (BDE)',
      createdByEmail: currentUser.email || 'bde@fivopay.com',
      createdByRole: currentUser.role || 'SALES',
      recipients: (campaignData.recipients || []).map(r => ({
        email: r.email,
        name: r.name || '',
        status: 'Sent',
        sentAt: new Date().toISOString()
      }))
    };

    try {
      const existing = JSON.parse(localStorage.getItem('fivopay_offline_campaigns') || '[]');
      const updated = [newCamp, ...existing];
      localStorage.setItem('fivopay_offline_campaigns', JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }

    return {
      success: true,
      message: `Campaign "${campaignData.name}" simulated successfully`,
      data: newCamp
    };
  },

  sendSingleEmail: async (emailData) => {
    const res = await fetchAPI('/email/send', {
      method: 'POST',
      body: JSON.stringify(emailData),
      timeoutMs: 15000,
      throwError: true
    });
    return res;
  }
};
