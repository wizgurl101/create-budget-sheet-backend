import { createExpense } from "../../model/expense.js";

const data = [
  {
    date: "02/01/2023",
    name: "safeway #1000",
    amount: 16.0,
  },
  {
    date: "02/10/2023",
    name: "safeway gase bar",
    amount: 21.0,
  },
  {
    date: "01/10/2023",
    name: "five guys",
    amount: 13.5,
  },
];

export const generateExpenseData = () => {
  let list = [];

  data.forEach((item) => {
    list.push(createExpense(item.date, item.name, item.amount));
  });

  return list;
};
