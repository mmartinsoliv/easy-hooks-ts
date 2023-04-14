# easy-hooks-ts

### React hook library, ready to use, written in Typescript.

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) [![NPM version](https://img.shields.io/npm/v/easy-hooks-ts)](https://www.npmjs.com/package/easy-hooks-ts)

---

## Status

This project is “semi-maintained” 😅

I don't have the bandwidth right now to look into edge-case issues or help troubleshoot, but I plan on keeping it up-to-date with major React releases, and fixing issues that are both serious and common.

Feel free to create a pull request or issues for features, bug fixes or improvements.

---

## Installation

Package can be added using **yarn**:

```bash
yarn add easy-hooks-ts
```

Or, use NPM:

```bash
npm install easy-hooks-ts
```

---

## Demo

:hammer_and_wrench:	

---

## Examples

### Use `easy-hooks-ts`

```js
import { useCount } from 'easy-hooks-ts';

const BoopButton = () => {
  const [count, handleCount] = useCount()

  return (
     <>
       <h1>Count: {count} </h1>
       <button onClick={handleCount}>increment</button>;
     </>
  )
};
```

## API Documentation

:hammer_and_wrench:
