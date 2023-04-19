import { useState, useEffect } from 'react'

interface FetchState<T> {
  isLoading: boolean
  error: string | null
  data: T | null
}

type UseFetchReturn<T> = [FetchState<T>, React.Dispatch<React.SetStateAction<string>>]

function useFetch<T>(initialUrl: string): UseFetchReturn<T> {
  const [url, setUrl] = useState(initialUrl)
  const [fetchState, setFetchState] = useState<FetchState<T>>({
    isLoading: false,
    error: null,
    data: null
  })

  useEffect(() => {
    const fetchData = async () => {
      setFetchState({ isLoading: true, error: null, data: null })

      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`)
        }
        const data = await response.json()
        setFetchState({ isLoading: false, error: null, data })
      } catch (error) {
        if (error instanceof Error) {
          setFetchState({ isLoading: false, error: error.message, data: null })
        } else {
          return 'Unexpected error'
        }
      }
    }

    fetchData()
  }, [url])

  return [fetchState, setUrl]
}

export { useFetch }
