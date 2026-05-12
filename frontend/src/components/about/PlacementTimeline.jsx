import React from 'react'
import { BsClipboardCheck } from 'react-icons/bs'
import { MdOutlineSchool, MdOutlineMic, MdOutlineBusinessCenter, MdOutlineCheckCircle, MdOutlineCelebration } from 'react-icons/md'

export default function PlacementTimeline() {
  return (
    <section style={s.section}>
      <style>{`
        @keyframes glowPulse { 0%,100%{box-shadow:0 0 0 0 rgba(192,38,30,0.3)} 50%{box-shadow:0 0 0 8px rgba(192,38,30,0)} }
        @media(max-width:768px){.tl-inner{overflow-x:auto!important} .tl-track{min-width:700px!important}}
      `}</style>
      <div style={{textAlign:'center',marginBottom:'2.5rem'}}>
        <div style={s.tag}>How It Works</div>
        <h2 style={s.title}>Placement Journey</h2>
      </div>
      <div style={s.wrap} className="tl-inner">
        <div style={s.track} className="tl-track">
          <div style={s.line}/>
          {STEPS.map((step,i)=>(
            <div key={i} style={s.step}>
              <div style={{...s.iconBox, animation:'glowPulse 2s ease-in-out infinite', animationDelay:`${i*0.3}s`}}>
                {step.icon}
              </div>
              <div style={s.stepNum}>0{i+1}</div>
              <div style={s.stepTitle}>{step.title}</div>
              <div style={s.stepDesc}>{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const STEPS = [
  { icon: <BsClipboardCheck size={22} color="#fff" />,           title:'Registration',    desc:'Students register on the portal with academic details' },
  { icon: <MdOutlineSchool size={22} color="#fff" />,            title:'Aptitude Prep',   desc:'Workshops and mock tests to sharpen skills' },
  { icon: <MdOutlineMic size={22} color="#fff" />,               title:'Mock Interviews',  desc:'Practice rounds with industry mentors' },
  { icon: <MdOutlineBusinessCenter size={22} color="#fff" />,    title:'Company Drives',   desc:'Attend drives from 340+ top recruiters' },
  { icon: <MdOutlineCheckCircle size={22} color="#fff" />,       title:'Final Selection',  desc:'Shortlisting and offer discussions' },
  { icon: <MdOutlineCelebration size={22} color="#fff" />,       title:'Offer Rollout',    desc:'Offer letters and onboarding support' },
]

const s = {
  section: { padding:'3rem 1.5rem',background:'#0A1628' },
  tag: { fontSize:'.68rem',fontWeight:700,color:'#D4AF37',textTransform:'uppercase',letterSpacing:'.8px',marginBottom:'.35rem',fontFamily:'Plus Jakarta Sans,sans-serif' },
  title: { fontFamily:'Outfit,sans-serif',fontWeight:800,fontSize:'clamp(1.3rem,3vw,1.7rem)',color:'#fff',letterSpacing:'-.3px' },
  wrap: { maxWidth:'1000px',margin:'0 auto',overflowX:'auto' },
  track: { display:'grid',gridTemplateColumns:'repeat(6,1fr)',gap:'1rem',position:'relative',paddingTop:'2rem' },
  line: { position:'absolute',top:'2.75rem',left:'8%',right:'8%',height:'2px',background:'linear-gradient(90deg,#C0261E,#D4AF37,#C0261E)',borderRadius:'2px',zIndex:0 },
  step: { display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',position:'relative',zIndex:1 },
  iconBox: { width:'48px',height:'48px',borderRadius:'50%',background:'linear-gradient(135deg,#C0261E,#8B1A13)',border:'2px solid #D4AF37',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'.6rem',flexShrink:0 },
  stepNum: { fontSize:'.6rem',fontWeight:700,color:'#D4AF37',marginBottom:'.3rem',fontFamily:'Outfit,sans-serif' },
  stepTitle: { fontFamily:'Outfit,sans-serif',fontWeight:700,fontSize:'.78rem',color:'#fff',marginBottom:'.3rem' },
  stepDesc: { fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'.68rem',color:'rgba(255,255,255,0.45)',lineHeight:1.5 },
}