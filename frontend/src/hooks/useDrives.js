import { useState, useEffect } from 'react'
import { getDrives } from '../services/drives'

export default function useDrives(params = {}) {
  const [drives, setDrives]   = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    setLoading(true)
    getDrives(params)
      .then(res => setDrives(res.data.results || res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [JSON.stringify(params)])

  return { drives, loading, error }
}