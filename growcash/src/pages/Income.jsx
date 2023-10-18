import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IncomeCard from "../components/Income/IncomeCard";
import IncomeCardHeader from "../components/Income/IncomeCardHeader";
import { BiPlus } from "react-icons/bi";
import Modal from "../components/Modals/Modal";
import { addIncome } from "../services/IncomeService";
import { getTotalIncome } from "../services/DashboardService";
import { Oval } from "react-loader-spinner";

function Income() {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);

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
    income &&
      setTimeout(() => {
        setLoading(false);
      }, 1000);
  }, []);

  return (
    <div className="flex flex-col gap-6 mx-12 my-8">
      <div>
        <h1 className="text-3xl font-bold">Income</h1>
      </div>
      <div className="flex flex-col gap-10 items-center justify-center">
        <div className="mx-[12vh] text-lg">
          Income Management lets you take charge of your financial well-being
          with ease. Our user-friendly platform offers a seamless experience for
          managing your income. The "Add Entry" feature allows you to
          effortlessly record all your earnings, whether it's your salary,
          investments, or any other source. Simply input the details such as
          source, date, and category, and watch your income data seamlessly
          integrate into your financial profile.
        </div>
        {loading ? (
          <div className="fixed bottom-[45%] left-[55%]">
            <Oval
              height={80}
              width={80}
              color="#BEADFA"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#FFFFFF"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        ) : (
          <div className="flex flex-col px-4">
            <div className="flex items-center gap-6 ml-[3rem] mb-4 text-center mx-auto">
              <div
                onClick={() => setOpenModal(true)}
                className="flex items-center justify-center gap-1 bg-[#BEADFA] hover:bg-[#b697e9] text-center mx-auto pl-3 pr-1 py-3 rounded-xl drop-shadow-md cursor-pointer font-bold"
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
            <div className="my-6 mx-auto px-12 py-4 drop-shadow-md rounded-md bg-[#BEADFA] font-bold text-xl">
              Total Income: ${getTotalIncome(income)}
            </div>
          </div>
        )}
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
