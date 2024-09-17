// describe(("mouse actions"), async()=>{
//     it(("move to"),async()=>{
//         await browser.url("https://demoapps.qspiders.com/ui/scroll/newTabVertical");
//        // let a = await browser.$('//button[text()="Accept Our Policy"]');
        
//         await $('//button[text()="Accept Our Policy"]').moveTo();
//         await browser.pause(6666);

//     })
// })

// describe(("mouse actions"), async()=>{
//     it(("move to"),async()=>{
//         await browser.url("https://demoapps.qspiders.com/ui/mouseHover/rating?sublist=2");
//         await browser.maximizeWindow();
//        // let a = await browser.$('//button[text()="Accept Our Policy"]');
        
//         await $('//button[text()="Submit"]').moveTo({});
//         await browser.pause(10000);

//     })
// })

describe(("mouse actions"), async()=>{
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

