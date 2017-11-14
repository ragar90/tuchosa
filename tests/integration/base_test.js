var chai = require('chai')
var assert = chai.assert
var expect = chai.expect
var chaiHttp = require('chai-http');
var server = require('../../server')
chai.use(chaiHttp);


describe('GET /api/comanda', function () {
  describe('WHEN comanda has been created', function () {
    before(function () {
      
    })
    it('SHOULD retrieve a full comanda', function (done) {
      chai.request(server)
        .get('/api/test')
        .send()
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200)
          expect(res.body.field_1).to.equal('Hola')
          expect(res.body.field_2).to.equal('Mundo')
          done()
        })
    })

    it('Another test', function () {
      
    })
  })

})