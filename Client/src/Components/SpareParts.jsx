// SpareParts component
import React, { useState } from "react";

const styles = `
  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    padding: 10px;
  }
  h1 {
    text-align: center;
    color: #333;
  }
  .search-box {
    text-align: center;
    margin-bottom: 50px;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  .block {
    background-color: #ccdee6e6;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
  }
  .description-item {
    margin: 10px 0;
  }
  img {
    max-width: 60%;
    height: auto;
    margin-top: 30px;
    cursor: pointer;
  }
  a {
    color: hsl(207, 93%, 22%);
    text-decoration: underline;
  }
  .highlight {
    background-color: #ebeb75;
    font-weight: bold;
  }
  .full-description {
    display: none;
    margin-top: 10px;
  }
  .full-description.open {
    display: block;
  }
  .modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .modal.open {
    display: block;
  }
  .modal-content {
    margin: auto;
    display: block;
    max-width: 90%;
    max-height: 90%;
  }
  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: white;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const spareParts = [
  {
    name: "Cam",
    ref: "210-10200",
    img: "",
    details: {
      "Spare Part Name": "Cam",
      "Machine Size": "",
      "Reference No": "210-10200",
      "Lead Time": "12 weeks",
      "Weight": "",
      "Machine Type": "",
      "Kit Availability": "",
      "Price": "",
      "General Description": "",
      "Reference 1": "",
      "Production Time": "",
      "Notes for Customer": "",
    },
  },
  {
    name: "Piston and Rod",
    ref: "210-10272",
    img: "C:\\Project2\\Photos\\Piston & Rod.jfif",
    details: {
      "Spare Part Name": "Piston and Rod",
      "Machine Size": "",
      "Reference No": "210-10272",
      "Lead Time": "12 weeks",
      "Weight": "",
      "Machine Type": "",
      "Kit Availability": "",
      "Price": "",
      "General Description": "",
      "Reference 1": "",
      "Production Time": "",
      "Notes for Customer": "",
    },
  },
  {
    name: "Cylinder",
    ref: "210-10001",
    img: "C:\\Project 1\\Photos\\Test5.jpg",
    details: {
      "Spare Part Name": "Cylinder",
      "Machine Size": "",
      "Reference No": "210-10001",
      "Lead Time": "12 weeks",
      "Weight": "",
      "Machine Type": "",
      "Kit Availability": "",
      "Price": "",
      "General Description": "",
      "Reference 1": "",
      "Production Time": "",
      "Notes for Customer": "",
    },
  },
  {
    name: "Bushing",
    ref: "210-10003",
    img: "C:\\Project2\\Photos\\bushing.jfif",
    details: {
      "Spare Part Name": "Bushing",
      "Machine Size": "",
      "Reference No": "210-10003",
      "Lead Time": "10 weeks",
      "Weight": "",
      "Machine Type": "",
      "Kit Availability": "",
      "Price": "",
      "General Description": "",
      "Reference 1": "",
      "Production Time": "",
      "Notes for Customer": "",
    },
  },
  {
    name: "Plug",
    ref: "210-10005",
    img: "",
    details: {
      "Spare Part Name": "Plug",
      "Machine Size": "",
      "Reference No": "210-10005",
      "Lead Time": "9 weeks",
      "Weight": "",
      "Machine Type": "",
      "Kit Availability": "",
      "Price": "",
      "General Description": "",
      "Reference 1": "",
      "Production Time": "",
      "Notes for Customer": "",
    },
  },
];

function sendEmail(partName, partRef) {
  const userName = window.prompt("Enter your name:");
  if (userName) {
    const email = "sales.l01gen@verallia.com";
    const subject = `Request for ${partName} (${partRef})`;
    const body = `Dear Sales Team,%0D%0A%0D%0AI am interested in the ${partName} (${partRef}).Could you please provide details on the following:%0D%0A%0D%0A Spares-%0D%0A Quantity-[ ]%0D%0A Additionally,could you please provide Quotation for ${partName}?%0D%0A%0D%0AThanks!%0D%0A%0D%0ABest Regards,%0D%0A${encodeURIComponent(
      userName
    )}`;
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }
}

const SpareParts = () => {
  const [search, setSearch] = useState("");
  const [modalImg, setModalImg] = useState(null);
  const [descOpen, setDescOpen] = useState({});

  const handleSearch = (e) => setSearch(e.target.value);

  const filteredParts = spareParts.filter(
    (part) =>
      part.name.toLowerCase().includes(search.toLowerCase()) ||
      part.ref.toLowerCase().includes(search.toLowerCase())
  );

  const handleToggleDesc = (idx) => {
    setDescOpen((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <>
      <style>{styles}</style>
      <h1>SPAREPARTS</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by name or reference number"
          value={search}
          onChange={handleSearch}
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
        {filteredParts.map((part, idx) => (
          <div className="block" key={part.ref} data-name={part.name} data-ref={part.ref}>
            <img
              src={part.img || "https://via.placeholder.com/150"}
              alt={part.name}
              onClick={() => setModalImg(part.img || "https://via.placeholder.com/150")}
            />
            <div>
              {part.name}
              <br />
              Reference No - {part.ref}
            </div>
            <div className="description-item">
              <strong>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleToggleDesc(idx);
                  }}
                >
                  View Details
                </a>
              </strong>
              <div className={`full-description${descOpen[idx] ? " open" : ""}`}>
                {Object.entries(part.details).map(([k, v]) => (
                  <span key={k}>
                    {k} - {v}
                    <br />
                  </span>
                ))}
                Availability -{" "}
                <input
                  type="number"
                  min="1"
                  max="100"
                  placeholder="1-100"
                  style={{ width: "60px" }}
                />
                <br />
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    sendEmail(part.name, part.ref);
                  }}
                >
                  Request via Email
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal for Enlarged Image */}
      <div className={`modal${modalImg ? " open" : ""}`} onClick={() => setModalImg(null)}>
        <span className="close" onClick={() => setModalImg(null)}>
          &times;
        </span>
        <img className="modal-content" src={modalImg || ""} alt="" />
      </div>
    </>
  );
};

export default SpareParts;