import { Link } from "react-router-dom";

export default function Room() {
  const data = {
    photo:
      "https://a0.muscache.com/im/pictures/2e59c7d2-3766-42cb-ba86-9958cbe307bc.jpg?im_w=960",
    location: "Himachal Pradesh, India",
    rentDate: "May 22 - 30",
    price: 24,
  };
  const { photo, location, rentDate, price } = data || {};
  return (
    <Link to={`/room/123`} className="cursor-pointer">
      <div>
        <img
          className="rounded-lg hover:scale-105 hover:duration-300 duration-300"
          src={photo}
          alt=""
        />
      </div>
      <div className="mt-2">
        <h1 className="text-base font-semibold">{location}</h1>
        <p className="text-gray-600">{rentDate}</p>
        <p className="text-gray-600">
          <span className="text-black font-medium">${price}</span> night{" "}
        </p>
      </div>
    </Link>
  );
}
