import { getDataFromCsv } from "./utils/csv.js";
import { getExpenseList } from "./utils/expenses.js";

const main = async () => {
  try {
    const data = await getDataFromCsv();
    const expenseList = getExpenseList(data);
    console.log(JSON.stringify(expenseList, null, 4));
  } catch (err) {
    console.log(err);
  }
};

main();
