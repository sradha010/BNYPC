import React, { useState, useRef, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { LOCAL_VIDEOS, SHORT_VIDEOS, LONG_VIDEOS } from '../pages/Results'

function pickRandom(arr, n) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a.slice(0, n)
}

const ALL_VIDEOS = [...LOCAL_VIDEOS, ...SHORT_VIDEOS, ...LONG_VIDEOS]

/* ── Local video player ── */
function LocalPlayer({ video }) {
  const ref = useRef(null)
  const [playing, setPlaying] = useState(false)
  const toggle = () => {
    if (!ref.current) return
    if (playing) { ref.current.pause(); setPlaying(false) }
    else { ref.current.play(); setPlaying(true) }
  }
  return (
    <div style={{ position: 'absolute', inset: 0, cursor: 'pointer' }} onClick={toggle}>
      <video
        ref={ref} src={video.src} loop playsInline
        onEnded={() => setPlaying(false)}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      {!playing && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 35%, rgba(0,0,0,0.78))',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2,
        }}>
          <PlayBtn />
        </div>
      )}
    </div>
  )
}

function PlayBtn({ size = 48 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: 'rgba(212,175,55,0.95)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.36, color: '#0A1628',
      boxShadow: '0 0 0 7px rgba(212,175,55,0.22), 0 4px 20px rgba(0,0,0,0.3)',
      flexShrink: 0,
    }}>▶</div>
  )
}

/* ── Bottom info overlay ── */
function CardInfo({ video, compact = false }) {
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      padding: compact ? '2rem 0.75rem 0.7rem' : '3rem 1.1rem 1rem',
      background: 'linear-gradient(to top, rgba(0,0,0,0.88) 55%, transparent)',
      zIndex: 3,
    }}>
      <span style={{
        background: '#D4AF37', color: '#0A1628',
        fontSize: compact ? '0.52rem' : '0.6rem', fontWeight: 800,
        padding: '0.12rem 0.42rem', borderRadius: '4px',
        display: 'inline-block', marginBottom: '0.25rem',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}>{video.pkg}</span>
      <div style={{
        fontFamily: "'Outfit', sans-serif", fontWeight: 800,
        fontSize: compact ? '0.8rem' : '0.95rem',
        color: '#fff', lineHeight: 1.2,
      }}>{video.name}</div>
      <div style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: compact ? '0.62rem' : '0.7rem',
        color: 'rgba(255,255,255,0.58)', marginTop: '0.18rem',
      }}>
        Placed at <strong style={{ color: '#D4AF37' }}>{video.company}</strong>
        {video.batch ? ` · ${video.batch}` : ''}
      </div>
    </div>
  )
}

/* ── LANDSCAPE card — fills a 16:9 wrapper ── */
function LandscapeCard({ video, activeId, setActiveId }) {
  const isActive = activeId === video.id
  return (
    <div className="ssp-card" style={{
      background: video.bg || '#0d1117', borderRadius: 18,
      overflow: 'hidden', position: 'absolute', inset: 0,
    }}>
      {isActive ? (
        <iframe
          src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1&rel=0`}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', zIndex: 5 }}
          allowFullScreen title={video.name}
        />
      ) : (
        <>
          <img
            src={`https://img.youtube.com/vi/${video.embedId}/maxresdefault.jpg`}
            alt={video.name}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            onError={e => { e.target.src = `https://img.youtube.com/vi/${video.embedId}/mqdefault.jpg` }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.25)', zIndex: 1 }} />
          <div
            style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 4, cursor: 'pointer' }}
            onClick={() => setActiveId(video.id)}
          >
            <PlayBtn size={56} />
          </div>
          {video.duration && (
            <div style={{
              position: 'absolute', bottom: '4.8rem', right: '0.9rem', zIndex: 4,
              background: 'rgba(0,0,0,0.72)', color: '#fff',
              fontSize: '0.68rem', fontWeight: 700,
              padding: '0.18rem 0.5rem', borderRadius: 5,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>{video.duration}</div>
          )}
          <CardInfo video={video} />
        </>
      )}
    </div>
  )
}

/* ── PORTRAIT / REEL card — fills parent height ── */
function ReelCard({ video, activeId, setActiveId }) {
  const isActive = activeId === video.id
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div className="ssp-card" style={{
        background: video.bg || '#0d1117', borderRadius: 16,
        overflow: 'hidden', position: 'absolute', inset: 0,
      }}>
        {video.type === 'local' ? (
          <>
            <LocalPlayer video={video} />
            <CardInfo video={video} compact />
          </>
        ) : isActive ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1&rel=0`}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', zIndex: 5 }}
            allowFullScreen title={video.name}
          />
        ) : (
          <>
            <img
              src={`https://img.youtube.com/vi/${video.embedId}/mqdefault.jpg`}
              alt={video.name}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              onError={e => { e.target.style.display = 'none' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.32)', zIndex: 1 }} />
            <div
              style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 4, cursor: 'pointer' }}
              onClick={() => setActiveId(video.id)}
            >
              <PlayBtn size={44} />
            </div>
            <CardInfo video={video} compact />
          </>
        )}
      </div>
    </div>
  )
}

/* ── MAIN EXPORT ── */
export default function StudentSuccessPreview() {
  const [activeId, setActiveId] = useState(null)

  const { landscape, portraits } = useMemo(() => {
    const ls = ALL_VIDEOS.filter(v => v.ratio !== '9/16')
    const ps = ALL_VIDEOS.filter(v => v.ratio === '9/16')
    return {
      landscape: pickRandom(ls, 1)[0],
      portraits: pickRandom(ps, 2),
    }
  }, [])

  return (
    <section style={{ padding: 'clamp(2rem,4vw,3rem) clamp(1rem,3vw,2rem)', maxWidth: 1140, margin: '0 auto', width: '100%' }}>
      <style>{`
        .ssp-card {
          box-shadow: 0 6px 24px rgba(0,0,0,0.14);
          transition: transform .22s ease, box-shadow .22s ease;
          cursor: pointer;
        }
        .ssp-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 44px rgba(192,38,30,0.18) !important;
        }
        .ssp-row {
          display: flex;
          gap: 14px;
          align-items: stretch;
        }
        .ssp-landscape-col {
          flex: 1 1 0;
          min-width: 0;
        }
        .ssp-reels-col {
          display: flex;
          gap: 10px;
          flex-shrink: 0;
          width: clamp(220px, 28vw, 340px);
        }
        .ssp-reel-item {
          flex: 1 1 0;
          min-width: 0;
          position: relative;
        }
        @media (max-width: 640px) {
          .ssp-row { flex-direction: column !important; }
          .ssp-reels-col { width: 100% !important; }
          .ssp-reel-item { aspect-ratio: 9/16; }
        }
      `}</style>

      {/* ── Header ── */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '0.68rem', fontWeight: 700, color: '#C0261E',
          textTransform: 'uppercase', letterSpacing: '0.9px', marginBottom: '0.3rem',
        }}>Student Stories</div>
        <div style={{
          fontFamily: "'Outfit', sans-serif", fontWeight: 800,
          fontSize: 'clamp(1.3rem,2.5vw,1.65rem)', color: '#0A1628',
          letterSpacing: '-0.2px', marginBottom: '0.3rem',
        }}>Success Stories</div>
        <div style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '0.83rem', color: '#6B7A8D',
        }}>Real students, real placements — straight from BNYPC</div>
      </div>

      {/*
        CSS grid: 3 columns — landscape gets ~60%, each reel gets ~20%.
        One shared row height means no gaps: landscape drives the height via
        aspectRatio on itself; reels are absolutely positioned to fill their cell.
      */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.4fr clamp(140px, 17vw, 210px) clamp(140px, 17vw, 210px)',
        gap: 12,
      }}>
        {/* Landscape — height determined by its own 16:9 aspectRatio */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', gridRow: 1, gridColumn: 1 }}>
          <LandscapeCard video={landscape} activeId={activeId} setActiveId={setActiveId} />
        </div>

        {/* Reel 1 — fills the exact same row height as landscape */}
        <div style={{ gridRow: 1, gridColumn: 2, position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0 }}>
            <ReelCard video={portraits[0]} activeId={activeId} setActiveId={setActiveId} />
          </div>
        </div>

        {/* Reel 2 */}
        <div style={{ gridRow: 1, gridColumn: 3, position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0 }}>
            <ReelCard video={portraits[1]} activeId={activeId} setActiveId={setActiveId} />
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '0.6rem',
        textAlign: 'center', marginTop: '1.75rem',
      }}>
        <Link to="/results" style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 700, fontSize: '0.85rem',
          color: '#fff', background: '#C0261E',
          padding: '0.65rem 1.6rem', borderRadius: 9,
          textDecoration: 'none',
          boxShadow: '0 4px 14px rgba(192,38,30,0.28)',
        }}>
          View All Success Stories →
        </Link>
        <div style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '0.78rem', color: '#8896A8',
        }}>100+ students placed this season</div>
      </div>
    </section>
  )
}