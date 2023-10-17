import React, { useState } from "react";
import { useSelector } from "react-redux";

function ExpenseForm({ action, setOpenModal, btnStyle }) {
  const expenses = useSelector((state) => state.expenses);

  const [data, setData] = useState({
    payee: "",
    amount: 0,
    description: "",
    category: "",
  });

  const formValidation = () => {
    if (
      (data.payee === "") |
      (data.amount === "") |
      (data.description === "") |
      (data.category === "")
    ) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div className="flex flex-col justify-end items-center gap-4">
        <div className="flex items-center text-lg">
          <div className="w-[16vh]">Payee</div>
          <input
            value={data.name}
            onChange={(e) => setData({ ...data, payee: e.target.value })}
            type="text"
            className="border-2 p-1 w-[20vh] rounded-md"
          />
        </div>
        <div className="flex items-center text-lg">
          <div className="w-[16vh]">Amount</div>
          <input
            value={data.quantity}
            onChange={(e) => setData({ ...data, amount: e.target.value })}
            type="number"
            className="border-2 p-1 w-[20vh] rounded-md text-md"
          />
        </div>
        <div className="flex text-lg">
          <div className="w-[16vh]">Description</div>
          <div className="flex flex-col items-center">
            <textarea
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
              className="border-2 p-1 h-[6vh] w-[20vh] rounded-md text-sm"
            ></textarea>
            {data.description.length > 30 ? (
              <p className="text-[10px] mt-1 text-red-500">
                Enter less than 30 characters
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex items-center text-lg">
          <div className="w-[16vh]">Category</div>
          <select
            value={data.category}
            onChange={(e) => setData({ ...data, category: e.target.value })}
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
      </div>
      <div className="flex flex-col items-center justify-center">
        <button
          disabled={formValidation()}
          onClick={() => {
            action(data);
            setOpenModal(false);
          }}
          className={`${
            formValidation() ? "bg-slate-300" : btnStyle
          } mx-auto px-12 py-2 mb-4 rounded-full text-lg`}
        >
          Add
        </button>
        {formValidation() ? (
          <p className="text-[12px] text-red-500">
            Please fill all input fields to Add an Expense
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default ExpenseForm;
