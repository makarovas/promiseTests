const calculateSquare = require("../src/calculate-square");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
const expect = chai.expect;

describe("calculateSquare", () => {
  it("should resolve with number 4 if passed passed 2", () => {
    return expect(calculateSquare(2)).to.eventually.be.equal(4);
  });
  it("should became fullfilled when passed number 2", () => {
    return expect(calculateSquare(2)).to.be.fulfilled;
  });
});
