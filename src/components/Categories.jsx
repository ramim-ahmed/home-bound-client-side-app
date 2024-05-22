/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { categories } from "./CategoriesData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import queryString from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";
export default function Categories() {
  const navigate = useNavigate();
  let [params, setParams] = useSearchParams();
  const category = params.get("category");
  const handleQuery = (label) => {
    const currentQuery = { category: label };
    const url = queryString.stringifyUrl({
      url: "/",
      query: currentQuery,
    });
    navigate(url);
  };
  return (
    <div className="flex space-x-3 overflow-x-auto">
      {categories.map(({ icon: Icon, label }, idx) => (
        <div
          key={idx}
          className={`pl-1 pb-2 lg:basis-1/12 basis-1/6 ${
            category === label
              ? "border-b-2 border-black text-black"
              : " text-gray-500"
          }`}
        >
          <div
            onClick={() => handleQuery(label)}
            className="flex items-center flex-col cursor-pointer"
          >
            <Icon size={26} />
            <h2>{label}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
