import React, { useState, useEffect } from "react";
import ComparisonModal from "../Components/ComparsionModel/ComparisonModal"; 
import CartModal from "../Components/ComparsionModel/CartModal";
import DetailsModal from "../Components/DetailModel/DetailsModal ";

const Mechanism = () => {
  const [search, setSearch] = useState("");
  const [modalImg, setModalImg] = useState(null);
  const [selectedParts, setSelectedParts] = useState([]);
  const [showComparison, setShowComparison] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [detailPart, setDetailPart] = useState(null);

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
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "Available",
        "Machine Size": '85mm, 4 1/4", 5"',
        "General Description": "High-quality gear assembly.",
        "Notes for Customer": "Check compatibility.",
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
        Price: "N/A",
        Unit: "N/A",
        Weight: "64.319",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": '85mm, 4 1/4", 5"',
        "General Description": "N/A",
        "Notes for Customer": "N/A",
      },
    },
    {
      name: 'Baffle Mechanism 5 1/2"',
      ref: "210-146-1",
      img: "https://placehold.co/400x300",
      alt: 'Baffle Mechanism 5 1/2"',
      details: {
        "Mechanism Name": 'Baffle Mechanism 5 1/2"',
        "Reference No": "210-146-1",
        Availability: "N/A",
        Unit: "N/A",
        Weight: "62.600",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": '5 1/2"',
        "General Description": "N/A",
        "Notes for Customer": "N/A",
      },
    },
    {
      name: "Blow Head Mechanism 5",
      ref: "200-249-1",
      img: "https://placehold.co/400x300",
      alt: "Blow head Mechanism 5",
      details: {
        "Mechanism Name": "Blow head Mechanism 5",
        "Reference No": "200-249-1",
        Availability: "N/A",
        Price: "N/A",
        Unit: "N/A",
        Weight: "62.821",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": '85mm, 4 1/4", 5"',
        "General Description": "N/A",
        "Notes for Customer": "N/A",
      },
    },
  ];

  const filteredParts = parts.filter(
    (part) =>
      part.name.toLowerCase().includes(search.toLowerCase()) ||
      part.ref.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (part) => {
    const existingPart = cart.find((p) => p.ref === part.ref);
    if (existingPart) {
      setCart((prev) =>
        prev.map((p) =>
          p.ref === part.ref ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCart((prev) => [...prev, { ...part, quantity: 1 }]);
    }
  };

  const togglePartSelection = (part) => {
    setSelectedParts((prev) =>
      prev.find((p) => p.ref === part.ref)
        ? prev.filter((p) => p.ref !== part.ref)
        : [...prev, part]
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      if (showComparison) setShowComparison(false);
      if (showCart) setShowCart(false);
      if (modalImg) setModalImg(null);
      if (detailPart) setDetailPart(null);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showComparison, showCart, modalImg, detailPart]);

  const removeFromCart = (ref) => {
    setCart((prev) => prev.filter((p) => p.ref !== ref));
  };

  const updateQuantity = (ref, quantity) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((p) => (p.ref === ref ? { ...p, quantity } : p))
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 relative">
      {/* HEADER with Title */}
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          MECHANISM PARTS
        </h1>
      </div>

      {/* Search bar */}
      <div className="max-w-3xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by name or reference number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Grid parts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredParts.map((part) => (
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
                  onClick={() => setDetailPart(part)}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Details
                </button>

                <button
                  onClick={() => togglePartSelection(part)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium ${
                    selectedParts.find((p) => p.ref === part.ref)
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {selectedParts.find((p) => p.ref === part.ref)
                    ? "Selected"
                    : "Select"}
                </button>

                <button
                  onClick={() => addToCart(part)}
                  className="px-3 py-1.5 rounded-md text-xs font-medium bg-green-100 text-green-800 hover:bg-green-200"
                >
                  Add to Cart
                </button>
              </div>
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

      {/* Comparison Modal */}
      {showComparison && (
        <ComparisonModal
          parts={selectedParts}
          onClose={() => setShowComparison(false)}
        />
      )}

      {/* Cart Modal */}
      {showCart && (
        <CartModal
          cart={cart}
          onClose={() => setShowCart(false)}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      )}

      {/* Details Modal */}
      {detailPart && (
        <DetailsModal
          part={detailPart}
          onClose={() => setDetailPart(null)}
        />
      )}
    </div>
  );
};

export default Mechanism;
