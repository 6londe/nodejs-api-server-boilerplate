import { describe } from 'mocha';
import userRoute from './user.route.test';

export default (test) => {
  describe('v1 Test', () => {
    userRoute(test);
  });
};
