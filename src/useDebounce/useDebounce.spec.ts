import { describe, test } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useDebounce } from './useDebounce'

describe('useDebounce', () => {
  test('should return the initial value', () => {
    const { result } = renderHook(() => useDebounce('hello', 1000))

    expect(result.current).toBe('hello')
  })

  test('should return the debounced value', async () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: 'hello', delay: 1000 }
    })

    expect(result.current).toBe('hello')

    // Rerender with a new value
    rerender({ value: 'world', delay: 1000 })

    // Should still be the old value
    expect(result.current).toBe('hello')

    // Fast-forward time by 500ms
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Should now be the new value
    expect(result.current).toBe('hello')
  })
})
