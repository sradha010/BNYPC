import React from 'react'
import { FiTarget, FiEye, FiUsers } from 'react-icons/fi'

export default function AboutOverview() {
  return (
    <section style={s.section}>
      <style>{`@media(max-width:768px){.overview-grid{grid-template-columns:1fr!important}}`}</style>
      <div style={s.grid} className="overview-grid">
        <div>
          <div style={s.tag}>Our Story</div>
          <h2 style={s.title}>Mission & Vision</h2>
          {POINTS.map((p,i)=>(
            <div key={i} style={s.point}>
              <div style={s.pointIcon}>{p.icon}</div>
              <div>
                <div style={s.pointTitle}>{p.title}</div>
                <div style={s.pointDesc}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={s.right}>
          <div style={s.card}>
            <div style={s.cardTag}>Our Impact</div>
            <div style={s.cardTitle}>Changing careers since 2010</div>
            <p style={s.cardText}>
              BNYPC was established to bridge the gap between academia and industry.
              Over the years, we have grown into a full-fledged placement ecosystem —
              managing drives, training students, and partnering with 340+ companies
              across India.
            </p>
            <div style={s.pills}>
              {['CSE','IT','ECE','ME','CE','EE'].map(b=>(
                <span key={b} style={s.pill}>{b}</span>
              ))}
            </div>
            <div style={s.cardNote}>All branches eligible for placement drives</div>
          </div>
        </div>
      </div>
    </section>
  )
}

const iconWrap = {
  width: '40px',
  height: '40px',
  background: 'rgba(192,38,30,0.08)',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}

const POINTS = [
  {
    icon: <div style={iconWrap}><FiTarget size={20} color="#C0261E" /></div>,
    title: 'Our Mission',
    desc: 'To ensure every BITT student gets access to quality placement opportunities through structured drives, training, and mentorship.',
  },
  {
    icon: <div style={iconWrap}><FiEye size={20} color="#C0261E" /></div>,
    title: 'Our Vision',
    desc: 'To become the most trusted placement cell in Jharkhand — known for transparency, results, and student-first values.',
  },
  {
    icon: <div style={iconWrap}><FiUsers size={20} color="#C0261E" /></div>,
    title: 'Our Approach',
    desc: 'We work year-round — onboarding companies, organizing PPTs, conducting aptitude sessions, and coordinating with recruiters.',
  },
]

const s = {
  section: { padding:'3rem 1.5rem',maxWidth:'1000px',margin:'0 auto' },
  grid: { display:'grid',gridTemplateColumns:'1fr 1fr',gap:'3rem',alignItems:'start' },
  tag: { fontSize:'.68rem',fontWeight:700,color:'#C0261E',textTransform:'uppercase',letterSpacing:'.8px',marginBottom:'.35rem',fontFamily:'Plus Jakarta Sans,sans-serif' },
  title: { fontFamily:'Outfit,sans-serif',fontWeight:800,fontSize:'clamp(1.3rem,3vw,1.7rem)',color:'#0A1628',marginBottom:'1.5rem',letterSpacing:'-.3px' },
  point: { display:'flex',gap:'1rem',marginBottom:'1.25rem',alignItems:'flex-start' },
  pointIcon: { flexShrink:0,marginTop:'.1rem' },
  pointTitle: { fontFamily:'Outfit,sans-serif',fontWeight:700,fontSize:'.9rem',color:'#0A1628',marginBottom:'.3rem' },
  pointDesc: { fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'.83rem',color:'#4A5568',lineHeight:1.7 },
  right: {},
  card: { background:'#fff',border:'0.5px solid rgba(0,0,0,0.07)',borderRadius:'16px',padding:'1.75rem',boxShadow:'0 4px 24px rgba(0,0,0,0.06)' },
  cardTag: { fontSize:'.65rem',fontWeight:700,color:'#C0261E',textTransform:'uppercase',letterSpacing:'.8px',marginBottom:'.4rem',fontFamily:'Plus Jakarta Sans,sans-serif' },
  cardTitle: { fontFamily:'Outfit,sans-serif',fontWeight:800,fontSize:'1.1rem',color:'#0A1628',marginBottom:'.85rem' },
  cardText: { fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'.85rem',color:'#4A5568',lineHeight:1.8,marginBottom:'1.1rem' },
  pills: { display:'flex',flexWrap:'wrap',gap:'.4rem',marginBottom:'.6rem' },
  pill: { background:'#EBF2FF',color:'#1A56DB',fontSize:'.68rem',fontWeight:600,padding:'.2rem .6rem',borderRadius:'5px' },
  cardNote: { fontSize:'.72rem',color:'#8896A8',fontFamily:'Plus Jakarta Sans,sans-serif' },
}