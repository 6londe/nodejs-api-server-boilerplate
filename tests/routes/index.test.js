import { describe } from 'mocha';
import v1 from './v1/user.route.test';

export default (test) => {
  describe('Routes Test', () => {
    v1(test);
  });
};
