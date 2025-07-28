// Mechanism component
import React, { useState } from "react";

const mechanisms =
  [
    {
      "name": "Baffle Mechanism 4 1/4 5\"",
      "ref": "200-248-3",
      "img": "https://placehold.co/400x300",
      "alt": "Baffle Mechanism 4 1/4 5\"",
      "details": {
        "Mechanism Name": "Baffle Mechanism 4 1/4 5\"",
        "Reference No": "200-248-3",
        "Availability": "In Stock",
        "Unit": "Each",
        "Weight": "57.600",
        "Lead Time": "2 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "Available",
        "Machine Size": "85mm, 4 1/4\", 5\"",
        "General Description": "High-quality gear assembly.",
        "Notes for Customer": "Check compatibility."
      }
    },
    {
      "name": "Baffle Mechanism 4 1/4\", 5\"",
      "ref": "200-248-4",
      "img": "https://placehold.co/400x300",
      "alt": "Baffle Mechanism 4 1/4\", 5\"",
      "details": {
        "Mechanism Name": "Baffle Mechanism 4 1/4\", 5\"",
        "Reference No": "200-248-4",
        "Availability": "N/A",
        "Price": "N/A",
        "Unit": "N/A",
        "Weight": "64.319",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": "85mm, 4 1/4\", 5\"",
        "General Description": "N/A",
        "Notes for Customer": "N/A"
      }
    },
    {
      "name": "Baffle Mechanism 5 1/2\"",
      "ref": "210-146-1",
      "img": "https://placehold.co/400x300",
      "alt": "Baffle Mechanism 5 1/2\"",
      "details": {
        "Mechanism Name": "Baffle Mechanism 5 1/2\"",
        "Reference No": "210-146-1",
        "Availability": "N/A",
        "Unit": "N/A",
        "Weight": "62.600",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": "5 1/2\"",
        "General Description": "N/A",
        "Notes for Customer": "N/A"
      }
    },
    {
      "name": "Blow Head Mechanism 5",
      "ref": "200-249-1",
      "img": "https://placehold.co/400x300",
      "alt": "Blow head Mechanism 5",
      "details": {
        "Mechanism Name": "Blow head Mechanism 5",
        "Reference No": "200-249-1",
        "Availability": "N/A",
        "Price": "N/A",
        "Unit": "N/A",
        "Weight": "62.821",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": "85mm, 4 1/4\", 5\"",
        "General Description": "N/A",
        "Notes for Customer": "N/A"
      }
    },
    {
      "name": "Blow head Mechanism 4 1/4, 5\"",
      "ref": "200-249-4",
      "img": "https://placehold.co/400x300",
      "alt": "Blow head Mechanism 4 1/4, 5\"",
      "details": {
        "Mechanism Name": "Blow head Mechanism 4 1/4, 5\"",
        "Reference No": "200-249-4",
        "Availability": "N/A",
        "Price": "N/A",
        "Unit": "N/A",
        "Weight": "73.869",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": "85mm, 4 1/4\", 5\"",
        "General Description": "N/A",
        "Notes for Customer": "N/A"
      }
    },
    {
      "name": "Blow head Mechanism 4 1/4, 5\"",
      "ref": "200-249-5",
      "img": "https://placehold.co/400x300",
      "alt": "Blow head Mechanism 4 1/4, 5\"",
      "details": {
        "Mechanism Name": "Blow head Mechanism 4 1/4, 5\"",
        "Reference No": "200-249-5",
        "Availability": "N/A",
        "Price": "N/A",
        "Unit": "N/A",
        "Weight": "61.400",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": "85mm, 4 1/4\", 5\"",
        "General Description": "N/A",
        "Notes for Customer": "N/A"
      }
    },
    {
      "name": "Blow head Mechanism 41 /4”, 5”",
      "ref": "200-249-2",
      "img": "https://placehold.co/400x300",
      "alt": "Blow head Mechanism 41 /4”, 5”",
      "details": {
        "Mechanism Name": "Blow head Mechanism 41 /4”, 5”",
        "Reference No": "200-249-2",
        "Availability": "N/A",
        "Price": "N/A",
        "Unit": "N/A",
        "Weight": "63.313",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": "85mm, 4 1/4\", 5\"",
        "General Description": "N/A",
        "Notes for Customer": "N/A"
      }
    },
    {
      "name": "Blow Head Mechanism 5 1/2, 6 1/4\"",
      "ref": "210-210-4",
      "img": "https://placehold.co/400x300",
      "alt": "Blow Head Mechanism 5 1/2, 6 1/4\"",
      "details": {
        "Mechanism Name": "Blow Head Mechanism 5 1/2, 6 1/4\"",
        "Reference No": "210-210-4",
        "Availability": "N/A",
        "Price": "N/A",
        "Unit": "N/A",
        "Weight": "77.000",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": "5 1/2\", 6 1/4\"",
        "General Description": "N/A",
        "Notes for Customer": "N/A"
      }
    },
    {
      "name": "Blow Head Mech 5 ½”",
      "ref": "07129301-01",
      "img": "https://placehold.co/400x300",
      "alt": "Neck ring holder assembly for machinery",
      "details": {
        "Spare Part Name ": "Blow Head Mech 5 ½”",
        "Reference No": "07129301-01",
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
      "name": "Constant Cushion Invert Mechanism 4 ¼” TG,6 1/4\" AIS,",
      "ref ": "191-7481-13",
      "img": "https://placehold.co/400x300",
      "alt": "Constant Cushion Invert Mechanism 4 ¼” TG,6 1/4\" AIS,",
      "details": {
        "Spare Part Name ": "Constant Cushion Invert Mechanism 4 ¼” TG,6 1/4\" AIS,",
        "Reference No": " 191-7481-13",
        "Availability": "N/A",
        "Price": "N/A",
        "Unit": "N/A",
        "Weight": "N/A",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": "6 1/4\"",
        "General Description": "N/A",
        "Notes for Customer": "N/A"
      }
    },
    {
      "name": "Constant Cushion Invert Mechanism 4 ¼ DG,5\",5 1/2\" IS",
      "ref": "191-7481-12",
      "img": "https://placehold.co/400x300",
      "alt": "Constant Cushion Invert Mechanism 4 ¼ DG,5\",5 1/2\" IS",
      "details": {
        "Spare Part Name ": "Constant Cushion Invert Mechanism 4 ¼ DG,5\",5 1/2\" IS",
        "Reference No": "191-7481-12",
        "Availability": "N/A",
        "Price": "N/A",
        "Unit": "N/A",
        "Weight": "N/A",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": "5 ½”",
        "General Description": "N/A",
        "Notes for Customer": "N/A"
      }
    },
    {
      "name": "Funnel Mechanism 4-1/4\", 5\"",
      "ref": "200-247-1",
      "img": "https://placehold.co/400x300",
      "alt": "Funnel Mechanism 4-1/4\", 5\"",
      "details": {
        "Mechanism Name": "Funnel Mechanism 4-1/4\", 5\"",
        "Reference No": "200-247-1",
        "Availability": "N/A",
        "Price": "N/A",
        "Unit": "N/A",
        "Weight": "42.400",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": "85mm, 4 1/4\", 5\"",
        "General Description": "N/A",
        "Notes for Customer": "N/A"
      }
    },
    {
      "name": "Funnel Mechanism 5 1/2\", 6 1/4\"",
      "ref": "200-2100-1",
      "img": "https://placehold.co/400x300",
      "alt": "Funnel Mechanism 5 1/2\", 6 1/4\"",
      "details": {
        "Mechanism Name": "Funnel Mechanism 5 1/2\", 6 1/4\"",
        "Reference No": "200",
        "Availability": "N/A",
        "Price": "N/A",
        "Unit": "N/A",
        "Weight": "41.000",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": "5 1/2\", 6 1/4\"",
        "General Description": "N/A",
        "Notes for Customer": "N/A"
      }
    },
    {
      "name": "Funnel Mechanism 5 1/2\", 6 1/4\"",
      "ref": "23-13-3",
      "img": "https://placehold.co/400x300",
      "alt": "Funnel Mechanism 5 1/2\", 6 1/4\"",
      "details": {
        "Mechanism Name": "Funnel Mechanism 5 1/2\", 6 1/4\"",
        "Reference No": "23-13-3",
        "Availability": "N/A",
        "Price": "N/A",
        "Unit": "N/A",
        "Weight": "56.500",
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
      "name": "Funnel mechanism 6\"",
      "ref": "07123750",
      "img": "https://placehold.co/400x300",
      "alt": "Funnel mechanism 6\"",
      "details": {
        "Spare Part Name ": "Funnel mechanism 6\"",
        "Reference No": "07123750",
        "Availability": "N/A",
        "Price": "N/A",
        "Unit": "N/A",
        "Weight": "N/A",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": "6\"",
        "General Description": "N/A",
        "Notes for Customer": "N/A"
      }
    },
    {
      "name": "Invert Mechanism 4 ¼” DG,5”,5 1/2\" IS",
      "ref": "191-7481-10",
      "img": "https://placehold.co/400x300",
      "alt": "Invert Mechanism 4 ¼” DG,5”,5 1/2\" IS",
      "details": {
        "Spare Part Name ": "Invert Mechanism 4 ¼” DG,5”,5 1/2\" IS",
        "Reference No": "191-7481-10",
        "Availability": "N/A",
        "Price": "N/A",
        "Unit": "N/A",
        "Weight": "44.764",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": "85mm, 4 1/4\", 5\", 5 1/2\"",
        "General Description": "N/A",
        "Notes for Customer": "N/A"
      }
    },
    {
      "name": "Invert Mechanism 4 ¼” TG,6 1/4\" AIS",
      "ref": "191-7481-11",
      "img": "https://placehold.co/400x300",
      "alt": "Invert Mechanism 4 ¼” TG,6 1/4\" AIS",
      "details": {
        "Spare Part Name ": "Invert Mechanism 4 ¼” TG,6 1/4\" AIS",
        "Reference No": "191-7481-11",
        "Availability": "N/A",
        "Price": "N/A",
        "Unit": "N/A",
        "Weight": "44.693",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": "6 1/4\"",
        "General Description": "N/A",
        "Notes for Customer": "N/A"
      }
    },
    {
      "name": "Invert Mechanism 5 ½”",
      "ref": "07126020",
      "img": "https://placehold.co/400x300",
      "alt": "Invert Mechanism 5 ½”",
      "details": {
        "Spare Part Name ": "Invert Mechanism 5 ½”",
        "Reference No": "07126020",
        "Availability": "N/A",
        "Price": "N/A",
        "Unit": "N/A",
        "Weight": "44.764",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": "5 ½”",
        "General Description": "N/A",
        "Notes for Customer": "N/A"
      }
    },
    {
      "name": "Plunger Mechanism DG 5 1/2\" (with shoulder bushing)",
      "ref": "62-11030-04",
      "img": "https://placehold.co/400x300",
      "alt": "Plunger Mechanism DG 5 1/2\" (with shoulder bushing)",
      "details": {
        "Spare Part Name ": "Plunger Mechanism DG 5 1/2\" (with shoulder bushing)",
        "Reference No": "62-11030-04",
        "Availability": "N/A",
        "Price": "N/A",
        "Unit": "N/A",
        "Weight": "N/A",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": "5 1/2\"",
        "General Description": "N/A",
        "Notes for Customer": "N/A"
      }
    },
    {
      "name": "Plunger Mechanism DG 5 1/2\"",
      "ref": "62-11030-05",
      "img": "https://placehold.co/400x300",
      "alt": "Plunger Mechanism DG 5 1/2",
      "details": {
        "Spare Part Name ": "Plunger Mechanism DG 5 1/2",
        "Reference No": "62-11030-05",
        "Availability": "N/A",
        "Price": "N/A",
        "Unit": "N/A",
        "Weight": "N/A",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": "5 1/2\"",
        "General Description": "N/A",
        "Notes for Customer": "N/A"
      }
    },
    {
      "name": "QC Baffle Mechanism 5\" & 6\"",
      "ref": "07182040",
      "img": "https://placehold.co/400x300",
      "alt": "QC Baffle Mechanism 5\" & 6\"",
      "details": {
        "Spare Part Name ": "QC Baffle Mechanism 5\" & 6\"",
        "Reference No": "07182040",
        "Availability": "N/A",
        "Price": "N/A",
        "Unit": "N/A",
        "Weight": "N/A",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": "5\", 6\"",
        "General Description": "N/A",
        "Notes for Customer": "N/A"
      }
    },
    {
      "name": "Take Out Mechanism 6\"",
      "ref": "07183900-09",
      "img": "https://placehold.co/400x300",
      "alt": "Take Out Mechanism 6\"",
      "details": {
        "Spare Part Name ": "Take Out Mechanism 6\"",
        "Reference No": "07183900-09",
        "Availability": "N/A",
        "Price": "N/A",
        "Unit": "N/A",
        "Weight": "N/A",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": "6\"",
        "General Description": "N/A",
        "Notes for Customer": "N/A"
      }
    },
    {
      "name": "Take out Mechanism 5 ½”",
      "ref": "07135050-03",
      "img": "https://placehold.co/400x300",
      "alt": "Take out Mechanism 5 ½”",
      "details": {
        "Spare Part Name ": "Take out Mechanism 5 ½”",
        "Reference No": "07135050-03",
        "Availability": "N/A",
        "Price": "N/A",
        "Unit": "N/A",
        "Weight": "N/A",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": "5 ½”",
        "General Description": "N/A",
        "Notes for Customer": "N/A"
      }
    },
    {
      "name": "6\" Blank support Mechanism",
      "ref": "07100180",
      "img": "https://placehold.co/400x300",
      "alt": "6\" Blank support Mechanism",
      "details": {
        "Spare Part Name ": "6\" Blank support Mechanism",
        "Reference No": "07100180",
        "Availability": "N/A",
        "Price": "N/A",
        "Unit": "N/A",
        "Weight": "N/A",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": "6\"",
        "General Description": "N/A",
        "Notes for Customer": "N/A"
      }
    },
    {
      "name": "6\" Blow Support Mechanism",
      "ref": "07100190",
      "img": "https://placehold.co/400x300",
      "alt": "6\" Blow Support Mechanism",
      "details": {
        "Spare Part Name ": "6\" Blow Support Mechanism",
        "Reference No": "07100190",
        "Availability": "N/A",
        "Price": "N/A",
        "Unit": "N/A",
        "Weight": "N/A",
        "Lead Time": "8 weeks",
        "Assembly Reference 1": "N/A",
        "Machine Center Distance": "N/A",
        "Machine Type": "STR",
        "Kit Availability": "N/A",
        "Machine Size": "6\"",
        "General Description": "N/A",
        "Notes for Customer": "N/A"
      }
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