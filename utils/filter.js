import { getDateTime } from "./date.js";

export const filterExpenseAfterDate = (list, date) => {
  let afterDate = getDateTime(date);

  list.forEach((category) => {
    let expense = category.expenses;
    const filteredExpenses = expense.filter(
      (item) => item.datetime >= afterDate
    );
    category.expenses.splice(0, category.expenses, ...filteredExpenses);
  });

  return list;
};
