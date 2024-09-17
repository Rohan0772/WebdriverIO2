class LoginQS {
    get usrtxt(){return $("//input[@id='name']")}
    get pass(){return $("//input[@id='password']")}
    get register(){return $("//button[text()='Register']")}

    async loginM(a,b){
    await this.usrtxt.setValue(a);
    await this.pass.setValue(b);
    await this.register.click()
}
}
export default new LoginQS()

// class LoginQS {
//     get email(){return $("//input[@name='email']")}
//     get pass(){return $("//input[@name='pass']")}
//     get submit(){return $("//button[@name='login']")}

//     async loginM(a,b){
//         await this.email.setValue(a)
//         await this.pass.setValue(b)
//         await this.submit.click()
//     }    
// }
// export default new LoginQS()