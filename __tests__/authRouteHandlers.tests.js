const supertest = require('supertest');
const { server } = require('../src/server')
const { db } = require('../src/auth/models/index')
const mockRequest = supertest(server);

beforeAll( async () => {
  await db.sync();
});
afterAll( async () => {
  await db.drop();
});

describe('can successfully perform CRUD using auth route handlers', () => {

  it('can go to the user portal on a GET /userPortal', async () => {
    const res = await mockRequest.get('/userPortal')
    const msg = 'Hello, Welcome to Auth-API \n if you\'re a New Nurse or Doctor go to /signup \n if you\'ve already signed up sign in at /signin'

    expect(res.status).toEqual(200)
    expect(res.text).toEqual(msg)
  })
  
  it('can CREATE an new user on a POST /signup', async () => {
    const user = {
      username: 'admin',
      password: 'password',
      jobDescription: 'nurse',
      role: 'admin'
    }
    const res = await mockRequest.post('/signup').send(user)
    expect(res.status).toEqual(201)
    expect(res.body.user.username).toEqual('admin')
    expect(res.body.user.role).toEqual('admin')
    expect(res.body.token).toBeDefined()
  })

  it('can catch an error when Create an new user on a POST /signup', async () => {
    const user = {
      username: 'admin',
      password: 'password',
      role: 'admin'
    }
    const res = await mockRequest.post('/signup').send(user)

    expect(res.status).toEqual(409)
  })
 
   it('can POST returning user credentials on a POST /signin', async () => {
    const response = await mockRequest.post('/signin').auth('admin','password')
    expect(response.status).toEqual(200)
    expect(response.body.user.username).toEqual('admin')
    expect(response.body.user.role).toEqual('admin')
    expect(response.body.token).toBeDefined()
   })

   it('can catch an error when POST returning user credentials on a POST /signin', async () => {
    const res = await mockRequest.post('/signin').auth('admi','password')

    expect(res.status).toEqual(409)
    expect(res.text).toEqual('Invalid login, please try again')
   })

})
