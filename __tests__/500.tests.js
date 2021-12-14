const { server } = require('../src/server')
const supertest = require('supertest')
const request = supertest(server)

xdescribe('web server can handle Server Errors', () => {

  it('can respond with a 500 on an invalid route', async () => {
    const response = await request.put('/foobar')
    expect(response.status).toBe(500)
  })
} )
