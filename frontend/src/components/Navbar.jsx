import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/side_logo.png'
import bnypcLogo from '../assets/BNYPC_Logo.png'

export default function Navbar() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home',    path: '/' },
    { label: 'Drives',  path: '/drives' },
    { label: 'About',   path: '/about' },
    { label: 'Results', path: '/results' },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        .bnypc-nav-link {
          position: relative;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: rgba(255,255,255,0.78) !important;
          text-decoration: none;
          white-space: nowrap;
          padding: 0 1.1rem;
          height: 100%;
          display: flex;
          align-items: center;
          letter-spacing: 0.15px;
          transition: color 0.2s ease, transform 0.2s ease;
          transform: translateY(0);
        }
        .bnypc-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 1.1rem;
          right: 1.1rem;
          height: 3px;
          background: #D4AF37;
          border-radius: 3px 3px 0 0;
          transform: scaleX(0);
          transition: transform 0.25s ease;
          transform-origin: center;
        }
        .bnypc-nav-link:hover {
          color: #fff !important;
          transform: translateY(-2px);
        }
        .bnypc-nav-link:hover::after { transform: scaleX(0.6); }
        .bnypc-nav-link.active {
          color: #fff !important;
          font-weight: 700;
        }
        .bnypc-nav-link.active::after { transform: scaleX(1); }

        .bnypc-btn { transition: opacity 0.2s, transform 0.18s; }
        .bnypc-btn:hover { opacity: 0.88; transform: translateY(-1px); }

        @media (max-width: 860px) {
          .bnypc-links    { display: none !important; }
          .bnypc-actions  { display: none !important; }
          .bnypc-partner  { display: none !important; }
          .bnypc-nav-sub  { display: none !important; }
          .bnypc-hamburger { display: flex !important; }
          .bnypc-nav-title { font-size: 0.82rem !important; }
        }
        @media (max-width: 480px) {
          .bnypc-logo-img { width: 36px !important; height: 36px !important; }
        }
      `}</style>

      <nav style={s.nav}>
        <div style={s.row}>

          {/* ── LEFT WING: Logo + Title ── */}
          <div style={s.wing}>
            <div style={s.logoArea}>
              <img src={bnypcLogo} alt="BNYPC Logo" className="bnypc-logo-img" style={s.logoImg} />
              <div style={{ minWidth: 0 }}>
                <div style={s.navTitle} className="bnypc-nav-title">
                  BITT National Youth Placement Cell
                </div>
                <div style={s.navSub} className="bnypc-nav-sub">
                  bnypc@bittgroup.in &nbsp;·&nbsp; Ranchi, Jharkhand
                </div>
              </div>
            </div>
          </div>

          {/* ── CENTER: Nav Links ── */}
          <div style={s.centerLinks} className="bnypc-links">
            {navLinks.map(link => {
              const active = pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`bnypc-nav-link${active ? ' active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* ── RIGHT WING: Buttons + BITT Logo ── */}
          <div style={{ ...s.wing, justifyContent: 'flex-end' }}>
            <div style={s.actions} className="bnypc-actions">

              {/* Drop Query → Google Form */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSewruoJGxsxlb9sKK5lren9oUpqc0qW_mLVRbmgtrvNcKBFRg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <button style={s.btnGold} className="bnypc-btn">Drop Query</button>
              </a>

              {/* BNYPC-CJEC → Google Form */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe5elv5xvQRnZ5mLAYXZWd_RfvWs17FBui76nS1CrzdgE29TQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <button style={{ ...s.btnGold, ...s.btnOutline }} className="bnypc-btn">BNYPC-CJEC</button>
              </a>

            </div>
            <div style={s.partnerBox} className="bnypc-partner">
              <img src={logo} alt="BITT Logo" style={s.partnerImg} />
            </div>
          </div>

          {/* ── HAMBURGER (mobile only) ── */}
          <button
            style={s.hamburger}
            className="bnypc-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span style={{ ...s.ham, ...(menuOpen ? { transform: 'translateY(7px) rotate(45deg)' } : {}) }} />
            <span style={{ ...s.ham, ...(menuOpen ? { opacity: 0 } : {}) }} />
            <span style={{ ...s.ham, ...(menuOpen ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}) }} />
          </button>
        </div>

        {/* ── MOBILE DROPDOWN ── */}
        {menuOpen && (
          <div style={s.mobileMenu}>
            {navLinks.map(link => {
              const active = pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{ ...s.mobileLink, ...(active ? s.mobileLinkActive : {}) }}
                  onClick={() => setMenuOpen(false)}
                >
                  {active && <span style={{ color: '#D4AF37', marginRight: '0.5rem' }}>›</span>}
                  {link.label}
                </Link>
              )
            })}
            <div style={s.mobileDivider} />
            <div style={s.mobileActions}>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSewruoJGxsxlb9sKK5lren9oUpqc0qW_mLVRbmgtrvNcKBFRg/viewform"
                target="_blank" rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <button style={{ ...s.btnGold, width: '100%' }}>Drop Query</button>
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe5elv5xvQRnZ5mLAYXZWd_RfvWs17FBui76nS1CrzdgE29TQ/viewform"
                target="_blank" rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <button style={{ ...s.btnGold, ...s.btnOutline, width: '100%' }}>BNYPC-CJEC</button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

const s = {
  nav: {
    background: '#C0261E',
    borderBottom: '3px solid #D4AF37',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    alignItems: 'stretch',
    padding: '0 1.25rem',
    minHeight: '60px',
  },
  wing: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  logoArea: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
  },
  logoImg: {
    width: '42px',
    height: '42px',
    objectFit: 'contain',
    flexShrink: 0,
    borderRadius: '50%',
    display: 'block',
  },
  navTitle: {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 800,
    fontSize: 'clamp(0.7rem, 1.3vw, 0.92rem)',
    color: '#fff',
    lineHeight: 1.15,
    letterSpacing: '-0.2px',
    whiteSpace: 'nowrap',
  },
  navSub: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '0.6rem',
    color: 'rgba(255,255,255,0.52)',
    marginTop: '0.1rem',
    whiteSpace: 'nowrap',
  },
  centerLinks: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    gap: 0,
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.45rem',
  },
  btnGold: {
    background: '#D4AF37',
    color: '#0A1628',
    padding: '0.38rem 0.9rem',
    borderRadius: '6px',
    fontWeight: 700,
    fontSize: '0.72rem',
    border: 'none',
    letterSpacing: '0.4px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    whiteSpace: 'nowrap',
  },
  btnOutline: {
    background: 'transparent',
    color: '#D4AF37',
    border: '1.5px solid #D4AF37',
  },
  partnerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginLeft: '0.65rem',
    paddingLeft: '0.65rem',
    borderLeft: '1px solid rgba(255,255,255,0.15)',
  },
  partnerImg: {
    width: '40px',
    height: '40px',
    objectFit: 'contain',
    borderRadius: '6px',
    display: 'block',
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '6px',
    flexShrink: 0,
    alignSelf: 'center',
    marginLeft: 'auto',
  },
  ham: {
    display: 'block',
    width: '22px',
    height: '2px',
    background: '#fff',
    borderRadius: '2px',
    transition: 'all 0.25s ease',
    transformOrigin: 'center',
  },
  mobileMenu: {
    background: '#8B1A13',
    borderTop: '1px solid rgba(255,255,255,0.07)',
    paddingBottom: '0.75rem',
  },
  mobileLink: {
    display: 'block',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 500,
    fontSize: '0.95rem',
    color: 'rgba(255,255,255,0.78)',
    textDecoration: 'none',
    padding: '0.85rem 1.5rem',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    transition: 'background 0.15s',
  },
  mobileLinkActive: {
    color: '#fff',
    fontWeight: 600,
    background: 'rgba(212,175,55,0.1)',
    borderLeft: '3px solid #D4AF37',
    paddingLeft: 'calc(1.5rem - 3px)',
  },
  mobileDivider: {
    height: '1px',
    background: 'rgba(255,255,255,0.08)',
    margin: '0.5rem 0',
  },
  mobileActions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    padding: '0.5rem 1.5rem 0',
  },
}