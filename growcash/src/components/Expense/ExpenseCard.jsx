import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

function ExpenseCard({ entry, serial }) {
  const [tools, setTools] = useState(false);

  const { payee, amount, description, category, createdAt } = entry;

  const getDate = () => {
    const date = new Date(createdAt);
    const DD = date.getDate();
    const MM = date.getMonth() + 1;
    const YYYY = date.getFullYear();
    return `${DD}/${MM}/${YYYY}`;
  };

  return (
    <div className="flex items-center">
      <div className="w-[1.5rem]">#{serial}</div>
      <div
        onMouseEnter={() => setTools(true)}
        onMouseLeave={() => setTools(false)}
        className="flex items-center justify-center"
      >
        <div
          className={`flex h-[12vh] ml-6 items-center border border-slate-300 bg-[#FFFFFF] ${
            tools && "hover:bg-slate-100"
          }`}
        >
          <div className="flex justify-center items-center border-r w-[20vh] h-full">
            <p className="font-bold">{payee}</p>
          </div>
          <div className="flex justify-center items-center border-r w-[36vh] h-full">
            <p>{description}</p>
          </div>
          <div className="flex justify-center items-center border-r w-[20vh] h-full">
            <p>${amount}</p>
          </div>
          <div className="flex justify-center items-center border-r w-[20vh] h-full">
            <p>{category}</p>
          </div>
          <div className="flex justify-center items-center w-[20vh] h-full">
            <p>{getDate()}</p>
          </div>
        </div>
        <div
          className={`${
            tools ? "visible" : ""
          } invisible flex flex-col gap-3 ml-3`}
        >
          <div className=" p-1 hover:bg-slate-300 hover:text-blue-700 rounded-md cursor-pointer">
            <FiEdit className="h-6 w-6" />
          </div>
          <div className=" p-1 hover:bg-slate-300 hover:text-red-500 rounded-md cursor-pointer">
            <MdDelete className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseCard;
