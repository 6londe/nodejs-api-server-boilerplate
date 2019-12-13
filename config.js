const config = {
  server: {
    host: process.env.IP || 'localhost',
    port: process.env.PORT || 3000,
  },
  database: {
    host: 'localhost',
    port: 27017,
    name: 'mongodb',
    user: 'admin',
    password: '123',
    options: {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
  },
};

if (process.env.NODE_ENV === 'test') config.database.name += '-test';

config.database.uri = process.env.NODE_ENV === 'production'
  ? `mongodb://${config.database.user}:${config.database.password}@${config.database.host}:${config.database.port}/${config.database.name}`
  : `mongodb://${config.database.host}:${config.database.port}/${config.database.name}`;

export default config;
