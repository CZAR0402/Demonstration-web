import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Users, CheckCircle2, PlayCircle, Layers, Search, Shield, 
  Briefcase, Landmark, Smartphone, Footprints, Banknote, Building2, ShieldAlert, 
  BarChart3, Receipt, Brain, ShieldCheck, Sparkles, MonitorPlay, Zap,
  ChevronDown, ChevronUp, Maximize2, Minimize2, Code, Terminal, Copy, Check, Lock, Globe, FileCode
} from 'lucide-react';
import { getCategoryBySlug, getFeaturesByCategorySlug } from '../data/productFeaturesData';
import Breadcrumbs from '../components/Breadcrumbs';
import VideoModal from '../components/VideoModal';

function CategoryDetailPage() {
  const { categorySlug } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Track expanded state for feature cards (in-place elaboration)
  const [expandedFeatureIds, setExpandedFeatureIds] = useState({});

  // Developer API Active Tab State ({ [featId]: 'curl' | 'request' | 'response' })
  const [apiTabState, setApiTabState] = useState({});
  const [copiedFeatId, setCopiedFeatId] = useState(null);

  // Video Modal State
  const [videoModalData, setVideoModalData] = useState({ isOpen: false, title: '', videoUrl: '' });

  // Scroll to top whenever category changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
  }, [categorySlug]);

  const category = getCategoryBySlug(categorySlug);
  const features = getFeaturesByCategorySlug(categorySlug);

  if (!category) {
    return (
      <div className="not-found-container" style={{ padding: '3rem', textAlign: 'center' }}>
        <h2>Category Not Found</h2>
        <p>The requested product category slug does not exist.</p>
        <Link to="/product-features" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Back to Product Features
        </Link>
      </div>
    );
  }

  // Filter features by query
  const filteredFeatures = features.filter(feat => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      feat.title.toLowerCase().includes(q) ||
      feat.shortDescription.toLowerCase().includes(q) ||
      feat.number.toLowerCase().includes(q) ||
      (feat.api && feat.api.endpoint.toLowerCase().includes(q)) ||
      feat.roles.some(r => r.toLowerCase().includes(q))
    );
  });

  const toggleExpand = (featId, e) => {
    if (e) e.stopPropagation();
    setExpandedFeatureIds(prev => ({
      ...prev,
      [featId]: !prev[featId]
    }));
  };

  const toggleExpandAll = () => {
    const allExpanded = filteredFeatures.every(f => expandedFeatureIds[f.id]);
    const newState = {};
    filteredFeatures.forEach(f => {
      newState[f.id] = !allExpanded;
    });
    setExpandedFeatureIds(newState);
  };

  const handleOpenVideo = (title, videoUrl, e) => {
    if (e) e.stopPropagation();
    setVideoModalData({ isOpen: true, title, videoUrl });
  };

  const handleCloseVideo = () => {
    setVideoModalData({ isOpen: false, title: '', videoUrl: '' });
  };

  const handleCopyApiCode = (featId, codeText, e) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(codeText);
    setCopiedFeatId(featId);
    setTimeout(() => setCopiedFeatId(null), 2000);
  };

  const getActiveApiCode = (feat) => {
    if (!feat.api) return '';
    const activeTab = apiTabState[feat.id] || 'curl';
    if (activeTab === 'curl') return feat.api.curl || '';
    if (activeTab === 'request') {
      return feat.api.requestPayload 
        ? JSON.stringify(feat.api.requestPayload, null, 2) 
        : '// No request body required (GET Request)';
    }
    if (activeTab === 'response') {
      return feat.api.responsePayload 
        ? JSON.stringify(feat.api.responsePayload, null, 2) 
        : '{}';
    }
    return '';
  };

  return (
    <div className="category-detail-page">
      {/* Top Breadcrumbs */}
      <Breadcrumbs items={[{ label: category.name }]} />

      {/* Hero Module Overview Header Card */}
      <div className="cat-hero-card-v2">
        <div className="cat-hero-v2-top">
          <div className="cat-v2-badges">
            <span className="cat-v2-group-pill">
              <Layers size={13} /> {category.group} Module
            </span>
            <span className="cat-v2-num-pill">
              Module {category.number}
            </span>
          </div>

          <div className="cat-v2-actions">
            {category.videoUrl && (
              <button 
                className="btn-v2-play-video"
                onClick={(e) => handleOpenVideo(category.name, category.videoUrl, e)}
              >
                <PlayCircle size={15} /> Watch Demo Video
              </button>
            )}
            <span className="cat-v2-count-pill">
              <Sparkles size={13} /> {features.length} Features
            </span>
          </div>
        </div>

        <h1 className="cat-v2-title">{category.name}</h1>
        <p className="cat-v2-subtitle">{category.shortDescription}</p>

        {/* 3-Column Structured Meta Cards */}
        <div className="cat-v2-meta-grid">
          <div className="cat-meta-card">
            <div className="meta-card-label">
              <Zap size={13} /> Module Purpose
            </div>
            <p className="meta-card-val">{category.purpose}</p>
          </div>

          <div className="cat-meta-card">
            <div className="meta-card-label">
              <Users size={13} /> Target Roles
            </div>
            <div className="meta-roles-wrap">
              {category.primaryUsers.map((user, idx) => (
                <span key={idx} className="meta-role-chip">
                  <Users size={11} /> {user}
                </span>
              ))}
            </div>
          </div>

          <div className="cat-meta-card highlight-card">
            <div className="meta-card-label">
              <Shield size={13} /> Business Impact
            </div>
            <p className="meta-card-val impact-text">{category.businessValue}</p>
          </div>
        </div>
      </div>

      {/* Embedded Device Video Player Frame */}
      {category.videoUrl && (
        <div className="cat-video-showcase-frame">
          <div className="mac-window-topbar">
            <div className="mac-window-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="mac-window-title">
              <MonitorPlay size={13} /> {category.name} — Video Recording (.mp4)
            </div>
            <span className="mac-window-badge">HD Recording</span>
          </div>

          <div className="mac-video-body">
            <video 
              src={category.videoUrl} 
              controls 
              className="mac-video-player"
              poster="/fivopay-logo.png"
            />
          </div>
        </div>
      )}

      {/* Feature Search & Section Header */}
      <div className="cat-features-header-row">
        <div className="cat-features-title-box">
          <h2>Module Features & Detailed Capabilities</h2>
          <span className="cat-results-counter">
            Showing {filteredFeatures.length} of {features.length} Features (Click any card to expand full details & REST API specs)
          </span>
        </div>

        <div className="cat-actions-right">
          <button className="btn-expand-all-toggle" onClick={toggleExpandAll}>
            {filteredFeatures.every(f => expandedFeatureIds[f.id]) ? (
              <> <Minimize2 size={14} /> Collapse All </>
            ) : (
              <> <Maximize2 size={14} /> Expand All Details </>
            )}
          </button>

          <div className="cat-features-search-bar">
            <Search size={16} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search features by name, API endpoint, role, or ID..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Feature Cards Grid with In-Place Full Elaboration & REST API Reference */}
      <div className="cat-features-grid-v2">
        {filteredFeatures.map(feat => {
          const isExpanded = expandedFeatureIds[feat.id];

          return (
            <div 
              key={feat.id} 
              className={`feature-card-v2 ${isExpanded ? 'is-expanded' : ''}`}
              onClick={(e) => toggleExpand(feat.id, e)}
            >
              {/* Card Top Row */}
              <div className="feat-v2-header">
                <div className="feat-v2-badge-group">
                  <span className="feat-v2-num">Feature {feat.number}</span>
                  {feat.api && (
                    <div className="feat-header-api-badge">
                      <span className={`feat-api-badge ${feat.api.method.toLowerCase()}`}>
                        {feat.api.method}
                      </span>
                      <code className="feat-api-endpoint">{feat.api.endpoint}</code>
                    </div>
                  )}
                </div>

                <button 
                  className="feat-v2-expand-btn"
                  onClick={(e) => toggleExpand(feat.id, e)}
                  title={isExpanded ? "Collapse feature details" : "Expand full feature details & REST API reference"}
                >
                  {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
              </div>

              {/* Title & Short Description */}
              <h3 className="feat-v2-title">{feat.title}</h3>
              <p className="feat-v2-desc">{feat.shortDescription}</p>

              {/* Collapsed Footer preview */}
              {!isExpanded && (
                <div className="feat-v2-footer">
                  <div className="feat-v2-roles">
                    {feat.roles.map((role, idx) => (
                      <span key={idx} className="feat-v2-role-tag">{role}</span>
                    ))}
                  </div>

                  <span className="feat-v2-click-hint">
                    Expand Details & API <ChevronDown size={14} />
                  </span>
                </div>
              )}

              {/* In-Place Full Feature Elaboration Panel */}
              {isExpanded && (
                <div className="feat-v2-expanded-panel" onClick={(e) => e.stopPropagation()}>
                  {/* Detailed Description */}
                  <div className="exp-section">
                    <h4 className="exp-heading">Full Feature Overview</h4>
                    <p className="exp-text">{feat.description || feat.shortDescription}</p>
                  </div>

                  {/* Key Capabilities */}
                  {feat.capabilities && feat.capabilities.length > 0 && (
                    <div className="exp-section">
                      <h4 className="exp-heading">Key Capabilities</h4>
                      <ul className="exp-cap-list">
                        {feat.capabilities.map((cap, idx) => (
                          <li key={idx} className="exp-cap-item">
                            <CheckCircle2 size={15} className="cap-check-icon" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Operational Workflow Steps */}
                  {feat.workflow && feat.workflow.length > 0 && (
                    <div className="exp-section">
                      <h4 className="exp-heading">Step-by-Step Workflow</h4>
                      <div className="exp-workflow-steps">
                        {feat.workflow.map((wf, idx) => (
                          <div key={idx} className="wf-step-chip">
                            <span className="wf-step-num">{wf.step || idx + 1}</span>
                            <div className="wf-step-info">
                              <strong className="wf-step-title">{wf.title}</strong>
                              <span className="wf-step-desc">{wf.description}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Business Impact Values */}
                  {feat.businessValue && feat.businessValue.length > 0 && (
                    <div className="exp-section">
                      <h4 className="exp-heading">Business Value & Impact</h4>
                      <div className="exp-bv-grid">
                        {feat.businessValue.map((bv, idx) => (
                          <div key={idx} className="exp-bv-card">
                            <span className="bv-tag">{bv.title}</span>
                            <p className="bv-desc">{bv.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Razorpay / Stripe Developer REST API Reference Box */}
                  {feat.api && (
                    <div className="exp-api-section">
                      <div className="exp-api-header-bar">
                        <div className="api-endpoint-group">
                          <Code size={16} style={{ color: '#818cf8' }} />
                          <span className="api-ref-title">
                            Developer REST API Reference
                          </span>
                          <span className={`feat-api-badge ${feat.api.method.toLowerCase()}`}>
                            {feat.api.method}
                          </span>
                          <code className="feat-api-endpoint">{feat.api.endpoint}</code>
                        </div>

                        <div className="api-auth-tag">
                          {feat.api.authRequired ? (
                            <><Lock size={12} style={{ color: '#f59e0b' }} /> Bearer JWT Required</>
                          ) : (
                            <><Globe size={12} style={{ color: '#10b981' }} /> Public Endpoint</>
                          )}
                        </div>
                      </div>

                      {/* Associated Sub-Endpoints if present */}
                      {feat.api.relatedEndpoints && feat.api.relatedEndpoints.length > 0 && (
                        <div className="api-related-endpoints-wrapper" style={{ padding: '0.6rem 1rem', background: 'rgba(15, 23, 42, 0.4)', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                          <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted, #94a3b8)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                            Associated Flow Endpoints ({feat.api.relatedEndpoints.length})
                          </span>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                            {feat.api.relatedEndpoints.map((ep, idx) => (
                              <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', padding: '0.2rem 0.55rem', borderRadius: '5px', fontSize: '0.75rem' }}>
                                <span className={`feat-api-badge ${ep.method.toLowerCase()}`} style={{ fontSize: '0.65rem', padding: '0.1rem 0.35rem', fontWeight: 700 }}>
                                  {ep.method}
                                </span>
                                <code style={{ color: '#c7d2fe', fontSize: '0.75rem', fontFamily: 'monospace' }}>{ep.endpoint}</code>
                                {ep.description && (
                                  <span style={{ color: '#94a3b8', fontSize: '0.7rem' }}>— {ep.description}</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Code Sub-Tabs & Copy Action */}
                      <div className="api-code-tabs-bar">
                        <div className="api-tab-group">
                          <button 
                            className={`api-tab-btn ${(apiTabState[feat.id] || 'curl') === 'curl' ? 'active' : ''}`}
                            onClick={() => setApiTabState(prev => ({ ...prev, [feat.id]: 'curl' }))}
                          >
                            <Terminal size={13} /> cURL Command
                          </button>
                          <button 
                            className={`api-tab-btn ${apiTabState[feat.id] === 'request' ? 'active' : ''}`}
                            onClick={() => setApiTabState(prev => ({ ...prev, [feat.id]: 'request' }))}
                          >
                            <FileCode size={13} /> Request Body (JSON)
                          </button>
                          <button 
                            className={`api-tab-btn ${apiTabState[feat.id] === 'response' ? 'active' : ''}`}
                            onClick={() => setApiTabState(prev => ({ ...prev, [feat.id]: 'response' }))}
                          >
                            <Code size={13} /> Response (200 OK)
                          </button>
                        </div>

                        <button 
                          className="api-copy-btn"
                          onClick={(e) => handleCopyApiCode(feat.id, getActiveApiCode(feat), e)}
                          title="Copy Code Snippet"
                        >
                          {copiedFeatId === feat.id ? (
                            <><Check size={13} style={{ color: '#10b981' }} /> Copied!</>
                          ) : (
                            <><Copy size={13} /> Copy Code</>
                          )}
                        </button>
                      </div>

                      <pre className="api-code-box">
                        <code>{getActiveApiCode(feat)}</code>
                      </pre>
                    </div>
                  )}

                  {/* Metadata Row: Roles & Platforms */}
                  <div className="exp-meta-row">
                    <div className="exp-meta-group">
                      <span className="exp-meta-label">Primary Roles:</span>
                      {feat.roles.map((role, idx) => (
                        <span key={idx} className="meta-role-pill">{role}</span>
                      ))}
                    </div>

                    <div className="exp-meta-group">
                      <span className="exp-meta-label">Platforms:</span>
                      {feat.platforms.map((plat, idx) => (
                        <span key={idx} className="meta-plat-pill">{plat}</span>
                      ))}
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="exp-action-footer">
                    <button 
                      className="btn-exp-close"
                      onClick={(e) => toggleExpand(feat.id, e)}
                    >
                      Collapse Details <ChevronUp size={14} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Feature Video Player Modal */}
      <VideoModal 
        isOpen={videoModalData.isOpen}
        onClose={handleCloseVideo}
        title={videoModalData.title}
        videoUrl={videoModalData.videoUrl}
      />
    </div>
  );
}

export default CategoryDetailPage;
