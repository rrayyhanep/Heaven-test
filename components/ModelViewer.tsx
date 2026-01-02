'use client'

import React, { useEffect, useRef } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any;
    }
  }
}

const ModelViewer = ({ src, alt }: { src: string; alt: string }) => {
  const modelViewerRef = useRef(null);
  const isSketchfab = src.includes('sketchfab');

  useEffect(() => {
    if (!isSketchfab) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js';
      document.head.appendChild(script);

      return () => {
        if (script.parentNode) {
          document.head.removeChild(script);
        }
      };
    }
  }, [isSketchfab]);

  if (isSketchfab) {
    return (
      <iframe
        src={src}
        title={alt}
        frameBorder="0"
        style={{ width: '100%', height: '100%' }}
      ></iframe>
    );
  }

  return (
    <model-viewer
      ref={modelViewerRef}
      src={src}
      alt={alt}
      shadow-intensity="1"
      style={{ width: '100%', height: '100%' }}
    >
    </model-viewer>
  );
};

export default ModelViewer;
