import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  PlayCircle, CheckCircle2, ArrowLeft, ArrowRight, ShieldCheck, 
  Users, Smartphone, Monitor, Server, Layers, HelpCircle, ExternalLink 
} from 'lucide-react';
import { 
  getCategoryBySlug, 
  getFeatureBySlugs, 
  getFeaturesByCategorySlug 
} from '../data/productFeaturesData';
import Breadcrumbs from '../components/Breadcrumbs';
import WorkflowTimeline from '../components/WorkflowTimeline';
import VideoPlayer from '../components/VideoPlayer';
import VideoModal from '../components/VideoModal';

function FeatureDetailPage() {
  const { categorySlug, featureSlug } = useParams();
  const navigate = useNavigate();

  // Video Modal state
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const category = getCategoryBySlug(categorySlug);
  const feature = getFeatureBySlugs(categorySlug, featureSlug);
  const categoryFeatures = getFeaturesByCategorySlug(categorySlug);

  // Scroll to top when changing features
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
  }, [categorySlug, featureSlug]);

  if (!category || !feature) {
    return (
      <div className="not-found-container" style={{ padding: '3rem', textAlign: 'center' }}>
        <h2>Feature Not Found</h2>
        <p>The requested feature page could not be located.</p>
        <Link to="/product-features" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Back to Product Features
        </Link>
      </div>
    );
  }

  // Calculate Previous and Next Feature in current category
  const currentIndex = categoryFeatures.findIndex(f => f.slug === feature.slug);
  const prevFeature = currentIndex > 0 ? categoryFeatures[currentIndex - 1] : null;
  const nextFeature = currentIndex < categoryFeatures.length - 1 ? categoryFeatures[currentIndex + 1] : null;

  // Calculate Related Features (other features in same category or group)
  const relatedFeatures = categoryFeatures
    .filter(f => f.slug !== feature.slug)
    .slice(0, 4);

  return (
    <div className="feature-detail-page">
      {/* 1. Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: category.name, url: `/product-features/${category.slug}` },
          { label: feature.title }
        ]} 
      />

      {/* 2. Hero Section */}
      <div className="feature-hero-card">
        <div className="hero-top-row">
          <div className="hero-category-badge">
            <span className="cat-group-pill">{category.name.toUpperCase()}</span>
            <span className="feat-num-pill">Feature {feature.number}</span>
          </div>

          <div className="status-badge-pill">
            <ShieldCheck size={14} style={{ color: 'var(--success)' }} />
            <span>Production Ready</span>
          </div>
        </div>

        <h1 className="feature-hero-title">{feature.title}</h1>
        <p className="feature-hero-subtitle">{feature.shortDescription}</p>

        {/* Roles & Platforms Badges */}
        <div className="hero-tags-bar">
          <div className="tag-group">
            <span className="tag-group-label">Primary Roles:</span>
            {feature.roles.map((role, idx) => (
              <span key={idx} className="role-tag-pill">
                <Users size={12} /> {role}
              </span>
            ))}
          </div>

          <div className="tag-group">
            <span className="tag-group-label">Platforms:</span>
            {feature.platforms.map((plat, idx) => (
              <span key={idx} className="platform-tag-pill">
                <Smartphone size={12} /> {plat}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button: Watch Feature Video */}
        <div className="hero-actions-row">
          {feature.videoUrl ? (
            <button 
              className="watch-video-btn-hero"
              onClick={() => setIsVideoModalOpen(true)}
            >
              <PlayCircle size={18} /> Watch Feature Video
            </button>
          ) : (
            <div className="video-coming-soon-pill">
              <PlayCircle size={16} /> Feature walkthrough video coming soon
            </div>
          )}
        </div>
      </div>

      {/* 3. Feature Overview (2-Column: What it does & Key capabilities) */}
      <div className="feature-overview-grid">
        {/* Left Column: What It Does */}
        <div className="overview-left-card">
          <div className="section-title-box">
            <h3>What It Does</h3>
            <div className="title-accent-line"></div>
          </div>
          <p className="overview-full-desc">{feature.description}</p>
        </div>

        {/* Right Column: Key Capabilities */}
        <div className="overview-right-card">
          <div className="section-title-box">
            <h3>Key Capabilities</h3>
            <div className="title-accent-line"></div>
          </div>
          <ul className="capabilities-list">
            {feature.capabilities.map((cap, idx) => (
              <li key={idx} className="capability-item">
                <CheckCircle2 size={16} className="cap-icon" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 4. How It Works (Visual Workflow Timeline) */}
      <div className="feature-section-block">
        <WorkflowTimeline workflow={feature.workflow} />
      </div>

      {/* 5. Business Value */}
      <div className="feature-section-block">
        <div className="section-header-text">
          <h3>Business Value & Impact</h3>
          <p>Key financial, operational, and compliance advantages delivered by this feature.</p>
        </div>

        <div className="business-value-grid">
          {feature.businessValue.map((bv, idx) => (
            <div key={idx} className="bv-card">
              <div className="bv-icon-box">
                <ShieldCheck size={20} />
              </div>
              <h4>{bv.title}</h4>
              <p>{bv.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Roles & Platforms Matrix */}
      <div className="feature-section-block">
        <div className="section-header-text">
          <h3>User Roles & Operating Platforms</h3>
          <p>Architectural execution layers and user persona mapping for this feature.</p>
        </div>

        <div className="matrix-grid">
          <div className="matrix-column">
            <h4><Users size={16} /> Operating User Roles</h4>
            <div className="matrix-pills-container">
              {feature.roles.map((r, idx) => (
                <div key={idx} className="matrix-item-card">
                  <span className="matrix-item-name">{r}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="matrix-column">
            <h4><Monitor size={16} /> Enabled Platforms</h4>
            <div className="matrix-pills-container">
              {feature.platforms.map((p, idx) => (
                <div key={idx} className="matrix-item-card platform-card">
                  <span className="matrix-item-name">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 7. Video Walkthrough Player Section */}
      <div className="feature-section-block">
        <VideoPlayer 
          videoUrl={feature.videoUrl} 
          title={feature.title} 
          onOpenModal={() => setIsVideoModalOpen(true)} 
        />
      </div>

      {/* 8. Related Features */}
      {relatedFeatures.length > 0 && (
        <div className="feature-section-block">
          <div className="section-header-text">
            <h3>Related Features</h3>
            <p>Explore complementary features within the {category.name} suite.</p>
          </div>

          <div className="related-features-grid">
            {relatedFeatures.map(rf => (
              <div 
                key={rf.slug} 
                className="related-feature-card"
                onClick={() => navigate(`/product-features/${category.slug}/${rf.slug}`)}
              >
                <span className="rf-num">{rf.number}</span>
                <h4 className="rf-title">{rf.title}</h4>
                <p className="rf-desc">{rf.shortDescription}</p>
                <div className="rf-link">View Feature →</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 9. Previous / Next Feature Navigation */}
      <div className="prev-next-nav-bar">
        {prevFeature ? (
          <button 
            className="pn-btn prev-btn"
            onClick={() => navigate(`/product-features/${category.slug}/${prevFeature.slug}`)}
          >
            <ArrowLeft size={16} />
            <div className="pn-text">
              <span className="pn-label">Previous Feature</span>
              <span className="pn-title">{prevFeature.number} {prevFeature.title}</span>
            </div>
          </button>
        ) : <div />}

        {nextFeature ? (
          <button 
            className="pn-btn next-btn"
            onClick={() => navigate(`/product-features/${category.slug}/${nextFeature.slug}`)}
          >
            <div className="pn-text align-right">
              <span className="pn-label">Next Feature</span>
              <span className="pn-title">{nextFeature.number} {nextFeature.title}</span>
            </div>
            <ArrowRight size={16} />
          </button>
        ) : <div />}
      </div>

      {/* Video Player Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title={feature.title}
        videoUrl={feature.videoUrl}
      />
    </div>
  );
}

export default FeatureDetailPage;
