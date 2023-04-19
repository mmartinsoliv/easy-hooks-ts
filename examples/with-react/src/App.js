import * as React from 'react'
import { useToggle } from 'easy-hooks-ts'

export default function App() {
  const [value, toggle, setValue] = useToggle()

  const customToggle = () => setValue((x) => !x)

  return (
    <div>
      <h1>Hello easy-hooks-ts!</h1>
      <p>
        Value is <code>{value.toString()}</code>
      </p>
      <button onClick={() => setValue(true)}>set true</button>
      <button onClick={() => setValue(false)}>set false</button>
      <button onClick={toggle}>toggle</button>
      <button onClick={customToggle}>custom toggle</button>
    </div>
  )
}
