import { renderHook, act } from '@testing-library/react'
import { useHotKey } from './useHotKey'

test('should render the useHotKey', () => {
  const { result } = renderHook(useHotKey)
  expect(result.current.count).toBe(0)
  act(() => result.current.handleCount())
  expect(result.current.count).toBe(1)
})
