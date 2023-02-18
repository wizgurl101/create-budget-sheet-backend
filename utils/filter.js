import { getDateTime } from "./date.js";

export const filterExpenseAfterDate = (list, date) => {
  let afterDate = getDateTime(date);
  return list.filter((expense) => expense.dateTime >= afterDate);
};
