import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import CarDetails from "./pages/CarDetails";
import Navbar from "./components/Navbar";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}