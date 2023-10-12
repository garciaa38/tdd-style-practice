const chai = require("chai")
const expect = chai.expect;
const {returnsThree, reciprocal} = require('../problems/number-fun')

describe("numberFun", function () {
    describe("Returns 3", function () {
        it("Should return 3", function () {
            expect(returnsThree()).to.eql(3);
        })
    })

    describe("reciprocal", function () {
        it("Should return the reciprocal of num", function () {
            expect(reciprocal(5)).to.eql(0.2);
        })

        it("Should be between 1 and 1,000,000", function () {
            expect(reciprocal(-5)).to.throw(RangeError, "Number must be between 1 and 1,000,000!");
            //expect(reciprocal(28127346)).to.throw(RangeError, "Number must be between 1 and 1,000,000!");
        })
    })
})
