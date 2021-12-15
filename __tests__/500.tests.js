'use strict'

const { server } = require('../src/server')
const { db } = require('../src/auth/models/index')
const supertest = require('supertest')
const request = supertest(server)

beforeAll(async () => {
  await db.sync()
});

afterAll(async () => {
  await db.drop()
});

xdescribe('web server can handle internal server errors', () => {

  it('500 on a bad route', async () => {
    const response = await request.get('/signin').auth('admin', 'xyz')
    expect(response.status).toBe(500);
  })
  it('500 on a bad route', async () => {
    const response = await request.post('/signin');
    console.log('1',response)
    expect(response.status).toEqual(500);
    // expect(response.body.route).toEqual('/bad');
  })
})
