import React, { useState } from "react";

// Mechanism data (shortened here – use your full dataset)
const mechanisms = [/* ... your full mechanisms array ... */];

// CSV export helper
const exportToCSV = (selectedRefs, mechanisms) => {
  const selectedData = mechanisms.filter((m) => selectedRefs.includes(m.ref));
  if (!selectedData.length) return;

  const allKeys = Array.from(
    new Set(selectedData.flatMap((m) => Object.keys(m.details)))
  );

  const csvHeader = ["Part Name", "Reference No", ...allKeys];
  const csvRows = selectedData.map((m) => [
    m.name,
    m.ref,
    ...allKeys.map((k) => m.details[k] || "N/A"),
  ]);

  const csvContent = [
    csvHeader.join(","),
    ...csvRows.map((row) =>
      row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")
    ),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "mechanism_comparison.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

function Mechanism() {
  const [search, setSearch] = useState("");
  const [modalImg, setModalImg] = useState(null);
  const [descOpen, setDescOpen] = useState({});
  const [selectedParts, setSelectedParts] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  const filtered = mechanisms.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.ref.toLowerCase().includes(search.toLowerCase())
  );

  const handleOpenModal = (src) => setModalImg(src);
  const handleCloseModal = () => setModalImg(null);

  const handleToggleDesc = (idx) =>
    setDescOpen((prev) => ({ ...prev, [idx]: !prev[idx] }));

  const toggleSelectPart = (ref) => {
    setSelectedParts((prevSelected) =>
      prevSelected.includes(ref)
        ? prevSelected.filter((r) => r !== ref)
        : [...prevSelected, ref]
    );
  };

  const handleSendEmail = (partName, partRef) => {
    const userName = window.prompt("Enter your name:");
    if (userName) {
      const email = "sales.l01gen@verallia.com";
      const subject = `Request for ${partName} (${partRef})`;
      const body = `Dear Sales Team,%0D%0A%0D%0AI am interested in the ${partName} (${partRef}).Could you please provide details on the following:%0D%0A%0D%0A Spares-%0D%0A Quantity-[ ]%0D%0A Additionally,could you please provide Quotation for ${partName}?%0D%0A%0D%0AThanks!%0D%0A%0D%0ABest Regards,%0D%0A${encodeURIComponent(
        userName
      )}`;
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <div>
      <style>{styles}</style>
      <h1>MECHANISMS</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by name or reference number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "40%",
            padding: "12px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div className="container" id="productContainer">
        {filtered.map((m, idx) => (
          <div className="block" key={m.ref} data-name={m.name} data-ref={m.ref}>
            <input
              type="checkbox"
              checked={selectedParts.includes(m.ref)}
              onChange={() => toggleSelectPart(m.ref)}
              style={{ marginBottom: "10px" }}
            />
            <img
              src={m.img}
              alt={m.name}
              onClick={() => handleOpenModal(m.img)}
            />
            <div>
              {m.name} <br />
              Reference No - {m.ref}
            </div>
            <div className="description-item">
              <strong>
                <button onClick={() => handleToggleDesc(idx)}>
                  {descOpen[idx] ? "Hide Details" : "Show Details"}
                </button>
              </strong>
              {descOpen[idx] && (
                <div className="details">
                  {Object.entries(m.details).map(([key, value]) => (
                    <div key={key}>
                      <strong>{key}:</strong> {value}
                    </div>
                  ))}
                  <button onClick={() => handleSendEmail(m.name, m.ref)}>
                    Request Quote
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedParts.length > 0 && (
        <div className="compare-box">
          <p>{selectedParts.length} item(s) selected</p>
          <div>
            <button onClick={() => setShowComparison(true)}>Compare Selected</button>
            <button onClick={() => setSelectedParts([])}>Clear</button>
          </div>
        </div>
      )}

      {modalImg && (
        <div className="modal" onClick={handleCloseModal}>
          <img src={modalImg} alt="Enlarged" />
        </div>
      )}

      {showComparison && (
        <div className="comparison-modal">
          <div className="comparison-header">
            <h2>Comparison</h2>
            <div>
              <button onClick={() => exportToCSV(selectedParts, mechanisms)}>
                Export to CSV
              </button>
              <button onClick={() => setShowComparison(false)}>Close</button>
            </div>
          </div>
          <div className="comparison-table">
            {selectedParts.map((ref) => {
              const part = mechanisms.find((m) => m.ref === ref);
              return (
                <div key={ref} className="comparison-column">
                  <h3>{part.name}</h3>
                  <img
                    src={part.img}
                    alt={part.name}
                    style={{ width: "100%", marginBottom: "10px" }}
                  />
                  {Object.entries(part.details).map(([key, value]) => (
                    <div key={key}>
                      <strong>{key}:</strong> {value}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

const styles = `
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}
.block {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  width: 300px;
  text-align: center;
  background: #f9f9f9;
}
.block img {
  width: 100%;
  cursor: pointer;
}
.description-item {
  margin-top: 10px;
}
.details {
  text-align: left;
  margin-top: 8px;
  background: #fff;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal img {
  max-width: 90%;
  max-height: 90%;
}
.compare-box {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #333;
  color: #fff;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
}
.compare-box button {
  background: #fff;
  color: #000;
  padding: 6px 12px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.comparison-modal {
  position: fixed;
  top: 5%;
  left: 5%;
  right: 5%;
  bottom: 5%;
  background: #fff;
  overflow-y: auto;
  border: 2px solid #000;
  padding: 20px;
  z-index: 100;
}
.comparison-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.comparison-table {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  overflow-x: auto;
}
.comparison-column {
  min-width: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  background: #f1f1f1;
}
`;

export default Mechanism;