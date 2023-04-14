import { renderHook, act } from '@testing-library/react'
import { useCount } from './useIsMobile'

test('should render the useCount', () => {
  const { result } = renderHook(useCount)
  expect(result.current.count).toBe(0)
  act(() => result.current.handleClick())
  expect(result.current.count).toBe(1)
})
