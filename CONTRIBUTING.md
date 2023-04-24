# Contributing

First of all, make sure you have all settings up for Easy hooks to run it locally:

1. Fork and clone this repo
2. Install dependencies using:

```
$ npm ci
```

This project follows the
[conventional-commit](https://www.conventionalcommits.org/en/v1.0.0/) pattern
and, to help you with it, we use
[commitizen](http://commitizen.github.io/cz-cli/). So, everytime you want to
commit some change, please use:

```
$ npm run commit
```

We usually follow the `{{feat|fix|doc|ci}}/{{what-am-i-doing}}` for branch names.

## New Custom Hook

At Easy Hooks, a Custom Hook isn't just one file. It has its own tests, exports,
and so on. To make it easy, there is a script at the root:

```
$ npm run generate
```

This will create/edit all files for the NewHook:

```
src
├─hooks
│   └─hook
│       ├─useHook.ts
│       ├─useHook.spec.ts
├─index.ts
```

#### Test

All Easy Hooks have tests. To execute it for just one component, you
can run:

```
$ npm test /path/to/your/component
```

When you finish the development of your custom hook, don't forget to add its
tests!

Before pushing your changes, certify all tests are passing, running:

```
$ npm test
```

## Git Hooks

We have two hooks inside Yoga repo:

1. `pre-commit`: run eslint on all repo
2. `pre-push`: run `npm test`