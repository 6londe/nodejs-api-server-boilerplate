import morgan from 'morgan';

const logger = (app) => {
  if (process.env.NODE_ENV !== 'test') {
    app.use(morgan(':date[iso] :method :url :status - :response-time ms'));
  }
};

export default logger;
