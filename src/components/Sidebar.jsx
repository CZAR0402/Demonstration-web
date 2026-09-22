import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { 
  Users, BarChart3, Mail, LogOut, Sun, Moon, Shield, Settings, MonitorPlay, 
  ChevronDown, ChevronRight, UserCheck, Smartphone, ArrowLeftRight, Landmark, 
  PiggyBank, Zap, Lock, PieChart, Briefcase, Footprints, Banknote, Building2, 
  ShieldAlert, Receipt, Brain, ShieldCheck, Layers, Calculator, History, Send
} from 'lucide-react';
import { productCategories, moduleGroups } from '../data/productFeaturesData';

function Sidebar({ activeTab, setActiveTab, onLogout, theme, setTheme, currentUser }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isFeaturesExpanded, setIsFeaturesExpanded] = useState(true);
  const [expandedGroups, setExpandedGroups] = useState({
    Customer: true,
    Lending: true,
    Operations: true,
    Governance: true,
    Intelligence: true
  });

  const isAdmin = currentUser?.role === 'ADMIN';

  const toggleGroup = (groupName, e) => {
    e.stopPropagation();
    setExpandedGroups(prev => ({ ...prev, [groupName]: !prev[groupName] }));
  };

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck size={14} />;
      case 'Smartphone': return <Smartphone size={14} />;
      case 'ArrowLeftRight': return <ArrowLeftRight size={14} />;
      case 'Landmark': return <Landmark size={14} />;
      case 'PiggyBank': return <PiggyBank size={14} />;
      case 'Zap': return <Zap size={14} />;
      case 'Lock': return <Lock size={14} />;
      case 'PieChart': return <PieChart size={14} />;
      case 'Briefcase': return <Briefcase size={14} />;
      case 'Calculator': return <Calculator size={14} />;
      case 'Footprints': return <Footprints size={14} />;
      case 'Banknote': return <Banknote size={14} />;
      case 'Building2': return <Building2 size={14} />;
      case 'ShieldAlert': return <ShieldAlert size={14} />;
      case 'BarChart3': return <BarChart3 size={14} />;
      case 'Receipt': return <Receipt size={14} />;
      case 'Brain': return <Brain size={14} />;
      case 'ShieldCheck': return <ShieldCheck size={14} />;
      default: return <Layers size={14} />;
    }
  };

  const isProductFeaturesActive = location.pathname.startsWith('/product-features');
  const userInitials = currentUser?.name ? currentUser.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'US';

  return (
    <aside className="sidebar">
      {/* Brand / Logo Section */}
      <div 
        className="logo-container" 
        style={{ marginBottom: '1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
        onClick={() => {
          setActiveTab('leads');
          navigate('/');
        }}
        title="Fivopay - Making Banking Easier"
      >
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '11px',
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(79, 70, 229, 0.25))',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-sm)',
          flexShrink: 0
        }}>
          <img 
            src="/fivopay-icon.png" 
            alt="Fivopay Logo" 
            style={{ 
              width: '30px', 
              height: '30px', 
              objectFit: 'contain'
            }} 
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span className="logo-text" style={{ fontSize: '1.2rem', fontWeight: '800', letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>Fivopay</span>
            <span style={{ fontSize: '0.6rem', fontWeight: '800', letterSpacing: '0.06em', background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid rgba(99, 102, 241, 0.3)', padding: '0.1rem 0.35rem', borderRadius: '4px' }}>CRM</span>
          </div>
          <span style={{ fontSize: '0.675rem', color: 'var(--text-muted)', fontWeight: '600', letterSpacing: '0.02em', marginTop: '1px' }}>Making Banking Easier</span>
        </div>
      </div>

      {/* Navigation section */}
      <div className="sidebar-nav-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', flexGrow: 1, overflowY: 'auto' }}>
        {/* Workspace Section */}
        <div>
          <div className="sidebar-section-title">Workspace</div>
          
          <ul className="nav-links" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li>
              <button 
                className={`nav-item ${activeTab === 'leads' && !isProductFeaturesActive ? 'active' : ''}`} 
                style={{ background: 'none', border: 'none', width: '100%', font: 'inherit', textAlign: 'left' }}
                onClick={() => {
                  setActiveTab('leads');
                  navigate('/');
                }}
              >
                <Users size={16} /> Leads Database
              </button>
            </li>
            {isAdmin && (
              <>
                <li>
                  <button 
                    className={`nav-item ${activeTab === 'team' && !isProductFeaturesActive ? 'active' : ''}`} 
                    style={{ background: 'none', border: 'none', width: '100%', font: 'inherit', textAlign: 'left' }}
                    onClick={() => {
                      setActiveTab('team');
                      navigate('/');
                    }}
                  >
                    <Shield size={16} style={{ color: 'var(--accent)' }} /> Team & Sales BDEs
                  </button>
                </li>
                <li>
                  <button 
                    className={`nav-item ${activeTab === 'all-campaigns' && !isProductFeaturesActive ? 'active' : ''}`} 
                    style={{ background: 'none', border: 'none', width: '100%', font: 'inherit', textAlign: 'left' }}
                    onClick={() => {
                      setActiveTab('all-campaigns');
                      navigate('/');
                    }}
                  >
                    <Send size={16} style={{ color: '#ec4899' }} /> All Email Campaigns
                  </button>
                </li>
              </>
            )}
            {!isAdmin && (
              <>
                <li>
                  <button 
                    className={`nav-item ${activeTab === 'pipeline' && !isProductFeaturesActive ? 'active' : ''}`} 
                    style={{ background: 'none', border: 'none', width: '100%', font: 'inherit', textAlign: 'left' }}
                    onClick={() => {
                      setActiveTab('pipeline');
                      navigate('/');
                    }}
                  >
                    <BarChart3 size={16} /> CRM Pipeline
                  </button>
                </li>
                <li>
                  <button 
                    className={`nav-item ${activeTab === 'campaigns' && !isProductFeaturesActive ? 'active' : ''}`} 
                    style={{ background: 'none', border: 'none', width: '100%', font: 'inherit', textAlign: 'left' }}
                    onClick={() => {
                      setActiveTab('campaigns');
                      navigate('/');
                    }}
                  >
                    <Mail size={16} /> AWS SES Campaigns
                  </button>
                </li>
                <li>
                  <button 
                    className={`nav-item ${activeTab === 'past-campaigns' && !isProductFeaturesActive ? 'active' : ''}`} 
                    style={{ background: 'none', border: 'none', width: '100%', font: 'inherit', textAlign: 'left' }}
                    onClick={() => {
                      setActiveTab('past-campaigns');
                      navigate('/');
                    }}
                  >
                    <History size={16} /> Past Campaigns
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Documentation Section */}
        <div>
          <div className="sidebar-section-title">Documentation</div>
          
          <div className="product-features-sidebar-group">
            {/* Main Product Features Button */}
            <button 
              className={`nav-item pf-main-nav ${isProductFeaturesActive ? 'active' : ''}`}
              style={{ background: 'none', border: 'none', width: '100%', font: 'inherit', textAlign: 'left' }}
              onClick={() => {
                setActiveTab('apis');
                setIsFeaturesExpanded(!isFeaturesExpanded);
                if (!isProductFeaturesActive) {
                  navigate('/product-features');
                }
              }}
            >
              <MonitorPlay size={16} />
              <span style={{ flexGrow: 1, textAlign: 'left' }}>Product Features</span>
              {isFeaturesExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </button>

            {/* Nested Sub-Categories Tree */}
            {isFeaturesExpanded && (
              <div className="pf-tree-container">
                {/* All Modules Link */}
                <NavLink 
                  to="/product-features" 
                  end
                  className={({ isActive }) => `pf-tree-item all-item ${isActive ? 'active' : ''}`}
                >
                  <Layers size={13} />
                  <span>All Modules ({productCategories.length})</span>
                </NavLink>

                {/* Grouped Operating Modules */}
                {Object.keys(moduleGroups).map(groupName => {
                  const groupCategories = productCategories.filter(cat => cat.group === groupName);
                  if (groupCategories.length === 0) return null;
                  const isGroupExpanded = expandedGroups[groupName];

                  return (
                    <div key={groupName} className="pf-group-wrapper">
                      <div 
                        className="pf-group-header" 
                        onClick={(e) => toggleGroup(groupName, e)}
                      >
                        <span className="pf-group-name">{groupName}</span>
                        <span className="pf-group-arrow">
                          {isGroupExpanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                        </span>
                      </div>

                      {isGroupExpanded && (
                        <div className="pf-group-children">
                          {groupCategories.map(cat => (
                            <NavLink 
                              key={cat.id} 
                              to={`/product-features/${cat.slug}`}
                              className={({ isActive }) => `pf-tree-item sub-item ${isActive ? 'active' : ''}`}
                            >
                              <span className="pf-icon">{getCategoryIcon(cat.icon)}</span>
                              <span className="pf-label">{cat.name}</span>
                              <span className="pf-badge">{cat.featureCount}</span>
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar Footer / User Profile & Controls */}
      <div className="sidebar-footer">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.45rem 0.65rem',
          borderRadius: '8px',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid var(--border)',
          marginBottom: '0.75rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.725rem', color: 'var(--text-secondary)' }}>
            <span className="pulsing-beacon-dot"></span>
            <span style={{ fontWeight: '600' }}>API Connected</span>
          </div>

          <button 
            className="theme-toggle-btn" 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              padding: '0.2rem 0.5rem',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.7rem',
              fontWeight: '600'
            }}
          >
            {theme === 'light' ? <Moon size={12} /> : <Sun size={12} />}
            <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
          </button>
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          padding: '0.65rem 0.75rem',
          borderRadius: '12px',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', overflow: 'hidden' }}>
            <div style={{ 
              width: '32px', 
              height: '32px', 
              borderRadius: '50%', 
              background: isAdmin ? 'linear-gradient(135deg, #6366f1, #4f46e5)' : 'linear-gradient(135deg, #10b981, #059669)', 
              color: '#ffffff',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontWeight: '700',
              fontSize: '0.75rem',
              flexShrink: 0,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
            }}>
              {userInitials}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-primary)', lineHeight: '1.2', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {currentUser?.name || 'User Session'}
              </span>
              <span style={{ fontSize: '0.65rem', color: isAdmin ? 'var(--accent)' : '#10b981', fontWeight: '700', letterSpacing: '0.02em', marginTop: '1px' }}>
                {isAdmin ? 'HEAD OF GOVERNANCE' : 'FIELD SALES BDE'}
              </span>
            </div>
          </div>
          <button 
            onClick={onLogout} 
            title="Log out" 
            style={{ 
              background: 'rgba(239, 68, 68, 0.08)', 
              border: '1px solid rgba(239, 68, 68, 0.2)', 
              color: 'var(--danger)', 
              cursor: 'pointer',
              padding: '0.35rem',
              borderRadius: '7px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.15s ease',
              flexShrink: 0,
              marginLeft: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--danger)';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.08)';
              e.currentTarget.style.color = 'var(--danger)';
            }}
          >
            <LogOut size={14} />
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
