import type { Car } from "../types/Car";

export default function CarCard({ car }: { car: Car }) {
  if (!car) return null;

  return (
    <div className="border p-4">
      <h2>{car.name}</h2>
      <p>{car.type}</p>
      <p>${car.price}</p>
    </div>
  );
}