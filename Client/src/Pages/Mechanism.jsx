import React, { useState, useEffect } from "react";

const Mechanism = () => {
  const [search, setSearch] = useState("");
  const [modalImg, setModalImg] = useState(null);
  const [showDesc, setShowDesc] = useState({});
  const [selectedParts, setSelectedParts] = useState([]);
  const [showComparison, setShowComparison] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [userName, setUserName] = useState("");

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

  const handleShowDesc = (idx) => {
    setShowDesc((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

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

  const removeFromCart = (ref) => {
    setCart((prev) => prev.filter((part) => part.ref !== ref));
  };

  const updateQuantity = (ref, quantity) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((part) =>
        part.ref === ref ? { ...part, quantity } : part
      )
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      if (showComparison) setShowComparison(false);
      if (showCart) setShowCart(false);
      if (modalImg) setModalImg(null);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showComparison, showCart, modalImg]);

  // TODO: implement renderComparisonModal & renderCartModal
  const renderComparisonModal = () => null;
  const renderCartModal = () => null;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 relative">
      {/* HEADER with Title */}
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          ASSEMBLY PARTS
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

                <button
                  onClick={() => {
                    addToCart(part);
                  }}
                  className="px-3 py-1.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200"
                >
                  Add to Cart
                </button>
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
      {showComparison && renderComparisonModal()}
      {showCart && renderCartModal()}
    </div>
  );
};

export default Mechanism;
