describe(("Checking Alert"), async()=>{
    it("acceptAlert",async()=>{
        await browser.url("https://demoapps.qspiders.com/ui/button?sublist=0");
        await browser.maximizeWindow();
        const clickk= await browser.$("//button[@id='btn1']")
        await clickk.waitForClickable()
        await console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxx"+clickk);
        await clickk.click();
        await browser.pause(3333);
        
    })
})