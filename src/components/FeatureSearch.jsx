import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ChevronRight, Layers, User, Smartphone } from 'lucide-react';
import { productFeatures } from '../data/productFeaturesData';

function FeatureSearch({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const searchResults = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];

    return productFeatures.filter(feat => {
      const matchTitle = feat.title.toLowerCase().includes(q);
      const matchDesc = feat.shortDescription.toLowerCase().includes(q) || feat.description.toLowerCase().includes(q);
      const matchCat = feat.categoryName.toLowerCase().includes(q);
      const matchRoles = feat.roles.some(r => r.toLowerCase().includes(q));
      const matchPlatforms = feat.platforms.some(p => p.toLowerCase().includes(q));
      const matchCaps = feat.capabilities.some(c => c.toLowerCase().includes(q));

      return matchTitle || matchDesc || matchCat || matchRoles || matchPlatforms || matchCaps;
    }).slice(0, 10);
  }, [query]);

  const handleSelectFeature = (feat) => {
    navigate(`/product-features/${feat.categorySlug}/${feat.slug}`);
    if (onClose) onClose();
    setQuery('');
  };

  if (!isOpen) return null;

  return (
    <div className="search-modal-overlay" onClick={onClose}>
      <div className="search-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="search-modal-header">
          <Search size={20} style={{ color: 'var(--accent)' }} />
          <input 
            type="text" 
            className="search-modal-input" 
            placeholder="Search feature, category, role (e.g. loan, OTP, agent, UPI)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          {query && (
            <button className="clear-query-btn" onClick={() => setQuery('')}>
              <X size={16} />
            </button>
          )}
          <button className="close-search-modal-btn" onClick={onClose}>
            Esc
          </button>
        </div>

        <div className="search-modal-body">
          {!query && (
            <div className="search-empty-prompt">
              <p>Type keywords to search across 160+ operating features, roles, and platforms.</p>
              <div className="search-tags-suggestion">
                <span>Try searching:</span>
                <button onClick={() => setQuery('loan')}>Loan</button>
                <button onClick={() => setQuery('otp')}>OTP</button>
                <button onClick={() => setQuery('gullak')}>Gullak</button>
                <button onClick={() => setQuery('agent')}>Agent</button>
                <button onClick={() => setQuery('upi')}>UPI</button>
                <button onClick={() => setQuery('vault')}>Vault</button>
              </div>
            </div>
          )}

          {query && searchResults.length === 0 && (
            <div className="search-no-results">
              <Search size={32} style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }} />
              <h4>No matching features found</h4>
              <p>Try searching for broader keywords like "deposit", "kyc", or "manager".</p>
            </div>
          )}

          {query && searchResults.length > 0 && (
            <div className="search-results-list">
              <div className="results-count-label">
                Found {searchResults.length} matching feature{searchResults.length === 1 ? '' : 's'}
              </div>
              {searchResults.map(feat => (
                <div 
                  key={`${feat.categorySlug}-${feat.slug}`} 
                  className="search-result-item"
                  onClick={() => handleSelectFeature(feat)}
                >
                  <div className="result-main">
                    <div className="result-category">{feat.categoryName}</div>
                    <div className="result-title">
                      <span className="feat-num">{feat.number}</span> {feat.title}
                    </div>
                    <div className="result-desc">{feat.shortDescription}</div>
                  </div>
                  <div className="result-arrow">
                    <ChevronRight size={18} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeatureSearch;
