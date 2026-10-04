import React, { useState } from 'react';

const SLIDES = [
  { src: '/landing/1.png', caption: '목차 업로드' },
  { src: '/landing/2.png', caption: '과목 선택' },
  { src: '/landing/3.png', caption: '학습 기간 설정' },
  { src: '/landing/4.png', caption: '가용 시간 설정' },
  { src: '/landing/5.png', caption: 'AI가 플랜 생성 중' },
  { src: '/landing/6.png', caption: '나의 학습 대시보드' },
];

const ACCENT = 'var(--lav-deep)'; // LandingPage.css의 기존 브랜드 색 재사용

export default function HeroShowcase() {
  const [index, setIndex] = useState(0);
  const n = SLIDES.length;
  const goTo = (i) => setIndex(((i % n) + n) % n);

  return (
    <div style={styles.wrap}>
      <div style={styles.glow} />

      <div style={styles.card}>
        {/* browser chrome */}
        <div style={styles.chrome}>
          <span style={{ ...styles.dotIcon, background: '#F0A9A0' }} />
          <span style={{ ...styles.dotIcon, background: '#F3D08E' }} />
          <span style={{ ...styles.dotIcon, background: '#A9D6B4' }} />
        </div>

        {/* slide viewport */}
        <div style={styles.viewport}>
          <div
            style={{
              display: 'flex',
              width: `${n * 100}%`,
              transform: `translateX(-${index * (100 / n)}%)`,
              transition: 'transform .45s cubic-bezier(.4,0,.2,1)',
              height: '100%',
            }}
          >
            {SLIDES.map((s, i) => (
              <div key={i} style={styles.slide}>
                <img src={s.src} alt={s.caption} style={styles.slideImg} />
              </div>
            ))}
          </div>

          <button aria-label="이전 화면 보기" onClick={() => goTo(index - 1)} style={{ ...styles.navBtn, left: 14 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 6L9 12L15 18" stroke="var(--lav-deep)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button aria-label="다음 화면 보기" onClick={() => goTo(index + 1)} style={{ ...styles.navBtn, right: 14 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="var(--lav-deep)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* footer: caption + dots */}
        <div style={styles.footer}>
          <div style={{ fontSize: 13, color: '#5B5565' }}>
            <span style={{ fontWeight: 700, color: 'var(--ink)' }}>{index + 1} / {n}</span>
            <span style={{ marginLeft: 8, color: 'var(--ink-soft)' }}>{SLIDES[index].caption}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {SLIDES.map((_, i) => (
              <button
                key={i}
                aria-label={`${i + 1}번째 화면으로 이동`}
                onClick={() => goTo(i)}
                style={
                  i === index
                    ? { ...styles.dot, width: 22, background: ACCENT }
                    : { ...styles.dot, width: 8, background: '#D9CFE6' }
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    flex: '1.3 1 480px',
    minWidth: 320,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 54,
  },
  glow: {
    position: 'absolute',
    width: 440,
    height: 440,
    top: '6%',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'radial-gradient(circle, rgba(169,143,194,0.4) 0%, rgba(169,143,194,0) 70%)',
    filter: 'blur(10px)',
    zIndex: 0,
  },
  card: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    maxWidth: 600,
    background: 'var(--surface)',
    borderRadius: 20,
    boxShadow: 'var(--shadow)',
    border: '1.5px solid var(--line)',
    overflow: 'hidden',
  },
  chrome: {
    height: 40,
    background: 'var(--lav-soft)',
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    gap: 6,
    boxSizing: 'border-box',
  },
  dotIcon: { width: 10, height: 10, borderRadius: 999 },
  viewport: {
    position: 'relative',
    width: '100%',
    height: 480,
    background: 'var(--bg)',
    overflow: 'hidden',
  },
  slide: {
    flex: `0 0 ${100 / 6}%`,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    boxSizing: 'border-box',
  },
  slideImg: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    display: 'block',
    borderRadius: 8,
  },
  navBtn: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 40,
    height: 40,
    borderRadius: 999,
    background: 'rgba(255,255,255,0.92)',
    border: 'none',
    boxShadow: 'var(--shadow-sm)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  footer: {
    padding: '16px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTop: '1px solid var(--line)',
  },
  dot: {
    height: 8,
    borderRadius: 999,
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    transition: 'all .25s ease',
  },
};
