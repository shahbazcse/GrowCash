import React from "react";
import { useSelector } from "react-redux";
import {
  getTotalIncome,
  getTotalExpense,
} from "../../services/DashboardService";

const IncomeVsExpensesReport = () => {
  const income = useSelector((state) => state.income);
  const expenses = useSelector((state) => state.expenses);

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <h1 className="text-2xl font-bold">Income Vs Expenses Report</h1>
      <div className="flex justify-center items-center gap-14">
        <div className="flex flex-col items-center gap-3">
          <div className="font-bold text-xl">INCOME</div>
          <table className="bg-[#BEADFA] rounded-md w-[56vh] text-left">
            <thead>
              <tr>
                <th className="px-4 py-2 border-r border-b">#</th>
                <th className="px-4 py-2 border-r border-b">Source</th>
                <th className="px-4 py-2 border-r border-b">Amount</th>
                <th className="px-4 py-2 border-b">Category</th>
              </tr>
            </thead>
            <tbody className="bg-[#FFFFFF]">
              {income.map(({ source, amount, category }, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border-r border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-r border-b font-bold">
                    {source}
                  </td>
                  <td className="px-4 py-2 border-r border-b">${amount}</td>
                  <td className="px-4 py-2 border-b">{category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="font-bold text-xl">EXPENSES</div>
          <table className="bg-[#64CCC5] rounded-md w-[56vh] text-left">
            <thead>
              <tr>
                <th className="px-4 py-2 border-r border-b">#</th>
                <th className="px-4 py-2 border-r border-b">Payee</th>
                <th className="px-4 py-2 border-r border-b">Amount</th>
                <th className="px-4 py-2 border-b">Category</th>
              </tr>
            </thead>
            <tbody className="bg-[#FFFFFF]">
              {expenses.map(({ payee, amount, category }, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border-r border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-r border-b font-bold">
                    {payee}
                  </td>
                  <td className="px-4 py-2 border-r border-b">${amount}</td>
                  <td className="px-4 py-2 border-b">{category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <table className="bg-[#BEADFA] rounded-lg">
        <tbody>
          <tr>
            <td className="px-6 py-3  border font-bold">Total Income:</td>
            <td className="px-6 py-3  border font-bold">
              ${getTotalIncome(income)}
            </td>
          </tr>
          <tr>
            <td className="px-6 py-3  border font-bold">Total Expense:</td>
            <td className="px-6 py-3  border font-bold">
              ${getTotalExpense(expenses)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IncomeVsExpensesReport;
