import { describe, it } from 'mocha';

export default (test) => {
  describe('/v1/users', () => {
    describe('GET', () => {
      it('should return 200', (done) => {
        test
          .get('/v1/users')
          .expect(200, done);
      });
    });
  });
};
