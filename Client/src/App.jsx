import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Variables from './Components/Variables'
import Assembly from './Components/Assembly';
import Mechanism from './Components/Mechanism';
import SpareParts from './Components/SpareParts';

const App = () => (
  <Router>
    <nav style={{ padding: '10px', textAlign: 'center', background: '#eee' }}>
      <Link to="/" style={{ margin: '10px' }}>Variables</Link>
      <Link to="/assembly" style={{ margin: '10px' }}>Assembly</Link>
      <Link to="/mechanism" style={{ margin: '10px' }}>Mechanism</Link>
      <Link to="/spare-parts" style={{ margin: '10px' }}>Spare Parts</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Variables />} />
      <Route path="/assembly" element={<Assembly />} />
      <Route path="/mechanism" element={<Mechanism />} />
      <Route path="/spare-parts" element={<SpareParts />} />
    </Routes>
  </Router>
);

export default App;