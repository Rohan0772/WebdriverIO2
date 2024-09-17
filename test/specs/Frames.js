describe("handling dropdown", async () => {
    it("qspiders Demo", async () => {
        await browser.url("https://demoapps.qspiders.com/ui/frames/multiple?sublist=2");
        await browser.pause(2000);
        let frameid = await browser.findElement('css selector', 'iframe')
        await browser.switchToFrame(frameid);
        // await browser.switchToFrame(0);
        await browser.$("//input[@id='email']").setValue("abcd@gmail.com");
    
        await browser.pause(2000);


    })
})