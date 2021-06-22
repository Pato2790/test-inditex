import { useCallback, useState } from 'react'
import axios from 'axios'

const usePost = (path, body) => {
  const [data, setData] = useState({})

  const postData = useCallback(() => {
    axios.post(`${process.env.REACT_APP_API_URL}/${path}`, body)
      .then(({ data }) => setData(data))
  }, [path, body])

  return [data, postData]
}

export default usePost
