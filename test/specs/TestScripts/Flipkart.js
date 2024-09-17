import { Key } from 'webdriverio';
describe('Flipkart Product Order Automation', () => {

    it('should order a product on Flipkart', async () => {
       
        await browser.url('https://www.flipkart.com/');


        const searchBox = await browser.$("//input[@placeholder='Search for Products, Brands and More']");
        await searchBox.setValue('iPhone 13');
        await browser.keys([Key.Enter]);
        await browser.pause(3000);
        

    
        const firstProduct = await browser.$("//img[@alt='Apple iPhone 13 (Blue, 128 GB)']");
        await firstProduct.waitForDisplayed();
        await firstProduct.click();

    
        await browser.switchWindow('iPhone 13 ( 128 GB GB Storage, Blue) Online at Best Price On Flipkart.com');

 
        const addToCartButton = await $("//button[@class='QqFHMw vslbG+ In9uk2']");
        await addToCartButton.waitForDisplayed();
        await addToCartButton.click();

  
        const goToCartButton = await $("//span[.='Cart']");
        await goToCartButton.waitForDisplayed();
        await goToCartButton.click();

      
        // const placeOrderButton = await $("//span[normalize-space()='Place Order']");
        // await placeOrderButton.waitForDisplayed();
        // await placeOrderButton.click()

})
})