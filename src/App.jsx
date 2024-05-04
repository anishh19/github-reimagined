import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserRepositoryPage from "./pages/UserRepositoryPage";
function App() {
  return (
    <div className="bg-[#0D1117] w-full py-36 min-h-screen flex flex-col gap-8 items-center">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:user" element={<UserRepositoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
