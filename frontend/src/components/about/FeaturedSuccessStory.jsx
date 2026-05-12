import React, { useState } from 'react'

export default function FeaturedSuccessStory() {
  const [playing, setPlaying] = useState(false)
  const story = FEATURED_STORY

  return (
    <section style={s.section}>
      <div style={{textAlign:'center',marginBottom:'2rem'}}>
        <div style={s.tag}>Featured Story</div>
        <h2 style={s.title}>Success Spotlight</h2>
      </div>
      <div style={s.card}>
        <div style={s.videoWrap} onClick={()=>setPlaying(true)}>
          {playing ? (
            <iframe src={`${story.embedUrl}?autoplay=1`} style={s.iframe} allowFullScreen title={story.name}/>
          ) : (
            <>
              <div style={s.overlay}/>
              <div style={s.playBtn}>▶</div>
              <div style={s.videoMeta}>
                <div style={s.videoTitle}>{story.title}</div>
              </div>
            </>
          )}
        </div>
        <div style={s.info}>
          <div style={s.quote}>"{story.quote}"</div>
          <div style={s.name}>{story.name}</div>
          <div style={s.role}>Placed at <strong style={{color:'#C0261E'}}>{story.company}</strong></div>
          <div style={s.pkg}>Package: <strong style={{color:'#27ae60'}}>{story.package}</strong></div>
          <div style={s.branch}>{story.branch} · Batch {story.batch}</div>
        </div>
      </div>
    </section>
  )
}

const FEATURED_STORY = {
  name: 'Rahul Kumar',
  company: 'TCS',
  package: '3.5 LPA',
  branch: 'CSE',
  batch: 2024,
  title: 'From BITT to TCS — My Placement Journey',
  quote: 'BNYPC gave me the structured preparation and confidence I needed to crack my dream company.',
  embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
}

const s = {
  section: { padding:'3rem 1.5rem',maxWidth:'1000px',margin:'0 auto' },
  tag: { fontSize:'.68rem',fontWeight:700,color:'#C0261E',textTransform:'uppercase',letterSpacing:'.8px',marginBottom:'.35rem',fontFamily:'Plus Jakarta Sans,sans-serif' },
  title: { fontFamily:'Outfit,sans-serif',fontWeight:800,fontSize:'clamp(1.3rem,3vw,1.7rem)',color:'#0A1628',letterSpacing:'-.3px' },
  card: { display:'grid',gridTemplateColumns:'1.4fr 1fr',gap:'2rem',background:'#fff',borderRadius:'20px',overflow:'hidden',boxShadow:'0 8px 40px rgba(0,0,0,0.1)',border:'0.5px solid rgba(0,0,0,0.07)' },
  videoWrap: { position:'relative',background:'#0A1628',cursor:'pointer',minHeight:'300px',display:'flex',alignItems:'center',justifyContent:'center' },
  overlay: { position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(192,38,30,0.6),rgba(10,22,40,0.8))' },
  playBtn: { position:'relative',zIndex:2,width:'64px',height:'64px',borderRadius:'50%',background:'rgba(212,175,55,0.9)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.4rem',color:'#0A1628',boxShadow:'0 0 30px rgba(212,175,55,0.5)' },
  videoMeta: { position:'absolute',bottom:'1rem',left:'1rem',zIndex:2 },
  videoTitle: { fontFamily:'Outfit,sans-serif',fontSize:'.85rem',fontWeight:700,color:'#fff' },
  iframe: { width:'100%',height:'100%',border:'none',position:'absolute',inset:0 },
  info: { padding:'2rem',display:'flex',flexDirection:'column',justifyContent:'center',gap:'.75rem' },
  quote: { fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'.9rem',color:'#4A5568',lineHeight:1.75,fontStyle:'italic',borderLeft:'3px solid #D4AF37',paddingLeft:'.85rem' },
  name: { fontFamily:'Outfit,sans-serif',fontWeight:800,fontSize:'1.15rem',color:'#0A1628' },
  role: { fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'.83rem',color:'#4A5568' },
  pkg: { fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'.83rem',color:'#4A5568' },
  branch: { fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'.75rem',color:'#8896A8' },
}