import React from "react";

function IncomeCardHeader() {
  return (
    <div className="flex justify-center items-center top-0 sticky drop-shadow-lg font-bold">
      <div className="flex items-center justify-center">
        <div className="flex h-[6vh] ml-1 items-center bg-blue-300 rounded-t-md">
          <div className="flex justify-center items-center border-r w-[20vh] h-full">
            <p>Source</p>
          </div>
          <div className="flex justify-center items-center border-r w-[36vh] h-full">
            <p>Description</p>
          </div>
          <div className="flex justify-center items-center border-r w-[20vh] h-full">
            <p>Amount</p>
          </div>
          <div className="flex justify-center items-center border-r w-[20vh] h-full">
            <p>Category</p>
          </div>
          <div className="flex justify-center items-center w-[20.2vh] h-full">
            <p>Date Added</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncomeCardHeader;
