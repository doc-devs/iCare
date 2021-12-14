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
    console.log(res.text)
    expect(res.status).toEqual(200)
    expect(res.text).toEqual(msg)
  })
  
  // it('can Create an new user on a POST /signup', async () => {
  //   const user = {
  //     username: 'admin',
  //     password: 'password',
  //     role: 'admin'
  //   }

  //   const res = await mockRequest.post('/signup').send(user)
  //   console.log(res.body)
  //   expect(res.status).toEqual(201)
  //   expect(res.body.username).toEqual('admin')
  //   expect(res.body.role).toEqual('admin')
  //   expect(res.body.token).toBeDefined()
  // } )
 
  //https://www.npmjs.com/package/supertest signin using basic/bearer auth
  //  it('can POST returning user credentials on a POST /signin', async () => {
  //   const res = await mockRequest.post('/signin').auth(user.username,user.password)
    
  //   console.log('**',res.body)
  //   expect(res.status).toEqual(200)
  //   expect(res.body.username).toEqual('admin')
  //   expect(res.body.role).toEqual('admin')
  //   expect(res.body.token).toBeDefined()

  //  })

})

// GET   /userPortal     home (P.O.L.)
// POST  /signup         create a user
// POST  /signin         signin with basic auth
// GET   /users          retrieve all users, need permissions
// DEL   /users          delete one users, need permissions
