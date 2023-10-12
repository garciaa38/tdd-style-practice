const chai = require("chai")
const expect = chai.expect;
const numberFun = require('../problems/number-fun')

describe("numberFun", function () {
    describe("Returns 3", function () {
        it("Should return 3", function () {
            expect(returnsThree().to.eql(3))
        })
    })
})
