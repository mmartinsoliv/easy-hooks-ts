import { renderHook, act } from '@testing-library/react'
import { useTest } from './useTest'

test('should render the useTest', () => {
  const { result } = renderHook(useTest)
  expect(result.current.count).toBe(0)
  act(() => result.current.handleCount())
  expect(result.current.count).toBe(1)
})
