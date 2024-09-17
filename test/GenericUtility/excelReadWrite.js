import excel from "exceljs"
class readandwritedata{
    async read(filepath,sheetname,r,c){
        let book= new excel.Workbook()
        await book.xlsx.readFile(filepath)
        let sheet = book.getWorksheet(sheetname)
        let data = sheet.getRow(r).getCell(c).toString();
        return data
    }
    async write(filepath,sheetname,r,c,v){
        let book= new excel.Workbook()
        await book.xlsx.readFile(filepath)
        let sheet = book.getWorksheet(sheetname)
        sheet.getRow(r).getCell(c).value=v
        await book.xlsx.writeFile(filepath)
        
    }
    

}
export default new readandwritedata();