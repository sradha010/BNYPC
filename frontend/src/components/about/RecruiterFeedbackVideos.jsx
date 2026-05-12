import React, { useState } from 'react'

export default function RecruiterFeedbackVideos() {
  const [playing, setPlaying] = useState(null)

  return (
    <section style={s.section}>
      <div style={s.inner}>
        <div style={{textAlign:'center',marginBottom:'2rem'}}>
          <div style={s.tag}>What Recruiters Say</div>
          <h2 style={s.title}>Recruiter Feedback</h2>
        </div>
        <div style={s.grid}>
          {VIDEOS.map((v,i)=>(
            <div key={i} style={s.card} onClick={()=>setPlaying(playing===i?null:i)}>
              <div style={s.videoBox}>
                {playing===i ? (
                  <iframe src={`${v.embed}?autoplay=1`} style={s.iframe} allowFullScreen title={v.name}/>
                ) : (
                  <>
                    <div style={s.glass}/>
                    <div style={s.play}>▶</div>
                  </>
                )}
              </div>
              <div style={s.info}>
                <div style={s.name}>{v.name}</div>
                <div style={s.role}>{v.role}</div>
                <div style={s.company}>{v.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const VIDEOS = [
  { name:'Ankit Mehta',    role:'HR Manager',    company:'TCS',       embed:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { name:'Divya Sharma',   role:'Talent Lead',   company:'Infosys',   embed:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { name:'Rohan Joshi',    role:'Campus Head',   company:'Wipro',     embed:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { name:'Priya Kapoor',   role:'HR Director',   company:'Cognizant', embed:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
]

const s = {
  section: { padding:'3rem 1.5rem',background:'#F7F8FC' },
  inner: { maxWidth:'1000px',margin:'0 auto' },
  tag: { fontSize:'.68rem',fontWeight:700,color:'#C0261E',textTransform:'uppercase',letterSpacing:'.8px',marginBottom:'.35rem',fontFamily:'Plus Jakarta Sans,sans-serif' },
  title: { fontFamily:'Outfit,sans-serif',fontWeight:800,fontSize:'clamp(1.3rem,3vw,1.7rem)',color:'#0A1628',letterSpacing:'-.3px' },
  grid: { display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))',gap:'1rem' },
  card: { background:'#fff',borderRadius:'16px',overflow:'hidden',boxShadow:'0 2px 16px rgba(0,0,0,0.06)',cursor:'pointer',border:'0.5px solid rgba(0,0,0,0.06)' },
  videoBox: { position:'relative',aspectRatio:'16/9',background:'#0A1628',display:'flex',alignItems:'center',justifyContent:'center' },
  glass: { position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(192,38,30,0.4),rgba(10,22,40,0.7))',backdropFilter:'blur(2px)' },
  play: { position:'relative',zIndex:2,width:'38px',height:'38px',borderRadius:'50%',background:'rgba(212,175,55,0.9)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.85rem',color:'#0A1628' },
  iframe: { position:'absolute',inset:0,width:'100%',height:'100%',border:'none' },
  info: { padding:'.85rem 1rem' },
  name: { fontFamily:'Outfit,sans-serif',fontWeight:700,fontSize:'.85rem',color:'#0A1628' },
  role: { fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'.72rem',color:'#8896A8',marginTop:'.15rem' },
  company: { fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'.72rem',color:'#C0261E',fontWeight:600,marginTop:'.1rem' },
}