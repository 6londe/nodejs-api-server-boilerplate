import supertest from 'supertest';
import { describe, it } from 'mocha';
import app from '../src';

describe('GET /v1', () => {
  it('should return 200', (done) => {
    supertest(app)
      .get('/v1')
      .expect(200, done);
  });
});
