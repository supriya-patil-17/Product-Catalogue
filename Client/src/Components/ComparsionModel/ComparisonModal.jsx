// src/Components/ComparisonModal.jsx
import React from "react";

const ComparisonModal = ({ parts, onClose }) => {
  if (!parts || parts.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-6">
      <div className="bg-white rounded-lg shadow-lg max-w-5xl w-full overflow-auto max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-center border-b px-4 py-3">
          <h2 className="text-xl font-bold text-gray-800">Compare Parts</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-red-600 text-2xl font-bold"
          >
            &times;
          </button>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2 bg-gray-100">Property</th>
                {parts.map((part) => (
                  <th key={part.ref} className="border px-4 py-2 bg-gray-50">
                    {part.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(parts[0].details).map((key) => (
                <tr key={key}>
                  <td className="border px-4 py-2 font-medium bg-gray-100">
                    {key}
                  </td>
                  {parts.map((part) => (
                    <td key={part.ref + key} className="border px-4 py-2">
                      {part.details[key] || "-"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 flex justify-end border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComparisonModal;
