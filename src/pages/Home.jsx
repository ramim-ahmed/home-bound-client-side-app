import Categories from "@/components/Categories";
import Rooms from "@/components/Rooms";

export default function Home() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-3 min-h-[calc(100vh-100px)]">
        <Categories />
        <Rooms />
      </div>
    </div>
  );
}
