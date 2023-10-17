import React, { useEffect, useState } from "react";
import IncomeVsExpensesReport from "../components/Reports/IncomeVsExpensesReport";
import ExpenseBreakdown from "../components/Reports/ExpenseBreakdown";
import { AiOutlineReload } from "react-icons/ai";
import { useDispatch } from "react-redux";

function Reports() {
  const dispatch = useDispatch();
  const [reportType, setReportType] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, [dispatch]);

  return (
    <div className="flex flex-col gap-6 mx-12 my-8">
      <div>
        <h1 className="text-3xl font-bold">Reports</h1>
      </div>
      <div className="flex flex-col gap-10 items-center justify-center">
        <div className="mx-[12vh] text-lg">
          Whether you're tracking inventory levels or monitoring your sales
          performance, our Analytics & Reports provides the data you need to
          drive informed decisions and achieve your business goals. Stay on top
          of your numbers effortlessly, ensuring you're always in control of
          your inventory and finances. The Inventory report offers a
          comprehensive overview of your stock, including the total stock on
          hand, ensuring you always have a clear understanding of your
          inventory's status. It also provides visibility into total expenses to
          help you manage costs effectively. Our Sales report provides a
          snapshot of your financials, highlighting key metrics like total sales
          and total revenue, giving you an instant pulse on your business's
          financial health.
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="flex">
            <select
              onChange={(e) => {
                setReportType(e.target.value);
              }}
            >
              <option value="">Select Report Type</option>
              <option value="IncomeVSExpenses">Income Vs Expenses</option>
              <option value="ExpenseBreakdown">Expense Breakdown</option>
            </select>
            <div
              onClick={() => {
                setTimeout(() => {
                  setLoading(false);
                }, 1000);
              }}
              className={`flex items-center justify-center gap-1 bg-blue-300 hover:bg-blue-400 ml-[3rem] mb-4 text-center mx-auto px-4 py-3 rounded-xl drop-shadow-md cursor-pointer font-bold`}
            >
              Generate Report
              <AiOutlineReload className="h-6 w-6 ml-1" />
            </div>
          </div>
          <div className="mt-4">
            {reportType === "" && (
              <p className="mt-32 font-bold text-xl">
                Please Choose To Generate A Report
              </p>
            )}
            {!loading && reportType === "IncomeVSExpenses" && (
              <IncomeVsExpensesReport />
            )}
            {!loading && reportType === "ExpenseBreakdown" && (
              <ExpenseBreakdown />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
