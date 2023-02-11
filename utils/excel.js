import * as XLSX from "xlsx";
import { getCurrentDateInMMDDYYYY } from "./date.js";

export const exportToExcel = (list) => {
  const workbook = XLSX.utils.book_new();

  list.forEach((item) => {
    let rows = item.expenses.map((row) => ({
      name: row.name,
      date: row.date,
      amount: row.amount,
    }));

    let worksheet = XLSX.utils.json_to_sheet(rows);
    XLSX.utils.book_append_sheet(workbook, worksheet, `${item.name}`);
  });

  const filename = `./output/${getCurrentDateInMMDDYYYY()}-budget.xlsx`;
  XLSX.writeFile(workbook, filename, { compression: true });
};
