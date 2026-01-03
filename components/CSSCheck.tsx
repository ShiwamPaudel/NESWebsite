"use client";
import { useEffect, useState } from 'react';

export default function CSSCheck() {
  const [loaded, setLoaded] = useState<string | null>(null);
  const [headerBg, setHeaderBg] = useState<string | null>(null);

  useEffect(() => {
    const href = Array.from(document.styleSheets)
      .map((s) => (s as CSSStyleSheet).href)
      .find(Boolean);

    setLoaded(href || null);

    const header = document.querySelector('.site-header') as HTMLElement | null;
    if (header) {
      const bg = getComputedStyle(header).backgroundColor;
      setHeaderBg(bg || null);
    }
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: 12, right: 12, zIndex: 9999, background: 'rgba(0,0,0,0.6)', color: 'white', padding: '8px 12px', borderRadius: 8 }}>
      <div style={{ fontSize: 12 }}><strong>CSS debug</strong></div>
      <div style={{ fontSize: 12 }}>Stylesheet: {loaded ? new URL(loaded).pathname : 'none'}</div>
      <div style={{ fontSize: 12 }}>Header BG: {headerBg || 'not found'}</div>
    </div>
  );
}
