import React, { useState, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { BsPlayCircleFill, BsPauseFill } from 'react-icons/bs'
import { MdVideoLibrary, MdOutlineOndemandVideo } from 'react-icons/md'
import { RiInstagramLine, RiYoutubeLine } from 'react-icons/ri'

/* ─────────────────────────────────────────
   DUMMY DATA
───────────────────────────────────────── */
const LOCAL_VIDEOS = [
  { id: 1, src: 'https://www.w3schools.com/html/mov_bbb.mp4', thumb: null, name: 'Rahul Kumar', company: 'TCS', pkg: '3.5 LPA', batch: '2024' },
  { id: 2, src: 'https://www.w3schools.com/html/movie.mp4',   thumb: null, name: 'Priya Singh',  company: 'Infosys', pkg: '4.0 LPA', batch: '2024' },
  { id: 3, src: 'https://www.w3schools.com/html/mov_bbb.mp4', thumb: null, name: 'Amit Sharma', company: 'Wipro',   pkg: '3.5 LPA', batch: '2023' },
  { id: 4, src: 'https://www.w3schools.com/html/movie.mp4',   thumb: null, name: 'Neha Gupta',  company: 'Cognizant', pkg: '4.5 LPA', batch: '2024' },
  { id: 5, src: 'https://www.w3schools.com/html/mov_bbb.mp4', thumb: null, name: 'Ravi Verma',  company: 'Accenture', pkg: '4.0 LPA', batch: '2023' },
]

const SHORT_EMBEDS = [
  { type: 'youtube', id: 'dQw4w9WgXcQ', label: 'Success Story — TCS' },
  { type: 'youtube', id: '9bZkp7q19f0', label: 'Campus Drive — Infosys' },
  { type: 'youtube', id: 'dQw4w9WgXcQ', label: 'Placement Tips' },
  { type: 'youtube', id: '9bZkp7q19f0', label: 'Interview Experience' },
  { type: 'youtube', id: 'dQw4w9WgXcQ', label: 'Offer Letter Moment' },
]

const LONG_VIDEOS = [
  { id: 'dQw4w9WgXcQ', title: 'BNYPC Placement Drive 2024 Highlights', views: '12K', duration: '18:42' },
  { id: '9bZkp7q19f0', title: 'TCS Campus Recruitment Full Process Explained', views: '8.4K', duration: '24:15' },
  { id: 'dQw4w9WgXcQ', title: 'How to Crack Aptitude Tests — Expert Tips', views: '21K', duration: '31:08' },
  { id: '9bZkp7q19f0', title: 'Mock Interview Session with Industry Mentor', views: '6.2K', duration: '45:22' },
  { id: 'dQw4w9WgXcQ', title: 'Resume Building Masterclass for BITT Students', views: '15K', duration: '27:55' },
  { id: '9bZkp7q19f0', title: 'Infosys & Wipro Drive — Complete Walkthrough', views: '9.8K', duration: '19:30' },
]

/* ─────────────────────────────────────────
   LOCAL VIDEO CARD (9:16 reel style)
───────────────────────────────────────── */
function LocalVideoCard({ video }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    if (!videoRef.current) return
    if (playing) { videoRef.current.pause(); setPlaying(false) }
    else          { videoRef.current.play();  setPlaying(true)  }
  }

  return (
    <div style={ls.card} onClick={toggle}>
      <video
        ref={videoRef}
        src={video.src}
        style={ls.video}
        loop
        playsInline
        onEnded={() => setPlaying(false)}
      />
      {/* overlay */}
      <div style={{ ...ls.overlay, opacity: playing ? 0 : 1 }}>
        <BsPlayCircleFill size={44} color="rgba(255,255,255,0.9)" />
      </div>
      {/* badge */}
      <div style={ls.pkgBadge}>{video.pkg}</div>
      {/* info */}
      <div style={ls.info}>
        <div style={ls.name}>{video.name}</div>
        <div style={ls.meta}>Placed at <strong style={{ color: '#D4AF37' }}>{video.company}</strong> · {video.batch}</div>
      </div>
      {/* playing indicator */}
      {playing && (
        <div style={ls.playingDot}>
          <BsPauseFill size={14} color="#fff" />
          <span style={{ fontSize: '.6rem', fontFamily: 'Plus Jakarta Sans', color: 'rgba(255,255,255,0.8)' }}>Playing</span>
        </div>
      )}
    </div>
  )
}

const ls = {
  card: {
    position: 'relative',
    width: '100%',
    aspectRatio: '9/16',
    borderRadius: '16px',
    overflow: 'hidden',
    background: '#0A1628',
    cursor: 'pointer',
    boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
    flexShrink: 0,
  },
  video: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' },
  overlay: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.7))',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'opacity .25s',
  },
  pkgBadge: {
    position: 'absolute', top: '0.75rem', left: '0.75rem',
    background: '#D4AF37', color: '#0A1628',
    fontSize: '.6rem', fontWeight: 700,
    padding: '.18rem .5rem', borderRadius: '5px',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  },
  info: {
    position: 'absolute', bottom: '0.85rem', left: '0.85rem', right: '0.85rem',
  },
  name: {
    fontFamily: "'Outfit', sans-serif", fontWeight: 800,
    fontSize: '.88rem', color: '#fff', lineHeight: 1.2, marginBottom: '.2rem',
  },
  meta: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '.68rem', color: 'rgba(255,255,255,0.65)',
  },
  playingDot: {
    position: 'absolute', top: '.75rem', right: '.75rem',
    display: 'flex', alignItems: 'center', gap: '.3rem',
    background: 'rgba(192,38,30,0.85)', borderRadius: '99px',
    padding: '.2rem .5rem',
  },
}

/* ─────────────────────────────────────────
   SECTION HEADER
───────────────────────────────────────── */
function SectionHeader({ tag, title, sub, icon, light }) {
  return (
    <div style={{ marginBottom: '1.75rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.4rem' }}>
        {icon}
        <span style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '.68rem', fontWeight: 700,
          color: light ? '#D4AF37' : '#C0261E',
          textTransform: 'uppercase', letterSpacing: '.8px',
        }}>{tag}</span>
      </div>
      <h2 style={{
        fontFamily: "'Outfit', sans-serif", fontWeight: 800,
        fontSize: 'clamp(1.3rem,3vw,1.7rem)',
        color: light ? '#fff' : '#0A1628',
        letterSpacing: '-.3px', marginBottom: '.4rem',
      }}>{title}</h2>
      {sub && <p style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: '.85rem', color: light ? 'rgba(255,255,255,0.5)' : '#8896A8',
        lineHeight: 1.6,
      }}>{sub}</p>}
    </div>
  )
}

/* ─────────────────────────────────────────
   RESULTS PAGE
───────────────────────────────────────── */
export default function Results() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F4F5F7', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .reel-scroll::-webkit-scrollbar { height: 4px; }
        .reel-scroll::-webkit-scrollbar-track { background: transparent; }
        .reel-scroll::-webkit-scrollbar-thumb { background: rgba(192,38,30,0.35); border-radius: 99px; }

        .short-card:hover { transform: translateY(-4px) !important; box-shadow: 0 16px 40px rgba(0,0,0,0.2) !important; }
        .long-card:hover  { transform: translateY(-3px) !important; box-shadow: 0 12px 32px rgba(0,0,0,0.15) !important; }

        @media (max-width: 640px) {
          .long-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 860px) {
          .long-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      <Navbar />

      {/* ── PAGE HERO ── */}
      {/* ── PAGE HERO ── */}
<div style={ps.hero}>
  {/* Background city image layer */}
  <div style={ps.heroBgImage} />
  {/* Dark overlay */}
  <div style={ps.heroOverlay} />
  {/* Gold glow top-right */}
  <div style={ps.heroGlow} />

  <div style={ps.heroInner}>
    {/* Left: Text */}
    <div style={ps.heroLeft}>
      <div style={ps.heroTag}>
        <span style={ps.heroTagDot} />
        Institutional Excellence
      </div>
      <h1 style={ps.heroTitle}>
        Building Futures<br />Through{' '}
        <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Opportunity</span>
      </h1>
      <p style={ps.heroSub}>
        Since its inception, BITT National Youth Placement Cell has been the
        bridge between academic excellence and global professional success.
      </p>
    </div>

    {/* Right: Mock dashboard card */}
    <div style={ps.heroRight}>
      <div style={ps.dashCard}>
        {/* Card top bar */}
        <div style={ps.dashBar}>
          <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            <span style={{ ...ps.dot, background: '#FF5F57' }} />
            <span style={{ ...ps.dot, background: '#FEBC2E' }} />
            <span style={{ ...ps.dot, background: '#28C840' }} />
          </div>
          <div style={ps.dashBarTitle}>BNYPC Placements 2024</div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span style={ps.dashTab}>All</span>
            <span style={{ ...ps.dashTab, ...ps.dashTabActive }}>Stats</span>
            <span style={ps.dashTab}>Drives</span>
          </div>
        </div>

        {/* Stat row */}
        <div style={ps.statRow}>
          {[
            { label: 'Students Placed', value: '1,240+' },
            { label: 'Avg. Package', value: '4.2 LPA' },
            { label: 'Companies', value: '85+' },
          ].map((s, i) => (
            <div key={i} style={ps.statBox}>
              <div style={ps.statVal}>{s.value}</div>
              <div style={ps.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Bar chart mock */}
        <div style={ps.chartArea}>
          <div style={ps.chartLabel}>Placements by Year</div>
          <div style={ps.bars}>
            {[
              { year: '2020', h: 38 }, { year: '2021', h: 52 }, { year: '2022', h: 61 },
              { year: '2023', h: 78 }, { year: '2024', h: 95 },
            ].map((b, i) => (
              <div key={i} style={ps.barGroup}>
                <div style={{ ...ps.bar, height: `${b.h}%`, opacity: i === 4 ? 1 : 0.55 + i * 0.1 }} />
                <div style={ps.barYear}>{b.year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Company pill row */}
        <div style={ps.pillRow}>
          {['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'].map((c, i) => (
            <span key={i} style={ps.pill}>{c}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

      {/* ════════════════════════════════
          SECTION 1 — LOCAL VIDEOS (9:16)
      ════════════════════════════════ */}
      <section style={ps.section}>
        <SectionHeader
          tag="Student Testimonials"
          title="Placement Stories"
          sub="Tap any card to play — hear directly from students who got placed"
          icon={<MdVideoLibrary size={16} color="#C0261E" />}
        />
        {/* Horizontal scroll on mobile, grid on desktop */}
        <div style={ps.reelOuter} className="reel-scroll">
          <div style={ps.reelInner}>
            {LOCAL_VIDEOS.map(v => (
              <div key={v.id} style={ps.reelItem}>
                <LocalVideoCard video={v} />
              </div>
            ))}
          </div>
        </div>
        <p style={ps.scrollHint}>← Scroll to see more →</p>
      </section>

      {/* ════════════════════════════════
          SECTION 2 — SHORTS / REELS
      ════════════════════════════════ */}
      <section style={{ ...ps.section, background: '#0A1628', maxWidth: '100%', padding: 'clamp(2rem,4vw,3rem) clamp(1rem,3vw,2rem)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <SectionHeader
            tag="Shorts & Reels"
            title="YouTube Shorts"
            sub="Quick insights, success moments and placement tips in short format"
            icon={<RiYoutubeLine size={16} color="#D4AF37" />}
            light
          />
          <div style={ps.shortsGrid}>
            {SHORT_EMBEDS.map((s, i) => (
              <div key={i} style={ps.shortCard} className="short-card">
                <div style={ps.shortEmbed}>
                  <iframe
                    src={`https://www.youtube.com/embed/${s.id}?rel=0`}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                    allowFullScreen
                    title={s.label}
                    loading="lazy"
                  />
                </div>
                <div style={ps.shortLabel}>
                  <RiYoutubeLine size={13} color="#C0261E" />
                  <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '.72rem', color: '#4A5568' }}>{s.label}</span>
                </div>
              </div>
            ))}
          </div>
          <p style={{ ...ps.scrollHint, color: 'rgba(255,255,255,0.3)', textAlign: 'center', marginTop: '1.25rem' }}>
            Instagram Reels integration requires embed approval from Meta
          </p>
        </div>
      </section>

      {/* ════════════════════════════════
          SECTION 3 — LONG YOUTUBE VIDEOS (16:9)
      ════════════════════════════════ */}
      <section style={ps.section}>
        <SectionHeader
          tag="Full Sessions"
          title="YouTube Videos"
          sub="In-depth placement drives, mock interviews, and preparation sessions"
          icon={<MdOutlineOndemandVideo size={16} color="#C0261E" />}
        />
        <div style={ps.longGrid} className="long-grid">
          {LONG_VIDEOS.map((v, i) => (
            <div key={i} style={ps.longCard} className="long-card">
              <div style={ps.longEmbed}>
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}?rel=0`}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', borderRadius: '10px 10px 0 0' }}
                  allowFullScreen
                  title={v.title}
                  loading="lazy"
                />
              </div>
              <div style={ps.longInfo}>
                <div style={ps.longTitle}>{v.title}</div>
                <div style={ps.longMeta}>
                  <span style={ps.longViews}>{v.views} views</span>
                  <span style={ps.longDur}>{v.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

const ps = {
 /* HERO — updated */
hero: {
  background: '#0A1628',
  padding: 'clamp(2.5rem,5vw,4rem) clamp(1rem,3vw,2.5rem)',
  position: 'relative',
  overflow: 'hidden',
  minHeight: '340px',
},
heroBgImage: {
  position: 'absolute', inset: 0,
  backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
  opacity: 0.18,
  filter: 'grayscale(40%)',
},
heroOverlay: {
  position: 'absolute', inset: 0,
  background: 'linear-gradient(110deg, rgba(10,22,40,0.97) 40%, rgba(10,22,40,0.7) 100%)',
},
heroGlow: {
  position: 'absolute', top: '-80px', right: '-60px',
  width: '460px', height: '460px',
  background: 'radial-gradient(circle, rgba(212,175,55,0.13) 0%, transparent 70%)',
  pointerEvents: 'none',
},
heroInner: {
  maxWidth: '1100px', margin: '0 auto',
  position: 'relative', zIndex: 1,
  display: 'flex', alignItems: 'center',
  gap: 'clamp(2rem,5vw,4rem)',
},
heroLeft: {
  flex: '1 1 380px', minWidth: 0,
},
heroTag: {
  display: 'inline-flex', alignItems: 'center', gap: '6px',
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize: '.7rem', fontWeight: 600,
  color: 'rgba(212,175,55,0.85)',
  border: '1px solid rgba(212,175,55,0.3)',
  padding: '.25rem .75rem', borderRadius: '99px',
  textTransform: 'uppercase', letterSpacing: '.7px',
  marginBottom: '1rem',
},
heroTagDot: {
  width: '6px', height: '6px', borderRadius: '50%',
  background: '#D4AF37', flexShrink: 0,
},
heroTitle: {
  fontFamily: "'Outfit', sans-serif", fontWeight: 900,
  fontSize: 'clamp(1.9rem,4.5vw,2.9rem)',
  color: '#fff', lineHeight: 1.1,
  marginBottom: '.85rem', letterSpacing: '-.5px',
},
heroSub: {
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  color: 'rgba(255,255,255,0.5)',
  fontSize: 'clamp(.8rem,1.6vw,.9rem)',
  maxWidth: '400px', lineHeight: 1.75,
},

/* RIGHT — Dashboard card */
heroRight: {
  flex: '0 0 clamp(280px,40vw,420px)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
},
dashCard: {
  background: '#111B2E',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '16px',
  overflow: 'hidden',
  width: '100%',
  boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
},
dashBar: {
  background: '#0D1526',
  borderBottom: '1px solid rgba(255,255,255,0.06)',
  display: 'flex', alignItems: 'center',
  justifyContent: 'space-between',
  padding: '.55rem .85rem',
},
dot: { width: '9px', height: '9px', borderRadius: '50%', flexShrink: 0 },
dashBarTitle: {
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize: '.65rem', color: 'rgba(255,255,255,0.35)',
},
dashTab: {
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize: '.6rem', color: 'rgba(255,255,255,0.3)',
  padding: '.15rem .4rem', borderRadius: '4px', cursor: 'default',
},
dashTabActive: {
  background: 'rgba(212,175,55,0.15)', color: '#D4AF37',
},
statRow: {
  display: 'flex', gap: 0,
  borderBottom: '1px solid rgba(255,255,255,0.06)',
},
statBox: {
  flex: 1, padding: '.75rem .6rem',
  borderRight: '1px solid rgba(255,255,255,0.06)',
  textAlign: 'center',
},
statVal: {
  fontFamily: "'Outfit', sans-serif", fontWeight: 800,
  fontSize: '1.05rem', color: '#D4AF37', lineHeight: 1.1,
},
statLabel: {
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize: '.58rem', color: 'rgba(255,255,255,0.4)',
  marginTop: '.2rem',
},
chartArea: {
  padding: '.75rem .85rem .4rem',
},
chartLabel: {
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize: '.62rem', color: 'rgba(255,255,255,0.35)',
  marginBottom: '.5rem',
},
bars: {
  display: 'flex', alignItems: 'flex-end',
  gap: '6px', height: '70px',
},
barGroup: {
  flex: 1, display: 'flex', flexDirection: 'column',
  alignItems: 'center', gap: '4px', height: '100%',
  justifyContent: 'flex-end',
},
bar: {
  width: '100%', background: '#C0261E',
  borderRadius: '3px 3px 0 0', minHeight: '4px',
  transition: 'height .3s',
},
barYear: {
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize: '.55rem', color: 'rgba(255,255,255,0.3)',
},
pillRow: {
  display: 'flex', flexWrap: 'wrap', gap: '6px',
  padding: '.65rem .85rem .8rem',
  borderTop: '1px solid rgba(255,255,255,0.06)',
},
pill: {
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize: '.6rem', fontWeight: 600,
  color: 'rgba(255,255,255,0.55)',
  border: '1px solid rgba(255,255,255,0.1)',
  padding: '.18rem .55rem', borderRadius: '99px',
},

  /* SECTION WRAPPER */
  section: {
    padding: 'clamp(2rem,4vw,3rem) clamp(1rem,3vw,2rem)',
    maxWidth: '1100px',
    margin: '0 auto',
    width: '100%',
  },

  /* SECTION 1 — REELS */
  reelOuter: {
    overflowX: 'auto',
    paddingBottom: '.75rem',
  },
  reelInner: {
    display: 'flex',
    gap: '1rem',
    width: 'max-content',
  },
  reelItem: {
    width: '200px',
    flexShrink: 0,
  },
  scrollHint: {
    fontFamily: "'Plus Jakarta Sans',sans-serif",
    fontSize: '.7rem', color: '#A0AEC0',
    textAlign: 'center', marginTop: '.6rem',
  },

  /* SECTION 2 — SHORTS */
  shortsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: '1rem',
  },
  shortCard: {
    background: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
    transition: 'transform .2s, box-shadow .2s',
    cursor: 'pointer',
  },
  shortEmbed: {
    position: 'relative',
    aspectRatio: '9/16',
    background: '#0A1628',
  },
  shortLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '.35rem',
    padding: '.55rem .65rem',
    borderTop: '1px solid #EEF1F8',
  },

  /* SECTION 3 — LONG VIDEOS */
  longGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.25rem',
  },
  longCard: {
    background: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
    transition: 'transform .2s, box-shadow .2s',
  },
  longEmbed: {
    position: 'relative',
    aspectRatio: '16/9',
    background: '#0A1628',
  },
  longInfo: {
    padding: '.85rem 1rem',
  },
  longTitle: {
    fontFamily: "'Outfit',sans-serif", fontWeight: 700,
    fontSize: '.82rem', color: '#0A1628',
    lineHeight: 1.4, marginBottom: '.45rem',
  },
  longMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  longViews: {
    fontFamily: "'Plus Jakarta Sans',sans-serif",
    fontSize: '.68rem', color: '#8896A8',
  },
  longDur: {
    fontFamily: "'Outfit',sans-serif", fontWeight: 700,
    fontSize: '.68rem',
    color: '#fff', background: '#C0261E',
    padding: '.1rem .4rem', borderRadius: '4px',
  },
}