import authImg from "../assets/auth.jpg";
import LoginForm from "@/components/LoginForm";
export default function Login() {
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="max-w-5xl mx-auto px-3 grid grid-cols-12 gap-8 ">
        <div className="lg:col-span-6 col-span-12 bg-white p-4">
          <LoginForm />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <img src={authImg} alt="" />
        </div>
      </div>
    </div>
  );
}
