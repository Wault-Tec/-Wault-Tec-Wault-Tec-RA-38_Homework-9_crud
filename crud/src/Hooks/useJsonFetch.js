import { useState, useEffect } from "react";

function useJsonFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    const controller = new AbortController();
    const {signal} = controller;
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(url, {signal})
          if(!response.ok) {
            throw new Error(response.statusText)
          }
          const data = await response.json()
          setData(data)
      } catch (e) {
          throw new Error(e)
      } finally {
          setLoading(false)
      }
    }
    fetchData()
    return () => {
      controller.abort()
    }
  }, [url])

  return [data, loading]
}

export default useJsonFetch