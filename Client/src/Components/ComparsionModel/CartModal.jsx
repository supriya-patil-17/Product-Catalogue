import React, { useState } from "react";

const CartModal = ({ cart, onClose, removeFromCart, updateQuantity }) => {
  const [customerName, setCustomerName] = useState("");

  const handleSendEmail = () => {
    const subject = "Request for Quotation - Cart Items";

    let body = `Dear Sales Team,\n \nPlease find below the list of items for quotation:\n\n`;

    cart.forEach(item => {
      body += `• ${item.name}\n`;
      body += `  - Reference No. :- ${item.ref}\n`;
      body += `  - Quantity :- ${item.quantity}\n\n`;
    });

    body += "Kindly share the quotation at your earliest convenience.\n\nBest regards,\n" + customerName;

    window.location.href = `mailto:sales.l01gen@verallia.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onClose();
  };


  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex backdrop-blur-sm items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full mx-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center border-b px-6 py-4 bg-gray-100 rounded-t-xl">
          <h2 className="text-2xl font-bold text-gray-800">🛒 Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-gray-600 text-center">Your cart is empty.</p>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200 text-black-700">
                  <th className="p-2">Name</th>
                  <th className="p-2">Reference No.</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.ref} className="border-b hover:bg-gray-50">
                    <td className="p-2 font-medium">{item.name}</td>
                    <td className="p-2 text-sm text-black-600">{item.ref}</td>
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.ref, item.quantity - 1)}
                          className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => {
                            const newQty = parseInt(e.target.value, 10);
                            if (!isNaN(newQty) && newQty > 0) {
                              updateQuantity(item.ref, newQty);
                            }
                          }
                          }
                          className="w-16 text-center border rounded px-2 py-1"
                        />
                        <button
                          onClick={() => updateQuantity(item.ref, item.quantity + 1)}
                          className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                        >
                          +
                        </button>
                      </div>

                    </td>
                    <td className="p-2">
                      <button
                        onClick={() => removeFromCart(item.ref)}
                        className="text-red-600 hover:text-red-800 text-sm font-semibold"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="flex flex-col gap-4 border-t px-6 py-4 bg-gray-50 rounded-b-xl">
            <label className="text-sm font-medium text-gray-700">
              Enter your name for quotation:
            </label>
            <input
              type="text"
              placeholder="Customer Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleSendEmail}
              disabled={!customerName.trim()}
              className={`px-4 py-2 text-white rounded ${customerName.trim()
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-400 cursor-not-allowed"
                }`}
            >
              📩 Send Quotation Request
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
