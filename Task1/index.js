const axios = require('axios');
const XLSX = require('xlsx');

async function fetchAndProcessExcel() {
  try {
    const fileUrl = 'https://go.microsoft.com/fwlink/?LinkID=521962';
    const fileResponse = await axios({
      method: 'GET',
      url: fileUrl,
      responseType: 'arraybuffer', 
    });

    const excelWorkbook = XLSX.read(fileResponse.data, { type: 'buffer' });
    const firstSheetName = excelWorkbook.SheetNames[0];
    const originalSheet = excelWorkbook.Sheets[firstSheetName];

    const sheetData = XLSX.utils.sheet_to_json(originalSheet);

    const salesOverThreshold = sheetData.filter(row => row.Sales > 50000);

    const filteredSheet = XLSX.utils.json_to_sheet(salesOverThreshold);

    const processedWorkbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(processedWorkbook, filteredSheet, 'High Sales Data');

    const outputFile = 'High_Sales_Report.xlsx';
    XLSX.writeFile(processedWorkbook, outputFile);

    console.log(`File đã được xử lý thành công: ${outputFile}`);
  } catch (error) {
    console.error('Đã xảy ra lỗi:', error.message);
    if (error.code === 'ECONNABORTED' || error.message.includes('network')) {
      console.error('Lỗi: Không thể kết nối đến server.');
    }
  }
}

fetchAndProcessExcel();
