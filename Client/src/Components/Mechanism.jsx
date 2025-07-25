// Mechanism component
import React, { useState } from "react";

const mechanisms =
  [
    {
      name: "Funnel Mechanism",
      ref: "23-13-3",
      img: "C:\\Project2\\Photos\\image (1).png",
      details: {
        machineSize: '5 1/2"',
        weight: " ",
        machineType: " ",
        kitAvailability: " ",
        price: "",
        generalDescription: " ",
        reference1: "",
        productionTime: " ",
        notes: " ",
      },
    },
    {
      name: "Blow Head Mechanism",
      ref: "210-210-4",
      img: "C:\\Project2\\Photos\\image.png",
      details: {
        machineSize: '5 1/2"',
        leadTime: "8 weeks",
        weight: "",
        machineType: "",
        kitAvailability: "",
        price: "",
        generalDescription: "",
        reference1: "",
        productionTime: "",
        notes: "",
      },
    },
  ];

function Mechanism() {
  const [search, setSearch] = useState("");
  const [modalImg, setModalImg] = useState(null);
  const [descOpen, setDescOpen] = useState({});
  const [availabilities, setAvailabilities] = useState({});

  const filtered = mechanisms.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.ref.toLowerCase().includes(search.toLowerCase())
  );

  const handleOpenModal = (src) => setModalImg(src);
  const handleCloseModal = () => setModalImg(null);

  const handleToggleDesc = (idx) =>
    setDescOpen((prev) => ({ ...prev, [idx]: !prev[idx] }));

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
      <h1>MECHANISM</h1>
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
              <div
                className="full-description"
                style={{
                  display: descOpen[idx] ? "block" : "none",
                }}
              >
                Mechanism Name - {m.name}
                <br />
                Machine Size - {m.details.machineSize}
                <br />
                Reference No - {m.ref}
                <br />
                Lead Time - {m.details.leadTime}
                <br />
                Weight - {m.details.weight}
                <br />
                Machine Type - {m.details.machineType}
                <br />
                Kit Availability - {m.details.kitAvailability}
                <br />
                Price - {m.details.price}
                <br />
                Availability -{" "}
                <input
                  type="number"
                  min="1"
                  max="100"
                  placeholder="1-100"
                  style={{ width: "60px" }}
                  value={availabilities[m.ref] || ""}
                  onChange={(e) =>
                    setAvailabilities((prev) => ({
                      ...prev,
                      [m.ref]: e.target.value,
                    }))
                  }
                />
                <br />
                General Description - {m.details.generalDescription}
                <br />
                Reference 1 - {m.details.reference1}
                <br />
                Production Time - {m.details.productionTime}
                <br />
                Notes for Customer - {m.details.notes}
                <br />
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSendEmail(m.name, m.ref);
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
      {modalImg &&
        (
          <div
            className="modal"
            style={{ display: "block" }}
            onClick={handleCloseModal}
          >
            <span
              className="close"
              onClick={handleCloseModal}
              style={{ position: "absolute", top: 15, right: 35 }}
            >
              &times;
            </span>
            <img
              className="modal-content"
              id="modalImage"
              src={modalImg}
              alt=""
              style={{ display: "block" }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
    </div>
  );
}

export default Mechanism;