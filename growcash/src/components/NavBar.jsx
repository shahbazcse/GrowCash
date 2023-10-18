import React from "react";
import { useNavigate } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbReportMoney } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { ImTwitter } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineBank } from "react-icons/ai";

function NavBar() {
  const navigate = useNavigate();

  const isActive = (path) => {
    return path === window.location.pathname;
  };

  return (
    <div className="flex flex-col gap-4 items-center w-[15%] bg-[#FFFFFF] drop-shadow-md font-[raleway] text-xl">
      <div className="flex items-center justify-center gap-2 mt-6 mb-12 text-2xl font-bold">
        <AiOutlineBank className="h-10 w-10" />
        <div className="tracking-wider">GrowCash</div>
      </div>
      <div
        className={`${
          isActive("/") ? "bg-[#BEADFA]" : "hover:bg-[#DFCCFB]"
        } w-[18vh] flex items-center gap-4 text-center px-4 py-3 rounded-xl cursor-pointer drop-shadow-md`}
        onClick={() => navigate("/")}
      >
        <LuLayoutDashboard className="h-7 w-7" />
        <div className="font-bold">Dashboard</div>
      </div>
      <div
        className={`${
          isActive("/income") ? "bg-[#BEADFA]" : "hover:bg-[#DFCCFB]"
        } w-[18vh] flex items-center gap-4 text-center px-4 py-3 rounded-xl cursor-pointer drop-shadow-md`}
        onClick={() => navigate("/income")}
      >
        <GiReceiveMoney className="h-7 w-7" />
        <div className="font-bold">Income</div>
      </div>
      <div
        className={`${
          isActive("/expense") ? "bg-[#BEADFA]" : "hover:bg-[#DFCCFB]"
        } w-[18vh] flex items-center gap-4 text-center px-4 py-3 rounded-xl cursor-pointer drop-shadow-md`}
        onClick={() => navigate("/expense")}
      >
        <TbReportMoney className="h-7 w-7" />
        <div className="font-bold">Expense</div>
      </div>
      <div
        className={`${
          isActive("/savings") ? "bg-[#BEADFA]" : "hover:bg-[#DFCCFB]"
        } w-[18vh] flex items-center gap-4 text-center px-4 py-3 rounded-xl cursor-pointer drop-shadow-md`}
        onClick={() => navigate("/savings")}
      >
        <MdAttachMoney className="h-7 w-7" />
        <div className="font-bold">Savings</div>
      </div>
      <div
        className={`${
          isActive("/reports") ? "bg-[#BEADFA]" : "hover:bg-[#DFCCFB]"
        } w-[18vh] flex items-center gap-4 text-center px-4 py-3 rounded-xl cursor-pointer drop-shadow-md`}
        onClick={() => navigate("/reports")}
      >
        <TbReportMoney className="h-7 w-7" />
        <div className="font-bold">Reports</div>
      </div>
      <div className="flex items-center justify-center gap-8 fixed bottom-0 px-7 my-12">
        <a
          href="https://github.com/shahbazcse/GrowCash"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="h-7 w-7 cursor-pointer text-[#BEADFA] hover:text-black" />
        </a>
        <a
          href="https://twitter.com/shahbaz_cse"
          target="_blank"
          rel="noreferrer"
        >
          <ImTwitter className="h-7 w-7 cursor-pointer text-[#BEADFA] hover:text-blue-400" />
        </a>
        <a
          href="https://www.linkedin.com/in/shahbazcse/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="h-7 w-7 cursor-pointer text-[#BEADFA] hover:text-blue-600" />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
