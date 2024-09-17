describe(("getwindowhandles"), async()=>{
    it(("getwh"),async()=>{
        await browser.url("https://demoapps.qspiders.com/ui/browser/newTab?sublist=1");
        let phandle= await browser.getWindowHandle();
        await browser.$("//button[@id='browserButton4']").click()
        // await browser.pause(5000)
        // let handles = await browser.getWindowHandles()
        // await browser.switchToWindow(handles[1])
        // await browser.pause(10000)
        await browser.switchToWindow(phandle)
        await browser.newWindow('https://webdriver.io/docs/api/browser/newWindow/')
        await browser.pause(10000)
        

    })
})