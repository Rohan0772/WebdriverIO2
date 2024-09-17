// const Excel = require('exceljs')

// class ExcelData{
//     filepath="./test/testData/Book1.xlsx"

//     constructor(filepath,sheetname){
//         this.filepath=filepath || this.filepath
//         this.sheetname = sheetname
//     }


// async read(columname){
//     let workbook = new Excel.Workbook();
//     try{
//         await workbook.xlsx.readFile(this.filepath)

//         const columnData =[];

//         let worksheet = workbook.getWorksheet(this.sheetname);

//         if(!worksheet){

//             throw new Error(`Sheet ${this.sheetname} not found in the workbook`)
//         }

//         const maxColumns = worksheet.actualColumnCount;
//         let columnIndex =-1;

//         for(let j=1; j<=maxColumns; j++ ){
//             if(worksheet.getRow(1).getCell(j).value===columname){
//                 columnIndex=1;
//                 break;  
//             }
//         }
//         if(coloumnIndex ===-1){
//             throw new Error(`column '${columname}' not found in the worksheet`);
//         }
//          const rows= worksheet.rowCount;

//          for(let i =2; i<rows; i++){
//             const row = worksheet.getRow(i);
//             columnData.push(row.getCell(columnIndex).value)
//          }
//          return columnData;

//     }catch(error){
//         console.error('Error reading the excel file:' , error.message );
//         throw error;

//     }

// }  
// }
// const excelReader = new ExcelData();
// excelReader.read("username")
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log();
    
// })




// import ExcelJS from 'exceljs';

// class ExcelData {
//     constructor(filepath = "./test/testData/Book1.xlsx", sheetname="Sheet4") {
//         this.filepath = filepath;
//         this.sheetname = sheetname;
//     }

//     async read(columnName) {
//         const workbook = new ExcelJS.Workbook();
//         try {
//             await workbook.xlsx.readFile(this.filepath);

//             const columnData = [];
//             let worksheet = workbook.getWorksheet(this.sheetname);

//             if (!worksheet) {
//                 throw new Error(`Sheet ${this.sheetname} not found in the workbook`);
//             }

//             const maxColumns = worksheet.actualColumnCount;
//             let columnIndex = -1;

//             for (let j = 1; j <= maxColumns; j++) {
//                 if (worksheet.getRow(1).getCell(j).value === columnName) {
//                     columnIndex = j;
//                     break;
//                 }
//             }

//             if (columnIndex === -1) {
//                 throw new Error(`Column '${columnName}' not found in the worksheet`);
//             }

//             const rows = worksheet.rowCount;

//             for (let i = 2; i <= rows; i++) {
//                 const row = worksheet.getRow(i);
//                 columnData.push(row.getCell(columnIndex).value);
//             }
//             return columnData;

//         } catch (error) {
//             console.error('Error reading the excel file:', error.message);
//             throw error;
//         }
//     }
// }

// const excelReader = new ExcelData();
// excelReader.read("username")
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error('Error:', error.message);
//     });

import ExcelJS from 'exceljs';

class ExcelData {
    constructor(filepath = "./test/testData/Book1.xlsx", sheetname = "Sheet4") {
        this.filepath = filepath;
        this.sheetname = sheetname;
    }

    async read(columnName) {
        try {
            const workbook = new ExcelJS.Workbook();
            await workbook.xlsx.readFile(this.filepath);

            const worksheet = workbook.getWorksheet(this.sheetname);
            if (!worksheet) {
                throw new Error(`Sheet ${this.sheetname} not found in the workbook`);
            }

            const headerRow = worksheet.getRow(1);
            const columnIndex = headerRow.values.indexOf(columnName);

            if (columnIndex === -1) {
                throw new Error(`Column '${columnName}' not found in the worksheet`);
            }

            return worksheet.getColumn(columnIndex).values.slice(2); // Skip header and empty first value

        } catch (error) {
            console.error('Error reading the excel file:', error.message);
            throw error;
        }
    }
}

const excelReader = new ExcelData();
excelReader.read("password")
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error.message));
t