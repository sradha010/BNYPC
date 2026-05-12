import React from 'react'

export default function AutoMovingReelsStrip() {
  const doubled = [...REELS, ...REELS]

  return (
    <section style={s.section}>
      <style>{`
        @keyframes stripScroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
      `}</style>
      <div style={s.label}>
        <span style={s.live}>●</span> Live Placements
      </div>
      <div style={s.wrap}>
        <div style={s.strip}>
          {doubled.map((r,i)=>(
            <div key={i} style={s.reel}>
              <div style={{...s.reelInner, background:r.bg}}>
                <div style={s.reelPlay}>▶</div>
                <div style={s.reelInfo}>
                  <div style={s.reelName}>{r.name}</div>
                  <div style={s.reelCo}>{r.company}</div>
                  <div style={s.reelPkg}>{r.pkg}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const REELS = [
  { name:'Rahul K.',  company:'TCS',       pkg:'3.5 LPA', bg:'linear-gradient(180deg,#C0261E,#8B1A13)' },
  { name:'Priya S.',  company:'Infosys',   pkg:'4.0 LPA', bg:'linear-gradient(180deg,#1A56DB,#0A1628)' },
  { name:'Amit S.',   company:'Wipro',     pkg:'3.5 LPA', bg:'linear-gradient(180deg,#0B6E4F,#0A1628)' },
  { name:'Neha G.',   company:'Cognizant', pkg:'4.5 LPA', bg:'linear-gradient(180deg,#D4AF37,#C0261E)' },
  { name:'Ravi V.',   company:'Accenture', pkg:'4.0 LPA', bg:'linear-gradient(180deg,#8B1A13,#C0261E)' },
  { name:'Sneha Y.',  company:'HCL',       pkg:'3.8 LPA', bg:'linear-gradient(180deg,#0A1628,#1A56DB)' },
  { name:'Karan M.',  company:'TechM',     pkg:'3.2 LPA', bg:'linear-gradient(180deg,#C0261E,#D4AF37)' },
  { name:'Anjali R.', company:'IBM',       pkg:'5.0 LPA', bg:'linear-gradient(180deg,#0B6E4F,#1A56DB)' },
]

const s = {
  section: { background:'#0A1628',borderTop:'1px solid rgba(255,255,255,0.06)',borderBottom:'1px solid rgba(255,255,255,0.06)',padding:'1.5rem 0',overflow:'hidden' },
  label: { textAlign:'center',fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'.72rem',fontWeight:700,color:'rgba(255,255,255,0.4)',textTransform:'uppercase',letterSpacing:'.8px',marginBottom:'1rem' },
  live: { color:'#27ae60',marginRight:'.4rem' },
  wrap: { overflow:'hidden' },
  strip: { display:'flex',gap:'1rem',width:'max-content',animation:'stripScroll 25s linear infinite',padding:'0 1rem' },
  reel: { flexShrink:0,width:'110px',height:'196px',borderRadius:'12px',overflow:'hidden',border:'1px solid rgba(255,255,255,0.1)' },
  reelInner: { width:'100%',height:'100%',position:'relative',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'.75rem' },
  reelPlay: { width:'32px',height:'32px',borderRadius:'50%',background:'rgba(255,255,255,0.15)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.75rem',color:'#fff',marginBottom:'.75rem',border:'1px solid rgba(255,255,255,0.2)' },
  reelInfo: { textAlign:'center' },
  reelName: { fontFamily:'Outfit,sans-serif',fontWeight:700,fontSize:'.72rem',color:'#fff',lineHeight:1.2 },
  reelCo: { fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'.62rem',color:'rgba(255,255,255,0.55)',marginTop:'.15rem' },
  reelPkg: { background:'rgba(212,175,55,0.2)',color:'#D4AF37',fontSize:'.6rem',fontWeight:700,padding:'.12rem .4rem',borderRadius:'4px',marginTop:'.35rem',display:'inline-block' },
}