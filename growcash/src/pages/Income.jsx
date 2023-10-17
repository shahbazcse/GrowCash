import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IncomeCard from "../components/Income/IncomeCard";
import IncomeCardHeader from "../components/Income/IncomeCardHeader";
import { BiPlus } from "react-icons/bi";
import Modal from "../components/Modals/Modal";
import { addIncome, fetchIncome } from "../services/IncomeService";
import { getTotalIncome } from "../services/DashboardService";
function Income() {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const income = useSelector((state) => state.income);

  const [filterCategory, setFilterCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const filteredIncome = income
    .filter(
      ({ category }) => (category === filterCategory) | (filterCategory === "")
    )
    .sort((a, b) =>
      sortOrder === "lTh"
        ? a.amount - b.amount
        : sortOrder === "hTl" && b.amount - a.amount
    );

  const handleAddIncome = (income) => {
    dispatch(addIncome(income));
  };

  useEffect(() => {
    dispatch(fetchIncome());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-6 mx-12 my-8">
      <div>
        <h1 className="text-3xl font-bold">Income</h1>
      </div>
      <div className="flex flex-col gap-10 items-center justify-center">
        <div className="mx-[12vh] text-lg">
          Effortlessly control your inventory with our intuitive system. Our
          user-friendly inventory module allows you to maintain a detailed list
          of all your items. It provides essential features, such as adding new
          items, updating existing ones, and even deleting items that are no
          longer needed. Each item in your inventory is meticulously cataloged,
          featuring crucial details like item name, category, quantity, and
          more.
        </div>
        <div className="flex flex-col px-4">
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
                  <option value="Salary">Salary</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Investments">Investments</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Rental">Rental</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Interest">Interest</option>
                  <option value="Gift">Gift</option>
                  <option value="Royalties">Royalties</option>
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
          <IncomeCardHeader />
          {filteredIncome.map((entry, index) => (
            <IncomeCard key={index} serial={index + 1} entry={entry} />
          ))}
          <div className="my-6 mx-auto px-12 py-4 drop-shadow-md rounded-md bg-blue-300 font-bold text-xl">
            Total Income: ${getTotalIncome(income)}
          </div>
        </div>
      </div>
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          action={handleAddIncome}
          formType={"Income"}
        />
      )}
    </div>
  );
}

export default Income;
