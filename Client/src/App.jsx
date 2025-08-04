import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './Components/Layout/Layout';
import SpareParts from './Components/SpareParts'
import Assembly from './Components/Assembly';
import Variables from './Components/Variables';
import Mechanism from './Pages/Mechanism';
import RepairKit from './Pages/RepairKit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/spare-parts" />} />
          <Route path="spare-parts" element={<SpareParts />} />
          <Route path="assembly" element={<Assembly />} />
          <Route path="variables" element={<Variables />} />
          <Route path="mechanism" element={<Mechanism />} />
          <Route path="repair-kit" element={<RepairKit />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;