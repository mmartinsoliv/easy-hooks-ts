import { renderHook, act } from '@testing-library/react'
import { useCount } from './useIsMobile'

test('should render the useCount', () => {
  const { result } = renderHook(useCount)
  expect(result.current.count).toBe(1)
  act(() => result.current.handleCount())
  expect(result.current.count).toBe(2)
})
