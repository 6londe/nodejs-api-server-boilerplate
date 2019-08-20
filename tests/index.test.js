import '@babel/polyfill';
import supertest from 'supertest';
import { describe } from 'mocha';
import app from '../src';
import routes from './routes/index.test';

describe('Server Test', () => {
  const testApp = supertest(app);
  routes(testApp);
});
