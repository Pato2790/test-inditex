import { useEffect, useState } from 'react'
import axios from 'axios'

const useGet = (path, id) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchUrl () {
    const url = id
      ? `${process.env.REACT_APP_API_URL}/${path}/${id}`
      : `${process.env.REACT_APP_API_URL}/${path}`

    const { data } = await axios.get(url)
    setData(data)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    fetchUrl()
  }, [])

  return [data, loading]
}

export default useGet
