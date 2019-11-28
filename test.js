const { expect } = require('chai')
const OBJ = {name: 'ok'}
describe('一个毫无意义的测试', function () {
  it('单元测试1', function (done) {
    expect(OBJ.name).to.equal('ok')
    done()
  })
})