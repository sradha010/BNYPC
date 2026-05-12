import React, { useState } from 'react'

const FILTERS = ['All','Placed Students','Recruiters','Campus Drives','Workshops']

export default function MassiveMediaWall() {
  const [active, setActive] = useState('All')
  const [playing, setPlaying] = useState(null)

  const filtered = active==='All' ? MEDIA : MEDIA.filter(m=>m.category===active)

  return (
    <section style={s.section}>
      <div style={s.glow1}/><div style={s.glow2}/>
      <div style={s.inner}>
        <div style={{textAlign:'center',marginBottom:'2rem',position:'relative',zIndex:1}}>
          <div style={s.tag}>Media Wall</div>
          <h2 style={s.title}>All Stories, One Wall</h2>
          <div style={s.filters}>
            {FILTERS.map(f=>(
              <button key={f} onClick={()=>setActive(f)} style={{...s.filterBtn, ...(active===f?s.filterActive:{})}}>
                {f}
              </button>
            ))}
          </div>
        </div>
        <div style={s.wall}>
          {filtered.map((m,i)=>(
            <div key={i} style={{...s.cell, gridColumn:`span ${m.cols}`, gridRow:`span ${m.rows}`}}
                 onClick={()=>setPlaying(playing===i?null:i)}>
              {playing===i ? (
                <iframe src={`${m.embed}?autoplay=1`} style={s.iframe} allowFullScreen title={m.title}/>
              ) : (
                <>
                  <div style={{...s.cellBg, background:m.bg}}/>
                  <div style={s.cellOverlay}/>
                  <div style={s.wallPlay}>▶</div>
                  <div style={s.cellMeta}>
                    <span style={s.cellCat}>{m.category}</span>
                    <div style={s.cellTitle}>{m.title}</div>
                  </div>
                  <div style={s.cellGlow}/>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const MEDIA = [
  { title:'Rahul @ TCS',       category:'Placed Students', cols:2, rows:2, bg:'linear-gradient(135deg,#C0261E,#8B1A13)', embed:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { title:'Infosys HR Speak',  category:'Recruiters',      cols:1, rows:1, bg:'linear-gradient(135deg,#1A56DB,#0A1628)', embed:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { title:'TCS Drive Day',     category:'Campus Drives',   cols:1, rows:1, bg:'linear-gradient(135deg,#0B6E4F,#0A1628)', embed:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { title:'Aptitude Workshop', category:'Workshops',       cols:1, rows:2, bg:'linear-gradient(135deg,#D4AF37,#8B1A13)', embed:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { title:'Priya @ Infosys',   category:'Placed Students', cols:1, rows:1, bg:'linear-gradient(135deg,#8B1A13,#C0261E)', embed:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { title:'Wipro Campus',      category:'Campus Drives',   cols:2, rows:1, bg:'linear-gradient(135deg,#0A1628,#1A56DB)', embed:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { title:'Mock Interview',    category:'Workshops',       cols:1, rows:1, bg:'linear-gradient(135deg,#C0261E,#D4AF37)', embed:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { title:'Amit @ Wipro',      category:'Placed Students', cols:1, rows:1, bg:'linear-gradient(135deg,#0B6E4F,#1A56DB)', embed:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
]

const s = {
  section: { background:'#0A1628',padding:'3.5rem 1.5rem',position:'relative',overflow:'hidden' },
  glow1: { position:'absolute',top:'-100px',left:'-100px',width:'400px',height:'400px',borderRadius:'50%',background:'rgba(192,38,30,0.12)',filter:'blur(80px)',pointerEvents:'none' },
  glow2: { position:'absolute',bottom:'-100px',right:'-100px',width:'400px',height:'400px',borderRadius:'50%',background:'rgba(212,175,55,0.08)',filter:'blur(80px)',pointerEvents:'none' },
  inner: { maxWidth:'1000px',margin:'0 auto',position:'relative',zIndex:1 },
  tag: { fontSize:'.68rem',fontWeight:700,color:'#D4AF37',textTransform:'uppercase',letterSpacing:'.8px',marginBottom:'.35rem',fontFamily:'Plus Jakarta Sans,sans-serif' },
  title: { fontFamily:'Outfit,sans-serif',fontWeight:800,fontSize:'clamp(1.3rem,3vw,1.7rem)',color:'#fff',letterSpacing:'-.3px',marginBottom:'1.25rem' },
  filters: { display:'flex',gap:'.5rem',flexWrap:'wrap',justifyContent:'center' },
  filterBtn: { padding:'.4rem 1rem',borderRadius:'99px',border:'1px solid rgba(255,255,255,0.15)',background:'transparent',color:'rgba(255,255,255,0.55)',fontSize:'.75rem',cursor:'pointer',fontFamily:'Plus Jakarta Sans,sans-serif',transition:'all .2s' },
  filterActive: { background:'#C0261E',color:'#fff',borderColor:'#C0261E' },
  wall: { display:'grid',gridTemplateColumns:'repeat(4,1fr)',gridAutoRows:'140px',gap:'.75rem',marginTop:'1.5rem' },
  cell: { borderRadius:'14px',overflow:'hidden',position:'relative',cursor:'pointer' },
  cellBg: { position:'absolute',inset:0 },
  cellOverlay: { position:'absolute',inset:0,background:'rgba(10,22,40,0.3)' },
  wallPlay: { position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:'36px',height:'36px',borderRadius:'50%',background:'rgba(212,175,55,0.85)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.8rem',color:'#0A1628',zIndex:2 },
  cellMeta: { position:'absolute',bottom:'.65rem',left:'.65rem',right:'.65rem',zIndex:2 },
  cellCat: { background:'rgba(192,38,30,0.8)',color:'#fff',fontSize:'.55rem',fontWeight:700,padding:'.12rem .4rem',borderRadius:'3px',textTransform:'uppercase',display:'inline-block',marginBottom:'.25rem' },
  cellTitle: { fontFamily:'Outfit,sans-serif',fontWeight:700,fontSize:'.72rem',color:'#fff',lineHeight:1.3 },
  cellGlow: { position:'absolute',bottom:'-10px',left:'50%',transform:'translateX(-50%)',width:'60%',height:'25px',background:'rgba(192,38,30,0.35)',filter:'blur(12px)',borderRadius:'50%' },
  iframe: { position:'absolute',inset:0,width:'100%',height:'100%',border:'none' },
}