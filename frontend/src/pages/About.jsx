import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutHero from '../components/about/AboutHero'
import AboutOverview from '../components/about/AboutOverview'
import AchievementStats from '../components/about/AchievementStats'
import PlacementTimeline from '../components/about/PlacementTimeline'
import RecruitersSection from '../components/about/RecruitersSection'
import TeamSection from '../components/about/TeamSection'
import AboutCTA from '../components/about/AboutCTA'
import WhatsAppButton from '../components/WhatsAppButton'

// MassiveMediaWall and AutoMovingReelsStrip removed per design cleanup

export default function About() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <AboutHero />
      <AboutOverview />
      <AchievementStats />
      <PlacementTimeline />
      <RecruitersSection />
      <TeamSection />
      <AboutCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}