# nodejs-api-server-boilerplate

Minimal Boilerplate for Node.js API Server with Mongodb

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Included

- Node Server with `express.js`
- API Example with Router-Controller-Model Structure
- Mongodb CRUD with `mongoose`
- Swagger API Documentation
- Test
- Dockerfile

## Usage

### Config

Create `.env` on project root.

```
SERVER_IP=0.0.0.0
SERVER_PORT=3000
MONGODB_USERNAME=admin
MONGODB_PASSWORD=admin
```

### Run

```
$ sudo apt-get install npm nodejs mongodb
$ npm install
$ npm start
```

### Run with Docker

First, [Install docker & docker-compose](https://gist.github.com/6londe/20b5d5ac0bf3d475997b0a676a040d4b)

```
$ docker-compose up
```

### Test

```
$ npm run test
```

### Swagger Documentation

```
localhost:3000/swagger
```

## File Tree

```
├── src/
│   ├── index.js            1. receive request
│   ├── routes/             2. route request by url
│   ├── middlewares/        3. authenticate or check something
│   ├── controllers/        4. do some business logic
│   ├── models/             5. query database
│   ├── utils/              - utilities
├── tests/                  - api test codes
└── config.js               - server configurations
```

## Packages

- Framework: [express](https://www.npmjs.com/package/express)
- Database: [mongoose](https://www.npmjs.com/package/mongoose)
- Documentation: [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc), [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
- Test: [mocha](https://www.npmjs.com/package/mocha), [chai](https://www.npmjs.com/package/chai)
- Logger: [morgan](https://www.npmjs.com/package/morgan)
