const request = require('supertest');
const app = require('../index');

describe('Test endpoint /', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(3000, done);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should return 200 and Hello message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello Docker + CI/CD!');
  });
});