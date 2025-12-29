'use client'

import React, { useEffect, useRef } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any;
    }
  }
}

const ModelViewer = ({ src, alt }) => {
  const modelViewerRef = useRef(null);

  useEffect(() => {
    if (!src.includes('sketchfab.com')) {
      import('@google/model-viewer');
    }
  }, [src]);

  if (src.includes('sketchfab.com')) {
    return (
      <div className="sketchfab-embed-wrapper" style={{ width: '100%', height: '100%' }}>
        <iframe
          title={alt}
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src={src}
          style={{ width: '100%', height: '100%' }}
        >
        </iframe>
      </div>
    );
  }

  return (
    <model-viewer
      ref={modelViewerRef}
      src={src}
      alt={alt}
      auto-rotate
      camera-controls
      style={{ width: '100%', height: '100%' }}
    >
      <div slot="progress-bar">
        <div className="update-bar"></div>
      </div>
    </model-viewer>
  );
};

export default ModelViewer;
