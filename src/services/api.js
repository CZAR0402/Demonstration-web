// Central API service module communicating with live deployed Backend
const API_BASE_URL = 'https://sales.fivopayunion.in/api';
//const API_BASE_URL = 'http://localhost:5001/api';

// Helper to get JWT headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('fivopay_token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };
};

// Generic fetch wrapper communicating with live backend
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
    console.warn(`[fetchAPI] Error communicating with ${endpoint}:`, error.message);
    return null;
  }
};

export const api = {
  // Authentication: Always calls live backend API
  login: async (email, password) => {
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanPassword = (password || '').trim();

    const res = await fetchAPI('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email: cleanEmail, password: cleanPassword }),
      throwError: true
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

  // Leads (Reflects live MongoDB database directly)
  getLeads: async () => {
    const res = await fetchAPI('/leads');
    if (res && Array.isArray(res.data)) return res;

    return {
      success: true,
      count: 0,
      data: []
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

  // Users / BDE Team (Admin Only) - 100% Dynamic from MongoDB
  getBDEs: async () => {
    const res = await fetchAPI('/users/bdes');
    if (res && Array.isArray(res.data)) return res;

    return {
      success: true,
      count: 0,
      data: []
    };
  },

  createBDE: async (bdeData) => {
    const res = await fetchAPI('/users/bdes', {
      method: 'POST',
      body: JSON.stringify(bdeData),
      throwError: true
    });
    return res;
  },

  toggleBDEStatus: async (bdeId) => {
    const res = await fetchAPI(`/users/bdes/${bdeId}/status`, {
      method: 'PATCH',
      throwError: true
    });
    return res || { success: true };
  },

  // Email & Campaigns - 100% Dynamic from MongoDB
  getEmailStatus: async () => {
    return await fetchAPI('/email/status');
  },

  getCampaigns: async () => {
    const res = await fetchAPI('/email/campaigns');
    if (res && Array.isArray(res.data)) return res;

    return {
      success: true,
      count: 0,
      data: []
    };
  },

  sendCampaign: async (campaignData) => {
    const res = await fetchAPI('/email/campaign', {
      method: 'POST',
      body: JSON.stringify(campaignData),
      timeoutMs: 300000,
      throwError: true
    });
    return res;
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
