import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetricCard from "../components/MetricCard";
import img1 from "../assets/01.svg";
import img2 from "../assets/02.svg";
import img3 from "../assets/03.svg";
import img4 from "../assets/04.svg";
import { fetchIncome } from "../services/IncomeService";
import { fetchExpenses } from "../services/ExpenseService";
import { fetchSavings } from "../services/SavingsService";
import {
  getTotalExpense,
  getTotalIncome,
  getTotalSavings,
} from "../services/DashboardService";

function Dashboard() {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.income);
  const expenses = useSelector((state) => state.expenses);
  const savings = useSelector((state) => state.savings);

  useEffect(() => {
    dispatch(fetchIncome());
    dispatch(fetchExpenses());
    dispatch(fetchSavings());
  }, [dispatch]);
  return (
    <div className="flex flex-col gap-6 mx-12 my-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      <div className="flex flex-col gap-6 items-center justify-center">
        <div className="mx-[12vh] text-lg">
          Welcome to your dashboard, where you can get a quick snapshot of your
          business's vital statistics. Currently, your total stock on hand is
          displayed, giving you an immediate view of available inventory. Total
          sales to date provide an overview of your business activity, while
          total revenue generated tells you the financial impact. For a quick
          reference on the latest activity, we've included the date of your most
          recent sale, ensuring you're always up-to-date. With these key metrics
          at your fingertips, you're empowered to make informed decisions, plan
          for the future, and keep your business on track.
        </div>
        <div className="flex flex-wrap items-center justify-center my-12 mx-48 gap-12">
          <MetricCard
            label={"Total Income"}
            type={"income"}
            value={getTotalIncome(income)}
            bannerImg={img1}
          />
          <MetricCard
            label={"Total Expense"}
            type={"expense"}
            value={getTotalExpense(expenses)}
            bannerImg={img2}
          />
          <MetricCard
            label={"Total Savings"}
            type={"savings"}
            value={getTotalSavings(savings)}
            bannerImg={img3}
          />
          <MetricCard
            label={"Average Monthly Savings"}
            type={"currentMonthSavings"}
            value={getTotalSavings(savings) / savings.length}
            bannerImg={img4}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
