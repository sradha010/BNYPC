import React, { useState } from 'react'

export default function PlacedStudentsReels() {
  const [playing, setPlaying] = useState(null)

  return (
    <section style={s.section}>
      <div style={s.inner}>
        <div style={{marginBottom:'1.75rem'}}>
          <div style={s.tag}>Student Stories</div>
          <h2 style={s.title}>Placed Students Reels</h2>
          <div style={s.sub}>Swipe through real placement stories</div>
        </div>
        <div style={s.scroll}>
          {REELS.map((r,i)=>(
            <div key={i} style={s.reel} onClick={()=>setPlaying(playing===i?null:i)}>
              {playing===i ? (
                <iframe src={`${r.embed}?autoplay=1`} style={s.iframe} allowFullScreen title={r.name}/>
              ) : (
                <>
                  <div style={s.reelBg}/>
                  <div style={s.playCircle}>▶</div>
                  <div style={s.reelInfo}>
                    <div style={s.reelPkg}>{r.pkg}</div>
                    <div style={s.reelName}>{r.name}</div>
                    <div style={s.reelCo}>{r.company}</div>
                  </div>
                  <div style={s.reelGlow}/>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const REELS = [
  { name:'Rahul Kumar',   company:'TCS',        pkg:'3.5 LPA', embed:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { name:'Priya Singh',   company:'Infosys',    pkg:'4.0 LPA', embed:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { name:'Amit Sharma',   company:'Wipro',      pkg:'3.5 LPA', embed:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { name:'Neha Gupta',    company:'Cognizant',  pkg:'4.5 LPA', embed:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { name:'Ravi Verma',    company:'Accenture',  pkg:'4.0 LPA', embed:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { name:'Sneha Yadav',   company:'HCL',        pkg:'3.8 LPA', embed:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
]

const s = {
  section: { background:'#0A1628',padding:'3rem 0' },
  inner: { maxWidth:'1000px',margin:'0 auto',padding:'0 1.5rem' },
  tag: { fontSize:'.68rem',fontWeight:700,color:'#D4AF37',textTransform:'uppercase',letterSpacing:'.8px',marginBottom:'.35rem',fontFamily:'Plus Jakarta Sans,sans-serif' },
  title: { fontFamily:'Outfit,sans-serif',fontWeight:800,fontSize:'clamp(1.3rem,3vw,1.7rem)',color:'#fff',letterSpacing:'-.3px' },
  sub: { fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'.83rem',color:'rgba(255,255,255,0.45)',marginTop:'.35rem' },
  scroll: { display:'flex',gap:'1rem',overflowX:'auto',paddingBottom:'1rem',scrollbarWidth:'none' },
  reel: { flexShrink:0,width:'160px',height:'285px',borderRadius:'16px',overflow:'hidden',position:'relative',cursor:'pointer',border:'1.5px solid rgba(212,175,55,0.3)',background:'#1a2a3a' },
  reelBg: { position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(10,22,40,0.2) 0%,rgba(10,22,40,0.85) 100%)' },
  playCircle: { position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-60%)',width:'42px',height:'42px',borderRadius:'50%',background:'rgba(212,175,55,0.9)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.9rem',color:'#0A1628',zIndex:2 },
  reelInfo: { position:'absolute',bottom:'0',left:'0',right:'0',padding:'1rem .75rem',zIndex:2 },
  reelPkg: { background:'#D4AF37',color:'#0A1628',fontSize:'.6rem',fontWeight:700,padding:'.15rem .5rem',borderRadius:'4px',display:'inline-block',marginBottom:'.35rem' },
  reelName: { fontFamily:'Outfit,sans-serif',fontWeight:700,fontSize:'.78rem',color:'#fff',lineHeight:1.2 },
  reelCo: { fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'.68rem',color:'rgba(255,255,255,0.6)',marginTop:'.15rem' },
  reelGlow: { position:'absolute',bottom:'-20px',left:'50%',transform:'translateX(-50%)',width:'80%',height:'40px',background:'rgba(192,38,30,0.4)',filter:'blur(15px)',borderRadius:'50%' },
  iframe: { position:'absolute',inset:0,width:'100%',height:'100%',border:'none' },
}