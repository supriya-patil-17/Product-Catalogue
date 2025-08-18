import React, { useState, useEffect } from "react";

const MECHANISM = () => {
  const [search, setSearch] = useState("");
  const [modalImg, setModalImg] = useState(null);
  const [showDesc, setShowDesc] = useState({});
  const [selectedParts, setSelectedParts] = useState([]);
  const [showComparison, setShowComparison] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [userName, setUserName] = useState(""); // Corrected line

  const parts = [
    {
      "name": "Baffle Mechanism 4 1/4 5\"",
      "ref": "200-248-3",
      "img": "C:\\Users\\S8513154\\Desktop\\PartsImage\\200-248-3.jpg",
      "alt": "Baffle Mechanism 4 1/4 5\"",
      "details": {
        "Mechanism Name": "Baffle Mechanism 4 1/4 5\"",
        "Reference No": "200-248-3",
        "UOM Weight": "Kg",
        "Weight": "57.600",
        "Lead Time": "2 weeks",
        "Machine Center Distance": "N/A",
        "Machine Type": "IS SMALL 5”, IS SMALL 4 1/4”",
        "Kit Availability": "200-248-3K, 200-248-3KC, 200-248-3KD1, 200-248-3KD2",
        "Machine Size": "85mm, 4 1/4\", 5\"",
        "General Description": "BAFFLE MECH 4 1/4 & 5\"",
        "Notes for Customer": "N/A",
        "Availability": " N/A",
      }
    },

    {
      "name": "Baffle Mechanism 4 1/4\", 5\"",
      "ref": "200-248-4",
      "img": "C:\\Users\\S8513154\\Desktop\\PartsImage\\200-248-4.jpg",
      "alt": "Baffle Mechanism 4 1/4\", 5\"",
      "details": {
        "Mechanism Name": "Baffle Mechanism 4 1/4\", 5\"",
        "Reference No": "200-248-4",
        "UOM Weight": "Kg",
        "Weight": "64.319",
        "Lead Time": "8 weeks",
        "Machine Center Distance": "N/A",
        "Machine Type": "IS SMALL 5\", IS SMALL 4 1/4\"",
        "Kit Availability": "200-248-4KB,200-248-4KC",
        "Machine Size": "85mm, 4 1/4\", 5\"",
        "General Description": "BAFFLE MECH 4 1/4 & 5\"",
        "Notes for Customer": "N/A",
        "Availability": "N/A",
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
        "UOM Weight": "Kg",
        "Weight": "62.600",
        "Lead Time": "8 weeks",
        "Machine Center Distance": "N/A",
        "Machine Type": "IS LARGE 5 1/2\", AIS, IS LARGE 6 1/4\"",
        "Kit Availability": "210-146-1KB, 210-146-1KC, 210-146-1KD",
        "Machine Size": "5 1/2\"",
        "General Description": "BAFFLE MECH. EF 5 1/2\"",
        "Notes for Customer": "N/A",
        "Availability": "N/A",
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
        "Price": "N/A",
        "UOM Weight": "Kg",
        "Weight": "62.821",
        "Lead Time": "8 weeks",
        "Machine Type": "IS SMALL 4 1/4”,",
        "Kit Availability": "200-249-1KB, 200-249-1KC, 200-249-1KD",
        "Machine Size": "85mm, 4 1/4\", 5\"",
        "General Description": "N/A",
        "Notes for Customer": "N/A",
        "Availability": "N/A",
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
      },
    },

    {
      name: "Constant Cushion Invert Mechanism 4 ¼” TG,6 1/4\" AIS,",
      ref: "191-7481-13",
      img: "https://placehold.co/400x300",
      alt: "Constant Cushion Invert Mechanism 4 ¼” TG,6 1/4\" AIS,",
      details: {
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


    // Add more parts as needed...
  ];

  const filteredParts = parts.filter(part =>
    part.name.toLowerCase().includes(search.toLowerCase()) ||
    part.ref.toLowerCase().includes(search.toLowerCase())
  );

  const addToComparison = (part) => {
    setSelectedParts(prev => {
      if (prev.find(p => p.ref === part.ref)) {
        return prev.filter(p => p.ref !== part.ref); // Remove if already selected
      }
      return [...prev, part]; // Add to comparison
    });
  };

  const addToCart = (part) => {
    const existingPart = cart.find(p => p.ref === part.ref);
    if (existingPart) {
      // Increase quantity if already in cart
      setCart(prev => prev.map(p =>
        p.ref === part.ref ? { ...p, quantity: p.quantity + 1 } : p
      ));
    } else {
      // Add new part to cart with quantity 1
      setCart(prev => [...prev, { ...part, quantity: 1 }]);
    }
  };

  const removeFromCart = (ref) => {
    setCart(prev => prev.filter(part => part.ref !== ref));
  };

  const updateQuantity = (ref, quantity) => {
    if (quantity < 1) return; // Prevent negative quantities
    setCart(prev => prev.map(part =>
      part.ref === ref ? { ...part, quantity } : part
    ));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      if (showComparison) {
        setShowComparison(false); // Close comparison modal
      }
      if (showCart) {
        setShowCart(false); // Close cart modal
      }
      if (modalImg) {
        setModalImg(null); // Close image modal
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  },
    [showComparison, showCart, modalImg]);

  const renderComparisonModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-5xl p-6 overflow-auto max-h-[80vh]">
        <h2 className="text-2xl font-bold mb-4">Compare Parts</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead>
              <tr>
                <th className="border p-4">Feature</th>
                {selectedParts.map(part => (
                  <th key={part.ref} className="border p-4 text-center">
                    <img
                      src={part.img}
                      alt={part.alt}
                      className="h-24 mx-auto mb-2"
                      onClick={() => setModalImg(part.img)}
                    />
                    <div className="font-semibold">{part.name}</div>
                    <div className="text-sm text-black-800">{part.ref}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(selectedParts[0].details).map(key => (
                <tr key={key}>
                  <td className="border p-4 font-medium">{key}</td>
                  {selectedParts.map(part => (
                    <td key={`${part.ref}-${key}`} className="border p-4 text-center">
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
          aria-label="Close Comparison"
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Close Comparison
        </button>
      </div>
    </div>
  );

  const renderCartModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-3xl p-4 overflow-auto max-h-[80vh]">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead>
              <tr>
                <th className="border p-2">Part Name</th>
                <th className="border p-2">Reference No</th>
                <th className="border p-2">Quantity</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((part, index) => (
                <tr key={index}>
                  <td className="border p-2">{part.name}</td>
                  <td className="border p-2">{part.ref}</td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={part.quantity}
                      min="1"
                      onChange={(e) => updateQuantity(part.ref, parseInt(e.target.value))}
                      className="w-16 text-center border rounded"
                    />
                  </td>
                  <td className="border p-2 text-center">
                    <button
                      onClick={() => removeFromCart(part.ref)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          <button
            onClick={() => {
              // Prepare email details
              const partDetails = cart.map(part => `${part.name} (${part.ref})`).join(", ");
              const emailBody = `Dear Sales Team,%0D%0A%0D%0AI am interested in the ${partDetails}. Could you please provide details on the following:%0D%0A%0D%0A Spares-%0D%0A Quantity-[ ]%0D%0A Additionally, could you please provide a Quotation for ${partDetails}?%0D%0A%0D%0AThanks!%0D%0A%0D%0ABest Regards,%0D%0A${encodeURIComponent(userName)}`;
              const mailtoLink = `mailto:company@example.com?subject=New Order from ${userName}&body=${emailBody}`;
              window.location.href = mailtoLink; // Open email client
              setCart([]); // Clear cart after order
              setUserName(""); // Clear user name
              setShowCart(false); // Close cart modal
            }}
            className="w-full mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Place Order
          </button>
        </div>
        <button
          onClick={() => setShowCart(false)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-350"
        >
          Close Cart
        </button>
        <button
          onClick={() => setCart([])}
          className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-red-700"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-8 lg:px-10">
      <h1 className="text-5xl font-bold text-gray-900 text-center mb-10">MECHANISMS</h1>

      <div className="max-w-4xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search by name or reference number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-6 py-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredParts.map((part, idx) => (
          <div key={part.ref} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={part.img}
              alt={part.alt}
              className="w-full h-56 object-contain cursor-pointer"
              onClick={() => setModalImg(part.img)}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{part.name}</h3>
              <p className="text-gray-600 mb-2">Ref: {part.ref}</p>

              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowDesc(prev => ({ ...prev, [idx]: !prev[idx] }));
                  }}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {showDesc[idx] ? 'Hide Details' : 'View Details'}
                </button>

                <button
                  onClick={() => addToCart(part)}
                  className={`px-4 py-2 rounded-md text-xs font-medium ${selectedParts.find(p => p.ref === part.ref) ? 'bg-black-100 text-orange-800 hover:bg-black-200' : 'bg-gray-100 text-black-800 hover:bg-gray-200'}`}
                >
                  {selectedParts.find(p => p.ref === part.ref) ? 'Added To Cart' : 'Add to Cart'}
                </button>

                <button
                  onClick={() => addToComparison(part)}
                  className={`px-4 py-2 rounded-md text-xs font-medium ${selectedParts.find(p => p.ref === part.ref) ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'} hover:bg-gray-200`}
                >
                  {selectedParts.find(p => p.ref === part.ref) ? 'Remove from Comparison' : 'Add to Comparison'}
                </button>
              </div>

              {showDesc[idx] && (
                <div className="mt-4">
                  <div className="text-sm space-y-2">
                    {Object.entries(part.details).map(([key, value]) => (
                      <div key={key} className="flex flex-col mb-2">
                        {key === "Kit Availability" && value ? (
                          <>
                            <span className="font-medium">Kit Availability:</span>
                            <ul className="list-disc list-inside ml-4">
                              {value.split(',').map((kit, idx) => (
                                <li key={idx}>{kit.trim()}</li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <span><span className="font-medium">{key}:</span> <span className="ml-2">{value || '-'}</span></span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {
        selectedParts.length > 0 && (
          <button
            onClick={() => setShowComparison(true)}
            className={`fixed bottom-4 right-4 px-4 py-2 rounded-lg text-white font-medium shadow-lg bg-blue-600 hover:bg-blue-700`}
          >
            Compare ({selectedParts.length})
          </button>
        )
      }

      {
        cart.length > 0 && (
          <button
            onClick={() => setShowCart(true)}
            className="fixed bottom-16 right-4 px-4 py-2 rounded-lg text-white font-medium shadow-lg bg-green-600 hover:bg-green-700"
          >
            View Cart ({cart.length})
          </button>
        )
      }

      {showComparison && renderComparisonModal()}
      {showCart && renderCartModal()}
    </div >
  );
};

export default MECHANISM;