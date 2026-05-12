import React from 'react'

function getYouTubeId(url) {
  const match = url?.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )
  return match ? match[1] : null
}

export default function VideoCard({ story }) {
  const { student_name, branch, batch_year, company_placed, package: pkg, video_url } = story
  const ytId = getYouTubeId(video_url)
  const thumb = ytId
    ? `https://img.youtube.com/vi/${ytId}/mqdefault.jpg`
    : null

  const handleClick = () => {
    if (video_url) window.open(video_url, '_blank')
  }

  return (
    <div style={styles.card} onClick={handleClick}>
      <div style={styles.thumb}>
        {thumb
          ? <img src={thumb} alt={student_name} style={styles.thumbImg} />
          : <div style={styles.thumbFallback} />}
        <div style={styles.playOverlay}>
          <div style={styles.playBtn}>
            <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, fill: '#0A1628' }}>
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      <div style={styles.info}>
        <div style={styles.name}>{student_name}</div>
        <div style={styles.detail}>{branch} {batch_year} · {company_placed}</div>
        {pkg && <div style={styles.pkg}>{pkg}</div>}
      </div>
    </div>
  )
}

const styles = {
  card: {
    background: 'rgba(255,255,255,0.05)',
    border: '0.5px solid rgba(255,255,255,0.1)',
    borderRadius: '14px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform .2s',
  },
  thumb: {
    aspectRatio: '9/16',
    position: 'relative',
    overflow: 'hidden',
    background: 'rgba(255,255,255,0.06)',
  },
  thumbImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.6,
  },
  thumbFallback: {
    width: '100%',
    height: '100%',
    background: 'rgba(255,255,255,0.04)',
  },
  playOverlay: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0,0,0,0.3)',
  },
  playBtn: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    background: '#D4AF37',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: { padding: '.75rem .9rem' },
  name: { fontSize: '.82rem', fontWeight: 600, color: '#fff', lineHeight: 1.4 },
  detail: { fontSize: '.72rem', color: 'rgba(255,255,255,0.45)', marginTop: '.15rem' },
  pkg: { fontSize: '.75rem', color: '#D4AF37', fontWeight: 600, marginTop: '.2rem' },
}