import { useState } from 'react'

export const useClipboard = ({ timeout = 2000 }) => {
  const [hasCopied, setCopied] = useState(false)
  const [copyTimeout, setCopyTimeout] = useState()

  const isForever = timeout === 0

  const handleCopyResult = (value: boolean) => {
    clearTimeout(copyTimeout)
    if (!isForever) {
      setCopyTimeout(setTimeout(() => setCopied(false), timeout) as any)
    }
    setCopied(value)
  }

  const copy = (text: string) => {
    if ('clipboard' in navigator) {
      navigator.clipboard
        .writeText(text)
        .then(() => handleCopyResult(true))
        .catch(console.error)
    }
  }

  const reset = () => {
    setCopied(false)
    clearTimeout(copyTimeout)
  }

  return { copy, reset, hasCopied }
}
