/* eslint-disable no-unused-vars */
import Categories from "@/components/Categories";
import Loader from "@/components/Loader";
import Rooms from "@/components/Rooms";
import useBaseApi from "@/hooks/useBaseApi";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  let [params, setParams] = useSearchParams();
  const category = params.get("category") || "";
  const baseApi = useBaseApi();
  const { data, isLoading } = useQuery({
    queryKey: ["rooms", category],
    queryFn: async () => await baseApi.get(`/rooms?category=${category}`),
  });
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }
  const rooms = data?.data?.data || [];
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-3 min-h-[calc(100vh-100px)]">
        <Categories />
        {rooms && rooms.length > 0 ? (
          <Rooms rooms={rooms} />
        ) : (
          <div className="flex justify-center mt-10">
            <div className="text-center">
              <h1 className="font-bold text-xl ">
                No Rooms Available In This Category!!
              </h1>
              <p>Please Select Others Categories</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
