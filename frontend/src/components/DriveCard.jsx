import React from 'react'

const STATUS_STYLE = {
  OPEN:      { background: '#E6F4EF', color: '#0B6E4F' },
  CLOSED:    { background: '#FDECEA', color: '#C0392B' },
  RESULT:    { background: '#EBF2FF', color: '#1A56DB' },
  INTERVIEW: { background: '#FEF0E6', color: '#C05621' },
}
const STATUS_LABEL = {
  OPEN:      'Open',
  CLOSED:    'Closed',
  RESULT:    'Result Out',
  INTERVIEW: 'Interview Ongoing',
}

export default function DriveCard({ drive, hideUrgent = false }) {
  const {
    company_name, company_logo_url, job_type, status,
    apply_deadline, package: pkg, location,
    branches_list, is_urgent,
    apply_link, notice_link,
    interview_process_link, result_link,
  } = drive

  const isResult    = status === 'RESULT'
  const isClosed    = status === 'CLOSED'
  const showUrgent  = is_urgent && !hideUrgent
  const initials    = company_name?.slice(0, 4).toUpperCase()

  return (
    <div style={{
      ...styles.card,
      border: showUrgent
        ? '1.5px solid #D4AF37'
        : '0.5px solid rgba(0,0,0,0.08)',
    }}>
      {showUrgent && <span style={styles.urgBadge}>Urgent</span>}

      {/* Top row */}
      <div style={styles.top}>
        <div style={styles.logoBox}>
          {company_logo_url
            ? <img src={company_logo_url} alt={company_name} style={styles.logoImg} />
            : <span style={styles.initials}>{initials}</span>}
        </div>
        <div style={styles.titleArea}>
          <div style={styles.companyName}>{company_name}</div>
          <div style={styles.jobType}>{job_type}</div>
        </div>
        <span style={{ ...styles.badge, ...STATUS_STYLE[status] }}>
          {STATUS_LABEL[status] || status}
        </span>
      </div>

      {/* Meta */}
      <div style={styles.meta}>
        <div style={styles.metaItem}>
          <span style={styles.metaLabel}>Deadline</span>
          <span style={{ ...styles.metaVal, color: '#C05621', fontWeight: 600 }}>
            {apply_deadline || 'Closed'}
          </span>
        </div>
        <div style={styles.metaItem}>
          <span style={styles.metaLabel}>Package</span>
          <span style={{ ...styles.metaVal, color: '#0B6E4F', fontWeight: 600 }}>{pkg}</span>
        </div>
        <div style={styles.metaItem}>
          <span style={styles.metaLabel}>Location</span>
          <span style={styles.metaVal}>{location}</span>
        </div>
      </div>

      {/* Branches */}
      <div style={styles.branches}>
        {(branches_list || []).map(b => (
          <span key={b} style={styles.branchTag}>{b}</span>
        ))}
      </div>

      {/* Actions */}
      <div style={styles.actions}>
        {isClosed
          ? <span style={{ ...styles.btn, ...styles.btnDisabled, gridColumn: 'span 2' }}>Applications Closed</span>
          : <a href={apply_link || '#'} target="_blank" rel="noreferrer"
               style={{ ...styles.btn, ...styles.btnApply, gridColumn: 'span 2' }}>
              Apply Now
            </a>}

        <a href={notice_link || '#'} target="_blank" rel="noreferrer"
           style={{ ...styles.btn, ...styles.btnSec }}>View Notice</a>
        <a href={interview_process_link || '#'} target="_blank" rel="noreferrer"
           style={{ ...styles.btn, ...styles.btnSec }}>Interview Process</a>

        {isResult
          ? <a href={result_link || '#'} target="_blank" rel="noreferrer"
               style={{ ...styles.btn, ...styles.btnResult, gridColumn: 'span 2' }}>
               View Result
             </a>
          : <span style={{ ...styles.btn, ...styles.btnDisabled, opacity: .4 }}>Result Pending</span>}
      </div>
    </div>
  )
}

const styles = {
  card: {
    background: '#fff',
    borderRadius: '14px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform .2s, box-shadow .2s',
    position: 'relative',
  },
  urgBadge: {
    position: 'absolute',
    top: 0,
    left: '1rem',
    background: '#D4AF37',
    color: '#0A1628',
    fontSize: '.62rem',
    fontWeight: 700,
    padding: '.18rem .55rem',
    borderRadius: '0 0 6px 6px',
    textTransform: 'uppercase',
    letterSpacing: '.4px',
  },
  top: {
    padding: '1.1rem 1.1rem .9rem',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '.85rem',
    borderBottom: '0.5px solid #EEF1F8',
  },
  logoBox: {
    width: '48px',
    height: '48px',
    borderRadius: '9px',
    background: '#F7F8FC',
    border: '0.5px solid #EEF1F8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    overflow: 'hidden',
  },
  logoImg:  { width: '100%', height: '100%', objectFit: 'contain' },
  initials: { fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '.75rem', color: '#0A1628' },
  titleArea: { flex: 1, minWidth: 0 },
  companyName: { fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '.95rem', color: '#0A1628' },
  jobType:     { fontSize: '.73rem', color: '#8896A8', marginTop: '.15rem' },
  badge: {
    padding: '.22rem .65rem',
    borderRadius: '99px',
    fontSize: '.65rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '.3px',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
  meta: {
    padding: '.85rem 1.1rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '.5rem',
  },
  metaItem:  { display: 'flex', flexDirection: 'column', gap: '.1rem' },
  metaLabel: { fontSize: '.65rem', color: '#8896A8', textTransform: 'uppercase', letterSpacing: '.4px' },
  metaVal:   { fontSize: '.82rem', color: '#0A1628', fontWeight: 500 },
  branches: {
    padding: '0 1.1rem .7rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '.35rem',
  },
  branchTag: {
    background: '#EBF2FF',
    color: '#1A56DB',
    fontSize: '.67rem',
    fontWeight: 500,
    padding: '.18rem .5rem',
    borderRadius: '5px',
  },
  actions: {
    padding: '.85rem 1.1rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '.45rem',
    borderTop: '0.5px solid #EEF1F8',
    marginTop: 'auto',
  },
  btn: {
    padding: '.5rem .4rem',
    borderRadius: '8px',
    fontSize: '.75rem',
    fontWeight: 500,
    border: '0.5px solid rgba(0,0,0,0.09)',
    textAlign: 'center',
    transition: 'all .15s',
    display: 'block',
    textDecoration: 'none',
    fontFamily: 'DM Sans, sans-serif',
  },
  btnApply:    { background: '#C0261E', color: '#fff', borderColor: '#C0261E', fontWeight: 600 },
  btnSec:      { background: '#fff', color: '#4A5568' },
  btnResult:   { background: '#EBF2FF', color: '#1A56DB', borderColor: 'rgba(30,79,216,0.2)', fontWeight: 600 },
  btnDisabled: { background: '#EEF1F8', color: '#8896A8', cursor: 'not-allowed' },
}