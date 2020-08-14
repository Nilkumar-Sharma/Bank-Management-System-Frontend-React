let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);
//Our parent block
describe('Loan', () => {
   
    describe('Get ', () => {
        it('it should return all the applied loans with 200 status code', (done) => {
            chai.request(server)
                .get(`${process.env.API_URL}/loan`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });

});