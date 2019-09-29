process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../app.js');

chai.should();
// chai.expect();

chai.use(chaiHttp);

describe('Reports', () => {

    describe('/', () => {
        it('200', (done) => {
            chai.request(server)
                .get("/")
                .end((err, res) => {
                    res.should.have.status(200);
                    // res.body.should.be.an("object");
                    // res.body.data.blahblah.should.be.an("string");
                    // res.body.data.blahblah.length.should.be.above(0);

                    done();
                });
        });
    });

    describe('/reports/week/1', () => {
        it('200', (done) => {
            chai.request(server)
                .get("/reports/week/1")
                .end((err, res) => {
                    res.should.have.status(200);
                    // res.body.should.be.an("object");
                    // res.body.data.blahblah.should.be.an("string");
                    // res.body.data.blahblah.length.should.be.above(0);

                    done();
                });
        });
    });

    describe('/reports/week/2', () => {
        it('200', (done) => {
            chai.request(server)
                .get("/reports/week/2")
                .end((err, res) => {
                    res.should.have.status(200);
                    // res.body.should.be.an("object");
                    // res.body.data.blahblah.should.be.an("string");
                    // res.body.data.blahblah.length.should.be.above(0);

                    done();
                });
        });
    });
    //
    describe('/reports/week/3', () => {
        it('200', (done) => {
            chai.request(server)
                .get("/reports/week/3")
                .end((err, res) => {
                    res.should.have.status(200);
                    // res.body.should.be.an("object");
                    // res.body.data.blahblah.should.be.an("string");
                    // res.body.data.blahblah.length.should.be.above(0);

                    done();
                });
        });
    });
        //
        //
        // describe('/reports/week/3', () => {
        //     it('200', (done) => {
        //         chai.request(server)
        //             .get("/reports/week/3")
        //             .end((err, res) => {
        //                 res.should.have.status(200);
        //                 res.body.should.be.an("object");
        //                 res.body.data.blahblah.should.be.an("string");
        //                 res.body.data.blahblah.length.should.be.above(0);
        //
        //                 done();
        //             });
        //     });
        // });


        // describe('', () => {
        //     it('200', (done) => {
        //         chai.request(server)
        //             .get('')
        //             .end((err, res) => {
        //                 res.should.have.status(200);
        //                 res.body.should.be.an("object");
        //                 res.body.data.blahblah.should.be.an("string");
        //                 res.body.data.blahblah.length.should.be.above(0);
        //
        //                 done();
        //             });
        //     });
        // });

        describe('POST /', () => {
                it('should get 401 as password is wrong', (done) => {
                    let data = {
                        // email: "a@b.se",
                        // password: "Wrong"
                    };

                    chai.request(server)
                        .post("/login")
                        .send(data)
                        .end((err, res) => {
                            res.should.have.status(401);
                            res.body.should.be.an("object");
                            res.body.should.have.property("errors");
                            res.body.errors.should.have.property("status");
                            res.body.errors.status.should.be.equal(401);
                            res.body.errors.should.have.property("detail");

                            done();
                        });
                });
    });


        describe('POST /login', () => {
                it('should get 401 as password is wrong', (done) => {
                    let data = {
                        email: "a@b.se",
                        password: "Wrong"
                    };

                    chai.request(server)
                        .post("/login")
                        .send(data)
                        .end((err, res) => {
                            res.should.have.status(401);
                            res.body.should.be.an("object");
                            res.body.should.have.property("errors");
                            res.body.errors.should.have.property("status");
                            res.body.errors.status.should.be.equal(401);
                            res.body.errors.should.have.property("detail");

                            done();
                        });
                });
    });



    describe('DELETE /', () => {
            it('should get 401 as no token', (done) => {
                let data = {
                    // email: "b@b.se",
                    // password: "Wrong"
                };

                chai.request(server)
                    .delete("/")
                    .send(data)
                    .end((err, res) => {
                        res.should.have.status(401);
                        res.body.should.be.an("object");
                        res.body.should.have.property("errors");
                        res.body.errors.should.have.property("status");
                        res.body.errors.status.should.be.equal(401);
                        res.body.errors.should.have.property("detail");

                        done();
                    });
            });
});












});
