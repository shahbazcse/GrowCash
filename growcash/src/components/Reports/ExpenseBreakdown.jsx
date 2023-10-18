import React from "react";
import { useSelector } from "react-redux";

function ExpenseBreakdown() {
  const expenses = useSelector((state) => state.expenses);

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <h1 className="text-2xl font-bold">Expense Breakdown</h1>
      <div className="flex justify-center items-center gap-14">
        <table className="bg-[#64CCC5] rounded-md w-[56vh] text-left">
          <thead>
            <tr>
              <th className="px-4 py-2 border-r border-b">#</th>
              <th className="px-4 py-2 border-r border-b">Amount</th>
              <th className="px-4 py-2 border-r border-b">Category</th>
            </tr>
          </thead>
          <tbody className="bg-[#FFFFFF]">
            {expenses.map(({ amount, category }, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-r border-b">#{index + 1}</td>
                <td className="px-4 py-2 border-r border-b font-bold">
                  ${amount}
                </td>
                <td className="px-4 py-2 border-b">{category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExpenseBreakdown;
