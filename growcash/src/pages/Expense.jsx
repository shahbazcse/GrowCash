import React, { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import ExpenseCard from "../components/Expense/ExpenseCard";
import ExpenseCardHeader from "../components/Expense/ExpenseCardHeader";
import Modal from "../components/Modals/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, fetchExpenses } from "../services/ExpenseService";
import { getTotalExpense } from "../services/DashboardService";

function Expense() {
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const expenses = useSelector((state) => state.expenses);

  const [filterCategory, setFilterCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const filteredExpense = expenses
    .filter(
      ({ category }) => (category === filterCategory) | (filterCategory === "")
    )
    .sort((a, b) =>
      sortOrder === "lTh"
        ? a.amount - b.amount
        : sortOrder === "hTl" && b.amount - a.amount
    );

  const handleAddExpense = (expense) => {
    dispatch(addExpense(expense));
  };

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-6 mx-12 my-8">
      <div>
        <h1 className="text-3xl font-bold">Expense</h1>
      </div>
      <div className="flex flex-col gap-10 items-center justify-center">
        <div className="mx-[12vh] text-lg">
          Experience seamless sales management with our advanced system. Our
          sales module not only keeps track of all your sales but also allows
          you to add new sales with ease. It enables you to filter sales based
          on a specified date range, providing you with a clear view of your
          sales history. Whether you're analyzing recent performance or checking
          sales trends, our system equips you with the tools to make data-driven
          decisions.
        </div>
        <div className="flex flex-col justify-center items-center mb-4 px-4">
          <div className="flex items-center gap-6 ml-[3rem] mb-4 text-center mx-auto">
            <div
              onClick={() => setOpenModal(true)}
              className="flex items-center justify-center gap-1 bg-[#64CCC5] hover:bg-[#3eb8af] text-center mx-auto pl-3 pr-1 py-3 rounded-xl drop-shadow-md cursor-pointer font-bold"
            >
              Add Entry
              <BiPlus className="h-6 w-6" />
            </div>
            <div className="flex gap-3 bg-[#FFFFFF] text-center mx-auto p-2 rounded-xl drop-shadow-md font-bold">
              <div className="flex gap-3 border p-2 rounded-md">
                <div className="flex items-center gap-2">
                  <input
                    checked={sortOrder === "lTh"}
                    onChange={(e) => e.target.checked && setSortOrder("lTh")}
                    type="checkbox"
                  />
                  <label>Amount (Low To High)</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    checked={sortOrder === "hTl"}
                    onChange={(e) => e.target.checked && setSortOrder("hTl")}
                    type="checkbox"
                  />
                  <label>Amount (High To Low)</label>
                </div>
              </div>
              <div className="flex items-center gap-3 border p-2 rounded-md">
                <div>Filter Category</div>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="border-2 p-1 w-[20vh] rounded-md"
                >
                  <option value="">Select Category</option>
                  <option value="Groceries">Groceries</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Utilities">Utilities</option>
                  <option value="Dining Out">Dining Out</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Fitness">Fitness</option>
                </select>
              </div>
              <div
                onClick={() => {
                  setSortOrder("");
                  setFilterCategory("");
                }}
                className="my-auto border border-slate-300 px-1 mr-1 bg-slate-200 hover:bg-slate-300 cursor-pointer drop-shadow-sm rounded-md"
              >
                Clear
              </div>
            </div>
          </div>
          <ExpenseCardHeader />
          {filteredExpense.map((entry, index) => (
            <ExpenseCard key={index} serial={index + 1} entry={entry} />
          ))}
          <div className="my-6 mx-auto px-12 py-4 drop-shadow-md rounded-md bg-blue-300 font-bold text-xl">
            Total Expense: ${getTotalExpense(expenses)}
          </div>
        </div>
      </div>
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          action={handleAddExpense}
          formType={"Expense"}
        />
      )}
    </div>
  );
}

export default Expense;
