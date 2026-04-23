import { Link} from "react-router-dom";

export default function Success() {

  return (
    <div style={{ textAlign: "center", padding: "80px", maxWidth: "700px", margin: "auto" }}>
      
      <div style={{ fontSize: "60px" }}>🎉</div>

      <h1 style={{ marginTop: "10px" }}>Booking Confirmed!</h1>

      <p style={{ color: "#555", marginTop: "10px" }}>
        Your car has been successfully booked.
      </p>

      <Link className="btn" to="/" style={{ marginTop: "30px", display: "inline-block" }}>
        Back to Home
      </Link>

    </div>
  );
}