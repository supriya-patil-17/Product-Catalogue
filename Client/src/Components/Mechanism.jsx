import { useState } from "react";

const Mechanism = () => {
  const [search, setSearch] = useState("");
  const [modalImg, setModalImg] = useState(null);
  const [showDesc, setShowDesc] = useState({});
  const [selectedParts, setSelectedParts] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  const parts = [
    {
      name: "Baffle Mechanism 5 1/2\"",
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
      },
    },
    {
      name: "Tong Holder Assembly",
      ref: "23-1168-3",
      img: "https://placehold.co/400x300",
      alt: "Tong holder assembly for industrial equipment",
      details: {
        "Spare Part Name": "Tong Holder Assembly",
        "Machine Size": "8\" 100 mm",
        "Reference No": "23-1168-3",
        "Lead Time": "8 weeks",
        "Weight": "3.2 kg",
        "Machine Type": "THR",
        "Kit Availability": "Low stock",
      },
    },
    {
      name: "Blow Head Arm Assembly",
      ref: "200-202-19",
      img: "https://placehold.co/400x300",
      alt: "Blow head arm assembly",
      details: {
        "Spare Part Name": "Blow Head Arm",
        "Machine Size": "6\" 80 mm",
        "Reference No": "200-202-19",
        "Lead Time": "12 weeks",
        "Weight": "4.1 kg",
        "Machine Type": "BHA",
        "Kit Availability": "Out of stock",
      },
    },
    {
      name: "Base Plate Assembly",
      ref: "BP-4500-1",
      img: "https://placehold.co/400x300",
      alt: "Industrial base plate assembly",
      details: {
        "Spare Part Name": "Base Plate",
        "Machine Size": "10\" 120 mm",
        "Reference No": "BP-4500-1",
        "Lead Time": "6 weeks",
        "Weight": "8.5 kg",
        "Machine Type": "BPA",
        "Kit Availability": "In stock",
      },
    },
    {
      name: "Gear Housing Unit",
      ref: "GH-7800-2",
      img: "https://placehold.co/400x300",
      alt: "Gear housing unit",
      details: {
        "Spare Part Name": "Gear Housing",
        "Machine Size": "12\" 150 mm",
        "Reference No": "GH-7800-2",
        "Lead Time": "14 weeks",
        "Weight": "12.3 kg",
        "Machine Type": "GHU",
        "Kit Availability": "Special order",
      },
    },
    {
      name: "Rotary Joint Assembly",
      ref: "RJ-2200-5",
      img: "https://placehold.co/400x300",
      alt: "Rotary joint mechanism",
      details: {
        "Spare Part Name": "Rotary Joint",
        "Machine Size": "9\" 110 mm",
        "Reference No": "RJ-2200-5",
        "Lead Time": "9 weeks",
        "Weight": "6.7 kg",
        "Machine Type": "RJA",
        "Kit Availability": "In stock",
      },
    },
  ];

  const filteredParts = parts.filter(part =>
    part.name.toLowerCase().includes(search.toLowerCase()) ||
    part.ref.toLowerCase().includes(search.toLowerCase())
  );

  const handleShowDesc = (index) => {
    setShowDesc(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const togglePartSelection = (part) => {
    setSelectedParts(prev =>
      prev.some(p => p.ref === part.ref)
        ? prev.filter(p => p.ref !== part.ref)
        : [...prev, part]
    );
  };

  const renderComparisonModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-[95vw] max-h-[90vh] flex flex-col p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Compare Parts ({selectedParts.length})</h2>
          <button
            onClick={() => setShowComparison(false)}
            className="text-gray-500 hover:text-black text-2xl"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="overflow-x-auto pb-2">
            <table className="min-w-full border">
              <thead>
                <tr>
                  <th className="sticky left-0 z-10 bg-white p-3 border-r min-w-[180px] text-left">
                    Specifications
                  </th>
                  {selectedParts.map(part => (
                    <th key={part.ref} className="p-3 border-b border-r last:border-r-0 min-w-[220px]">
                      <div className="flex flex-col items-center">
                        <img
                          src={part.img}
                          alt={part.alt}
                          className="h-24 mx-auto mb-2 object-contain cursor-pointer"
                          onClick={() => setModalImg(part.img)}
                        />
                        <div className="font-semibold text-center">{part.name}</div>
                        <div className="text-sm text-gray-600">{part.ref}</div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.keys(parts[0].details).map(key => (
                  <tr key={key} className="border-b">
                    <td className="sticky left-0 z-10 bg-white p-3 border-r font-medium">
                      {key}
                    </td>
                    {selectedParts.map(part => (
                      <td key={`${part.ref}-${key}`} className="p-3 border-r last:border-r-0 text-center">
                        {part.details[key] || "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <button
          onClick={() => setShowComparison(false)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 self-end"
        >
          Close Comparison
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">
        ASSEMBLY PARTS CATALOG
      </h1>

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
        {filteredParts.map((part, index) => (
          <div
            key={part.ref}
            className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border-2 ${selectedParts.some(p => p.ref === part.ref)
              ? 'border-blue-500'
              : 'border-transparent'
              }`}
          >
            <img
              src={part.img}
              alt={part.alt}
              className="w-full h-48 object-contain cursor-pointer bg-gray-100"
              onClick={() => setModalImg(part.img)}
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{part.name}</h3>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                  {part.ref}
                </span>
              </div>

              <div className="flex justify-between items-center mb-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleShowDesc(index);
                  }}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {showDesc[index] ? 'Hide Details' : 'View Details'}
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

              {showDesc[index] && (
                <div className="mt-4">
                  <div className="text-sm space-y-2">
                    {Object.entries(part.details).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="font-medium text-gray-600">{key}:</span>
                        <span>{value || "—"}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {modalImg && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <button
            onClick={() => setModalImg(null)}
            className="absolute top-4 right-4 text-white text-4xl"
          >
            &times;
          </button>
          <img
            src={modalImg}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}

      {selectedParts.length > 0 && (
        <button
          onClick={() => setShowComparison(true)}
          className="fixed bottom-6 right-6 px-5 py-3 rounded-full text-white font-medium shadow-lg transition-all flex items-center bg-blue-600 hover:bg-blue-700"
        >
          <span className="mr-2">Compare</span>
          <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm">
            {selectedParts.length}
          </span>
        </button>
      )}

      {showComparison && renderComparisonModal()}
    </div>
  );
};

export default Mechanism;
