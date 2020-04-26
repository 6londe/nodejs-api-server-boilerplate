import '@babel/polyfill';
import mongoose from 'mongoose';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../../../src';
import User from '../../../src/models/user.model';

chai.use(chaiHttp);
const { expect } = chai;
const dummyId = mongoose.Types.ObjectId();
const dummyEmail = 'dummy@dummy.com';
const dummyName = 'dummyUser';

describe('Test user.route.js', () => {
  describe('Initialize..', () => {
    it('it should empty user test database without error', (done) => {
      User.deleteMany({}, () => { done(); });
    });
    it('it should create dummy user without error', (done) => {
      User.create({ _id: dummyId, email: dummyEmail, name: dummyName }, () => { done(); });
    });
  });

  describe('POST /v1/users', () => {
    it('it should return status code 201', (done) => {
      chai
        .request(app)
        .post('/v1/users')
        .send({ email: 'test@test.com', name: 'testUser' })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body.data.email).to.equal('test@test.com');
          expect(res.body.data.name).to.equal('testUser');
          done();
        });
    });
  });

  describe('GET /v1/users', () => {
    it('it should return status code 200', (done) => {
      chai
        .request(app)
        .get('/v1/users')
        .query({ offset: 0, limit: 1 })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.data).to.be.an('array');
          done();
        });
    });
  });

  describe('GET /v1/users/{id}', () => {
    it('it should return status code 200', (done) => {
      chai
        .request(app)
        .get(`/v1/users/${dummyId}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.data).to.be.an('object');
          expect(res.body.data.email).to.eql(dummyEmail);
          expect(res.body.data.name).to.eql(dummyName);
          done();
        });
    });
    it('it should return status code 404 with user not found error', (done) => {
      chai
        .request(app)
        .get(`/v1/users/${mongoose.Types.ObjectId()}`)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body.message).to.eql('user not found');
          done();
        });
    });
  });

  describe('PUT /v1/users/{id}', () => {
    it('it should return status code 200', (done) => {
      chai
        .request(app)
        .put(`/v1/users/${dummyId}`)
        .send({ email: 'modified@test.com', name: 'modifiedUser' })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.data.email).to.equal('modified@test.com');
          expect(res.body.data.name).to.equal('modifiedUser');
          done();
        });
    });
    it('it should return status code 404 with user not found error', (done) => {
      chai
        .request(app)
        .put(`/v1/users/${mongoose.Types.ObjectId()}`)
        .send({})
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body.message).to.eql('user not found');
          done();
        });
    });
  });

  describe('DELETE /v1/users/{id}', () => {
    it('it should return status code 200', (done) => {
      chai
        .request(app)
        .delete(`/v1/users/${dummyId}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
    it('it should return status code 404 with user not found error', (done) => {
      chai
        .request(app)
        .delete(`/v1/users/${dummyId}`)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body.message).to.eql('user not found');
          done();
        });
    });
  });
});
