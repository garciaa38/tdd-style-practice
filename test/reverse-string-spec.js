const chai = require("chai");
const expect = chai.expect;
const reverseString = require('../problems/reverse-string');

describe('reverse-string', function () {
    it("Should reverse a string", function () {
        expect(reverseString('fun')).to.eql('nuf')
    })
})
