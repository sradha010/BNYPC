import React, { useEffect, useState } from 'react'
import { getNotifications } from '../services/drives'

export default function NotifTicker() {
  const [notifs, setNotifs] = useState([])

  useEffect(() => {
    getNotifications()
      .then(res => setNotifs(res.data.results || res.data))
      .catch(() => {})
  }, [])

  const items = notifs.length > 0
    ? notifs
    : [{ id: 1, text: 'Welcome to BNYPC — Your gateway to top placement drives' }]

  const doubled = [...items, ...items]

  return (
    <div style={styles.bar}>
      <span style={styles.label}>Live</span>
      <div style={styles.tickerWrap}>
        <div style={styles.ticker}>
          {doubled.map((n, i) => (
            <span key={i} style={styles.item}>
              <span style={styles.dot} />
              {n.text}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

const styles = {
  bar: {
    background: '#0A1628',
    padding: '.65rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    overflow: 'hidden',
  },
  label: {
    background: '#D4AF37',
    color: '#0A1628',
    fontSize: '.7rem',
    fontWeight: 700,
    padding: '.2rem .6rem',
    borderRadius: '4px',
    whiteSpace: 'nowrap',
    textTransform: 'uppercase',
    letterSpacing: '.5px',
    flexShrink: 0,
  },
  tickerWrap: { flex: 1, overflow: 'hidden' },
  ticker: {
    display: 'flex',
    gap: '3rem',
    whiteSpace: 'nowrap',
    animation: 'ticker 30s linear infinite',
  },
  item: {
    fontSize: '.8rem',
    color: 'rgba(255,255,255,0.75)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '.4rem',
  },
  dot: {
    width: '5px',
    height: '5px',
    background: '#D4AF37',
    borderRadius: '50%',
    display: 'inline-block',
    flexShrink: 0,
  },
}