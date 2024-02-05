# @effective/eslint

Welcome to `@effective/eslint`, the one-stop-shop for all your ESLint configurations. Standing on the shoulders of giants, this package amalgamates the best practices and presets from renowned sources such as React, XO, ESLint-TypeScript, Next.js, and more, to deliver a best-of-breed ESLint configuration. It's designed to streamline your development process, ensuring your code is clean, efficient, and adheres to the highest standards of quality.

## Features

- **Comprehensive Configurations:** Leverage a unified ESLint configuration that integrates the best aspects of various popular presets.
- **Fully Customizable:** While `@effective/eslint` provides a robust starting point, we understand one size doesn't fit all. Therefore, you can easily disable or tweak individual rules to perfectly align with your project's needs.
- **Easy to Use:** Get up and running with minimal setup, allowing you to focus on what's important - writing great code.
- **Community-Driven:** Contributions are welcome! Help us refine and expand our configurations to cater to an even broader spectrum of coding standards and practices.

## Installation

To use `@effective/eslint` in your project, you need to install it via `npm`, `yarn` or `pnpm`. Ensure you have ESLint installed in your project; if not, you can install it alongside this package.

```bash
npm install @effective/eslint eslint --save-dev
# or
yarn add @effective/eslint eslint --dev
# or
pnpm add @effective/eslint eslint --dev
```

## Usage

After installation, you can configure ESLint to use @effective/eslint by adding it to your .eslintrc file or the ESLint configuration section of your package.json.

```json
{
  "extends": "@effective/eslint"
}
```

## Rules

You can check the [full resolution table here](rules.md) which shows which rules are active and from where.

### Priorities

This is the list of priorities from different sources to merge into the "effective" list of this preset:

- [XO](https://github.com/xojs/eslint-config-xo): That's about 50+% of our preset. A very good, very TS-focused base for ESLint.
- [TypeScript ESLint](https://typescript-eslint.io/linting/configs/): We are using the strict and stylistic rules, both in the type-enhanced version. A lof of rules from XO are also enabled here, but XO is generally more strict with finer-grained exceptions/options.
- [Create React App](https://create-react-app.dev/): The preset from CRA is focused on React (and JSX-A11Y) and is a very good common-sense oriented React preset. It has practically no overlap with the previous two presets.
- [React](https://www.npmjs.com/package/eslint-plugin-react): Set-up ad few remaining rules not part of CRA

**There are also these very plugin-specific recommendations:**

- [RegExp](https://www.npmjs.com/package/eslint-plugin-regexp): All recommended rules are enabled by default
- [Unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn): All recommended rules are enabled by default
- [JSDOC](https://www.npmjs.com/package/eslint-plugin-jsdoc): Recommended rules except all `"required-*"` as in TS we use this for documentation mainly.

**Explicit unused plugins:**

- [Import](https://www.npmjs.com/package/eslint-plugin-import): The import plugin does not seem as relevant in TypeScript code base anymore. Most presets do not actively enable most rules.

## Contributing

We welcome contributions from the community! Whether it's adding new presets, improving the existing configuration, or fixing bugs, your contributions help make `@effective/eslint` better for everyone. Please refer to our `CONTRIBUTING.md` for guidelines on how to contribute.

## License

[Apache License; Version 2.0, January 2004](http://www.apache.org/licenses/LICENSE-2.0)

## Copyright

<img src="https://cdn.rawgit.com/sebastian-software/sebastian-software-brand/0d4ec9d6/sebastiansoftware-en.svg" alt="Logo of Sebastian Software GmbH, Mainz, Germany" width="460" height="160"/>

Copyright 2024<br/>[Sebastian Software GmbH](https://www.sebastian-software.de)
