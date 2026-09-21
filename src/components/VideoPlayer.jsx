import React from 'react';
import { Play, ExternalLink, VideoOff, MonitorPlay } from 'lucide-react';

function VideoPlayer({ videoUrl, title, onOpenModal }) {
  const isLocalMp4 = videoUrl && (videoUrl.endsWith('.mp4') || videoUrl.startsWith('/videos/'));

  // Helper to resolve embed URL
  const getEmbedUrl = (url) => {
    if (!url) return null;

    if (url.includes('drive.google.com')) {
      const match = url.match(/\/file\/d\/([^\/\?]+)/) || url.match(/[?&]id=([^&]+)/);
      if (match && match[1]) {
        return `https://drive.google.com/file/d/${match[1]}/preview`;
      }
    }
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^&?]+)/);
      if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}`;
      }
    }
    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  if (!videoUrl) {
    return (
      <div className="video-placeholder-container">
        <div className="placeholder-content">
          <div className="video-icon-circle">
            <VideoOff size={28} />
          </div>
          <h3>Slide Video Walkthrough Coming Soon</h3>
          <p>
            Detailed video demonstration for <strong>{title}</strong> is currently being prepared by the product architecture team.
          </p>
          <div className="placeholder-badge">
            <MonitorPlay size={14} /> Recorded Video Pipeline Ready
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="inline-video-player-card">
      <div className="video-player-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MonitorPlay size={18} style={{ color: 'var(--accent)' }} />
          <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)' }}>
            Official PPT Slide Video Demonstration
          </h3>
        </div>
        {onOpenModal && (
          <button className="btn btn-secondary btn-sm" onClick={onOpenModal}>
            <ExternalLink size={14} /> Fullscreen Player
          </button>
        )}
      </div>

      <div className="iframe-responsive-wrapper">
        {isLocalMp4 ? (
          <video 
            src={videoUrl} 
            controls 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '10px', backgroundColor: '#000' }}
          />
        ) : (
          <iframe 
            src={embedUrl} 
            title={title || 'Slide Video'} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default VideoPlayer;
