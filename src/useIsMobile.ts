import { useState } from 'react'

export const useCount = () => {
  const [count, setCount] = useState(1)

  const handleCount = () => {
    setCount(count + 1)
  }

  return { count, handleCount }
}
