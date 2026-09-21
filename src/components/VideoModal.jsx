import React from 'react';
import { X, MonitorPlay, ExternalLink } from 'lucide-react';

function VideoModal({ isOpen, onClose, title, videoUrl }) {
  if (!isOpen) return null;

  const isLocalMp4 = videoUrl && (videoUrl.endsWith('.mp4') || videoUrl.startsWith('/videos/'));

  // Helper to convert Google Drive / YouTube URLs to proper iframe embed URLs
  const getEmbedUrl = (url) => {
    const targetUrl = url || '/videos/VAHT-fGLK1k.mp4';
    
    if (targetUrl.includes('drive.google.com')) {
      const match = targetUrl.match(/\/file\/d\/([^\/\?]+)/) || targetUrl.match(/[?&]id=([^&]+)/);
      if (match && match[1]) {
        return `https://drive.google.com/file/d/${match[1]}/preview`;
      }
    }
    return targetUrl;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content video-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <div style={{ 
              width: '32px', 
              height: '32px', 
              borderRadius: '8px', 
              background: 'linear-gradient(135deg, #ef4444, #dc2626)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff'
            }}>
              <MonitorPlay size={18} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                Slide Video Walkthrough
              </h2>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>
                {title}
              </p>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body" style={{ padding: '0.75rem 0' }}>
          <div className="video-player-container">
            {isLocalMp4 ? (
              <video 
                src={videoUrl} 
                controls 
                autoPlay 
                style={{ width: '100%', height: '420px', borderRadius: '8px', backgroundColor: '#000' }}
              />
            ) : (
              <iframe 
                src={embedUrl} 
                title={title}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                style={{ width: '100%', height: '420px', borderRadius: '8px', border: 'none' }}
              ></iframe>
            )}
          </div>
        </div>

        <div className="modal-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Official Fivopay Platform PPT Presentation Video
          </span>
          <button className="btn btn-secondary" onClick={onClose}>
            Close Video Player
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoModal;
