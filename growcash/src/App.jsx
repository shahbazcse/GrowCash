import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Savings from "./pages/Savings";
import Reports from "./pages/Reports";

function App() {
  return (
    <div className="App">
      <div className="flex h-screen font-[roboto]">
        <NavBar />
        <div className="bg-blue-100 tracking-wide w-[85%] overflow-auto">
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
