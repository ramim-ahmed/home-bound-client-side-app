/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Room({ room }) {
  const { image, location, price, _id } = room || {};
  return (
    <Link to={`/room/${_id}`} className="cursor-pointer">
      <div>
        <img
          className="rounded-lg hover:scale-105 object-cover hover:duration-300 duration-300"
          src={image}
          alt=""
        />
      </div>
      <div className="mt-2">
        <h1 className="text-base font-semibold">{location}</h1>
        <p className="text-gray-600">5 nights</p>
        <p className="text-gray-600">
          <span className="text-black font-medium">${price}</span> night{" "}
        </p>
      </div>
    </Link>
  );
}
