import RegisterForm from "@/components/RegisterForm";
import authImg from "../assets/auth.jpg";
import useAuth from "@/hooks/useAuth";
import { BarLoader } from "react-spinners";
export default function Register() {
  const { loading } = useAuth();
  return (
    <div className="bg-gray-50 min-h-screen p-5 flex justify-center items-center">
      <div className="max-w-5xl mx-auto px-3 grid grid-cols-12 gap-8 ">
        <div className="lg:col-span-6 col-span-12 bg-white p-4">
          {loading ? (
            <div className="flex justify-center items-center">
              <BarLoader />
            </div>
          ) : (
            <RegisterForm />
          )}
        </div>
        <div className="lg:col-span-6 col-span-12">
          <img src={authImg} alt="" />
        </div>
      </div>
    </div>
  );
}
