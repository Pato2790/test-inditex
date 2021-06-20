import { useEffect, useState } from 'react'

const useFetch = (path, id) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchUrl() {
    const url = id
      ? `${process.env.REACT_APP_API_URL}/${path}/${id}`
      : `${process.env.REACT_APP_API_URL}/${path}`
      
    const response = await fetch(url)
    const json = await response.json()
    setData(json)
    setLoading(false)
  }

  useEffect(() => {
    fetchUrl()
  }, [])

  return [data, loading]
}

export default useFetch
