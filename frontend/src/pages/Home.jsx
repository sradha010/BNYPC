import React from 'react'
import { Link } from 'react-router-dom'
import { HiOfficeBuilding } from 'react-icons/hi'
import { MdNotificationsActive } from 'react-icons/md'
import { RiGroupFill } from 'react-icons/ri'
import { BsClipboardCheck } from 'react-icons/bs'
import Navbar from '../components/Navbar'
import NotifTicker from '../components/NotifTicker'
import DriveCard from '../components/DriveCard'
import Footer from '../components/Footer'
import useDrives from '../hooks/useDrives'
import StudentSuccessPreview from '../components/StudentSuccessPreview'

/* ─────────────────────────────────────────────────────────────────────────────
   Dummy drives shaped 100% to match real DriveCard schema.
   Shown only when real drives < 4. Auto-removed as real data fills in.
───────────────────────────────────────────────────────────────────────────── */
const fmtDeadline = (daysFromNow) => {
  const d = new Date(Date.now() + daysFromNow * 86400000)
  return d.toISOString().slice(0, 10)
}

const DUMMY_DRIVES = [
  {
    id: '__dummy_1',
    company_name: 'Infosys Limited',
    company_logo_url: 'https://logo.clearbit.com/infosys.com',
    job_type: 'Full-Time',
    status: 'OPEN',
    apply_deadline: fmtDeadline(5),
    package: '3.6 LPA',
    location: 'Pan India',
    branches_list: ['CSE', 'IT', 'ECE'],
    is_urgent: false,
    apply_link: '#',
    notice_link: '#',
    interview_process_link: '#',
    result_link: null,
  },
  {
    id: '__dummy_2',
    company_name: 'Wipro Technologies',
    company_logo_url: 'https://logo.clearbit.com/wipro.com',
    job_type: 'Full-Time',
    status: 'OPEN',
    apply_deadline: fmtDeadline(8),
    package: '3.5 LPA',
    location: 'Bangalore',
    branches_list: ['CSE', 'IT', 'ME', 'EE'],
    is_urgent: false,
    apply_link: '#',
    notice_link: '#',
    interview_process_link: '#',
    result_link: null,
  },
]

/* Fisher-Yates shuffle — pick 4 random drives from the full list */
function shuffled(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function Home() {
  const { drives, loading } = useDrives({})          // fetch ALL drives, not just urgent

  /* Pick 4 random real drives, pad with dummies if needed */
  const pool    = React.useMemo(() => shuffled(drives).slice(0, 4), [drives])
  const needed  = Math.max(0, 4 - pool.length)
  const featured = [...pool, ...DUMMY_DRIVES.slice(0, needed)]

  const open      = drives.filter(d => d.status === 'OPEN').length
  const results   = drives.filter(d => d.status === 'RESULT').length
  const interview = drives.filter(d => d.status === 'INTERVIEW').length
  const thisMonth = open + interview

  return (
    <div style={s.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        body { font-family: 'Plus Jakarta Sans', sans-serif; margin: 0; }

        .why-card:hover { transform: translateY(-3px); box-shadow: 0 8px 28px rgba(0,0,0,0.08); }
        .drive-card-wrap:hover > div { transform: translateY(-3px); box-shadow: 0 8px 28px rgba(0,0,0,0.09) !important; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; } 50% { opacity: 0.35; }
        }
        @keyframes heroZoom {
          from { transform: scale(1.07); }
          to   { transform: scale(1); }
        }
        .anim-1 { animation: fadeUp 0.6s ease both; animation-delay: 0.1s; }
        .anim-2 { animation: fadeUp 0.6s ease both; animation-delay: 0.22s; }
        .anim-3 { animation: fadeUp 0.6s ease both; animation-delay: 0.34s; }
        .anim-4 { animation: fadeUp 0.6s ease both; animation-delay: 0.46s; }
        .anim-5 { animation: fadeUp 0.6s ease both; animation-delay: 0.58s; }
        .hero-bg-img { animation: heroZoom 9s ease forwards; }

        .hero-btn-solid {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700; font-size: 0.88rem;
          background: #0a1628e5; color: #fff; border: none;
          padding: 0.75rem 2rem; border-radius: 8px; cursor: pointer;
          letter-spacing: 0.2px; display: inline-flex; align-items: center; gap: 0.4rem;
          transition: background 0.2s, transform 0.15s, box-shadow 0.15s;
          text-decoration: none;
        }
        .hero-btn-solid:hover {
          background: rgba(255,255,255,0.08); color: #fff;
          backdrop-filter: blur(4px); transform: translateY(-2px);
          border: 1.5px solid rgba(255,255,255,0.78);
        }
        .hero-btn-outline {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600; font-size: 0.88rem;
          background: rgba(255,255,255,0.08); color: #fff;
          border: 1.5px solid rgba(255,255,255,0.45);
          padding: 0.75rem 2rem; border-radius: 8px; cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          text-decoration: none; display: inline-block;
          backdrop-filter: blur(4px);
        }
        .hero-btn-outline:hover { background: #0a1628e5; border-color: rgba(255,255,255,0.75); }

        @media (max-width: 900px)  { .drives-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 580px)  { .drives-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 640px) {
          .hero-stats { grid-template-columns: repeat(2,1fr) !important; }
          .hero-btns  { flex-direction: column; align-items: center; }
          .hero-btns a { width: 100%; max-width: 280px; text-align: center; justify-content: center; }
          .why-grid   { grid-template-columns: 1fr 1fr !important; }
          .cta-btns   { flex-direction: column; align-items: center; }
          .cta-btns a { width: 100%; max-width: 280px; text-align: center; }
        }
        @media (max-width: 400px) { .why-grid { grid-template-columns: 1fr !important; } }
        .counter-border { border-right: 1px solid rgba(0,0,0,0.07); }
        @media (max-width: 640px) { .counter-border { border-right: none; } }
      `}</style>

      <Navbar />
      <NotifTicker />

      {/* ════════════ CINEMATIC HERO ════════════ */}
      <section style={s.hero}>
        <div className="hero-bg-img" style={s.heroBgImg} aria-hidden="true" />
        <div style={s.heroOverlay} aria-hidden="true" />
        <div style={s.heroVignette} aria-hidden="true" />
        <div style={s.heroGlow} aria-hidden="true" />

        <div style={s.heroContent}>
          <div style={s.heroBadge} className="anim-1">
            <span style={s.badgeDot} />
            BITT National Youth Placement Cell
          </div>
          <h1 style={s.heroHeading} className="anim-2">
            Empowering Your<br />
            <span style={s.heroAccent}>Career Journey</span><br />
            at BNYPC
          </h1>
          <p style={s.heroSub} className="anim-3">
            Connecting BITT's brightest talent with world-class recruiters through
            a seamless, technology-driven placement ecosystem.
          </p>
          <div style={s.heroBtns} className="anim-4 hero-btns">
            <Link to="/drives" className="hero-btn-solid">Explore Drives →</Link>
            <Link to="/results" className="hero-btn-outline">View Results</Link>
          </div>
          <div style={s.heroStats} className="anim-5 hero-stats">
            {[
              { num: '340+',  label: 'Companies' },
              { num: '₹12L',  label: 'Highest Package' },
              { num: '92%',   label: 'Placement Rate' },
              { num: '2800+', label: 'Students Placed' },
            ].map((st, i) => (
              <div key={i} style={s.heroStatItem}>
                <div style={s.heroStatNum}>{st.num}</div>
                <div style={s.heroStatLabel}>{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ COUNTER BAR ════════════ */}
      <div style={s.counterBar}>
        {[
          { num: open,      label: 'Active Drives' },
          { num: results,   label: 'Results Out' },
          { num: interview, label: 'Interviews Live' },
          { num: thisMonth, label: 'Offers This Month' },
        ].map((c, i) => (
          <div key={i} style={s.counterItem} className={i < 3 ? 'counter-border' : ''}>
            <div style={s.counterNum}>{c.num}</div>
            <div style={s.counterLabel}>{c.label}</div>
          </div>
        ))}
      </div>

      {/* ════════════ FEATURED DRIVES ════════════ */}
      <section style={s.section}>
        <div style={s.sectionHead}>
          <div>
            <div style={s.sectionTag}>Featured Drives</div>
            <div style={s.sectionTitle}>Explore Opportunities</div>
            <div style={s.sectionSub}>A snapshot of drives currently open for applications</div>
          </div>
          <Link to="/drives" style={s.viewAllLink}>View All Drives →</Link>
        </div>

        {loading ? (
          <div style={s.loadingBox}>Loading drives...</div>
        ) : (
          /* Exactly 2×2 grid — consistent card sizes, no orphan */
          <div style={s.drivesGrid} className="drives-grid">
            {featured.map(drive => (
              <div key={drive.id} className="drive-card-wrap">
                <DriveCard drive={drive} hideUrgent={true} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ════════════ WHY BNYPC ════════════ */}
      <section style={s.whySection}>
        <div style={s.section}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ ...s.sectionTag, justifyContent: 'center', display: 'flex' }}>Why BNYPC</div>
            <div style={s.sectionTitle}>Built for Your Success</div>
            <div style={s.sectionSub}>Everything a BITT student needs — from application to offer letter</div>
          </div>
          <div style={s.whyGrid} className="why-grid">
            {WHY_ITEMS.map((item, i) => (
              <div key={i} style={s.whyCard} className="why-card">
                <div style={s.whyIconWrap}>{item.icon}</div>
                <div style={s.whyTitle}>{item.title}</div>
                <div style={s.whyDesc}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StudentSuccessPreview />

      {/* ════════════ CTA BAND ════════════ */}
      <section style={s.ctaBand}>
        <div style={s.ctaInner}>
          <div style={s.ctaTag}>Contact BNYPC</div>
          <h2 style={s.ctaTitle}>Have a Query?</h2>
          <p style={s.ctaSub}>
            Explore diverse opportunities and achieve your professional goals
            with our dedicated placement support. We respond within 24 hours.
          </p>
          <div style={s.ctaBtns} className="cta-btns">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSewruoJGxsxlb9sKK5lren9oUpqc0qW_mLVRbmgtrvNcKBFRg/viewform"
              target="_blank" rel="noopener noreferrer"
              className="hero-btn-solid"
            >
              Drop Query
            </a>
            <span style={s.ctaContact}>Contact : bnypc@bittgroup.in</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

const WHY_ITEMS = [
  { icon: <HiOfficeBuilding size={24} color="#C0261E" />,      title: '340+ Recruiters',    desc: 'Connect with top employers from Fortune 500s to fast-growing startups.' },
  { icon: <MdNotificationsActive size={24} color="#C0261E" />, title: 'Real-time Alerts',   desc: 'Instant updates on new opportunities, shortlists, and result announcements.' },
  { icon: <RiGroupFill size={24} color="#C0261E" />,           title: 'Expert Mentorship',  desc: 'Guidance from experienced professionals for mock interviews and resume reviews.' },
  { icon: <BsClipboardCheck size={24} color="#C0261E" />,      title: 'Transparent Process',desc: 'Clear and fair placement procedures with full visibility into every round.' },
]

const s = {
  page: { minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#F4F5F7' },

  hero: { position: 'relative', minHeight: 'clamp(500px, 72vh, 720px)', display: 'flex', alignItems: 'center', overflow: 'hidden' },
  heroBgImg: {
    position: 'absolute', inset: 0,
    backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80')`,
    backgroundSize: 'cover', backgroundPosition: 'center 30%', zIndex: 0,
  },
  heroOverlay: { position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(4,4,10,0.74) 0%, rgba(8,4,4,0.65) 55%, rgba(18,4,4,0.9) 100%)', zIndex: 1 },
  heroVignette: { position: 'absolute', bottom: 0, left: 0, right: 0, height: '240px', background: 'linear-gradient(to top, rgba(192,38,30,0.2) 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' },
  heroGlow: { position: 'absolute', top: '-100px', right: '-120px', width: '550px', height: '550px', background: 'radial-gradient(circle, rgba(192,38,30,0.18) 0%, transparent 65%)', zIndex: 2, pointerEvents: 'none' },
  heroContent: { position: 'relative', zIndex: 3, maxWidth: '780px', margin: '0 auto', padding: 'clamp(3rem,6vw,5rem) clamp(1.5rem,4vw,3rem)', textAlign: 'center', color: '#fff', width: '100%' },
  heroBadge: { display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.32)', color: '#D4AF37', padding: '0.3rem 0.85rem', borderRadius: '99px', fontSize: '0.67rem', fontWeight: 700, marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.8px', fontFamily: "'Plus Jakarta Sans', sans-serif", backdropFilter: 'blur(4px)' },
  badgeDot: { width: '6px', height: '6px', borderRadius: '50%', background: '#D4AF37', animation: 'pulse-dot 1.8s ease-in-out infinite', flexShrink: 0 },
  heroHeading: { fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 'clamp(2rem, 5.5vw, 3.4rem)', lineHeight: 1.08, marginBottom: '1rem', letterSpacing: '-0.5px', color: '#fff', textTransform: 'uppercase', textShadow: '0 2px 28px rgba(0,0,0,0.5)' },
  heroAccent: { color: '#E8623A', textShadow: '0 0 48px rgba(232,98,58,0.45)' },
  heroSub: { fontFamily: "'Plus Jakarta Sans', sans-serif", color: 'rgba(255,255,255,0.62)', fontSize: 'clamp(0.85rem, 1.8vw, 1rem)', maxWidth: '540px', margin: '0 auto 2rem', lineHeight: 1.8 },
  heroBtns: { display: 'flex', gap: '0.85rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' },
  heroStats: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', maxWidth: '580px', margin: '0 auto' },
  heroStatItem: { padding: '0 0.75rem', borderRight: '1px solid rgba(255,255,255,0.09)' },
  heroStatNum: { fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.15rem,2.5vw,1.5rem)', fontWeight: 800, color: '#fff', lineHeight: 1 },
  heroStatLabel: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.58rem', color: 'rgba(255,255,255,0.42)', marginTop: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.5px' },

  counterBar: { background: '#fff', borderBottom: '1px solid #E8ECF0', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' },
  counterItem: { padding: 'clamp(0.85rem,2vw,1.1rem) 1rem', textAlign: 'center' },
  counterNum: { fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(1.4rem,3vw,1.85rem)', color: '#0A1628', lineHeight: 1 },
  counterLabel: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.7rem', color: '#8896A8', marginTop: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.45px' },

  section: { padding: 'clamp(2rem,4vw,3rem) clamp(1rem,3vw,2rem)', maxWidth: '1100px', margin: '0 auto', width: '100%' },
  sectionHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' },
  sectionTag: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.68rem', fontWeight: 700, color: '#C0261E', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '0.3rem' },
  sectionTitle: { fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(1.2rem,2.5vw,1.55rem)', color: '#0A1628', letterSpacing: '-0.2px', lineHeight: 1.15, marginBottom: '0.3rem' },
  sectionSub: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.83rem', color: '#6B7A8D', lineHeight: 1.6 },
  viewAllLink: { fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#C0261E', fontWeight: 700, fontSize: '0.83rem', textDecoration: 'none', whiteSpace: 'nowrap' },

  /* Fixed 2×2 grid — equal columns, no orphan cards */
  drivesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.1rem',
  },

  loadingBox: { textAlign: 'center', padding: '3rem', color: '#8896A8', fontSize: '0.875rem' },

  whySection: { background: '#fff', borderTop: '1px solid #E8ECF0', borderBottom: '1px solid #E8ECF0' },
  whyGrid: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem' },
  whyCard: { background: '#F8F9FC', border: '1px solid #EEF1F8', borderRadius: '14px', padding: '1.3rem 1.15rem', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'default' },
  whyIconWrap: { width: '40px', height: '40px', background: 'rgba(192,38,30,0.08)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.85rem' },
  whyTitle: { fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: '#0A1628', marginBottom: '0.35rem' },
  whyDesc: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.77rem', color: '#5A6678', lineHeight: 1.65 },

  ctaBand: { background: 'linear-gradient(135deg,#8B1A13 0%,#C0261E 100%)', padding: 'clamp(2.5rem,5vw,3.5rem) clamp(1rem,3vw,2rem)', textAlign: 'center', color: '#fff' },
  ctaInner: { maxWidth: '560px', margin: '0 auto' },
  ctaTag: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.68rem', fontWeight: 700, color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '0.5rem' },
  ctaTitle: { fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 'clamp(1.5rem,3.5vw,2rem)', color: '#fff', marginBottom: '0.65rem', letterSpacing: '-0.3px' },
  ctaSub: { fontFamily: "'Plus Jakarta Sans', sans-serif", color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '1.5rem' },
  ctaBtns: { display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' },
  ctaContact: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', fontStyle: 'italic' },
}