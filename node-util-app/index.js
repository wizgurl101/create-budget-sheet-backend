import { generateCategoryList } from "./utils/category.js";
import { getDataFromCsv } from "./utils/csv.js";
import { exportToExcel } from "./utils/excel.js";
import { getExpenseList } from "./utils/expenses.js";
import { filterExpenseAfterDate } from "./utils/filter.js";

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

      categoryExpenses.sort((a, b) => {
        return a.dateTime - b.dateTime;
      });

      c.expenses = [...categoryExpenses];
    });

    let unusedExpenses = expenseList.filter(
      (expense) => expense.used === false
    );

    unusedExpenses.sort((a, b) => {
      return a.dateTime - b.dateTime;
    });

    let lastCategory = categoryList[categoryList.length - 1];
    lastCategory.expenses = [...unusedExpenses];

    // TODO filter is not working
    const filterDate = "02/10/2023";
    let filteredExpenses = filterExpenseAfterDate(categoryList, filterDate);

    // console.log(JSON.stringify(filteredExpenses, null, 4));

    exportToExcel(filteredExpenses);
  } catch (err) {
    console.log(err);
  }
};

main();
