import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import FilterBar from '../components/FilterBar'
import DriveCard from '../components/DriveCard'
import Footer from '../components/Footer'
import useDrives from '../hooks/useDrives'

export default function Drives() {
  const [search, setSearch]         = useState('')
  const [activeFilter, setActiveFilter] = useState('ALL')

  const params = {}
  if (activeFilter !== 'ALL') params.status = activeFilter
  if (search) params.search = search

  const { drives, loading, error } = useDrives(params)

  return (
    <div style={s.page}>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }

        @media (max-width: 640px) {
          .drives-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Navbar />

      {/* ── PAGE HEADER ── */}
      <div style={s.header}>
        <div style={s.headerInner}>
          <div style={s.tag}>Placement Drives</div>
          <h1 style={s.headerH1}>All Company Drives</h1>
          <p style={s.headerSub}>
            Browse, filter, and apply to placement drives from top recruiters
          </p>
          {!loading && (
            <div style={s.countBadge}>
              {drives.length} drive{drives.length !== 1 ? 's' : ''} found
            </div>
          )}
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div style={s.content}>
        <FilterBar
          search={search}
          onSearch={setSearch}
          active={activeFilter}
          onFilter={setActiveFilter}
        />

        {loading && (
          <div style={s.loading}>
            <div style={s.spinner} />
            <span>Loading drives...</span>
          </div>
        )}

        {error && (
          <div style={s.errorBox}>
            Could not load drives. Make sure the backend is running.
          </div>
        )}

        {!loading && !error && drives.length === 0 && (
          <div style={s.empty}>
            <div style={s.emptyIcon}>🔍</div>
            <div style={s.emptyText}>No drives found</div>
            <div style={s.emptySub}>Try changing your filter or search term</div>
          </div>
        )}

        {!loading && drives.length > 0 && (
          <div style={s.grid} className="drives-grid">
            {drives.map(drive => <DriveCard key={drive.id} drive={drive} />)}
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

const s = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  },
  header: {
    background: 'linear-gradient(135deg,#8B1A13 0%,#C0261E 100%)',
    padding: 'clamp(1.75rem,4vw,2.5rem) 1.25rem',
    color: '#fff',
  },
  headerInner: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  tag: {
    display: 'inline-block',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: '0.68rem',
    fontWeight: 700,
    color: 'rgba(212,175,55,0.9)',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    marginBottom: '0.45rem',
  },
  headerH1: {
    fontFamily: 'Outfit, sans-serif',
    fontWeight: 800,
    fontSize: 'clamp(1.45rem,3.5vw,2.2rem)',
    color: '#fff',
    marginBottom: '0.45rem',
    letterSpacing: '-0.3px',
    lineHeight: 1.1,
  },
  headerSub: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    color: 'rgba(255,255,255,0.6)',
    fontSize: '0.875rem',
    marginBottom: '1rem',
    lineHeight: 1.65,
  },
  countBadge: {
    display: 'inline-block',
    background: 'rgba(212,175,55,0.18)',
    border: '1px solid rgba(212,175,55,0.38)',
    color: '#D4AF37',
    padding: '0.25rem 0.72rem',
    borderRadius: '99px',
    fontSize: '0.72rem',
    fontWeight: 600,
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  },
  content: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: 'clamp(1.25rem,3vw,2rem) 1.25rem',
    width: '100%',
    flex: 1,
    boxSizing: 'border-box',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))',
    gap: '1rem',
  },
  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.85rem',
    padding: '4rem 1rem',
    color: '#8896A8',
    fontSize: '0.875rem',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  },
  spinner: {
    width: '30px',
    height: '30px',
    border: '3px solid #EEF1F8',
    borderTop: '3px solid #C0261E',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  },
  errorBox: {
    background: '#FDECEA',
    border: '1px solid #f5c6c6',
    color: '#C0392B',
    padding: '1rem 1.25rem',
    borderRadius: '10px',
    fontSize: '0.875rem',
    textAlign: 'center',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  },
  empty: {
    textAlign: 'center',
    padding: 'clamp(2rem,6vw,4rem) 1rem',
  },
  emptyIcon: {
    fontSize: '2.25rem',
    marginBottom: '0.7rem',
  },
  emptyText: {
    fontFamily: 'Outfit, sans-serif',
    fontWeight: 700,
    fontSize: '1.05rem',
    color: '#0A1628',
    marginBottom: '0.4rem',
  },
  emptySub: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: '0.85rem',
    color: '#8896A8',
  },
}