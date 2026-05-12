import { useState, useEffect } from 'react'
import { getStories } from '../services/about'

export default function useAbout() {
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    getStories()
      .then(res => setStories(res.data.results || res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return { stories, loading, error }
}