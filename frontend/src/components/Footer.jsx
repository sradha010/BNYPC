import React from 'react'

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.logo}>BN<span style={{ color: '#D4AF37' }}>Y</span>PC</div>
        <div>BITT National Youth Placement Cell · Amrud Bagan, Ratu Road, Ranchi, Jharkhand 834005</div>
        <div>
          © 2026 BNYPC — All Rights Reserved &nbsp;·&nbsp;
          <a href="#" style={styles.link}>Privacy Policy</a> &nbsp;·&nbsp;
          <a href="#" style={styles.link}>Terms</a>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    background: '#0A1628',
    color: 'rgba(255,255,255,0.45)',
    padding: '1.75rem 1.5rem',
    textAlign: 'center',
    fontSize: '.78rem',
    borderTop: '2px solid #D4AF37',
    marginTop: 'auto',
  },
  inner: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '.6rem',
  },
  logo: {
    fontFamily: 'Syne, sans-serif',
    fontWeight: 800,
    fontSize: '1.1rem',
    color: '#fff',
  },
  link: { color: '#D4AF37', textDecoration: 'none' },
}