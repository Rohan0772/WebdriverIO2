"use strict"
describe("First Script", async() => {
    it("Launch the URL", async () => {
        
        await browser.url("https://demoapps.qspiders.com/ui?scenario=1");
        await browser.pause(4000);

        let imageElement = await browser.$("//input[@name='name']");
        
        await imageElementsetValue("Rohan");

    })
})