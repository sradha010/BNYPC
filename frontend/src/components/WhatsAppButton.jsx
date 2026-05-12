import React, { useState } from 'react'

const WHATSAPP_NUMBER = '919876543210' // ← replace with real number
const WHATSAPP_MSG    = 'Hello BNYPC! I have a query regarding placements.'

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`
    window.open(url, '_blank')
  }

  return (
    <div style={styles.wrapper}>
      {hovered && (
        <div style={styles.tooltip}>Chat with us</div>
      )}
      <button
        style={{
          ...styles.btn,
          transform: hovered ? 'scale(1.12)' : 'scale(1)',
          boxShadow: hovered
            ? '0 8px 30px rgba(37,211,102,0.5)'
            : '0 4px 16px rgba(37,211,102,0.35)',
        }}
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Chat with us on WhatsApp"
      >
        {/* Official WhatsApp SVG icon */}
        <svg viewBox="0 0 32 32" style={styles.icon} xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#fff"
            d="M16 3C8.82 3 3 8.82 3 16c0 2.3.6 4.47 1.65 6.35L3 29l6.82-1.6A13 13 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.5a10.5 10.5 0 0 1-5.35-1.46l-.38-.23-3.95.93.97-3.83-.25-.4A10.47 10.47 0 0 1 5.5 16C5.5 9.87 9.87 5.5 16 5.5S26.5 9.87 26.5 16 22.13 26.5 16 26.5zm5.77-7.77c-.31-.16-1.85-.91-2.14-1.02-.28-.1-.49-.16-.7.16-.2.31-.79 1.02-.97 1.22-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.48-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.13-.63.14-.14.31-.36.47-.54.16-.18.2-.31.31-.52.1-.2.05-.39-.03-.54-.08-.16-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.54.08-.82.39-.28.31-1.07 1.05-1.07 2.55s1.1 2.96 1.25 3.16c.16.2 2.16 3.3 5.24 4.63.73.32 1.3.5 1.74.64.73.23 1.4.2 1.92.12.59-.09 1.85-.76 2.11-1.49.26-.73.26-1.35.18-1.49-.08-.13-.28-.2-.6-.36z"
          />
        </svg>
      </button>
    </div>
  )
}

const styles = {
  wrapper: {
    position: 'fixed',
    bottom: '28px',
    right: '28px',
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  },
  tooltip: {
    background: '#0A1628',
    color: '#fff',
    fontSize: '.75rem',
    fontWeight: '500',
    padding: '.35rem .75rem',
    borderRadius: '6px',
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    animation: 'fadeIn .15s ease',
  },
  btn: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    background: '#25D366',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform .2s ease, box-shadow .2s ease',
  },
  icon: {
    width: '30px',
    height: '30px',
  },
}