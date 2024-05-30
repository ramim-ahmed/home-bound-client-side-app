import RoomDataRow from "@/components/TableRow/RoomDataRow";
import useAuth from "@/hooks/useAuth";
import useSecureApi from "@/hooks/useSecureApi";
import { useQuery } from "@tanstack/react-query";
import { BarLoader } from "react-spinners";

export default function MyListings() {
  const { authUser } = useAuth();
  const secureApi = useSecureApi();

  const { data: lists, isLoading } = useQuery({
    queryKey: ["my-listings", authUser?.email],
    queryFn: async () =>
      await secureApi.get(`/rooms/my-listings/${authUser?.email}`),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center mt-8">
        <BarLoader />
      </div>
    );
  }
  return (
    <div className="">
      <div>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Info
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    From
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    To
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {lists?.data?.data?.map((room) => (
                  <RoomDataRow key={room._id} room={room} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
