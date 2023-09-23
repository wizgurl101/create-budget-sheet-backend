import { createExpense } from "../model/expense.js";

export const getExpenseList = (data) => {
  let list = [];

  let expenseData = data[0].split("\r\n");

  expenseData.forEach((e) => {
    let items = e.split(",");

    if (items.length > 1) {
      let date = items[0];
      let name = items[1].toLowerCase();
      let amount = items[2];

      if (!name.includes("payment")) {
        list.push(createExpense(date, name, amount));
      }
    }
  });

  return list;
};
