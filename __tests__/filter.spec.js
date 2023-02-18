import { filterExpenseAfterDate } from "../utils/filter.js";
import { generateExpenseData } from "./common/generateExpenseData.js";
import { createExpense } from "../model/expense.js";
import assert from "node:assert";

describe("filterExpenseAfterDate", function () {
  let testData;
  let testDate = "02/01/2023";

  before("generate test data", function () {
    testData = generateExpenseData();
  });

  it("should return a list of expense made in february", function () {
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
    ];

    let expectedResult = [];
    data.forEach((item) => {
      expectedResult.push(createExpense(item.date, item.name, item.amount));
    });

    let actualResult = filterExpenseAfterDate(testData, testDate);

    assert.deepEqual(actualResult[0], expectedResult[0]);
    assert.deepEqual(actualResult[1], expectedResult[1]);
  });
});
