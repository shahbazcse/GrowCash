const getTotalIncome = (income) => {
  return income?.reduce((total, { amount }) => total + amount, 0);
};

const getTotalExpense = (expenses) => {
  return expenses?.reduce((total, { amount }) => total + amount, 0);
};

const getTotalSavings = (savings) => {
  return savings?.reduce((total, { amount }) => total + amount, 0);
};

export { getTotalIncome, getTotalExpense, getTotalSavings };
