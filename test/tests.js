const chai = require("chai");
const func = require("../public/js/functions");

var expect = chai.expect;
var should = chai.should();

it('1 should equal 1', function() {
  expect(1).to.equal(1);
});

it('Should always return a boolean', function() {
  expect(func.isEven(2)).to.be.a('boolean');
});

it('Should always return a boolean', function() {
  expect(func.isEven(3)).to.be.a('boolean');
});

it('2+2 should be equal to 4', function() {
  expect(func.addNumbers(2,2)).to.equal(4);
});
