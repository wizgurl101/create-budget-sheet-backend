import { generateCategoryList } from "./utils/category.js";
import { getDataFromCsv } from "./utils/csv.js";
import { exportToExcel } from "./utils/excel.js";
import { getExpenseList } from "./utils/expenses.js";

const main = async () => {
  try {
    const data = await getDataFromCsv();
    const expenseList = getExpenseList(data);
    let categoryList = generateCategoryList();

    categoryList.forEach((c) => {
      let categoryExpenses = [];
      const keywords = c.keywords;

      if (keywords.length > 0) {
        keywords.forEach((keyword) => {
          expenseList.forEach((expense) => {
            if (expense.name.includes(keyword)) {
              categoryExpenses.push(expense);
              expense.used = true;
            }
          });
        });
      }

      c.expenses = [...categoryExpenses];
    });

    const unusedExpenses = expenseList.filter(
      (expense) => expense.used === false
    );

    let lastCategory = categoryList[categoryList.length - 1];
    lastCategory.expenses = [...unusedExpenses];

    // console.log(JSON.stringify(categoryList, null, 4));

    exportToExcel(categoryList);
  } catch (err) {
    console.log(err);
  }
};

main();
