# TypeScript Template

Set up a TypeScript project with Jest, Prettier, ESLint, nodemon, precommit (Husky + lint-staged), and github workflows (Type check, code format, code analysis, and tests).

## Getting Started

### Use the project's node version with NVM

Use `nvm` to manage node versions. If you prefer other versions, update the `.nvmrc` file with your prefered version.

```bash
nvm use
```

### Install all dependencies

This project template uses `yarn` over other dependency managers.

```bash
yarn
```

### Running the server

It uses nodemon as a dev server. Just run:

```bash
yarn dev
```

### Running tests

You can run all tests:

```bash
yarn test
```

Or watch tests:

```bash
yarn test:watch
```

### CI Worflow

For every push, it will run a github action:

- `node`: Use Node.js (.nvmrc)
- `deps`: Install dependencies
- `typecheck`: Type check code w/ TypeScript
- `prettier`: Check code format w/ Prettier
- `eslint`: Analyze code w/ ESLint
- `test`: Run Jest tests

### Pre commit

For every commit, before pushing the changes, it will run ESLint and Prettier to make sure the code is following the correct patterns and format.
