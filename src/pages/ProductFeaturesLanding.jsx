import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, Layers, ArrowRight, UserCheck, Smartphone, ArrowLeftRight, Landmark, 
  PiggyBank, Zap, Lock, PieChart, Briefcase, Footprints, Banknote, Building2, 
  ShieldAlert, BarChart3, Receipt, Brain, ShieldCheck, PlayCircle, Users, Calculator
} from 'lucide-react';
import { productCategories, moduleGroups } from '../data/productFeaturesData';
import FeatureSearch from '../components/FeatureSearch';
import VideoModal from '../components/VideoModal';

function ProductFeaturesLanding() {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeFilterGroup, setActiveFilterGroup] = useState('All');

  // Video Modal State
  const [videoModalData, setVideoModalData] = useState({ isOpen: false, title: '', videoUrl: '' });

  // Dynamic icon helper
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck size={22} />;
      case 'Smartphone': return <Smartphone size={22} />;
      case 'ArrowLeftRight': return <ArrowLeftRight size={22} />;
      case 'Landmark': return <Landmark size={22} />;
      case 'PiggyBank': return <PiggyBank size={22} />;
      case 'Zap': return <Zap size={22} />;
      case 'Lock': return <Lock size={22} />;
      case 'PieChart': return <PieChart size={22} />;
      case 'Briefcase': return <Briefcase size={22} />;
      case 'Calculator': return <Calculator size={22} />;
      case 'Footprints': return <Footprints size={22} />;
      case 'Banknote': return <Banknote size={22} />;
      case 'Building2': return <Building2 size={22} />;
      case 'ShieldAlert': return <ShieldAlert size={22} />;
      case 'BarChart3': return <BarChart3 size={22} />;
      case 'Receipt': return <Receipt size={22} />;
      case 'Brain': return <Brain size={22} />;
      case 'ShieldCheck': return <ShieldCheck size={22} />;
      default: return <Layers size={22} />;
    }
  };

  const filteredCategories = productCategories.filter(cat => {
    if (activeFilterGroup === 'All') return true;
    return cat.group === activeFilterGroup;
  });

  const handleOpenVideo = (title, videoUrl, e) => {
    if (e) e.stopPropagation();
    setVideoModalData({ isOpen: true, title, videoUrl });
  };

  return (
    <div className="product-features-landing">
      {/* Hero Header Section */}
      <div className="pf-hero-banner">
        <div className="pf-hero-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
            <img 
              src="/fivopay-logo.png" 
              alt="Fivopay" 
              style={{ 
                width: '36px', 
                height: '36px', 
                borderRadius: '8px', 
                objectFit: 'contain', 
                backgroundColor: '#ffffff', 
                padding: '2px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)' 
              }} 
            />
            <div className="pf-hero-badge" style={{ margin: 0 }}>
              <Layers size={16} /> ENTERPRISE PRODUCT SHOWCASE
            </div>
          </div>
          <h1>Fivopay Core Banking & Product Features</h1>
          <p>
            Explore the complete Fivopay digital banking ecosystem, from customer onboarding and payments to lending, field operations, governance, accounting and AI-powered automation — directly aligned with official presentation modules and video demonstrations.
          </p>

          {/* Quick Search Trigger */}
          <div className="pf-hero-search-box" onClick={() => setIsSearchOpen(true)}>
            <Search size={18} style={{ color: 'var(--text-muted)' }} />
            <span>Search 160+ features, categories, roles, or platforms...</span>
            <kbd className="search-shortcut-kbd">⌘K</kbd>
          </div>
        </div>
      </div>

      {/* High-Level Statistics Row */}
      <div className="pf-stats-grid">
        <div className="stat-card">
          <div className="stat-value">{productCategories.length}</div>
          <div className="stat-label">Core Master Modules</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">160+</div>
          <div className="stat-label">Operating Features</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">4+</div>
          <div className="stat-label">Role-Based Platforms</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">1</div>
          <div className="stat-label">Connected Financial Ecosystem</div>
        </div>
      </div>

      {/* Category Group Filter Bar */}
      <div className="category-filter-bar">
        <span className="filter-label">Filter Group:</span>
        <div className="filter-buttons-group">
          {['All', 'Customer', 'Lending', 'Operations', 'Governance', 'Intelligence'].map(group => (
            <button
              key={group}
              className={`filter-tab-btn ${activeFilterGroup === group ? 'active' : ''}`}
              onClick={() => setActiveFilterGroup(group)}
            >
              {group}
            </button>
          ))}
        </div>
      </div>

      {/* Categories Grid (17 Modules) */}
      <div className="categories-cards-grid">
        {filteredCategories.map((cat) => (
          <div 
            key={cat.id} 
            className="cat-showcase-card"
            onClick={() => navigate(`/product-features/${cat.slug}`)}
          >
            <div className="cat-card-header">
              <div className="cat-icon-box">
                {getCategoryIcon(cat.icon)}
              </div>
              <span className="cat-group-tag">{cat.group}</span>
            </div>

            <h3 className="cat-card-title">{cat.name}</h3>
            <p className="cat-card-desc">{cat.shortDescription}</p>

            <div className="cat-card-footer">
              <div className="cat-meta-tags">
                <span className="feat-count-pill">{cat.featureCount} Features</span>
                {cat.videoUrl && (
                  <button 
                    className="cat-video-pill-btn"
                    onClick={(e) => handleOpenVideo(cat.name, cat.videoUrl, e)}
                    title="Watch Video Recording"
                  >
                    <PlayCircle size={13} /> Video
                  </button>
                )}
              </div>
              
              <button 
                className="explore-cat-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/product-features/${cat.slug}`);
                }}
              >
                Explore Features <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Feature Search Modal */}
      <FeatureSearch 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

      {/* Video Modal */}
      <VideoModal 
        isOpen={videoModalData.isOpen}
        onClose={() => setVideoModalData({ isOpen: false, title: '', videoUrl: '' })}
        title={videoModalData.title}
        videoUrl={videoModalData.videoUrl}
      />
    </div>
  );
}

export default ProductFeaturesLanding;
