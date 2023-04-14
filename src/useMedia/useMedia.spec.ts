import { renderHook, act } from '@testing-library/react'
import { useMedia } from './useMedia'

test('should render the useMedia', () => {
  const { result } = renderHook(useMedia)
  expect(result.current.count).toBe(0)
  act(() => result.current.handleCount())
  expect(result.current.count).toBe(1)
})
