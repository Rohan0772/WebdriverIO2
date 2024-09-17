// import readandwritedata from "../GenericUtility/excelReadWrite.js"

// describe("excel",async () => {
//     it("read",async () => {
//     let data =await readandwritedata.read("./test/testData/Book1.xlsx","Sheet4",3,2)
//    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"+ data);
//     })

//    it("write",async () => {
//         await readandwritedata.write("./test/testData/Book1.xlsx","Sheet4",10,11, "Cypress")
//     })
   
// })


import excel from "exceljs"
describe("excel",async () => {
    it("read",async () => {
    
            let book= new excel.Workbook()
            await book.xlsx.readFile("./test/testData/Book1.xlsx")
            let sheet = book.getWorksheet("Sheet4")
            for(let i=1;i<=sheet.rowCount;i++)
            {
                for(let j=1;j<=sheet.columnCount;j++)
                {
                    let data = sheet.getRow(i).getCell(j).toString();
                    console.log(data);
                    
                }
            }
           
            
    })
   
})


