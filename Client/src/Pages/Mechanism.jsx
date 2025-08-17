import React, { useState, useEffect } from "react";


import ComparisonModal from "../Components/ComparsionModel/ComparisonModal";
import CartModal from "../Components/ComparsionModel/CartModal"

const Mechanism = () => {
  const [search, setSearch] = useState("");
  const [modalImg, setModalImg] = useState(null);
  const [showDesc, setShowDesc] = useState({});
  const [selectedParts, setSelectedParts] = useState([]);
  const [showComparison, setShowComparison] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);


  const parts = [
    {
      name: 'Baffle Mechanism 4 1/4 5"',
      ref: "200-248-3",
      img: "https://placehold.co/400x300",
      alt: 'Baffle Mechanism 4 1/4 5"',
      details: {
        "Mechanism Name": 'Baffle Mechanism 4 1/4 5"',
        "Reference No": "200-248-3",
        Availability: "In Stock",
        Unit: "Each",
        Weight: "57.600",
        "Lead Time": "2 weeks",
        "Machine Type": "STR",
        "Kit Availability": "Available",
      },
    },
    {
      name: 'Baffle Mechanism 4 1/4", 5"',
      ref: "200-248-4",
      img: "https://placehold.co/400x300",
      alt: 'Baffle Mechanism 4 1/4", 5"',
      details: {
        "Mechanism Name": 'Baffle Mechanism 4 1/4", 5"',
        "Reference No": "200-248-4",
        Availability: "N/A",
        Weight: "64.319",
        "Lead Time": "8 weeks",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
      },
    },
  ];

  // ----- Filtering -----
  const filteredParts = parts.filter(
    (part) =>
      part.name.toLowerCase().includes(search.toLowerCase()) ||
      part.ref.toLowerCase().includes(search.toLowerCase())
  );

  // ----- Expand/Collapse details -----
  const handleShowDesc = (idx) => {
    setShowDesc((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // ----- Cart -----
  const addToCart = (part) => {
    const existing = cart.find((p) => p.ref === part.ref);
    if (existing) {
      setCart((prev) =>
        prev.map((p) =>
          p.ref === part.ref ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCart((prev) => [...prev, { ...part, quantity: 1 }]);
    }
  };

  const removeFromCart = (ref) => {
    setCart((prev) => prev.filter((p) => p.ref !== ref));
  };

  const updateQuantity = (ref, quantity) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((p) => (p.ref === ref ? { ...p, quantity } : p))
    );
  };

  // ----- Comparison -----
  const toggleSelectForComparison = (part) => {
    setSelectedParts((prev) =>
      prev.find((p) => p.ref === part.ref)
        ? prev.filter((p) => p.ref !== part.ref)
        : [...prev, part]
    );
  };

  // ----- Escape key handling -----
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      if (showComparison) setShowComparison(false);
      if (showCart) setShowCart(false);
      if (modalImg) setModalImg(null);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showComparison, showCart, modalImg]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 relative">
      {/* HEADER */}
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          MECHANISM PARTS
        </h1>
      </div>

      {/* Search */}
      <div className="max-w-3xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by name or reference number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredParts.map((part, idx) => (
          <div
            key={part.ref}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={part.img}
              alt={part.alt}
              className="w-full h-48 object-contain cursor-pointer"
              onClick={() => setModalImg(part.img)}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {part.name}
              </h3>
              <p className="text-gray-600 mb-2">Ref: {part.ref}</p>

              <div className="flex justify-between items-center mb-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleShowDesc(idx);
                  }}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {showDesc[idx] ? "Hide Details" : "View Details"}
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => addToCart(part)}
                    className="px-3 py-1.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => toggleSelectForComparison(part)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium ${
                      selectedParts.find((p) => p.ref === part.ref)
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {selectedParts.find((p) => p.ref === part.ref)
                      ? "Selected"
                      : "Compare"}
                  </button>
                </div>
              </div>

              {showDesc[idx] && (
                <div className="mt-4">
                  <div className="text-sm space-y-2">
                    {Object.entries(part.details).map(([key, value]) => (
                      <div key={key} className="flex">
                        <span className="font-medium w-40">{key}:</span>
                        <span className="flex-1">{value || "-"}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {modalImg && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <span
            className="absolute top-4 right-6 text-white text-4xl cursor-pointer"
            onClick={() => setModalImg(null)}
          >
            &times;
          </span>
          <img
            src={modalImg}
            alt="Enlarged view"
            className="max-w-full max-h-full"
          />
        </div>
      )}

      {/* Floating buttons */}
      {selectedParts.length > 0 && (
        <button
          onClick={() => setShowComparison(true)}
          className="fixed bottom-4 right-4 px-4 py-2 rounded-lg text-white font-medium shadow-lg bg-blue-600 hover:bg-blue-700"
        >
          Compare ({selectedParts.length})
        </button>
      )}

      {cart.length > 0 && (
        <button
          onClick={() => setShowCart(true)}
          className="fixed bottom-16 right-4 px-4 py-2 rounded-lg text-white font-medium shadow-lg bg-green-600 hover:bg-green-700"
        >
          View Cart ({cart.length})
        </button>
      )}

      {/* Modals */}
      {showComparison && (
        <ComparisonModal
          parts={selectedParts}
          onClose={() => setShowComparison(false)}
        />
      )}

      {showCart && (
        <CartModal
          cart={cart}
          onClose={() => setShowCart(false)}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      )}
    </div>
  );
};

export default Mechanism;
