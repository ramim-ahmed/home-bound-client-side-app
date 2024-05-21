import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  const [pageLoaded, setPageloaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPageloaded(true);
    }, 2000);
  }, []);
  if (!pageLoaded) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
