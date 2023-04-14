import { useState } from 'react'

export const useCount = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return { count, handleClick }
}
