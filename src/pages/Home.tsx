import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <div className="hero">
        <h1>Find Your Perfect Rental Car</h1>
        <p>Luxury • Economy • Sports • SUVs — all in one place</p>

        <div style={{ marginTop: "25px", display: "flex", gap: "15px", justifyContent: "center" }}>
          <Link className="btn" to="/browse">Browse Cars</Link>
          <Link className="btn" to="/browse">View Deals</Link>
        </div>
      </div>

      {/* FEATURES */}
      <div className="container">
        <div className="card">
          <div className="card-content">
            <h3>🚘 Huge Selection</h3>
            <p>From budget cars to luxury supercars.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3>⚡ Fast Booking</h3>
            <p>Reserve a car in under 2 minutes.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3>🔒 Safe Checkout</h3>
            <p>Secure and simple payment process.</p>
          </div>
        </div>
      </div>

      {/* EXTRA SECTION */}
      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Why Choose Us?</h2>
        <p style={{ maxWidth: "600px", margin: "10px auto", color: "#555" }}>
          We provide high-quality rental cars with transparent pricing, no hidden fees,
          and a smooth booking experience designed for everyone.
        </p>
      </div>

      {/* TESTIMONIALS */}
      <div className="container">
        <div className="card">
          <div className="card-content">
            <p>"Super easy and fast booking!"</p>
            <strong>- Alex</strong>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <p>"Best rental experience I've had."</p>
            <strong>- Sarah</strong>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <p>"Clean cars and great prices."</p>
            <strong>- Mike</strong>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ textAlign: "center", padding: "40px", background: "#111", color: "white", marginTop: "40px" }}>
        DriveEase © 2026
      </div>

    </div>
  );
}