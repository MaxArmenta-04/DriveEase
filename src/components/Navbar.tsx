import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2>🚗 DriveEase</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/browse">Browse</Link>
      </div>
    </div>
  );
}