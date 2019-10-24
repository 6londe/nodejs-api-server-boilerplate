const config = {
  server: {
    host: 'localhost',
    port: 3000,
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
      autoReconnect: true,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 5000,
      useCreateIndex: true,
      useFindAndModify: false,
    },
  },
};

config.database.uri = process.env.NODE_ENV === 'production'
  ? `mongodb://${config.database.user}:${config.database.password}@${config.database.host}:${config.database.port}/${config.database.name}`
  : `mongodb://${config.database.host}:${config.database.port}/${config.database.name}`;

export default config;
