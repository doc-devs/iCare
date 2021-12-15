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

describe('web server can Client errors on a Resourse Not Found', () => {
  it('can respond with a 404 on an invalid http method', async () => {
    const response = await request.put('/api')
    expect(response.status).toBe(404)
  })
  it('can respond with a 404 on an invalid endpoint', async () => {
    const response = await request.put('/hello')
    expect(response.status).toBe(404)
  })
} )
