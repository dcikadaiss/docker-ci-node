const request = require('supertest');
const app = require('../app');

describe('Test endpoint /', () => {
  let server;

  beforeAll(async () => {
    server = app.listen(3000);
    // Attendre que le serveur soit prêt
    await new Promise(resolve => server.once('listening', resolve));
  });

  afterAll(async () => {
    await new Promise(resolve => server.close(resolve));
  });

  it('should return 200 and Hello message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello Docker + CI/CD!');
  });
});