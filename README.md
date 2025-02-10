# F1 API SDK

This is a simple SDK created to help developers to use [f1api.dev](https://f1api.com/) api in their projects. Compatible with ES6 and CommonJS.

F1 API is a free and open source API that provides data about Formula 1 races, drivers, teams, and circuits.

## Installation

You can use npm, pnpm, yarn or bun to install this package. [npm package](https://www.npmjs.com/package/@f1api/sdk)

```bash
npm install @f1api/sdk
```

## Usage

### Initialize the SDK

You can use coommonjs or ES6 import to initialize the SDK.

```js
import F1Api from "@f1api/sdk"

const f1Api = new F1Api()
```

### Use any method to retrieve endpoint data

```js
const drivers = await f1Api.getDrivers()
```

## Endpoints

You can find all the available endpoints in the [docs](https://f1api.dev/docs) section of the website.

## Contributing

Contributions are welcome! Also you can give a star to this repository if you like it. Or in the [F1 API GitHub repo](https://github.com/rafacv23/f1-api).
