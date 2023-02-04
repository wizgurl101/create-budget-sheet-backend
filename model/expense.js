export function createExpense(date, name, amount) {
  let convertAmount = 0.0;
  try {
    convertAmount = parseFloat(amount);
  } catch (err) {
    console.log(`error parsing amount ${amount}`);
  }

  return {
    date: date,
    name: name,
    amount: convertAmount,
    used: false,
  };
}
