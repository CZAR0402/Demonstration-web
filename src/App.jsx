import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Plus, Download } from 'lucide-react';
import Sidebar from './components/Sidebar';
import KPICards from './components/KPICards';
import LoginScreen from './pages/LoginScreen';
import LeadsScreen from './pages/LeadsScreen';
import LeadDetailScreen from './pages/LeadDetailScreen';
import PipelineScreen from './pages/PipelineScreen';
import CampaignsScreen from './pages/CampaignsScreen';
import PastCampaignsScreen from './pages/PastCampaignsScreen';
import TeamManagementScreen from './pages/TeamManagementScreen';
import AdminCampaignsScreen from './pages/AdminCampaignsScreen';
import ProductFeaturesLanding from './pages/ProductFeaturesLanding';
import CategoryDetailPage from './pages/CategoryDetailPage';
import FeatureDetailPage from './pages/FeatureDetailPage';
import { defaultLeads } from './data/defaultLeads';
import { api } from './services/api';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('fivopay_token'));
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('fivopay_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [activeTab, setActiveTab] = useState('leads');
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('fivopay_theme') || 'dark';
    } catch {
      return 'dark';
    }
  });
  const location = useLocation();
  const navigate = useNavigate();
  
  // App States (Loaded from Backend or Default Leads Store)
  const [leads, setLeads] = useState(() => defaultLeads);
  const [campaigns, setCampaigns] = useState([]);
  const [selectedLeadId, setSelectedLeadId] = useState(null);
  const [showAddLead, setShowAddLead] = useState(false);

  // Load leads from backend when logged in
  const fetchBackendLeads = async () => {
    if (!isLoggedIn) return;
    try {
      const res = await api.getLeads();
      if (res.data && res.data.length > 0) {
        setLeads(res.data);
      }
    } catch (err) {
      console.warn('[App] Could not fetch backend leads, using offline CRM store:', err.message);
    }
  };

  // Load user-scoped campaigns from backend when logged in
  const fetchBackendCampaigns = async () => {
    if (!isLoggedIn) return;
    try {
      const res = await api.getCampaigns();
      if (res && res.data) {
        setCampaigns(res.data);
      } else {
        setCampaigns([]);
      }
    } catch (err) {
      console.warn('[App] Could not fetch backend campaigns:', err.message);
      setCampaigns([]);
    }
  };

  useEffect(() => {
    fetchBackendLeads();
    fetchBackendCampaigns();
  }, [isLoggedIn, currentUser]);

  // Toggle Theme & Persist Preference
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    try {
      localStorage.setItem('fivopay_theme', theme);
    } catch (e) {
      console.warn('Could not save theme to localStorage:', e);
    }
  }, [theme]);

  // Sync activeTab if location is product-features
  useEffect(() => {
    if (location.pathname.startsWith('/product-features')) {
      setActiveTab('apis');
    }
  }, [location.pathname]);

  // Automatic Scroll-to-Top on navigation / screen switch
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
  }, [location.pathname, activeTab]);

  // Handle Login / Logout
  const handleLoginSuccess = (userProfile) => {
    setIsLoggedIn(true);
    setCurrentUser(userProfile);
    fetchBackendLeads();
    fetchBackendCampaigns();
  };

  const handleLogout = () => {
    localStorage.removeItem('fivopay_token');
    localStorage.removeItem('fivopay_user');
    setIsLoggedIn(false);
    setCurrentUser(null);
    setSelectedLeadId(null);
    setCampaigns([]);
  };

  const [returnTab, setReturnTab] = useState('leads');

  // Callback to navigate to details screen
  const handleViewLead = (leadId) => {
    setSelectedLeadId(leadId);
    if (activeTab !== 'lead-detail') {
      setReturnTab(activeTab);
    }
    setActiveTab('lead-detail');
    navigate('/');
  };

  if (!isLoggedIn) {
    return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
  }

  const isProductFeaturesRoute = location.pathname.startsWith('/product-features') || location.pathname.startsWith('/category');

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onLogout={handleLogout} 
        theme={theme}
        setTheme={setTheme}
        currentUser={currentUser}
      />

      {/* Main Workspace */}
      <main className="main-content">
        {!isProductFeaturesRoute && activeTab !== 'lead-detail' && activeTab !== 'team' && activeTab !== 'all-campaigns' && (
          <>
            <header className="top-bar">
              <div className="page-title">
                <h1>
                  <span>Fivopay Sales Dashboard</span>
                  <span className="enterprise-badge">
                    <span className="pulsing-beacon-dot"></span>
                    <span>LIVE CRM</span>
                  </span>
                </h1>
                <p>Enterprise pipeline & territory management for Cooperative Societies, Banks & Auditors</p>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <button className="btn btn-secondary" onClick={() => {
                  alert("CRM leads and pipeline portfolio exported successfully.");
                }}>
                  <Download size={15} />
                  <span>Export CRM Data</span>
                </button>
                <button className="btn btn-primary" onClick={() => setShowAddLead(true)}>
                  <Plus size={16} />
                  <span>Add Lead</span>
                </button>
              </div>
            </header>

            {/* KPI Cards Row */}
            <KPICards leads={leads} campaigns={campaigns} currentUser={currentUser} />
          </>
        )}

        {/* Route Configuration & View Rendering */}
        <Routes>
          {/* Workspace Views */}
          <Route path="/" element={
            <>
              {activeTab === 'leads' && (
                <LeadsScreen 
                  leads={leads}
                  setLeads={setLeads}
                  showAddLead={showAddLead}
                  setShowAddLead={setShowAddLead}
                  onViewLead={handleViewLead}
                  currentUser={currentUser}
                />
              )}

              {activeTab === 'team' && currentUser?.role === 'ADMIN' && (
                <TeamManagementScreen />
              )}

              {activeTab === 'all-campaigns' && currentUser?.role === 'ADMIN' && (
                <AdminCampaignsScreen />
              )}

              {activeTab === 'lead-detail' && (
                <LeadDetailScreen 
                  leadId={selectedLeadId}
                  leads={leads}
                  setLeads={setLeads}
                  onBack={() => setActiveTab(returnTab || 'leads')}
                  currentUser={currentUser}
                />
              )}

              {activeTab === 'pipeline' && currentUser?.role !== 'ADMIN' && (
                <PipelineScreen 
                  leads={leads}
                  setLeads={setLeads}
                  onViewLead={handleViewLead}
                  setSelectedLeadId={handleViewLead}
                  setActiveTab={setActiveTab}
                  currentUser={currentUser}
                />
              )}

              {activeTab === 'campaigns' && currentUser?.role !== 'ADMIN' && (
                <CampaignsScreen 
                  campaigns={campaigns}
                  setCampaigns={setCampaigns}
                  onViewPastCampaigns={() => setActiveTab('past-campaigns')}
                />
              )}

              {activeTab === 'past-campaigns' && currentUser?.role !== 'ADMIN' && (
                <PastCampaignsScreen 
                  campaigns={campaigns}
                  setCampaigns={setCampaigns}
                  onComposeNew={() => setActiveTab('campaigns')}
                />
              )}
            </>
          } />

          {/* Product Features Portal Routes */}
          <Route path="/product-features" element={<ProductFeaturesLanding />} />
          <Route path="/product-features/:categorySlug" element={<CategoryDetailPage />} />
          <Route path="/product-features/:categorySlug/:featureSlug" element={<FeatureDetailPage />} />

          {/* Direct Category & Feature Aliases */}
          <Route path="/category/:categorySlug" element={<CategoryDetailPage />} />
          <Route path="/category/:categorySlug/:featureSlug" element={<FeatureDetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
