import dotenv from "dotenv";

dotenv.config();

const config = {
  server: {
    host: process.env.SERVER_IP || "localhost",
    port: process.env.SERVER_PORT || 3333,
  },
  database: {
    name: "database",
    host: process.env.MONGODB_IP || "localhost",
    port: process.env.MONGODB_PORT || 27017,
    username: process.env.MONGODB_USERNAME || "admin",
    password: process.env.MONGODB_PASSWORD || "admin",
    options: {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
  },
};

if (process.env.NODE_ENV === "production") {
  config.database.options = {
    ...config.database.options,
    authSource: "admin",
    auth: {
      username: config.database.username,
      password: config.database.password,
    },
  };
} else if (process.env.NODE_ENV === "test") {
  config.database.name += "-test";
  config.server.port = 3456;
}

config.database.uri = `mongodb://${config.database.host}:${config.database.port}/${config.database.name}`;

export default config;
