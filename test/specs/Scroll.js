// describe(("Scroll"),async()=>{
//     it(("Scroll"),async()=>{
//         await browser.url("https://webdriver.io/docs/api/browser/scroll/");
//         await browser.scroll(0, 500);
//         await browser.pause(10000);
//     })
// })

describe(("Scroll"),async()=>{

    it('should demonstrate the scrollIntoView command', async () => {
        await browser.url("https://webdriver.io/docs/api/browser/scroll/");
        const elem = await browser.$("//div[contains(text(),'Sponsored by')]");
        // scroll to specific element
        await elem.scrollIntoView();
        // center element within the viewport
        await elem.scrollIntoView({ block: 'center', inline: 'center' });
    });
})