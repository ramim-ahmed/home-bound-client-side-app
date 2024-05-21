import { useState } from "react";
import { categories } from "./CategoriesData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("Beach");
  return (
    <div>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {categories.map(({ icon: Icon, label }, idx) => (
            <CarouselItem
              key={idx}
              className={`pl-1 pb-2 lg:basis-1/12 basis-1/6 ${
                selectedCategory === label
                  ? "border-b-2 border-black text-black"
                  : " text-gray-500"
              }`}
            >
              <div
                onClick={() => setSelectedCategory(label)}
                className="flex items-center flex-col cursor-pointer"
              >
                <Icon size={26} />
                <h2>{label}</h2>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
