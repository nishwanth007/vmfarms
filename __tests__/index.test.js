const supertest = require('supertest')
const app = require('../server')
const request = supertest(app)
describe('Post Endpoints', () => {
    
  it('testing with a name in the query', async () => {
    const res = await request.get('/hello/?name=James')
    expect(res.statusCode).toEqual(200)
    expect(res.text).toEqual('Hello James!');
  })

  it('testing without a name', async () => {
    const res = await request.get('/hello')
    expect(res.statusCode).toEqual(200)
    expect(res.text).toEqual('Hello Stranger!');
  })

  it('Failure condition', async () => {
    const res = await request.get('/hello/?name=John')
    expect(res.statusCode).toEqual(200)
    expect(res.text).toEqual('Hello Stranger!');
  })

  it('Failure hitting a wrong endpoint', async () => {
    const res = await request.get('/helo/?name=John')
    expect(res.statusCode).toEqual(200)
    expect(res.text).toEqual('Hello John!');
  })

})