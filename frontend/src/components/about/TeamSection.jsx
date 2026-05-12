import React from 'react'

export default function TeamSection() {
  return (
    <section style={s.section}>
      <div style={s.inner}>
        <div style={{textAlign:'center',marginBottom:'2rem'}}>
          <div style={s.tag}>The Team</div>
          <h2 style={s.title}>Meet Our Team</h2>
          <div style={s.sub}>The people behind BNYPC's success</div>
        </div>
        <div style={s.grid}>
          {TEAM.map((m,i)=>(
            <div key={i} style={s.card}>
              <div style={{...s.avatar, background:COLORS[i%COLORS.length]}}>
                <span style={s.initials}>{m.name.split(' ').map(n=>n[0]).join('')}</span>
              </div>
              <div style={s.name}>{m.name}</div>
              <div style={s.role}>{m.role}</div>
              <div style={s.dept}>{m.dept}</div>
              {m.email && (
                <a href={`mailto:${m.email}`} style={s.email}>{m.email}</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const COLORS = [
  'linear-gradient(135deg,#C0261E,#8B1A13)',
  'linear-gradient(135deg,#1A56DB,#0A1628)',
  'linear-gradient(135deg,#0B6E4F,#0A1628)',
  'linear-gradient(135deg,#D4AF37,#C0261E)',
]

const TEAM = [
  { name:'Dr. A. Kumar',   role:'Placement Coordinator', dept:'BNYPC Head',        email:'bnypc@bittgroup.in' },
  { name:'Prof. R. Singh', role:'Training Head',         dept:'Technical Training', email:'' },
  { name:'Ms. P. Sharma',  role:'Industry Relations',    dept:'Corporate Affairs',  email:'' },
  { name:'Mr. S. Verma',   role:'Student Coordinator',   dept:'Student Affairs',    email:'' },
]

const s = {
  section: { padding:'3rem 1.5rem', background:'#F7F8FC' },
  inner: { maxWidth:'1000px', margin:'0 auto' },
  tag: { fontSize:'.68rem', fontWeight:700, color:'#C0261E', textTransform:'uppercase', letterSpacing:'.8px', marginBottom:'.35rem', fontFamily:'Plus Jakarta Sans,sans-serif' },
  title: { fontFamily:'Outfit,sans-serif', fontWeight:800, fontSize:'clamp(1.3rem,3vw,1.7rem)', color:'#0A1628', letterSpacing:'-.3px' },
  sub: { fontFamily:'Plus Jakarta Sans,sans-serif', fontSize:'.85rem', color:'#8896A8', marginTop:'.35rem' },
  grid: {
    display:'grid',
    gridTemplateColumns:'repeat(4,1fr)',
    gap:'1rem',
    marginTop:'1.5rem',
  },
  card: { background:'#fff', borderRadius:'16px', padding:'1.5rem 1rem', textAlign:'center', border:'0.5px solid rgba(0,0,0,0.07)', boxShadow:'0 2px 12px rgba(0,0,0,0.05)' },
  avatar: { width:'60px', height:'60px', borderRadius:'50%', margin:'0 auto .85rem', display:'flex', alignItems:'center', justifyContent:'center' },
  initials: { fontFamily:'Outfit,sans-serif', fontWeight:800, fontSize:'1.1rem', color:'#fff' },
  name: { fontFamily:'Outfit,sans-serif', fontWeight:700, fontSize:'.85rem', color:'#0A1628' },
  role: { fontFamily:'Plus Jakarta Sans,sans-serif', fontSize:'.72rem', color:'#4A5568', marginTop:'.2rem' },
  dept: { fontFamily:'Plus Jakarta Sans,sans-serif', fontSize:'.65rem', color:'#C0261E', fontWeight:600, marginTop:'.15rem', textTransform:'uppercase', letterSpacing:'.4px' },
  email: { display:'block', fontFamily:'Plus Jakarta Sans,sans-serif', fontSize:'.65rem', color:'#1A56DB', marginTop:'.5rem', textDecoration:'none' },
}