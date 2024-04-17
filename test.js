const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("./app");
const expect = chai.expect;

chai.use(chaiHttp);

describe("GET /", () => {
  it("should return Hello World from our Node.js app!", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal("Hello World from our Node.js app!");
        done();
      });
  });
});
