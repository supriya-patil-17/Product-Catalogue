import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling

const productCategories = {
  spareparts: {
    name: 'SPARE PARTS',
    indexlink: 'SP.HTML',
    parts: [
      'Cam',
      'Piston and Rod',
      'Cylinder',
      'Bushing',
      'Plug',
      'Bearing',
      'Shaft'
    ]
  },
  assembly: {
    name: 'ASSEMBLY',
    indexlink: '/Assembly.jsx',
    parts: [
      'Neck Ring Holder STR Assly',
      'Tong Holder Assembly',
      'Blank Mold Holder Arm Assembly',
      'Blow Head Arm Assembly',
      'Pusher Assembly',
      'Take-Out Assembly'
    ]
  },
  variables: {
    name: 'VARIABLES',
    indexlink: '/Variables.jsx',
    parts: [
      'Funnel Arm',
      'Guide Arm',
      'Adjustment Screw',
      'Locking Mechanism'
    ]
  },
  mechanism: {
    name: 'MECHANISM',
    indexlink: 'md.html',
    parts: [
      'Funnel Mechanism',
      'Blow Head Mechanism',
      'Take-Out Mechanism',
      'Pusher Mechanism'
    ]
  },
  repairkit: {
    name: 'REPAIR KIT',
    indexlink: 'RK.HTML',
    parts: [
      'Standard Repair Kit',
      'Complete Seal Kit',
      'Bearing Replacement Kit',
      'Gasket Set'
    ]
  }
};

const App = () => {
  const [currentCategory, setCurrentCategory] = useState('spareparts');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalCategory, setModalCategory] = useState('');

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setSearchTerm('');
  };

  const showPartsList = (category) => {
    setModalCategory(category);
    setShowModal(true);
  };

  const filteredProducts = () => {
    if (!searchTerm) return [productCategories[currentCategory]];

    return Object.values(productCategories)
      .filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.parts.some(part =>
          part.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
  };

  return (
    <div className="App">
      <main className="content">
        <section className="intro">
          <h2>ACCURAMECH</h2>
          <p>High quality Precision Mechanical Parts (Subsidiary of Verallia Group).</p>
          <p>Thank you for choosing ACCURAMECH. We look forward to serving you!</p>
        </section>

        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search parts or categories..."
          />
        </div>

        <div className="catalogue">
          {filteredProducts().map((product, index) => {
            const categoryKey = Object.keys(productCategories).find(
              key => productCategories[key].name === product.name
            );

            return (
              <div className="product" key={index}>
                <h3>{product.name}</h3>
                <div>
                  <a href={product.indexlink} className="view-btn">View Index Page</a>
                  <button
                    onClick={() => showPartsList(categoryKey)}
                    className="view-btn"
                  >
                    View Parts List
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pagination">
          {Object.keys(productCategories).map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={currentCategory === category ? 'active' : ''}
            >
              {productCategories[category].name}
            </button>
          ))}
        </div>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>{productCategories[modalCategory].name} Parts List</h3>
              <ul className="parts-list">
                {productCategories[modalCategory].parts.map((part, index) => (
                  <li key={index}>
                    <span className="part-name">{part}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowModal(false)}
                className="view-btn"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
