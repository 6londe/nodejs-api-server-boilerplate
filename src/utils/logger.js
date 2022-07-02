import morgan from "morgan";

const logger = (app) => {
  app.use(morgan(":date[iso] :method :url :status - :response-time ms"));
};

export default logger;
