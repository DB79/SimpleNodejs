const chai = require("chai");
const func = require("../public/js/functions");

var expect = chai.expect;
var should = chai.should();

describe('add a entry into the index', function () {
  it('1 should equal 1', function (done) {
    expect(1).to.equal(1);
    done();
  });
  it('Should always return a boolean', function (done) {
    expect(func.isEven(2)).to.be.a('boolean');
    done();
  });

  it('Should always return a boolean', function (done) {
    expect(func.isEven(3)).to.be.a('boolean');
    done();
  });
  it('2+2 should be equal to 4', function (done) {
    expect(func.addNumbers(2, 2)).to.equal(4);
    done();
  });
});



