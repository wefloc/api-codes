# api-codes
[![PRs Welcome][prs-badge]][prs]

## Description

This repository provides an interface to easily understand back-end errors from client point of view. Error codes and their translations are centralized in this repository.

## Install

```
yarn add @rimiti/api-codes
```

## How to use it?

### API response

The API use the following schema to return an error.

```json
{
  "errorKey": "carts:client:cartNotFound",
  "errorMessage": "Cart was not found"
}
```

You can then use the `errorKey` as follow :

```js
import errors from '@rimiti/api-codes';

// Get all codes
errors.getAll();

// Get one error using its error key
errors.get('orders:client:invalidEmail'); // string must match <resource>:<scope>:<message>
errors.get('not-an-error'); // => throws an error
```

An error is defined as below

```ts
interface IFullCode {
  status: EHttpCode; // HTTP response code
  i18n: (lang?: ELocal) => string;
}
```

You can also get the i18n translation of each error message.

English is defined as the default language so calling `.i18n()` without argument will return the english translation by default.

```js
errors.get('orders:client:cartTripNotFound').i18n(); // => string
errors.get('orders:client:cartTripNotFound').i18n('fr_FR'); // => string
errors.get('orders:client:cartTripNotFound').i18n('en_US'); // => string
errors.get('orders:client:cartTripNotFound').i18n('Not-A-Language'); // => throws an error
```

## Scripts

Run using yarn run `<script>` command.

    clean       - Remove temporarily folders.
    build       - Compile source files.
    build:watch - Interactive watch mode, compile sources on change.
    lint        - Lint source files.
    lint:fix    - Fix lint source files.
    test        - Runs all tests with coverage.
    test:watch  - Interactive watch mode, runs tests on change.

## License
MIT © [Dimitri DO BAIRRO](https://dimsolution.com)

[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
