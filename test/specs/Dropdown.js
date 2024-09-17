import { Key } from 'webdriverio';

describe("handling dropdown", async () => {
    it("qspiders Demo", async () => {
        // Maximize the browser window
        await browser.maximizeWindow;

        // Navigate to the URL
        await browser.url("https://demoapps.qspiders.com/ui/dropdown?sublist=0");
        await browser.pause(2000);

        // Select an option from the first dropdown by visible text
        await browser.$("//select[@id='select1']").selectByVisibleText("+14");
        await browser.pause(2000);

        // Select an option from the second dropdown by attribute
        await browser.$('//select[@id="select2"]').selectByAttribute("value", "male");
        await browser.pause(2000);

        // Get the selected value from the third dropdown
        let selectedValue = await browser.$('//select[@id="select3"]').getText();

        // Print the selected value to the console
        console.log("------------------", selectedValue);

        // Pause for observation
        await browser.pause(4000);
    });
});