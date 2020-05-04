const calculateSquare = require("../src/calculate-square");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
const expect = chai.expect;

describe("calculateSquare", function () {
  this.timeout(4000);

  it("should resolve with number 4 if passed passed 2", function () {
    return calculateSquare(2).then((result) => {
      expect(result).to.be.above(3);
      expect(result).to.be.equal(4);
    });

    // this.timeout(4000);
    // expect(calculateSquare(2)).to.eventually.be.equal(5).notify(done);
    // expect(calculateSquare(2)).to.eventually.be.equal(4).notify(done);

    // it("should became fullfilled when passed number 2", function () {
    //   return expect(calculateSquare(2)).to.be.fulfilled;
    // });
    // it("should become reject if passed a string instead of a number", function () {
    //   return expect(calculateSquare("fail")).to.be.rejected;
  });

  it("should return a rejected promise when passed a string", function () {
    return calculateSquare("string").catch((reason) => {
      expect(reason).to.not.equal(null);
      expect(reason.message).to.equal("Argument of type number is expected");
    });
  });
});
