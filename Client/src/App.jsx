import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './Components/Layout/Layout';
import SpareParts from './Pages/SpareParts'
import Assembly from './Pages/Assembly';
import Variables from './Pages/Variables';
import Mechanism from './Pages/Mechanism';

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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
