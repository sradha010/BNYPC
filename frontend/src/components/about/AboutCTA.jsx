import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutCTA() {
  return (
    <section style={s.section}>
      <div style={s.glow1}/><div style={s.glow2}/>
      <div style={s.inner}>
        <div style={s.tag}>Take The Next Step</div>
        <h2 style={s.h2}>Your Success Story<br/>Starts Here</h2>
        <p style={s.p}>
          Join thousands of BITT students who found their dream jobs through BNYPC.
          Explore drives, connect with recruiters, and start your journey today.
        </p>
        <div style={s.btns}>
          <Link to="/drives"><button style={s.btnGold}>Explore Drives</button></Link>
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
            <button style={s.btnGreen}>Join Community</button>
          </a>
          <a href="mailto:bnypc@bittgroup.in">
            <button style={s.btnOutline}>Drop Query</button>
          </a>
        </div>
      </div>
    </section>
  )
}

const s = {
  section: { background:'linear-gradient(135deg,#8B1A13,#C0261E)',padding:'4rem 1.5rem',textAlign:'center',position:'relative',overflow:'hidden' },
  glow1: { position:'absolute',top:'-80px',left:'-80px',width:'300px',height:'300px',borderRadius:'50%',background:'rgba(212,175,55,0.1)',filter:'blur(60px)',pointerEvents:'none' },
  glow2: { position:'absolute',bottom:'-80px',right:'-80px',width:'300px',height:'300px',borderRadius:'50%',background:'rgba(255,255,255,0.05)',filter:'blur(60px)',pointerEvents:'none' },
  inner: { maxWidth:'600px',margin:'0 auto',position:'relative',zIndex:1 },
  tag: { fontSize:'.68rem',fontWeight:700,color:'#D4AF37',textTransform:'uppercase',letterSpacing:'.8px',marginBottom:'.6rem',fontFamily:'Plus Jakarta Sans,sans-serif' },
  h2: { fontFamily:'Outfit,sans-serif',fontWeight:800,fontSize:'clamp(1.6rem,4vw,2.4rem)',color:'#fff',lineHeight:1.1,marginBottom:'.85rem',letterSpacing:'-.5px' },
  p: { fontFamily:'Plus Jakarta Sans,sans-serif',color:'rgba(255,255,255,0.65)',fontSize:'.9rem',lineHeight:1.75,marginBottom:'1.75rem' },
  btns: { display:'flex',gap:'.75rem',justifyContent:'center',flexWrap:'wrap' },
  btnGold: { background:'#D4AF37',color:'#0A1628',padding:'.6rem 1.5rem',borderRadius:'8px',fontWeight:700,fontSize:'.82rem',border:'none',cursor:'pointer',fontFamily:'Plus Jakarta Sans,sans-serif' },
  btnGreen: { background:'#25D366',color:'#fff',padding:'.6rem 1.5rem',borderRadius:'8px',fontWeight:700,fontSize:'.82rem',border:'none',cursor:'pointer',fontFamily:'Plus Jakarta Sans,sans-serif' },
  btnOutline: { background:'transparent',color:'#fff',padding:'.6rem 1.5rem',borderRadius:'8px',fontWeight:600,fontSize:'.82rem',border:'2px solid rgba(255,255,255,0.4)',cursor:'pointer',fontFamily:'Plus Jakarta Sans,sans-serif' },
}