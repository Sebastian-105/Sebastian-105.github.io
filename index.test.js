const request = require('supertest');
const { app } = require('./app');

describe('/hello1', () => {
  it('returns `Hello World!`', async () => {
    const data = await request(app).get('/hello1');
    expect(data.statusCode).toBe(200);
    expect(data.body.message).toBe('Hello World!');
  });
});