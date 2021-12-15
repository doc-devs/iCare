'use strict'
const { server, start } = require('../src/server')
const userRoutes = require('../src/auth/authRoute')

beforeEach(() => {
  jest.resetModules();
});

// const useSpy = jest.fn();
// const listenSpy = jest.fn();

// jest.doMock('../src/server', () => {
//   return () => ({
//     use: useSpy,
//     listen: listenSpy,
//   })
// });

xdescribe('should test server listen and use properties',()=>{
  
  test('should call listen fn', () => {
    jest.doMock('../src/server', () => {
      return jest.fn()
    });
    const port = 8000
    console.log('**',server.listen())
    expect(server.listen()).toHaveBeenCalledWith(start(port))

  });

  xtest('use router', () => {
    // expect(useSpy).toHaveBeenCalledWith(userRoutes);
  });
})
