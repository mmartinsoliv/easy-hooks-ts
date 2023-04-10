import { useState } from 'react'

export const useCount = () => {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount(count + 1)
  }

  return { count, handleCount }
}
