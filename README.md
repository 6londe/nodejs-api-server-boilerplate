# nodejs-api-server-minimal-boilerplate
Minimal Boilerplate for Node.js API Server with Mongodb

## Usage

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

## Overview

### Files
```
├── src/
│   ├── index.js            1. receive request
│   ├── routes/             2. route request by url
│   ├── middlewares/        3. authenticate or check something
│   └── validations/        4. validate parameters
│   ├── controllers/        5. do some business logic
│   ├── models/             6. query database
│   ├── utils/              - some utilities
├── tests/                  - api test codes
└── config.js               - server configurations
```

### Packages
- Framework: [express](https://www.npmjs.com/package/express)
- Database: [mongoose](https://www.npmjs.com/package/mongoose)
- Documentation: [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc), [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
- Validation: [express-validation](https://www.npmjs.com/package/express-validation), [joi](https://www.npmjs.com/package/joi)
- Lint: [eslint](https://www.npmjs.com/package/swagger-ui-express)
- Test: [mocha](https://www.npmjs.com/package/mocha), [chai](https://www.npmjs.com/package/chai), [nyc](https://www.npmjs.com/package/nyc)
- Logger: [morgan](https://www.npmjs.com/package/morgan)
- Etc.: [nodemon](https://www.npmjs.com/package/nodemon)
