import { Button } from "@/components/ui/button";
import { SlLocationPin } from "react-icons/sl";
export default function RoomDetails() {
  const roomDetails = {
    title: "Zostel Shangarh | Standard Private Room",
    description:
      "Offering a spectacular view of Himalayan glaciers and the majestic Sissu waterfall, Our hostel in Sissu is your key to exploring Himachal’s enchanting Lahaul region. A sprawling space decorated with outdoor seating and a field to play volleyball welcome you into the premises. Dorm rooms with balconies make you comfortable for work and rest, while vibrant common rooms keep the fun meter alive with indoor games.",
    image:
      "https://a0.muscache.com/im/pictures/2e59c7d2-3766-42cb-ba86-9958cbe307bc.jpg?im_w=1200",
    location: "Himachal Pradesh, India",
    category: "Beach",
    to: "2024-05-25",
    from: "2024-05-21",
    price: 100,
    guests: 2,
    bathrooms: 1,
    bedrooms: 1,
    host: {
      name: "Stive Rahman",
      email: "stive@gmail.com",
      photo:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  };
  const {
    price,
    image,
    description,
    title,
    location,
    host,
    guests,
    bathrooms,
    bedrooms,
  } = roomDetails || {};
  return (
    <div className="bg-gray-50">
      <div className="max-w-5xl mx-auto px-3 py-10">
        <div>
          <h1 className="text-xl font-semibold">{title}</h1>
          <p className="mt-2 font-semibold text-gray-600 flex items-center space-x-1">
            <SlLocationPin className="w-5 h-5" />
            <span>{location}</span>
          </p>
        </div>
        <div className="mt-4">
          <img
            className="h-[400px] object-cover w-full rounded-2xl"
            src={image}
            alt=""
          />
        </div>
        <div className="grid grid-cols-12 mt-4 gap-8">
          <div className="col-span-8">
            <div className="bg-white p-4">
              <div className="flex items-center space-x-4">
                <h1 className="font-medium">Hosted by {host.name}</h1>
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src={host.photo}
                  alt=""
                />
              </div>
              <div className="flex mt-2 items-center space-x-4 text-gray-700">
                <p>{guests} Guests</p>
                <p>{bedrooms} Bedrooms</p>
                <p>{bathrooms} Bathrooms</p>
              </div>
            </div>
            <div className="bg-white p-4 mt-4">
              <h1 className="font-medium">Description</h1>
              <p className="mt-3 text-gray-700">{description}</p>
            </div>
          </div>
          <div className="col-span-4">
            <div className="bg-white p-4">
              <div className="space-y-3">
                <h3>
                  <span className="font-bold">${price}</span> night
                </h3>
                <hr />
                <div>
                  <Button className="w-full">Reserve Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
