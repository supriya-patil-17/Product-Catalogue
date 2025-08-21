
import React, { useState, useEffect } from "react";

const ASSEMBLY = () => {
  const [search, setSearch] = useState("");
  const [modalImg, setModalImg] = useState(null);
  const [showDesc, setShowDesc] = useState({});
  const [selectedParts, setSelectedParts] = useState([]);
  const [showComparison, setShowComparison] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [userName, setUserName] = useState(""); // Corrected line

  const parts = [
    {
      "name": "Mould Insert Set 1363",
      "ref": "09750152",
      "img": "https://placehold.co/400x300",
      "alt": "Mould Insert Set 1363",
      "details": {
        "Assembly Name": "Mould Insert Set 1363",
        "Reference No": "09750152",
        "UOM Weight": "Kg",
        "Weight": "N/A",
        "Lead Time": "12 weeks",
        "Machine Center Distance": "127mm",
        "Machine Type": "IS ",
        "Mould Size": "N/A",
        "Kit Availability": (
          <ul>
            <li>N/A</li>
          </ul>
        ),
        "General Description": "BAFFLE MECH 4 1/4 & 5\"",
        "Availability": " N/A",
        "Notes for Customer": "Check compatibility.",
        "Price": "N/A",
      }
    },




    // Add more parts as needed...
  ];

  const filteredParts = parts.filter(part =>
    part.name.toLowerCase().includes(search.toLowerCase()) ||
    part.ref.toLowerCase().includes(search.toLowerCase())
  );

  const addToComparison = (part) => {
    setSelectedParts(prev => {
      if (prev.find(p => p.ref === part.ref)) {
        return prev.filter(p => p.ref !== part.ref); // Remove if already selected
      }
      return [...prev, part]; // Add to comparison
    });
  };

  const addToCart = (part) => {
    const existingPart = cart.find(p => p.ref === part.ref);
    if (existingPart) {
      // Increase quantity if already in cart
      setCart(prev => prev.map(p =>
        p.ref === part.ref ? { ...p, quantity: p.quantity + 1 } : p
      ));
    } else {
      // Add new part to cart with quantity 1
      setCart(prev => [...prev, { ...part, quantity: 1 }]);
    }
  };

  const removeFromCart = (ref) => {
    setCart(prev => prev.filter(part => part.ref !== ref));
  };

  const updateQuantity = (ref, quantity) => {
    if (quantity < 1) return; // Prevent negative quantities
    setCart(prev => prev.map(part =>
      part.ref === ref ? { ...part, quantity } : part
    ));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      if (showComparison) {
        setShowComparison(false); // Close comparison modal
      }
      if (showCart) {
        setShowCart(false); // Close cart modal
      }
      if (modalImg) {
        setModalImg(null); // Close image modal
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  },
    [showComparison, showCart, modalImg]);

  const renderComparisonModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-5xl p-6 overflow-auto max-h-[80vh]">
        <h2 className="text-2xl font-bold mb-4">Compare Parts</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead>
              <tr>
                <th className="border p-4">Feature</th>
                {selectedParts.map(part => (
                  <th key={part.ref} className="border p-4 text-center">
                    <img
                      src={part.img}
                      alt={part.alt}
                      className="h-24 mx-auto mb-2"
                      onClick={() => setModalImg(part.img)}
                    />
                    <div className="font-semibold">{part.name}</div>
                    <div className="text-sm text-black-800">{part.ref}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(selectedParts[0].details).map(key => (
                <tr key={key}>
                  <td className="border p-4 font-medium">{key}</td>
                  {selectedParts.map(part => (
                    <td key={`${part.ref}-${key}`} className="border p-4 text-center">
                      {part.details[key] || "N/A"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          onClick={() => setShowComparison(false)}
          aria-label="Close Comparison"
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Close Comparison
        </button>
      </div>
    </div>
  );

  const renderCartModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-3xl p-4 overflow-auto max-h-[80vh]">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead>
              <tr>
                <th className="border p-2">Part Name</th>
                <th className="border p-2">Reference No</th>
                <th className="border p-2">Quantity</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((part, index) => (
                <tr key={index}>
                  <td className="border p-2">{part.name}</td>
                  <td className="border p-2">{part.ref}</td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={part.quantity}
                      min="1"
                      onChange={(e) => updateQuantity(part.ref, parseInt(e.target.value))}
                      className="w-16 text-center border rounded"
                    />
                  </td>
                  <td className="border p-2 text-center">
                    <button
                      onClick={() => removeFromCart(part.ref)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          <button
            onClick={() => {
              // Prepare email details
              const partDetails = cart.map(part => `${part.name} (${part.ref})`).join(", ");
              const emailBody = `Dear Sales Team,%0D%0A%0D%0AI am interested in the ${partDetails}. Could you please provide details on the following:%0D%0A%0D%0A Spares-%0D%0A Quantity-[ ]%0D%0A Additionally, could you please provide a Quotation for ${partDetails}?%0D%0A%0D%0AThanks!%0D%0A%0D%0ABest Regards,%0D%0A${encodeURIComponent(userName)}`;
              const mailtoLink = `mailto:company@example.com?subject=New Order from ${userName}&body=${emailBody}`;
              window.location.href = mailtoLink; // Open email client
              setCart([]); // Clear cart after order
              setUserName(""); // Clear user name
              setShowCart(false); // Close cart modal
            }}
            className="w-full mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Place Order
          </button>
        </div>
        <button
          onClick={() => setShowCart(false)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-350"
        >
          Close Cart
        </button>
        <button
          onClick={() => setCart([])}
          className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-red-700"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-8 lg:px-10">
      <h1 className="text-5xl font-bold text-gray-900 text-center mb-10">ASSEMBLY PARTS</h1>

      <div className="max-w-4xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search by name or reference number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-6 py-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredParts.map((part, idx) => (
          <div key={part.ref} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={part.img}
              alt={part.alt}
              className="w-full h-56 object-contain cursor-pointer"
              onClick={() => setModalImg(part.img)}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{part.name}</h3>
              <p className="text-gray-600 mb-2">Ref: {part.ref}</p>

              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowDesc(prev => ({ ...prev, [idx]: !prev[idx] }));
                  }}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {showDesc[idx] ? 'Hide Details' : 'View Details'}
                </button>

                <button
                  onClick={() => addToCart(part)}
                  className={`px-4 py-2 rounded-md text-xs font-medium ${selectedParts.find(p => p.ref === part.ref) ? 'bg-black-100 text-orange-800 hover:bg-black-200' : 'bg-gray-100 text-black-800 hover:bg-gray-200'}`}
                >
                  {selectedParts.find(p => p.ref === part.ref) ? 'Added To Cart' : 'Add to Cart'}
                </button>

                <button
                  onClick={() => addToComparison(part)}
                  className={`px-4 py-2 rounded-md text-xs font-medium ${selectedParts.find(p => p.ref === part.ref) ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'} hover:bg-gray-200`}
                >
                  {selectedParts.find(p => p.ref === part.ref) ? 'Remove from Comparison' : 'Add to Comparison'}
                </button>
              </div>

              {showDesc[idx] && (
                <div className="mt-4">
                  <div className="text-sm space-y-2">
                    {Object.entries(part.details).map(([key, value]) => (
                      <div key={key} className="flex flex-col mb-2">
                        {key === "Kit Availability" && value ? (
                          <>
                            <span className="font-medium">Kit Availability:</span>
                            <ul className="list-disc list-inside ml-4">
                              {value.split(',').map((kit, idx) => (
                                <li key={idx}>{kit.trim()}</li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <span><span className="font-medium">{key}:</span> <span className="ml-2">{value || '-'}</span></span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {
        selectedParts.length > 0 && (
          <button
            onClick={() => setShowComparison(true)}
            className={`fixed bottom-4 right-4 px-4 py-2 rounded-lg text-white font-medium shadow-lg bg-blue-600 hover:bg-blue-700`}
          >
            Compare ({selectedParts.length})
          </button>
        )
      }

      {
        cart.length > 0 && (
          <button
            onClick={() => setShowCart(true)}
            className="fixed bottom-16 right-4 px-4 py-2 rounded-lg text-white font-medium shadow-lg bg-green-600 hover:bg-green-700"
          >
            View Cart ({cart.length})
          </button>
        )
      }

      {showComparison && renderComparisonModal()}
      {showCart && renderCartModal()}
    </div >
  );
};

export default ASSEMBLY;