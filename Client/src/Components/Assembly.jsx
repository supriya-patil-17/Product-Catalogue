import { useState } from "react";

const Assembly = () => {
  const [search, setSearch] = useState("");
  const [modalImg, setModalImg] = useState(null);
  const [showDesc, setShowDesc] = useState({});
  const [selectedParts, setSelectedParts] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  const parts = [
    {
      name: "Neck} Ring Holder STR Assly",
      ref: "23-1167-2",
      img: "https://placehold.co/400x300",
      alt: "Neck ring holder assembly for machinery",
      details: {
        "Spare Part Name ": "Neck Ring Holder STR Assly",
        "Reference No": " 23-1167-2",
        "Availability": "N/A",
        "Price": "N/A",
        "Unit": "N/A",
        "Weight": "N/A",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": "8\" 100 mm",
        "General Description": "N/A",
        "Notes for Customer": "N/A"
      }
    },
    {
      name: "Neck} Ring Holder STR Assly",
      ref: "23-1167-2",
      img: "https://placehold.co/400x300",
      alt: "Neck ring holder assembly for machinery",
      details: {
        "Spare Part Name ": "Neck Ring Holder STR Assly",
        "Reference No": " 23-1167-2",
        "Availability": "N/A",
        "Price": "N/A",
        "Unit": "N/A",
        "Weight": "N/A",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": "8\" 100 mm",
        "General Description": "N/A",
        "Notes for Customer": "N/A",
      }
    }
  ]

  // Add other parts with same structure...

  const filteredParts = parts.filter(part =>
    part.name.toLowerCase().includes(search.toLowerCase()) ||
    part.ref.toLowerCase().includes(search.toLowerCase())
  );

  const handleShowDesc = (idx) => {
    setShowDesc(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const togglePartSelection = (part) => {
    setSelectedParts(prev => {
      if (prev.some(p => p.ref === part.ref)) {
        return prev.filter(p => p.ref !== part.ref);
      } else if (prev.length < 4) {
        return [...prev, part];
      }
      return prev;
    });
  };

  const renderComparisonModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full p-4">
        <h2 className="text-xl font-bold mb-4">Compare Parts</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead>
              <tr>
                <th className="border p-2">Feature</th>
                {selectedParts.map(part => (
                  <th key={part.ref} className="border p-2 text-center">
                    <img
                      src={part.img}
                      alt={part.alt}
                      className="h-20 mx-auto mb-2"
                      onClick={() => setModalImg(part.img)}
                    />
                    <div className="font-semibold">{part.name}</div>
                    <div className="text-sm text-gray-600">{part.ref}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(parts[0].details).map(key => (
                <tr key={key}>
                  <td className="border p-2 font-medium">{key}</td>
                  {selectedParts.map(part => (
                    <td key={`${part.ref}-${key}`} className="border p-2 text-center">
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
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Close Comparison
        </button>
      </div>
    </div>
  );

  const sendEmail = (partName, partRef) => {
    const userName = window.prompt("Enter your name:");
    if (userName) {
      const email = "sales.l01gen@verallia.com";
      const subject = `Request for ${partName} (${partRef})`;
      const body = `Dear Sales Team,%0D%0A%0D%0AI am interested in the ${partName} (${partRef}).Could you please provide details on the following:%0D%0A%0D%0A Spares-%0D%0A Quantity-[ ]%0D%0A Additionally,could you please provide Quotation for ${partName}?%0D%0A%0D%0AThanks!%0D%0A%0D%0ABest Regards,%0D%0A${encodeURIComponent(userName)}`;
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">ASSEMBLY PARTS</h1>

      <div className="max-w-3xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by name or reference number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredParts.map((part, idx) => (
          <div key={part.ref} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={part.img}
              alt={part.alt}
              className="w-full h-48 object-contain cursor-pointer"
              onClick={() => setModalImg(part.img)}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{part.name}</h3>
              <p className="text-gray-600 mb-2">Ref: {part.ref}</p>

              <div className="flex justify-between items-center mb-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleShowDesc(idx);
                  }}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {showDesc[idx] ? 'Hide Details' : 'View Details'}
                </button>

                <button
                  onClick={() => togglePartSelection(part)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${selectedParts.some(p => p.ref === part.ref)
                    ? 'bg-red-100 text-red-800 hover:bg-red-200'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                >
                  {selectedParts.some(p => p.ref === part.ref) ? (
                    <>
                      <span className="inline-block mr-1">✓</span>
                      Selected
                    </>
                  ) : (
                    'Compare +'
                  )}
                </button>
              </div>

              {showDesc[idx] && (
                <div className="mt-4">
                  <div className="text-sm space-y-2">
                    {Object.entries(part.details).map(([key, value]) => (
                      <div key={key} className="flex">
                        <span className="font-medium w-40">{key}:</span>
                        <span className="flex-1">{value || '-'}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      sendEmail(part.name, part.ref);
                    }}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors w-full"
                  >
                    Request via Email
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

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

      {selectedParts.length > 0 && (
        <button
          onClick={() => setShowComparison(true)}
          disabled={selectedParts.length < 2}
          className={`fixed bottom-4 right-4 px-4 py-2 rounded-lg text-white font-medium shadow-lg transition-all ${selectedParts.length < 2
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
            }`}
        >
          Compare ({selectedParts.length})
        </button>
      )}

      {showComparison && renderComparisonModal()}
    </div>
  );
};

export default Assembly;
