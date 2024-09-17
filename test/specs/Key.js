import { Key } from 'webdriverio';

describe(("keys"),async()=>{

    it(("enter"),async()=>{

        await browser.url("https://demoapps.qspiders.com/ui/keyboard?sublist=0&scenario=3");
        await browser.$("//input[@id='email']").setValue("hvcjhv");

    await browser.keys([Key.Ctrl, 'a'])
    await browser.keys([Key.Ctrl, 'c'])

    // inserts text from clipboard into input element
    await  browser.$("//input[@id='password']").click()
    await browser.keys([Key.Ctrl, 'v'])

    await browser.pause(4444);

    })

})