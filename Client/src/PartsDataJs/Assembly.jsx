import React, { useState, useEffect } from "react";

import ComparisonModal from "../Components/ComparsionModel/ComparisonModal";
import CartModal from "../Components/ComparsionModel/CartModal";
import DetailsModal from "../Components/DetailModel/DetailsModal "

const Assembly = () => {
    const [search, setSearch] = useState("");
    const [modalImg, setModalImg] = useState(null);
    const [selectedParts, setSelectedParts] = useState([]);
    const [showComparison, setShowComparison] = useState(false);
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [detailPart, setDetailPart] = useState(null); // <-- for DetailsModal

    const parts = [
        {
            "name": "Mould Insert Set 1363",
      "ref": "09750152",
      "img": "https://placehold.co/400x300",
      "alt": "Mould Insert Set 1363",
      "details": {
        "Assembly Name": "Mould Insert Set 1363",
        "Reference No": "09750152",
        "UOM Weight": "Kg",
        "Weight": "N/A",
        "Lead Time": "12 weeks",
        "Machine Center Distance": "127mm",
        "Machine Type": "IS ",
        "Mould Size": "N/A",
        "Kit Availability": (
          <ul>
            <li>N/A</li>
          </ul>
        ),
        "General Description": "BAFFLE MECH 4 1/4 & 5\"",
        "Availability": " N/A",
        "Notes for Customer": "Check compatibility.",
        "Price": "N/A",
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
                "UOM ": "Kg",
                "Weight": "64.319",
                "Lead Time": "8 weeks",
                "Machine Center Distance": "85mm, 4 1/4\", 5\"",
                "Machine Type": "IS SMALL 5\", IS SMALL 4 1/4\"",
                "Kit Availability": (
                    <ul>
                        <li>-200-248-4KB</li>
                        <li>-200-248-4KC</li>
                    </ul>
                ),
                "General Description": "BAFFLE MECH 4 1/4 & 5\"",
                "Availability": "N/A",
                "Notes for Customer": "N/A",
                "Price": "N/A"
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
                "UOM ": "Kg",
                "Weight": "62.600",
                "Lead Time": "8 weeks",
                "Machine Center Distance": "5 1/2\"",
                "Machine Type": "IS LARGE 5 1/2\", AIS, IS LARGE 6 1/4\"",
                "Kit Availability": (
                    <ul>
                        <li>-210-146-1KB</li>
                        <li>-210-146-1KC</li>
                        <li>-210-146-1KD</li>
                    </ul>
                ),
                "General Description": "BAFFLE MECH. EF 5 1/2\"",
                "Availability": "N/A",
                "Notes for Customer": "N/A",
                "Price": "N/A"
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
                "UOM ": "Kg",
                "Weight": "62.821",
                "Lead Time": "8 weeks",
                "Machine Center Distance": "85mm, 4 1/4\", 5\"",
                "Machine Type": "IS SMALL 4 1/4”,",
                "Kit Availability": (
                    <ul>
                        <li>-200-249-1KB</li>
                        <li>-200-249-1KC</li>
                        <li>-200-249-1KD</li>
                    </ul>
                ),
                "General Description": "N/A",
                "Availability": "N/A",
                "Notes for Customer": "N/A",
                "Price": "N/A",
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
                "UOM": "Kg",
                "Weight": "73.869",
                "Lead Time": "8 weeks",
                "Machine Center Distance": "85mm, 4 1/4\", 5\"",
                "Machine Type": "STR",
                "Kit Availability": (
                    <ul>
                        <li>N/A</li>
                    </ul>
                ),
                "General Description": "N/A",
                "Availability": "N/A",
                "Notes for Customer": "N/A",
                "Price": "N/A"
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
                "UOM": "Kg",
                "Weight": "61.400",
                "Lead Time": "8 weeks",
                "Machine Center Distance": "N/A",
                "Machine Type": "STR",
                "Kit Availability": (
                    <ul>
                        <li>N/A</li>
                    </ul>
                ),
                "General Description": "N/A",
                "Availability": "N/A",
                "Notes for Customer": "N/A",
                "Price": "N/A",
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
                "UOM": "Kg",
                "Weight": "63",
                "Lead Time": "8 weeks",
                "Machine Center Distance": "85mm, 4 1/4\", 5\"",
                "Machine Type": "STR",
                "Kit Availability": (
                    <ul>
                        <li>N/A</li>
                    </ul>
                ),
                "General Description": "N/A",
                "Availability": "N/A",
                "Notes for Customer": "N/A",
                "Price": "N/A",
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
                "UOM": "Kg",
                "Weight": "77",
                "Lead Time": "8 weeks",
                "Machine Center Distance": "5 1/2\", 6 1/4\"",
                "Machine Type": "STR",
                "Kit Availability": (
                    <ul>
                        <li>N/A</li>
                    </ul>
                ),
                "General Description": "N/A",
                "Availability": "N/A",
                "Notes for Customer": "N/A",
                "Price": "N/A",
            }
        },


        {
            "name": "Blow Head Mech 5 ½”",
            "ref": "07129301-01",
            "img": "https://placehold.co/400x300",
            "alt": "Neck ring holder assembly for machinery",
            "details": {
                "Mechanism Name": "Blow Head Mech 5 ½”",
                "Reference No": "07129301-01",
                "UOM": "Kg",
                "Weight": "N/A",
                "Lead Time": "8 weeks",
                "Machine Center Distance": "8\" 100 mm",
                "Machine Type": "STR",
                "Kit Availability": (
                    <ul>
                        <li>N/A</li>
                    </ul>
                ),
                "General Description": "N/A",
                "Availability": "N/A",
                "Notes for Customer": "N/A",
                "Price": "N/A"
            },
        },

        {
            name: "Constant Cushion Invert Mechanism 4 ¼” TG,6 1/4\" AIS,",
            ref: "191-7481-13",
            img: "https://placehold.co/400x300",
            alt: "Constant Cushion Invert Mechanism 4 ¼” TG,6 1/4\" AIS,",
            details: {
                "Mechanism Name": "Constant Cushion Invert Mechanism 4 ¼” TG,6 1/4\" AIS,",
                "Reference No": " 191-7481-13",
                "UOM": "Kg",
                "Weight": "N/A",
                "Lead Time": "8 weeks",
                "Machine Center Distance": "6 1/4\"",
                "Machine Type": "STR",
                "Kit Availability": (
                    <ul>
                        <li>N/A</li>
                    </ul>
                ),
                "General Description": "N/A",
                "Availability": "N/A",
                "Notes for Customer": "N/A",
                "Price": "N/A",
            }
        },

        {
            "name": "Constant Cushion Invert Mechanism 4 ¼ DG,5\",5 1/2\" IS",
            "ref": "191-7481-12",
            "img": "https://placehold.co/400x300",
            "alt": "Constant Cushion Invert Mechanism 4 ¼ DG,5\",5 1/2\" IS",
            "details": {
                "Mechanism Name": "Constant Cushion Invert Mechanism 4 ¼ DG,5\",5 1/2\" IS",
                "Reference No": "191-7481-12",
                "UOM": "Kg",
                "Weight": "N/A",
                "Lead Time": "8 weeks",
                "Machine Center Distance": "5 ½”",
                "Machine Type": "STR",
                "Kit Availability": (
                    <UL>
                        <li>N/A</li>
                    </UL>
                ),
                "General Description": "N/A",
                "Availability": "N/A",
                "Notes for Customer": "N/A",
                "Price": "N/A"
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
                "UOM": "Kg",
                "Weight": "42",
                "Lead Time": "8 weeks",
                "Machine Center Distance": "85mm, 4 1/4\", 5\"",
                "Machine Type": "STR",
                "Kit Availability": (
                    <UL>
                        <li>N/A</li>
                    </UL>
                ),
                "General Description": "N/A",
                "Availability": "N/A",
                "Notes for Customer": "N/A",
                "Price": "N/A",
            }
        },

        {
            "name": "Funnel Mechanism 5 1/2\", 6 1/4\"",
            "ref": "200-2100-1",
            "img": "https://placehold.co/400x300",
            "alt": "Funnel Mechanism 5 1/2\", 6 1/4\"",
            "details": {
                "Mechanism Name": "Funnel Mechanism 5 1/2\", 6 1/4\"",
                "Reference No": "200-2100-1",
                "UOM": "Kg",
                "Weight": "41",
                "Lead Time": "12 Weeks",
                "Machine Center Distance": "5 1/2\", 6 1/4\"",
                "Machine Type": "STR",
                "Kit Availability": (
                    <UL>
                        <li>N/A</li>
                    </UL>
                ),
                "General Description": "N/A",
                "Availability": "N/A",
                "Notes for Customer": "N/A",
                "Price": "N/A",
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
                "UOM": "Kg",
                "Weight": "56",
                "Lead Time": "8 weeks",
                "Machine Center Distance": "8\" 100 mm",
                "Machine Type": "STR",
                "Kit Availability": (
                    <UL>
                        <li>N/A</li>
                    </UL>
                ),
                "General Description": "N/A",
                "Availability": "N/A",
                "Notes for Customer": "N/A",
                "Price": "N/A"
            }
        },

        {
            "name": "Funnel mechanism 6\"",
            "ref": "07123750",
            "img": "https://placehold.co/400x300",
            "alt": "Funnel mechanism 6\"",
            "details": {
                "Mechanism Name": "Funnel mechanism 6\"",
                "Reference No": "07123750",
                "UOM": "Kg",
                "Weight": "N/A",
                "Lead Time": "8 weeks",
                "Machine Center Distance": "6\"",
                "Machine Type": "STR",
                "Kit Availability": (
                    <UL>
                        <li>N/A</li>
                    </UL>
                ),
                "General Description": "N/A",
                "Availability": "N/A",
                "Notes for Customer": "N/A",
                "Price": "N/A",
            }
        },


        {
            "name": "Invert Mechanism 4 ¼” DG,5”,5 1/2\" IS",
            "ref": "191-7481-10",
            "img": "https://placehold.co/400x300",
            "alt": "Invert Mechanism 4 ¼” DG,5”,5 1/2\" IS",
            "details": {
                "Mechanism Name": "Invert Mechanism 4 ¼” DG,5”,5 1/2\" IS",
                "Reference No": "191-7481-10",
                "UOM": "Kg",
                "Weight": "44",
                "Lead Time": "8 weeks",
                "Machine Center Distance": "85mm, 4 1/4\", 5\", 5 1/2\"",
                "Machine Type": "STR",
                "Kit Availability": (
                    <UL>
                        <li>N/A</li>
                    </UL>
                ),
                "General Description": "N/A",
                "Availability": "N/A",
                "Notes for Customer": "N/A",
                "Price": "N/A"
            }
        },

        {
            "name": "Invert Mechanism 4 ¼” TG,6 1/4\" AIS",
            "ref": "191-7481-11",
            "img": "https://placehold.co/400x300",
            "alt": "Invert Mechanism 4 ¼” TG,6 1/4\" AIS",
            "details": {
                "Mechanism Name": "Invert Mechanism 4 ¼” TG,6 1/4\" AIS",
                "Reference No": "191-7481-11",
                "UOM": "Kg",
                "Weight": "44.693",
                "Lead Time": "8 weeks",
                "Assembly Reference 1": "N/A",
                "Machine Center Distance": "6 1/4\"",
                "Machine Type": "STR",
                "Kit Availability": (
                    <UL>
                        <li>N/A</li>
                    </UL>
                ),
                "General Description": "N/A",
                "Availability": "N/A",
                "Notes for Customer": "N/A",
                "Price": "N/A"
            }
        },


        {
            "name": "Plunger Mechanism DG 5 1/2\" (with shoulder bushing)",
            "ref": "62-11030-04",
            "img": "https://placehold.co/400x300",
            "alt": "Plunger Mechanism DG 5 1/2\" (with shoulder bushing)",
            "details": {
                "Mechanism Name": "Plunger Mechanism DG 5 1/2\" (with shoulder bushing)",
                "Reference No": "62-11030-04",
                "UOM": "Kg",
                "Weight": "48",
                "Lead Time": "8 weeks",
                "Machine Center Distance": "5 1/2\"",
                "Machine Type": "STR",
                "Kit Availability": (
                    <UL>
                        <li>N/A</li>
                    </UL>
                ),
                "General Description": "N/A",
                "Availability": "N/A",
                "Notes for Customer": "N/A",
                "Price": "N/A",
            }
        },

        {
            "name": "Plunger Mechanism DG 5 1/2\"",
            "ref": "62-11030-05",
            "img": "https://placehold.co/400x300",
            "alt": "Plunger Mechanism DG 5 1/2",
            "details": {
                "Mechanism Name": "Plunger Mechanism DG 5 1/2",
                "Reference No": "62-11030-05",
                "UOM": "Kg",
                "Weight": "44",
                "Lead Time": "8 weeks",
                "Machine Center Distance": "5 1/2\"",
                "Machine Type": "STR",
                "Kit Availability": (
                    <UL>
                        <li>N/A</li>
                    </UL>
                ),
                "General Description": "N/A",
                "Availability": "N/A",
                "Notes for Customer": "N/A",
                "Price": "N/A"
            }
        },

        {
            "name": "QC Baffle Mechanism 5\" & 6\"",
            "ref": "07182040",
            "img": "https://placehold.co/400x300",
            "alt": "QC Baffle Mechanism 5\" & 6\"",
            "details": {
                "Mechanism Name": "QC Baffle Mechanism 5\" & 6\"",
                "Reference No": "07182040",
                "UOM": "Kg",
                "Weight": "N/A",
                "Lead Time": "8 weeks",
                "Machine Center Distance": "N/A",
                "Machine Type": "STR",
                "Kit Availability": (
                    <UL>
                        <li>N/A</li>
                    </UL>
                ),
                "Machine Size": "5\", 6\"",
                "General Description": "N/A",
                "Availability": "N/A",
                "Notes for Customer": "N/A",
                "Price": "N/A"
            }
        },

        {
            "name": "Take Out Mechanism 6\"",
            "ref": "07183900-09",
            "img": "https://placehold.co/400x300",
            "alt": "Take Out Mechanism 6\"",
            "details": {
                "Mechanism Name ": "Take Out Mechanism 6\"",
                "Reference No": "07183900-09",
                "UOM": "Kg",
                "Weight": "N/A",
                "Lead Time": "8 weeks",
                "Machine Center Distance": "6\"",
                "Machine Type": "STR",
                "Kit Availability": (
                    <UL>
                        <li>N/A</li>
                    </UL>
                ),
                "General Description": "N/A",
                "Availability": "N/A",
                "Notes for Customer": "N/A",
                "Price": "N/A"
            }
        },

        {
            "name": "Take out Mechanism 5 ½”",
            "ref": "07135050-03",
            "img": "https://placehold.co/400x300",
            "alt": "Take out Mechanism 5 ½”",
            "details": {
                "Mechanism Name ": "Take out Mechanism 5 ½”",
                "Reference No": "07135050-03",
                "UOM": "Kg",
                "Weight": "N/A",
                "Lead Time": "8 weeks",
                "Machine Center Distance": "5 ½”",
                "Machine Type": "STR",
                "Kit Availability": (
                    <UL>
                        <li>N/A</li>
                    </UL>
                ),
                "General Description": "N/A",
                "Availability": "N/A",
                "Notes for Customer": "N/A",
                "Price": "N/A"
            }
        },

        {
            "name": "6\" Blank support Mechanism",
            "ref": "07100180",
            "img": "https://placehold.co/400x300",
            "alt": "6\" Blank support Mechanism",
            "details": {
                "Mechanism Name ": "6\" Blank support Mechanism",
                "Reference No": "07100180",
                "UOM": "Kg",
                "Weight": "N/A",
                "Lead Time": "8 weeks",
                "Machine Center Distance": "6\"",
                "Machine Type": "STR",
                "Kit Availability": (
                    <UL>
                        <li>N/A</li>
                    </UL>
                ),
                "General Description": "N/A",
                "Availability": "N/A",
                "Notes for Customer": "N/A",
                "Price": "N/A "
            }
        },

        {
            "name": "6\" Blow Support Mechanism",
            "ref": "07100190",
            "img": "https://placehold.co/400x300",
            "alt": "6\" Blow Support Mechanism",
            "details": {
                "Mechanism Name ": "6\" Blow Support Mechanism",
                "Reference No": "07100190",
                "UOM": "N/A",
                "Weight": "N/A",
                "Lead Time": "8 weeks",
                "Machine Center Distance": "6\"",
                "Machine Type": "STR",
                "Kit Availability": (
                    <UL>
                        <li>N/A</li>
                    </UL>
                ),
                "General Description": "N/A",
                "Availability": "N/A",
                "Notes for Customer": "N/A",
                "Price": "N/A"
            },
        },
    ];

    const filteredParts = parts.filter(
        (part) =>
            part.name.toLowerCase().includes(search.toLowerCase()) ||
            part.ref.toLowerCase().includes(search.toLowerCase())
    );

    const addToCart = (part) => {
        const existing = cart.find((p) => p.ref === part.ref);
        if (existing) {
            setCart((prev) =>
                prev.map((p) =>
                    p.ref === part.ref ? { ...p, quantity: p.quantity + 1 } : p
                )
            );
        } else {
            setCart((prev) => [...prev, { ...part, quantity: 1 }]);
        }
    };

    const removeFromCart = (ref) => {
        setCart((prev) => prev.filter((p) => p.ref !== ref));
    };

    const updateQuantity = (ref, quantity) => {
        if (quantity < 1) return;
        setCart((prev) =>
            prev.map((p) => (p.ref === ref ? { ...p, quantity } : p))
        );
    };

    const toggleSelectForComparison = (part) => {
        setSelectedParts((prev) =>
            prev.find((p) => p.ref === part.ref)
                ? prev.filter((p) => p.ref !== part.ref)
                : [...prev, part]
        );
    };

    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            if (showComparison) setShowComparison(false);
            if (showCart) setShowCart(false);
            if (modalImg) setModalImg(null);
            if (detailPart) setDetailPart(null); // <-- close DetailsModal on Escape
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [showComparison, showCart, modalImg, detailPart]);

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 relative">
            {/* HEADER */}
            <div className="flex justify-center items-center mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
                    MECHANISM PARTS
                </h1>
            </div>

            {/* Search */}
            <div className="max-w-3xl mx-auto mb-8">
                <input
                    type="text"
                    placeholder="Search by name or reference number"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredParts.map((part) => (
                    <div
                        key={part.ref}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <img
                            src={part.img}
                            alt={part.alt}
                            className="w-full h-48 object-contain cursor-pointer"
                            onClick={() => setModalImg(part.img)}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900">
                                {part.name}
                            </h3>
                            <p className="text-gray-600 mb-2">Ref: {part.ref}</p>

                            <div className="flex justify-between items-center mb-2">
                                <button
                                    onClick={() => setDetailPart(part)}
                                    className="text-blue-600 hover:text-blue-800 font-medium"
                                >
                                    View Details
                                </button>

                                <div className="flex gap-2">
                                    <button
                                        onClick={() => addToCart(part)}
                                        className="px-3 py-1.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200"
                                    >
                                        Add to Cart
                                    </button>
                                    <button
                                        onClick={() => toggleSelectForComparison(part)}
                                        className={`px-3 py-1.5 rounded-md text-xs font-medium ${selectedParts.find((p) => p.ref === part.ref)
                                            ? "bg-blue-600 text-white"
                                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                            }`}
                                    >
                                        {selectedParts.find((p) => p.ref === part.ref)
                                            ? "Selected"
                                            : "Compare"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Image Modal */}
            {modalImg && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
                    <span
                        className="absolute top-4 right-6 text-white text-4xl cursor-pointer"
                        onClick={() => setModalImg(null)}
                    >
                        &times;
                    </span>
                    <img src={modalImg} alt="Enlarged view" className="max-w-full max-h-full" />
                </div>
            )}

            {/* Floating Buttons */}
            {selectedParts.length > 0 && (
                <button
                    onClick={() => setShowComparison(true)}
                    className="fixed bottom-4 right-4 px-4 py-2 rounded-lg text-white font-medium shadow-lg bg-blue-600 hover:bg-blue-700"
                >
                    Compare ({selectedParts.length})
                </button>
            )}

            {cart.length > 0 && (
                <button
                    onClick={() => setShowCart(true)}
                    className="fixed bottom-16 right-4 px-4 py-2 rounded-lg text-white font-medium shadow-lg bg-green-600 hover:bg-green-700"
                >
                    View Cart ({cart.length})
                </button>
            )}

            {/* Modals */}
            {showComparison && (
                <ComparisonModal
                    parts={selectedParts}
                    onClose={() => setShowComparison(false)}
                />
            )}

            {showCart && (
                <CartModal
                    cart={cart}
                    onClose={() => setShowCart(false)}
                    removeFromCart={removeFromCart}
                    updateQuantity={updateQuantity}
                />
            )}

            {detailPart && (
                <DetailsModal
                    part={detailPart}
                    onClose={() => setDetailPart(null)}
                />
            )}
        </div>
    );
};

export default Assembly;
