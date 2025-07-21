// Assembly component
import React, { useState } from "react";
import "../styles/assembly.css";

const parts =
  [
    {
      name: "Neck Ring Holder STR Assly",
      ref: "23-1167-2",
      img: "C:\\Project2\\Photos\\23-1167-2.jfif",
      details: (
        <>
          Spare Part Name - Funnel Mechanism<br />
          Machine Size - 6-1/4&quot; 70 mm<br />
          Reference No - 23-1167-2<br />
          Lead Time - 10 weeks<br />
          Weight - <br />
          Machine Type - <br />
          Kit Availability - <br />
          Availability - <input type="number" min="1" max="100" placeholder="1-100" className="input" style={{ width: "60px" }} /><br />
          General Description - <br />
          Reference 1 - <br />
          Production Time - <br />
          Notes for Customer - <br />
        </>
      ),
    },

    {
      name: "Tong Holder Assembly",
      ref: "23-1168-3",
      img: "C:\\Project2\\Photos\\191-8319-G01_9_3 finish copy.jpg",
      details: (
        <>
          Spare Part Name - Tong Holder Assembly<br />
          Machine Size - 8&quot; 100 mm<br />
          Reference No - 23-1168-3<br />
          Lead Time - 8 weeks<br />
          Weight - <br />
          Machine Type - <br />
          Kit Availability - <br />
          Price - <br />
          Availability - <input type="number" min="1" max="100" placeholder="1-100" className="input" style={{ width: "60px" }} /><br />
          General Description - <br />
          Reference 1 - <br />
          Production Time - <br />
          Notes for Customer - <br />
        </>
      ),
    },

    {
      name: "Blank Mold Holder Arm Assembly",
      ref: "23-1013-1",
      img: "C:\\Project 1\\Photos\\Test5.jpg",
      details: (
        <>
          Spare Part Name - Blank Mold Holder Arm Assembly<br />
          Machine Size - <br />
          Reference No - 23-1013-1<br />
          Lead Time - 12 weeks<br />
          Weight - <br />
          Machine Type - <br />
          Kit Availability - <br />
          Price - <br />
          Availability - <input type="number" min="1" max="100" placeholder="1-100" className="input" style={{ width: "60px" }} /><br />
          General Description - <br />
          Reference 1 - <br />
          Production Time - <br />
          Notes for Customer - <br />
        </>
      ),
    },

    {
      name: "Blow Head Arm Assembly",
      ref: "200-202-19",
      img: "C:\\Project2\\Photos\\image (1).jfif",
      details: (
        <>
          Spare Part Name - Blow Head Arm Assembly<br />
          Reference No - 200-202-19<br />
          Availability - <input type="number" min="1" max="100" placeholder="1-100" className="input" style={{ width: "60px" }} /><br />
          Weight - <br />
          Machine Type - <br />
          General Description - <br />
          Reference 1 - <br />
          Production Time - 10 Weeks<br />
          Notes for Customer - <br />
        </>
      ),
    },

    {
      name: "Take out tong head Assembly",
      ref: "191-9535-2",
      img: "C:\\Project2\\Photos\\191-9535-2.jfif",
      details: (
        <>
          Spare Part Name - Take out tong head Assembly<br />
          Machine Size - <br />
          Reference No -191-9535-2<br />
          Lead Time - 9 weeks<br />
          Weight - <br />
          Machine Type - <br />
          Kit Availability - <br />
          Availability - <input type="number" min="1" max="100" placeholder="1-100" className="input" style={{ width: "60px" }} /><br />
          General Description - <br />
          Reference 1 - <br />
          Production Time - <br />
          Notes for Customer - <br />
        </>
      ),
    },

    {
      name: " ",
      ref: "191-9535-2",
      img: "C:\\Project2\\Photos\\191-9535-2.jfif",
      details: (
        <>
          Spare Part Name - Take out tong head Assembly<br />
          Machine Size - <br />
          Reference No -191-9535-2<br />
          Lead Time - 9 weeks<br />
          Weight - <br />
          Machine Type - <br />
          Kit Availability - <br />
          General Description - <br />
          Reference 1 - <br />
          Production Time - <br />
          Notes for Customer - <br />
        </>
      ),

    }
  ];

function sendEmail(partName, partRef) {
  const userName = window.prompt("Enter your name:");
  if (userName) {
    const email = "sales.l01gen@verallia.com";
    const subject = `Request for ${partName} (${partRef})`;
    const body = `Dear Sales Team,%0D%0A%0D%0AI am interested in the ${partName} (${partRef}).Could you please provide details on the following:%0D%0A%0D%0A Spares-%0D%0A Quantity-[ ]%0D%0A Additionally,could you please provide Quotation for ${partName}?%0D%0A%0D%0AThanks!%0D%0A%0D%0ABest Regards,%0D%0A${encodeURIComponent(userName)}`;
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }
}

const Assembly = () => {
  const [search, setSearch] = useState("");
  const [modalImg, setModalImg] = useState(null);
  const [showDesc, setShowDesc] = useState({});

  const filteredParts = parts.filter(
    (part) =>
      part.name.toLowerCase().includes(search.toLowerCase()) ||
      part.ref.toLowerCase().includes(search.toLowerCase())
  );

  const handleShowDesc = (idx) => {
    setShowDesc((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div className="body text-black
      md:text-black transition duration-500">
      <h1 className="h1 p-5  text-5xl">ASSEMBlY</h1>
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search by name or reference number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input"
          style={{
            width: "40%",
            padding: "12px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <div className="container">
        {filteredParts.map((part, idx) => (
          <div key={part.ref} className="block">
            <img
              src={part.img}
              alt={part.name}
              className="img"
              onClick={() => setModalImg(part.img)}
            />
            <div>
              {part.name} <br />
              Reference No - {part.ref}
            </div>
            <div className="descriptionItem">
              <strong>
                <a
                  href="#"
                  className="a"
                  onClick={(e) => {
                    e.preventDefault();
                    handleShowDesc(idx);
                  }}
                >
                  View Details
                </a>
              </strong>
              <div
                className={`fullDescription${showDesc[idx] ? " show" : ""}`}
              >
                {part.details}
                <a
                  href="#"
                  className="a"
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
      <div
        className={`modal${modalImg ? " show" : ""}`}
        onClick={() => setModalImg(null)}
      >
        {modalImg && (
          <>
            <span
              className="close"
              onClick={(e) => {
                e.stopPropagation();
                setModalImg(null);
              }}
            >
              &times;
            </span>
            <img
              src={modalImg}
              alt="modal"
              className="modalContent"
              onClick={(e) => e.stopPropagation()}
            />
            {/* Remove stray JavaScript code that doesn't belong in JSX */}
          </>
        )}
      </div>
    </div>
  );
};

export default Assembly;
