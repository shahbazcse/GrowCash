import React, { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import SavingCard from "../components/Savings/SavingCard";
import SavingCardHeader from "../components/Savings/SavingCardHeader";
import Modal from "../components/Modals/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addSaving, fetchSavings } from "../services/SavingsService";
import { getTotalSavings } from "../services/DashboardService";

function Savings() {
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const savings = useSelector((state) => state.savings);

  const handleAddSaving = (saving) => {
    dispatch(addSaving(saving));
  };

  const [filterCategory, setFilterCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const filteredSavings = savings
    .filter(
      ({ category }) => (category === filterCategory) | (filterCategory === "")
    )
    .sort((a, b) =>
      sortOrder === "lTh"
        ? a.amount - b.amount
        : sortOrder === "hTl" && b.amount - a.amount
    );

  useEffect(() => {
    dispatch(fetchSavings());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-6 mx-12 my-8">
      <div>
        <h1 className="text-3xl font-bold">Savings</h1>
      </div>
      <div className="flex flex-col gap-10 items-center justify-center">
        <div className="mx-[12vh] text-lg">
          Savings Management is a dedicated hub for achieving your financial
          aspirations with ease. Our platform is designed to empower you in your
          journey towards a secure financial future. The "Add Entry" feature
          makes saving straightforward and hassle-free. Whether it's setting
          aside funds for an emergency, a vacation, or retirement, our app
          allows you to input your savings details, such as the goal, date, and
          category, with simplicity and precision. Watch as your savings
          objectives seamlessly integrate into your financial profile, keeping
          you on track.
        </div>
        <div className="flex flex-col mb-4 px-4">
          <div className="flex items-center gap-6 ml-[3rem] mb-4 text-center mx-auto">
            <div
              onClick={() => setOpenModal(true)}
              className="flex items-center justify-center gap-1 bg-blue-300 hover:bg-blue-400 text-center mx-auto pl-3 pr-1 py-3 rounded-xl drop-shadow-md cursor-pointer font-bold"
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
                  <option value="Emergency Fund">Emergency Fund</option>
                  <option value="Investments">Investments</option>
                  <option value="Vacation Fund">Vacation Fund</option>
                  <option value="Retirement">Retirement</option>
                  <option value="Rainy Day Fund">Rainy Day Fund</option>
                  <option value="Car Fund">Car Fund</option>
                  <option value="Home Fund">Home Fund</option>
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
          <SavingCardHeader />
          {filteredSavings.map((entry, index) => (
            <SavingCard key={index} serial={index + 1} entry={entry} />
          ))}
          <div className="my-6 mx-auto px-12 py-4 drop-shadow-md rounded-md bg-blue-300 font-bold text-xl">
            Total Savings: ${getTotalSavings(savings)}
          </div>
        </div>
      </div>
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          action={handleAddSaving}
          formType={"Savings"}
        />
      )}
    </div>
  );
}

export default Savings;
