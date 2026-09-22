import React, { useState } from 'react';
import { ShieldCheck, Mail, Lock, UserCheck, Shield } from 'lucide-react';
import { api } from '../services/api';

function LoginScreen({ onLoginSuccess }) {
  const [email, setEmail] = useState('bde@fivopay.com');
  const [password, setPassword] = useState('bde@123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (loginEmail, loginPassword) => {
    setLoading(true);
    setError('');

    const cleanEmail = (loginEmail || '').trim().toLowerCase();
    const cleanPassword = (loginPassword || '').trim();

    try {
      const res = await api.login(cleanEmail, cleanPassword);
      if (res && res.user && res.token) {
        localStorage.setItem('fivopay_token', res.token);
        localStorage.setItem('fivopay_user', JSON.stringify(res.user));
        setLoading(false);
        onLoginSuccess(res.user);
        return;
      }
      throw new Error(res?.message || 'Login failed. Please check your credentials.');
    } catch (err) {
      setLoading(false);
      setError(err.message || 'Invalid email or password.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  const fillQuickLogin = (quickEmail, quickPassword) => {
    setEmail(quickEmail);
    setPassword(quickPassword);
    handleLogin(quickEmail, quickPassword);
  };

  return (
    <div style={{
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      background: 'var(--bg)',
      padding: '1rem'
    }}>
      <div className="content-card" style={{ width: '420px', padding: '2.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.75rem' }}>
          <img 
            src="/fivopay-logo.png" 
            alt="Fivopay Logo" 
            style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '16px', 
              objectFit: 'contain', 
              backgroundColor: '#ffffff',
              padding: '6px',
              marginBottom: '0.85rem',
              boxShadow: '0 8px 24px rgba(99, 102, 241, 0.25)'
            }} 
          />
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)' }}>Fivopay Sales Engine</h2>
          <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
            Making Banking Easier • Sales CRM Portal
          </p>
        </div>

        {error && (
          <div style={{ 
            backgroundColor: 'rgba(239, 68, 68, 0.1)', 
            color: 'var(--danger, #ef4444)', 
            padding: '0.75rem', 
            borderRadius: '8px', 
            fontSize: '0.825rem', 
            marginBottom: '1.25rem',
            border: '1px solid rgba(239, 68, 68, 0.25)' 
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="email" 
                className="form-input" 
                style={{ paddingLeft: '2.5rem' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="password" 
                className="form-input" 
                style={{ paddingLeft: '2.5rem' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%', padding: '0.75rem', marginTop: '0.25rem' }}>
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>

        {/* Demo Role Quick Switch Buttons */}
        <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)' }}>
          <span style={{ fontSize: '0.725rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.04em', display: 'block', marginBottom: '0.65rem', textAlign: 'center' }}>
            Quick 1-Click Role Login Demo
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={() => fillQuickLogin('bde@fivopay.com', 'bde@123')}
              style={{ fontSize: '0.785rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', background: 'rgba(16, 185, 129, 0.08)', color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.2)' }}
            >
              <UserCheck size={14} /> Sign in as Sales Guy (bde@fivopay.com)
            </button>
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={() => fillQuickLogin('admin@fivopay.com', 'password123')}
              style={{ fontSize: '0.785rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', background: 'rgba(99, 102, 241, 0.08)', color: '#6366f1', borderColor: 'rgba(99, 102, 241, 0.2)' }}
            >
              <Shield size={14} /> Sign in as Admin Manager
            </button>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '0.725rem', color: 'var(--text-muted)' }}>
          Fivopay Enterprise Sales CRM • Making Banking Easier
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
