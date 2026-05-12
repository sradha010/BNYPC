import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutHero() {
  return (
    <section style={s.hero}>
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }
        @keyframes pulse { 0%,100%{opacity:.18} 50%{opacity:.35} }
        @media(max-width:768px){ .hero-grid{grid-template-columns:1fr!important} .hero-visual{display:none!important} }
      `}</style>

      {/* Floating particles */}
      {[...Array(6)].map((_,i) => (
        <div key={i} style={{
          position:'absolute',
          width: `${[8,12,6,10,7,9][i]}px`,
          height: `${[8,12,6,10,7,9][i]}px`,
          borderRadius:'50%',
          background:'rgba(212,175,55,0.3)',
          top:`${[20,60,40,80,30,70][i]}%`,
          left:`${[10,80,50,20,70,40][i]}%`,
          animation:`float ${[4,6,5,7,4.5,5.5][i]}s ease-in-out infinite`,
          animationDelay:`${[0,1,2,0.5,1.5,2.5][i]}s`,
        }}/>
      ))}

      {/* Glow */}
      <div style={s.glow1}/>
      <div style={s.glow2}/>

      <div style={s.inner} className="hero-grid">
        {/* Left */}
        <div style={s.left}>
          <div style={s.badge}>About BNYPC</div>
          <h1 style={s.h1}>
            Building Futures<br/>
            <span style={{color:'#D4AF37'}}>Through Opportunity</span>
          </h1>
          <p style={s.sub}>
            BNYPC empowers students through placements, mentorship,
            training, and real career opportunities. We are the official
            placement body of BITT Group of Institutions, Ranchi.
          </p>
          <div style={s.btns}>
            <Link to="/drives"><button style={s.btnGold}>Explore Drives</button></Link>
            <a href="mailto:bnypc@bittgroup.in"><button style={s.btnOutline}>Contact Placement Cell</button></a>
          </div>
        </div>

        {/* Right — Institutional illustration */}
        <div style={s.visual} className="hero-visual">
          <div style={s.dashCard}>
            <div style={s.dashTop}>
              <span style={s.dashDot}/><span style={{...s.dashDot,background:'#D4AF37'}}/><span style={{...s.dashDot,background:'#27ae60'}}/>
            </div>
            <div style={s.dashGrid}>
              {[{n:'340+',l:'Recruiters'},{n:'92%',l:'Placement Rate'},{n:'₹12L',l:'Top Package'},{n:'2800+',l:'Placed'}].map((d,i)=>(
                <div key={i} style={s.dashStat}>
                  <div style={s.dashNum}>{d.n}</div>
                  <div style={s.dashLabel}>{d.l}</div>
                </div>
              ))}
            </div>
            <div style={s.dashBar}>
              {[70,90,60,85,75].map((w,i)=>(
                <div key={i} style={s.barRow}>
                  <div style={{...s.barFill, width:`${w}%`, background: i%2===0?'#C0261E':'#D4AF37'}}/>
                </div>
              ))}
            </div>
          </div>
          <div style={s.floatBadge}>🎓 2800+ Placed</div>
          <div style={{...s.floatBadge, bottom:'2rem', left:'0', top:'auto'}}>🏢 340+ Recruiters</div>
        </div>
      </div>
    </section>
  )
}

const s = {
  hero: {
    background:'linear-gradient(135deg,#8B1A13 0%,#C0261E 60%,#a01f18 100%)',
    padding:'5rem 1.5rem 4rem',
    position:'relative',
    overflow:'hidden',
    color:'#fff',
  },
  glow1: { position:'absolute',top:'-100px',right:'-100px',width:'400px',height:'400px',borderRadius:'50%',background:'rgba(212,175,55,0.08)',filter:'blur(60px)',pointerEvents:'none' },
  glow2: { position:'absolute',bottom:'-80px',left:'-80px',width:'300px',height:'300px',borderRadius:'50%',background:'rgba(255,255,255,0.04)',filter:'blur(50px)',pointerEvents:'none' },
  inner: { maxWidth:'1000px',margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'3rem',alignItems:'center',position:'relative',zIndex:1 },
  left: {},
  badge: { display:'inline-block',background:'rgba(212,175,55,0.18)',border:'1px solid rgba(212,175,55,0.4)',color:'#D4AF37',padding:'.3rem .85rem',borderRadius:'99px',fontSize:'.72rem',fontWeight:700,marginBottom:'1.25rem',textTransform:'uppercase',letterSpacing:'.6px' },
  h1: { fontFamily:'Outfit,sans-serif',fontWeight:800,fontSize:'clamp(1.8rem,4vw,2.8rem)',lineHeight:1.1,marginBottom:'.9rem',letterSpacing:'-.5px' },
  sub: { color:'rgba(255,255,255,0.68)',fontSize:'.92rem',lineHeight:1.75,maxWidth:'480px',marginBottom:'1.75rem' },
  btns: { display:'flex',gap:'.75rem',flexWrap:'wrap' },
  btnGold: { background:'#D4AF37',color:'#0A1628',padding:'.55rem 1.4rem',borderRadius:'8px',fontWeight:700,fontSize:'.82rem',border:'none',cursor:'pointer',fontFamily:'Plus Jakarta Sans,sans-serif',letterSpacing:'.3px' },
  btnOutline: { background:'transparent',color:'#fff',padding:'.55rem 1.4rem',borderRadius:'8px',fontWeight:600,fontSize:'.82rem',border:'2px solid rgba(255,255,255,0.4)',cursor:'pointer',fontFamily:'Plus Jakarta Sans,sans-serif' },
  visual: { position:'relative',display:'flex',justifyContent:'center' },
  dashCard: { background:'rgba(255,255,255,0.07)',backdropFilter:'blur(12px)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:'16px',padding:'1.5rem',width:'100%',maxWidth:'320px' },
  dashTop: { display:'flex',gap:'.4rem',marginBottom:'1rem' },
  dashDot: { width:'8px',height:'8px',borderRadius:'50%',background:'rgba(255,255,255,0.3)',display:'inline-block' },
  dashGrid: { display:'grid',gridTemplateColumns:'1fr 1fr',gap:'.75rem',marginBottom:'1rem' },
  dashStat: { background:'rgba(255,255,255,0.06)',borderRadius:'10px',padding:'.75rem',textAlign:'center' },
  dashNum: { fontFamily:'Outfit,sans-serif',fontSize:'1.3rem',fontWeight:700,color:'#D4AF37' },
  dashLabel: { fontSize:'.62rem',color:'rgba(255,255,255,0.5)',marginTop:'.2rem',textTransform:'uppercase' },
  dashBar: { display:'flex',flexDirection:'column',gap:'.4rem' },
  barRow: { background:'rgba(255,255,255,0.08)',borderRadius:'4px',height:'6px',overflow:'hidden' },
  barFill: { height:'100%',borderRadius:'4px' },
  floatBadge: { position:'absolute',top:'1rem',right:'-1rem',background:'#D4AF37',color:'#0A1628',fontSize:'.7rem',fontWeight:700,padding:'.35rem .75rem',borderRadius:'8px',boxShadow:'0 4px 15px rgba(212,175,55,0.4)',whiteSpace:'nowrap' },
}