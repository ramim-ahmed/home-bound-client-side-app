import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import useBaseApi from "@/hooks/useBaseApi";
import { useQuery } from "@tanstack/react-query";
import { SlLocationPin } from "react-icons/sl";
import { useParams } from "react-router-dom";
export default function RoomDetails() {
  const baseApi = useBaseApi();
  const { id } = useParams();
  const { data: roomDetails, isLoading } = useQuery({
    queryKey: ["room-details", id],
    queryFn: async () => await baseApi.get(`/rooms/${id}`),
  });

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
  } = roomDetails?.data?.data || {};
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }
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
                  <Button className="w-full">Booked Now</Button>
                </div>
                <hr />
                <div className="flex font-bold justify-between items-center">
                  <h1>Total</h1>
                  <h1>${price}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
