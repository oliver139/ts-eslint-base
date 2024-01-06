# ts-eslint-base

A well setup template for starting a typescript project. Used rollup as project bundler.  
Linter will automatically run upon `git commit`.

## Project Setup

PNPM with node 18.18.2 is used.

```sh
pnpm install
```

### Run src/index.ts

```sh
pnpm start
```

### Build the project with Rollup

```sh
pnpm build
```

### Build the project with Tsc

```sh
pnpm build:tsc
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```