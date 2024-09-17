import { expect } from "chai";
describe("chai",async()=>{
    it("expect",async()=>{
        expect([1,2,10]).to.include(10)
        expect([1,2,3]).to.be.a('Array').that.include(7)
    })
})
