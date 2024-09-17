// import LoginQS from "../pageobjects/Login.js"
// describe (("login"), async()=>{
//     it("Pom", async()=>{
//         await browser.url("https://demoapps.qspiders.com/ui?scenario=1")
//         await LoginQS.loginM('hello','world')
//         let title= await browser.getTitle();
//         await console.log(title);
        
//         await expect(browser).toHaveTitle(title);

//     })
// })

//import LoginQS from "../pageobjects/Login.js"

// trying to check for stale element......but didnt got stale
describe(("facebook"),async()=>{
    it(("login"), async()=>{
        await browser.url("https://www.facebook.com/?stype=lo&deoia=1&jlou=AfcUDFhIqgfXDSYgErjUc_m03v1aonav3YJ4pnKfIFZrwGT8DKR3ghSyuscnSZdDvecbPmMWqE7gbUzSaTLkU7V8wFjJ43NpEjidM9NOWkN0Sg&smuh=11174&lh=Ac-UdqVY80ePDk8Eht4")
        // await LoginQS.loginM("email","password")
        // await browser.refresh();
        // await LoginQS.loginM("email","password")
        let email= await browser.$("//input[@name='email']")
        let pass= await browser.$("//input[@name='pass']")
        await browser.refresh();
        await email.setValue("emaillll")
        await pass.setValue("passssword")
    })
})