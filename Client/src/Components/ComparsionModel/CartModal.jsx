import React from "react";

const CartModal = ({ cart, onClose, removeFromCart, updateQuantity }) => {
  return (
    <div className="fixed inset-0 bg-transparent   bg-opacity-40 flex backdrop-blur-sm items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full mx-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-gray-600 text-center">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.ref}
                  className="flex items-center justify-between border-b pb-4"
                >
                  {/* Image + Name */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="w-16 h-16 object-contain border rounded"
                    />
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">Ref: {item.ref}</p>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        updateQuantity(item.ref, item.quantity - 1)
                      }
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.ref, item.quantity + 1)
                      }
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.ref)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="flex justify-end border-t px-6 py-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Add Enquiry
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
