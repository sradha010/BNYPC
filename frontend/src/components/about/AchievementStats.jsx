import React, { useEffect, useRef, useState } from 'react'

function useCountUp(target, duration=2000) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      obs.disconnect()
      let start = 0
      const step = target / (duration / 16)
      const timer = setInterval(() => {
        start = Math.min(start + step, target)
        setCount(Math.floor(start))
        if (start >= target) clearInterval(timer)
      }, 16)
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])
  return [count, ref]
}

function StatCard({ num, suffix, label, sub, color }) {
  const [count, ref] = useCountUp(num)
  return (
    <div ref={ref} style={s.card}>
      <div style={s.glow}/>
      <div style={{...s.num, color}}>{count}{suffix}</div>
      <div style={s.label}>{label}</div>
      <div style={s.sub}>{sub}</div>
    </div>
  )
}

export default function AchievementStats() {
  return (
    <section style={s.section}>
      <div style={s.inner}>
        <div style={{textAlign:'center',marginBottom:'2rem'}}>
          <div style={s.tag}>By The Numbers</div>
          <h2 style={s.title}>Our Achievements</h2>
        </div>
        <div style={s.grid}>
          {STATS.map((st,i)=><StatCard key={i} {...st}/>)}
        </div>
      </div>
    </section>
  )
}

const STATS = [
  { num:340, suffix:'+', label:'Recruiters Onboarded', sub:'Fortune 500 & startups', color:'#C0261E' },
  { num:2800, suffix:'+', label:'Students Placed', sub:'Across all batches', color:'#D4AF37' },
  { num:12, suffix:'L', label:'Highest Package', sub:'Per annum', color:'#27ae60' },
  { num:92, suffix:'%', label:'Placement Rate', sub:'Consistent success', color:'#1A56DB' },
]

const s = {
  section: { background:'#F7F8FC',padding:'3rem 1.5rem' },
  inner: { maxWidth:'1000px',margin:'0 auto' },
  tag: { fontSize:'.68rem',fontWeight:700,color:'#C0261E',textTransform:'uppercase',letterSpacing:'.8px',marginBottom:'.35rem',fontFamily:'Plus Jakarta Sans,sans-serif' },
  title: { fontFamily:'Outfit,sans-serif',fontWeight:800,fontSize:'clamp(1.3rem,3vw,1.7rem)',color:'#0A1628',letterSpacing:'-.3px' },
  grid: { display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'1rem' },
  card: { background:'#fff',border:'0.5px solid rgba(0,0,0,0.07)',borderRadius:'16px',padding:'1.75rem 1.5rem',textAlign:'center',position:'relative',overflow:'hidden',boxShadow:'0 2px 16px rgba(0,0,0,0.05)' },
  glow: { position:'absolute',top:'-30px',right:'-30px',width:'100px',height:'100px',borderRadius:'50%',background:'rgba(192,38,30,0.06)',filter:'blur(20px)' },
  num: { fontFamily:'Outfit,sans-serif',fontSize:'2.2rem',fontWeight:800,lineHeight:1,position:'relative' },
  label: { fontFamily:'Outfit,sans-serif',fontWeight:700,fontSize:'.85rem',color:'#0A1628',marginTop:'.5rem' },
  sub: { fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'.72rem',color:'#8896A8',marginTop:'.25rem' },
}