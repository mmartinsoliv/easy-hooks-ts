import { useState } from 'react'

interface UseClipboardOptions {
  timeout?: number
}

interface UseClipboardResult {
  hasCopied: boolean
  handleCopy: (text: string) => void
  reset: () => void
}

export const useClipboard = ({ timeout = 2000 }: UseClipboardOptions = {}): UseClipboardResult => {
  const [hasCopied, setHasCopied] = useState(false)
  const [copyTimeout, setCopyTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setHasCopied(true)
      if (timeout) {
        const timeoutId = setTimeout(() => setHasCopied(false), timeout)
        setCopyTimeout(timeoutId)
      }
    })
  }

  const reset = () => {
    setHasCopied(false)
    if (copyTimeout) {
      clearTimeout(copyTimeout)
    }
  }

  return { hasCopied, handleCopy, reset }
}
