import { generateCategoryList } from "./utils/category.js";
import { getDataFromCsv } from "./utils/csv.js";
import { getExpenseList } from "./utils/expenses.js";

const main = async () => {
  try {
    const data = await getDataFromCsv();
    const expenseList = getExpenseList(data);
    const categoryList = generateCategoryList();

    console.log(JSON.stringify(categoryList, null, 4));
  } catch (err) {
    console.log(err);
  }
};

main();
