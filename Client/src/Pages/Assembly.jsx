import { useEffect, useState } from "react";

const Assembly = () => {
  const [parts, setParts] = useState([]);
  const [search, setSearch] = useState("");
  const [modalImg, setModalImg] = useState(null);
  const [showDesc, setShowDesc] = useState({});
  const [selectedParts, setSelectedParts] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    const fetchParts = async () => {
      try {
        const response = await fetch('/Data/parts.json');
        const data = await response.json();  // whole JSON
        setParts(data.parts);               // extract the "parts" array
      } catch (error) {
        console.error('Error fetching parts:', error);
      }
    };

    fetchParts();
  }, []);

  const filteredParts = parts.filter(part =>
    part.name.toLowerCase().includes(search.toLowerCase()) ||
    part.ref.toLowerCase().includes(search.toLowerCase())
  );

  const handleShowDesc = (idx) => {
    setShowDesc(prev => ({ ...prev, [idx]: !prev[idx] }));
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

  const sendEmail = (partName, partRef) => {
    const userName = window.prompt("Enter your name:");
    if (userName) {
      const email = "sales.l01gen@verallia.com";
      const subject = `Request for ${partName} (${partRef})`;
      const body = `Dear Sales Team,%0D%0A%0D%0AI am interested in the ${partName} (${partRef}). Could you please provide a quotation and details on availability?%0D%0A%0D%0AThanks!%0D%0A${userName}`;
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6">Assembly Parts</h1>

      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by name or reference number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredParts.map((part, idx) => (
          <div key={part.ref} className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300">
            <img
              src={part.img}
              alt={part.alt}
              className="w-full h-48 object-contain cursor-pointer"
              onClick={() => setModalImg(part.img)}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{part.name}</h3>
              <p className="text-sm text-gray-500 mb-3">Ref: {part.ref}</p>

              <div className="flex justify-between mb-2">
                <button
                  onClick={() => handleShowDesc(idx)}
                  className="text-blue-600 hover:underline text-sm"
                >
                  {showDesc[idx] ? "Hide Details" : "View Details"}
                </button>
                <button
                  onClick={() => togglePartSelection(part)}
                  className={`text-xs px-2 py-1 rounded ${selectedParts.some(p => p.ref === part.ref)
                      ? "bg-red-100 text-red-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {selectedParts.some(p => p.ref === part.ref) ? "✓ Selected" : "Compare +"}
                </button>
              </div>

              {showDesc[idx] && (
                <div className="text-sm mt-4 space-y-1">
                  {Object.entries(part.details).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="font-medium w-40">{key}</span>
                      <span>{value || "N/A"}</span>
                    </div>
                  ))}
                  <button
                    onClick={() => sendEmail(part.name, part.ref)}
                    className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
                  >
                    Request via Email
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal image */}
      {modalImg && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <img src={modalImg} alt="Enlarged" className="max-w-full max-h-full" />
          <button
            onClick={() => setModalImg(null)}
            className="absolute top-4 right-6 text-white text-4xl">&times;</button>
        </div>
      )}

      {/* Comparison Panel */}
      {selectedParts.length > 0 && (
        <button
          onClick={() => setShowComparison(true)}
          disabled={selectedParts.length < 2}
          className={`fixed bottom-5 right-5 px-4 py-2 rounded text-white shadow-md ${selectedParts.length < 2 ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
          Compare ({selectedParts.length})
        </button>
      )}

      {showComparison && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-6 overflow-auto">
          <div className="bg-white rounded-lg p-6 w-full max-w-5xl">
            <h2 className="text-2xl font-semibold mb-4">Compare Parts</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border">
                <thead>
                  <tr>
                    <th className="border p-2">Feature</th>
                    {selectedParts.map(part => (
                      <th key={part.ref} className="border p-2 text-center">
                        <img src={part.img} alt={part.alt} className="h-20 mx-auto" />
                        <p className="text-sm font-medium mt-2">{part.name}</p>
                        <p className="text-xs text-gray-500">{part.ref}</p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(selectedParts[0].details).map(key => (
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
              className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assembly;
