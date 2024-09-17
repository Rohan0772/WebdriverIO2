// import LoginQS from "../pageobjects/Login.js"
// import fs from "fs"
// let data = fs.readFileSync("./test/testData/credentials.json")    
// let cred= JSON.parse(data)

// describe("",()=>{
//     let u= cred.usn
//     let p= cred.pwd
//     it("",async()=>{
//         await browser.url(cred.url)
//         await LoginQS.loginM(u,p)
//     })
// })



////////////////////////////ALTERNATE WAY\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ 
// import data from "../testData/credentials.json" assert { type: 'json' };
// import LoginQS from "../pageobjects/Login.js";

// describe("Login Test", () => {
//     it("should login successfully", async () => {
//         await browser.url(data.url);  // Navigate to the URL
//         await LoginQS.loginM(data.usn, data.pwd);  // Perform login with username and password
//     });
// });

////////////////////////MULTIPLE DATA\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// import data from "../testData/credentials.json" assert { type: 'json' };
// import LoginQS from "../pageobjects/Login.js";

// describe("Login Test", () => {
//     data.forEach(element => {
//         it("should login successfully", async () => {
//             await browser.url(element.url);  // Navigate to the URL
//             await LoginQS.loginM(element.usn, element.pwd);  // Perform login with username and password
//         }); 
//     });
// });

import data from "../testData/credentials.json" assert{ type:'json'};
import LoginQS from "../pageobjects/Login.js";

describe ("login test",()=>{

    data.forEach(element => {
        it("should login success", async () => {
            await browser.url(element.url);
            await LoginQS.loginM(element.usn,element.pwd)
        });
        
    });

});

