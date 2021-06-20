import { useEffect, useState } from 'react'

const useFetch = (path) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchUrl () {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${path}`)
    const json = await response.json()
    setData(json)
    setLoading(false)
  }

  useEffect(() => {
    fetchUrl()
  }, [])

  return [data, loading]
}

export { useFetch }
