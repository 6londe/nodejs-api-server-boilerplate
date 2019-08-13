import v1 from './v1';
import swagger from './swagger';

export default (app) => {
  app.use('/v1', v1);
  app.use('/swagger', swagger);
};
