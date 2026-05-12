import React from 'react'

const FILTERS = ['ALL', 'OPEN', 'INTERVIEW', 'RESULT', 'CLOSED']
const LABELS  = { ALL: 'All', OPEN: 'Open', INTERVIEW: 'Interview', RESULT: 'Result Out', CLOSED: 'Closed' }

export default function FilterBar({ search, onSearch, active, onFilter }) {
  return (
    <div style={styles.bar}>
      <input
        style={styles.input}
        type="text"
        placeholder="Search company, branch, location..."
        value={search}
        onChange={e => onSearch(e.target.value)}
      />
      <div style={styles.btns}>
        {FILTERS.map(f => (
          <button
            key={f}
            style={{ ...styles.btn, ...(active === f ? styles.btnActive : {}) }}
            onClick={() => onFilter(f)}
          >
            {LABELS[f]}
          </button>
        ))}
      </div>
    </div>
  )
}

const styles = {
  bar: {
    background: '#fff',
    border: '0.5px solid rgba(0,0,0,0.08)',
    borderRadius: '14px',
    padding: '.85rem 1rem',
    display: 'flex',
    gap: '.6rem',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: '1.5rem',
  },
  input: {
    flex: 1,
    minWidth: '160px',
    border: '0.5px solid rgba(0,0,0,0.12)',
    borderRadius: '8px',
    padding: '.5rem .85rem',
    fontSize: '.84rem',
    fontFamily: 'DM Sans, sans-serif',
    color: '#0A1628',
    outline: 'none',
  },
  btns: { display: 'flex', gap: '.5rem', flexWrap: 'wrap' },
  btn: {
    padding: '.45rem .9rem',
    borderRadius: '99px',
    fontSize: '.75rem',
    fontWeight: 500,
    border: '0.5px solid rgba(0,0,0,0.12)',
    background: '#fff',
    cursor: 'pointer',
    color: '#4A5568',
    transition: 'all .15s',
    fontFamily: 'DM Sans, sans-serif',
    whiteSpace: 'nowrap',
  },
  btnActive: {
    background: '#C0261E',
    color: '#fff',
    borderColor: '#C0261E',
    fontWeight: 600,
  },
}