import { cars } from "../data/cars";
import { Link } from "react-router-dom";

export default function Browse() {
  return (
    <div className="container">
      {cars.map((car) => (
        <div className="card" key={car.id}>
          <img src={car.image} alt={car.name} />

          <div className="card-content">
            <h3>{car.name}</h3>
            <p>{car.type}</p>
            <p className="price">${car.price}/day</p>

            <Link className="btn" to={`/car/${car.id}`}>
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}