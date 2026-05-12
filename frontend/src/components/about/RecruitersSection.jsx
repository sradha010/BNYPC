import React from 'react'

export default function RecruitersSection() {
  const doubled = [...RECRUITERS, ...RECRUITERS]

  return (
    <section style={s.section}>
      <style>{`
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .rec-card:hover { transform:translateY(-2px)!important; box-shadow:0 8px 24px rgba(192,38,30,0.15)!important; }
      `}</style>
      <div style={{textAlign:'center',marginBottom:'2rem'}}>
        <div style={s.tag}>Our Partners</div>
        <h2 style={s.title}>Top Recruiters</h2>
        <div style={s.sub}>340+ companies trust BNYPC for campus hiring</div>
      </div>
      <div style={s.track}>
        <div style={s.marquee}>
          {doubled.map((r,i)=>(
            <div key={i} style={s.card} className="rec-card">
              <div style={s.logo}>{r.logo}</div>
              <div style={s.name}>{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const RECRUITERS = [
  { name:'TCS',        logo:'🔵' },
  { name:'Infosys',    logo:'🟣' },
  { name:'Wipro',      logo:'🟢' },
  { name:'Cognizant',  logo:'🔷' },
  { name:'Accenture',  logo:'🟠' },
  { name:'Capgemini',  logo:'🔶' },
  { name:'HCL',        logo:'🔴' },
  { name:'Tech Mahindra', logo:'🟡' },
  { name:'IBM',        logo:'🔵' },
  { name:'Deloitte',   logo:'🟢' },
]

const s = {
  section: { padding:'3rem 1.5rem',background:'#fff',overflow:'hidden' },
  tag: { fontSize:'.68rem',fontWeight:700,color:'#C0261E',textTransform:'uppercase',letterSpacing:'.8px',marginBottom:'.35rem',fontFamily:'Plus Jakarta Sans,sans-serif' },
  title: { fontFamily:'Outfit,sans-serif',fontWeight:800,fontSize:'clamp(1.3rem,3vw,1.7rem)',color:'#0A1628',letterSpacing:'-.3px' },
  sub: { fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'.85rem',color:'#8896A8',marginTop:'.35rem' },
  track: { overflow:'hidden',marginTop:'1.5rem' },
  marquee: { display:'flex',gap:'1rem',width:'max-content',animation:'marquee 20s linear infinite' },
  card: { flexShrink:0,background:'#fff',border:'0.5px solid rgba(0,0,0,0.08)',borderRadius:'14px',padding:'1rem 1.5rem',textAlign:'center',minWidth:'120px',boxShadow:'0 1px 8px rgba(0,0,0,0.04)',transition:'all .2s',cursor:'default' },
  logo: { fontSize:'1.75rem',marginBottom:'.4rem' },
  name: { fontFamily:'Outfit,sans-serif',fontWeight:700,fontSize:'.78rem',color:'#0A1628' },
}