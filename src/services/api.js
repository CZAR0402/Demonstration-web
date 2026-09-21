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

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1000);

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

    // Attempt backend if other credentials
    const res = await fetchAPI('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email: cleanEmail, password: cleanPassword })
    });

    if (res && res.token) {
      return res;
    }

    throw new Error('Invalid email or password. Use bde@fivopay.com / bde@123');
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
  }
};
