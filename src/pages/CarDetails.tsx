import { useParams, Link } from "react-router-dom";
import { cars } from "../data/cars";
import { useNavigate } from "react-router-dom";

export default function CarDetails() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === Number(id));
  const nav = useNavigate();

  if (!car) return <h2>Car not found</h2>;

  return (
    <div className="details">
      <Link className="back" to="/browse">← Back</Link>

      <img src={car.image} />
      <h2>{car.name}</h2>
      <p>Type: {car.type}</p>
      <p className="price">${car.price}/day</p>

      <button className="btn" onClick={() => nav("/checkout")}>
         Book Now
      </button>
    </div>
  );
}