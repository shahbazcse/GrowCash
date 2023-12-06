import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import NavBar from "./components/NavBar";

import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Savings from "./pages/Savings";
import Reports from "./pages/Reports";
import { fetchIncome } from "./services/IncomeService";
import { fetchExpenses } from "./services/ExpenseService";
import { fetchSavings } from "./services/SavingsService";
import NonDesktopPage from "./components/NonDesktopPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIncome());
    dispatch(fetchExpenses());
    dispatch(fetchSavings());
  }, [dispatch]);
  return (
    <div className="App">
      <div className="block xl:hidden">
        <NonDesktopPage />
      </div>
      <div className="hidden xl:flex h-screen font-[roboto]">
        <NavBar />
        <div className="bg-[#DFCCFB] tracking-wide w-[85%] overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/income" element={<Income />} />
            <Route path="/expense" element={<Expense />} />
            <Route path="/savings" element={<Savings />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
