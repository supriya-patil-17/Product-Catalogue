// Variables component
import React, { useState } from "react";

const variablesData = [
  {
    name: "Funnel Arm",
    ref: "23-1167-2",
    img: "C:/Project2/Photos/Funnel Arm.jpg",
    leadTime: "10 weeks",
    emailSubject: "Request for Funnel Arm(23-1167-2)",
    emailBody:
      "Dear Sales Team,%0D%0A%0D%0AI am interested in the Funnel Arm (23-1167-2). Could you please provide details on the following:%0D%0A%0D%0A Spares-[ ]%0D%0A Assembly-[ ]%0D%0A  Variables-[ ]%0D%0A Mechanism- [ ]%0D%0A%0D%0AAdditionally, could you provide information on the specifications, pricing, and availability?%0D%0A%0D%0AThanks!%0D%0A%0D%0ABest Regards,%0D%0A[Your Full Name]",
  },
  {
    name: "Variable Name",
    ref: "23-XXXX-X",
    img: "C:/path/to/image.jpg",
    leadTime: "8 weeks",
    emailSubject: "Request for Variable Name (23-)",
    emailBody:
      "Dear Sales Team,%0D%0A%0D%0AI am interested in the  Variable Name(23-). Could you please provide details on the following:%0D%0A%0D%0A Spares-[ ]%0D%0A Assembly-[ ]%0D%0A  Variables-[ ]%0D%0A Mechanism- [ ]%0D%0A%0D%0AAdditionally, could you provide information on the specifications, pricing, and availability?%0D%0A%0D%0AThanks!%0D%0A%0D%0ABest Regards,%0D%0A[Your Full Name]",
  },
];

function Variables() {
  const [search, setSearch] = useState("");
  const [modalImg, setModalImg] = useState(null);
  const [descOpen, setDescOpen] = useState({});
  const [compareVisible, setCompareVisible] = useState(false);
  const [catalogue, setCatalogue] = useState(null);
  const [userPart, setUserPart] = useState({
    name: "",
    ref: "",
    img: "",
  });

  const filtered = variablesData.filter(
    (v) =>
      v.name.toLowerCase().includes(search.toLowerCase()) ||
      v.ref.toLowerCase().includes(search.toLowerCase())
  );

  React.useEffect(() => {
    if (filtered.length > 0 && search) {
      setCatalogue(filtered[0]);
      setCompareVisible(true);
    } else {
      setCompareVisible(false);
    }
  }, [search]);

  const handleDescToggle = (idx) => {
    setDescOpen((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div>
      <style>{styles}</style>
      <h1>VARIABLES</h1>
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
        {variablesData.map((v, idx) => (
          <div className="block" data-name={v.name} data-ref={v.ref} key={v.ref}>
            <img
              src={v.img}
              alt={v.name}
              onClick={() => setModalImg(v.img)}
              style={{ maxWidth: "60%", marginTop: 30, cursor: "pointer" }}
            />
            <div>
              {v.name}
              <br />
              Reference No - {v.ref}
            </div>
            <div className="description-item">
              <strong>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDescToggle(idx);
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
                Assembly Name - {v.name}
                <br />
                Machine Size - <br />
                Reference No - {v.ref}
                <br />
                Lead Time - {v.leadTime}
                <br />
                Weight - <br />
                Machine Type - <br />
                Kit Availability - <br />
                Price - <br />
                Availability -{" "}
                <input
                  type="number"
                  min="1"
                  max="100"
                  placeholder="1-100"
                  style={{ width: 60 }}
                />
                <br />
                General Description - <br />
                Reference 1 - <br />
                Production Time - <br />
                Notes for Customer - <br />
                <a
                  href={`mailto:sales.l01gen@verallia.com?subject=${v.emailSubject}&body=${v.emailBody}`}
                >
                  Request via Email
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {compareVisible && catalogue && (
        <div id="compareSection" style={{ display: "block" }}>
          <h2>Compare Spare Parts</h2>
          <div className="compare-box">
            <div className="compare-item">
              <h3>Catalogue Part</h3>
              <div id="catalogueName">{catalogue.name}</div>
              <div id="catalogueRef">{catalogue.ref}</div>
              <img id="catalogueImage" src={catalogue.img} alt={catalogue.name} />
            </div>
            <div className="compare-item">
              <h3>Your Part</h3>
              <div id="userName">{userPart.name}</div>
              <div id="userRef">{userPart.ref}</div>
              {userPart.img && (
                <img id="userImage" src={userPart.img} alt={userPart.name} />
              )}
            </div>
          </div>
          <div className="compare-inputs">
            <input
              type="text"
              id="userPartName"
              placeholder="Your Part Name"
              value={userPart.name}
              onChange={(e) =>
                setUserPart((p) => ({ ...p, name: e.target.value }))
              }
            />
            <input
              type="text"
              id="userPartRef"
              placeholder="Your Reference No"
              value={userPart.ref}
              onChange={(e) =>
                setUserPart((p) => ({ ...p, ref: e.target.value }))
              }
            />
            <input
              type="text"
              id="userPartImage"
              placeholder="Image URL"
              value={userPart.img}
              onChange={(e) =>
                setUserPart((p) => ({ ...p, img: e.target.value }))
              }
            />
            <button
              onClick={() => {
                // Just scroll into view, handled by React state
                document
                  .getElementById("compareSection")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Compare
            </button>
          </div>
        </div>
      )}
      {modalImg && (
        <div
          className="modal"
          style={{ display: "block" }}
          onClick={() => setModalImg(null)}
        >
          <span
            className="close"
            onClick={(e) => {
              e.stopPropagation();
              setModalImg(null);
            }}
          >
            &times;
          </span>
          <img className="modal-content" id="modalImage" src={modalImg} alt="" />
        </div>
      )}
    </div>
  );
}

export default Variables;