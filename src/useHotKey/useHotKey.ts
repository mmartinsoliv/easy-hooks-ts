import { useState } from 'react'

export const useHotKey = () => {
  const [count, setCount] = useState(1)

  const handleCount = () => {
    setCount(count + 1)
  }

  return { count, handleCount }
}
