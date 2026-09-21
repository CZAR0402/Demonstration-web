import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs-container" aria-label="Breadcrumb">
      <ol className="breadcrumbs-list">
        <li className="breadcrumb-item">
          <Link to="/product-features" className="breadcrumb-link home-link">
            <Home size={14} />
            <span>Product Features</span>
          </Link>
        </li>
        
        {items && items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <li className="breadcrumb-separator">
                <ChevronRight size={14} />
              </li>
              <li className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
                {isLast || !item.url ? (
                  <span className="breadcrumb-current">{item.label}</span>
                ) : (
                  <Link to={item.url} className="breadcrumb-link">
                    {item.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
