describe(("Checking Alert"), async()=>{
    it("acceptAlert",async()=>{
        await browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        await browser.maximizeWindow();
        await browser.$("//button[.='Click for JS Confirm']").click();
        await browser.pause(3000)
        await browser.acceptAlert();

        
    })
})


// describe(("Checking Alert"), async()=>{
//     it("acceptAlert",async()=>{
//         await browser.url("https://mail.rediff.com/cgi-bin/login.cgi");
//         await browser.maximizeWindow();
//         await browser.$("input[name='proceed']").click();
//         await browser.pause(3333);
//         await browser.acceptAlert();

        
//     })
// })

// describe(("Checking Alert"), async()=>{
//     it("acceptAlert",async()=>{
//         await browser.url("https://demoapps.qspiders.com/ui/alert/confirm?sublist=1");
//         await browser.maximizeWindow();
//         await browser.$('//button[@id="buttonAlert5"]').click();
//         await browser.pause(3333);
//          await browser.dismissAlert();
//     })
// })