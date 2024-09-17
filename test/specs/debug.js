describe("handling dropdown", async () => {
    it("qspiders Demo", async () => {
        await browser.url("https://demoapps.qspiders.com/ui?scenario=4");
        await browser.pause(2000);
       
        await browser.$("//input[@id='name']").setValue("abcd@gmail.com");
        // await browser.debug()
        let name = await browser.$("//input[@id='name']").getValue();
        await console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"+name);
        await browser.pause(2000);
    })
    it(("move to"),async()=>{
        await browser.url("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=1");
        await browser.maximizeWindow();
       // let a = await browser.$('//button[text()="Accept Our Policy"]');
         const drag =  await browser.$("//div[text()='Mobile Charger']");
        const drop = await browser.$('//div[@class="drop-column  min-h-[200px] bg-slate-100"]');
        drag.dragAndDrop(drop);
        await browser.pause(10000);

    })
    
})
