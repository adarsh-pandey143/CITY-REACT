import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css';

const NotFound = () => {
  return (
    <div className="page">
      <div className="page-content">
        <div className="container">
          <div className="content-section" style={{ textAlign: 'center', padding: '80px 40px' }}>
            <h1 style={{ fontSize: '120px', marginBottom: '20px', color: 'var(--accent-color)' }}>404</h1>
            <h2 style={{ marginBottom: '20px', color: 'var(--text-primary)' }}>Page Not Found</h2>
            <p style={{ marginBottom: '40px', color: 'var(--text-secondary)', fontSize: '18px' }}>
              The page you are looking for does not exist or has been moved.
            </p>
            <Link 
              to="/" 
              style={{
                display: 'inline-block',
                padding: '15px 40px',
                background: 'linear-gradient(135deg, var(--accent-color) 0%, var(--accent-dark) 100%)',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '30px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 4px 15px rgba(0, 128, 129, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(0, 128, 129, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(0, 128, 129, 0.3)';
              }}
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

