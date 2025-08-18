import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./Components/Layout/Layout";
import SpareParts from "./Pages/SpareParts";
import Assembly from "./Pages/Assembly";
import Variables from "./Pages/Variables";
import Mechanism from "./Pages/Mechanism";
import RepairKit from "./Pages/RepairKit";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page at root */}
        <Route path="/" element={<LandingPage />} />

        {/* Dashboard layout with nested routes */}
        <Route path="/" element={<DashboardLayout />}>

          <Route path="spare-parts" element={<SpareParts />} />
          <Route path="assembly" element={<Assembly />} />
          <Route path="variables" element={<Variables />} />
          <Route path="mechanism" element={<Mechanism />} />
          <Route path="repair-kit" element={<RepairKit />} />
          {/* Default route inside dashboard */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
