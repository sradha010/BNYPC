import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function StudentSuccessPreview() {
  const [playingId, setPlayingId] = useState(null)

  return (
    <section style={s.section}>
      <style>{`
        .story-small:hover .story-overlay { opacity: 0.5 !important; }
        .story-small:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(192,38,30,0.18) !important; }
        .story-large:hover .story-overlay { opacity: 0.45 !important; }
        .featured-play:hover { transform: translate(-50%,-50%) scale(1.08) !important; }
        @media(max-width:860px){ .story-grid{ grid-template-columns: 1fr !important; } }
        @media(max-width:600px){ .story-small-grid{ grid-template-columns: 1fr 1fr !important; } }
      `}</style>

      {/* Section Header — no "View All" link here anymore */}
      <div style={s.head}>
        <div>
          <div style={s.tag}>Student Stories</div>
          <div style={s.title}>Success Stories</div>
          <div style={s.sub}>Real students, real placements — straight from BNYPC</div>
        </div>
      </div>

      {/* Asymmetrical Grid */}
      <div style={s.grid} className="story-grid">

        {/* LEFT — Large Featured Card */}
        <div
          style={s.featured}
          className="story-large"
          onClick={() => setPlayingId(playingId === 'featured' ? null : 'featured')}
        >
          {playingId === 'featured' ? (
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              style={s.iframe}
              allowFullScreen
              title="Featured Story"
            />
          ) : (
            <>
              <div style={{...s.featBg, background:'linear-gradient(160deg,#8B1A13,#C0261E 50%,#0A1628)'}}/>
              <div style={{...s.overlay, opacity:0.6}} className="story-overlay"/>
              <div style={s.featPlay} className="featured-play">▶</div>
              <div style={s.featQuote}>
                <div style={s.quoteText}>
                  "BNYPC gave me the structured preparation and confidence I needed to crack my dream company."
                </div>
              </div>
              <div style={s.featInfo}>
                <div style={s.featPkg}>
                  <span style={s.pkgBadge}>3.5 LPA</span>
                </div>
                <div style={s.featName}>Rahul Kumar</div>
                <div style={s.featRole}>Placed at <strong style={{color:'#D4AF37'}}>TCS</strong></div>
                <div style={s.featMeta}>CSE · Batch 2024</div>
              </div>
              <div style={s.featGlow}/>
            </>
          )}
        </div>

        {/* RIGHT — Smaller Cards Grid */}
        <div style={s.smallGrid} className="story-small-grid">
          {SMALL_STORIES.map((story, i) => (
            <div
              key={i}
              style={s.smallCard}
              className="story-small"
              onClick={() => setPlayingId(playingId === i ? null : i)}
            >
              {playingId === i ? (
                <iframe
                  src={`${story.embed}?autoplay=1`}
                  style={s.iframe}
                  allowFullScreen
                  title={story.name}
                />
              ) : (
                <>
                  <div style={{...s.smallBg, background: story.bg}}/>
                  <div style={{...s.overlay, opacity:0.65}} className="story-overlay"/>
                  <div style={s.smallPlay}>▶</div>
                  <div style={s.smallInfo}>
                    <span style={s.smallPkg}>{story.pkg}</span>
                    <div style={s.smallName}>{story.name}</div>
                    <div style={s.smallCo}>{story.company}</div>
                  </div>
                  <div style={s.smallGlow}/>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA — centered */}
      <div style={s.bottomCta}>
        <Link to="/results" style={s.ctaBtn}>
          View All Success Stories →
        </Link>
        <div style={s.ctaNote}>100+ students placed this season</div>
      </div>
    </section>
  )
}

const SMALL_STORIES = [
  { name:'Priya Singh',  company:'Infosys',   pkg:'4.0 LPA', bg:'linear-gradient(135deg,#1A56DB,#0A1628)', embed:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { name:'Amit Sharma',  company:'Wipro',     pkg:'3.5 LPA', bg:'linear-gradient(135deg,#0B6E4F,#0A1628)', embed:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { name:'Neha Gupta',   company:'Cognizant', pkg:'4.5 LPA', bg:'linear-gradient(135deg,#D4AF37,#8B1A13)', embed:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { name:'Ravi Verma',   company:'Accenture', pkg:'4.0 LPA', bg:'linear-gradient(135deg,#8B1A13,#1A56DB)', embed:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
]

const s = {
  section: {
    padding:'clamp(2rem,4vw,3rem) clamp(1rem,3vw,2rem)',
    maxWidth:'1100px',
    margin:'0 auto',
    width:'100%',
  },
  head: {
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'flex-end',
    marginBottom:'1.5rem',
    flexWrap:'wrap',
    gap:'.75rem',
  },
  tag: {
    fontFamily:"'Plus Jakarta Sans',sans-serif",
    fontSize:'.68rem',
    fontWeight:700,
    color:'#C0261E',
    textTransform:'uppercase',
    letterSpacing:'.8px',
    marginBottom:'.3rem',
  },
  title: {
    fontFamily:"'Outfit',sans-serif",
    fontWeight:800,
    fontSize:'clamp(1.2rem,2.5vw,1.55rem)',
    color:'#0A1628',
    letterSpacing:'-.2px',
    lineHeight:1.15,
    marginBottom:'.3rem',
  },
  sub: {
    fontFamily:"'Plus Jakarta Sans',sans-serif",
    fontSize:'.83rem',
    color:'#6B7A8D',
  },
  grid: {
    display:'grid',
    gridTemplateColumns:'1.2fr 1fr',
    gap:'1rem',
    marginBottom:'1.25rem',
  },

  /* Featured large card */
  featured: {
    borderRadius:'18px',
    overflow:'hidden',
    position:'relative',
    minHeight:'380px',
    cursor:'pointer',
    boxShadow:'0 8px 32px rgba(0,0,0,0.14)',
    transition:'box-shadow .2s',
  },
  featBg: { position:'absolute',inset:0 },
  overlay: { position:'absolute',inset:0,background:'rgba(10,22,40,1)',transition:'opacity .2s' },
  featPlay: {
    position:'absolute',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    width:'60px',
    height:'60px',
    borderRadius:'50%',
    background:'rgba(212,175,55,0.9)',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    fontSize:'1.2rem',
    color:'#0A1628',
    zIndex:3,
    boxShadow:'0 0 30px rgba(212,175,55,0.5)',
    transition:'transform .2s',
    cursor:'pointer',
  },
  featQuote: {
    position:'absolute',
    top:'1.25rem',
    left:'1.25rem',
    right:'1.25rem',
    zIndex:3,
  },
  quoteText: {
    fontFamily:"'Plus Jakarta Sans',sans-serif",
    fontSize:'.82rem',
    color:'rgba(255,255,255,0.7)',
    fontStyle:'italic',
    lineHeight:1.7,
    borderLeft:'3px solid #D4AF37',
    paddingLeft:'.75rem',
  },
  featInfo: {
    position:'absolute',
    bottom:'1.25rem',
    left:'1.25rem',
    right:'1.25rem',
    zIndex:3,
  },
  featPkg: { marginBottom:'.4rem' },
  pkgBadge: {
    background:'#D4AF37',
    color:'#0A1628',
    fontSize:'.65rem',
    fontWeight:700,
    padding:'.2rem .6rem',
    borderRadius:'5px',
  },
  featName: {
    fontFamily:"'Outfit',sans-serif",
    fontWeight:800,
    fontSize:'1.1rem',
    color:'#fff',
    lineHeight:1.2,
  },
  featRole: {
    fontFamily:"'Plus Jakarta Sans',sans-serif",
    fontSize:'.8rem',
    color:'rgba(255,255,255,0.65)',
    marginTop:'.2rem',
  },
  featMeta: {
    fontFamily:"'Plus Jakarta Sans',sans-serif",
    fontSize:'.72rem',
    color:'rgba(255,255,255,0.4)',
    marginTop:'.15rem',
  },
  featGlow: {
    position:'absolute',
    bottom:'-20px',
    left:'50%',
    transform:'translateX(-50%)',
    width:'70%',
    height:'50px',
    background:'rgba(192,38,30,0.35)',
    filter:'blur(20px)',
    borderRadius:'50%',
    pointerEvents:'none',
  },

  /* Small cards grid */
  smallGrid: {
    display:'grid',
    gridTemplateColumns:'1fr 1fr',
    gap:'1rem',
  },
  smallCard: {
    borderRadius:'14px',
    overflow:'hidden',
    position:'relative',
    minHeight:'180px',
    cursor:'pointer',
    boxShadow:'0 4px 16px rgba(0,0,0,0.1)',
    transition:'transform .2s, box-shadow .2s',
  },
  smallBg: { position:'absolute',inset:0 },
  smallPlay: {
    position:'absolute',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    width:'36px',
    height:'36px',
    borderRadius:'50%',
    background:'rgba(255,255,255,0.18)',
    border:'1.5px solid rgba(255,255,255,0.35)',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    fontSize:'.8rem',
    color:'#fff',
    zIndex:3,
  },
  smallInfo: {
    position:'absolute',
    bottom:'.75rem',
    left:'.75rem',
    right:'.75rem',
    zIndex:3,
  },
  smallPkg: {
    background:'rgba(212,175,55,0.2)',
    color:'#D4AF37',
    fontSize:'.58rem',
    fontWeight:700,
    padding:'.12rem .45rem',
    borderRadius:'4px',
    display:'inline-block',
    marginBottom:'.3rem',
    border:'1px solid rgba(212,175,55,0.3)',
  },
  smallName: {
    fontFamily:"'Outfit',sans-serif",
    fontWeight:700,
    fontSize:'.78rem',
    color:'#fff',
    lineHeight:1.2,
  },
  smallCo: {
    fontFamily:"'Plus Jakarta Sans',sans-serif",
    fontSize:'.65rem',
    color:'rgba(255,255,255,0.55)',
    marginTop:'.1rem',
  },
  smallGlow: {
    position:'absolute',
    bottom:'-10px',
    left:'50%',
    transform:'translateX(-50%)',
    width:'60%',
    height:'25px',
    background:'rgba(192,38,30,0.3)',
    filter:'blur(12px)',
    borderRadius:'50%',
    pointerEvents:'none',
  },

  /* Bottom CTA — centered */
  bottomCta: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    gap:'.6rem',
    textAlign:'center',
  },
  ctaBtn: {
    fontFamily:"'Plus Jakarta Sans',sans-serif",
    fontWeight:700,
    fontSize:'.83rem',
    color:'#fff',
    background:'#C0261E',
    padding:'.6rem 1.4rem',
    borderRadius:'8px',
    textDecoration:'none',
    transition:'opacity .2s',
  },
  ctaNote: {
    fontFamily:"'Plus Jakarta Sans',sans-serif",
    fontSize:'.78rem',
    color:'#8896A8',
  },
  iframe: {
    position:'absolute',
    inset:0,
    width:'100%',
    height:'100%',
    border:'none',
  },
}