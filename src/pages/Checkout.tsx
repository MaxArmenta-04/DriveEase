import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  function handlePay() {
    // basic validation
    if (!name || !card || !pickupDate || !returnDate) {
      alert("Please fill out all fields");
      return;
    }

    if (card.length < 6) {
      alert("Card number is too short");
      return;
    }

    // send data to success page
    navigate("/success", {
      state: {
        name,
        car: "Selected Car", // you can upgrade this later to real selected car
        pickupDate,
        returnDate,
      },
    });
  }

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        background: "white",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      }}
    >
      <h2>Checkout</h2>
      <p style={{ color: "#666" }}>Enter your details to complete booking</p>

      {/* Name */}
      <label>Name</label>
      <input
        style={inputStyle}
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Card */}
      <label>Card Number</label>
      <input
        style={inputStyle}
        placeholder="1234 5678 9012"
        value={card}
        onChange={(e) => setCard(e.target.value)}
      />

      {/* Dates */}
      <label>Pickup Date</label>
      <input
        type="date"
        style={inputStyle}
        value={pickupDate}
        onChange={(e) => setPickupDate(e.target.value)}
      />

      <label>Return Date</label>
      <input
        type="date"
        style={inputStyle}
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
      />

      {/* Button */}
      <button className="btn" style={{ marginTop: "15px" }} onClick={handlePay}>
        Pay Now
      </button>
    </div>
  );
}

// reusable input style
const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  margin: "8px 0 15px 0",
  borderRadius: "6px",
  border: "1px solid #ccc",
};