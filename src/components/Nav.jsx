import { HiUserCircle } from "react-icons/hi2";
import { IoMdMenu } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
export default function Nav() {
  return (
    <div className="border-b">
      <div className="max-w-5xl mx-auto px-3 flex justify-between items-center py-3">
        <div>
          <h1 className="text-lg font-bold">Home Bound</h1>
        </div>
        <div className="flex items-center space-x-6">
          <div>
            <h1 className="font-medium">Host Your Home</h1>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center border cursor-pointer px-4 py-1 rounded-3xl space-x-2">
                <IoMdMenu className="h-7 w-7" />
                <HiUserCircle className="h-10 w-10 text-gray-400" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-36">
              <Link to="/login">
                <DropdownMenuItem>
                  <Button
                    variant="outline"
                    className="w-full flex justify-between"
                  >
                    Login
                  </Button>
                </DropdownMenuItem>
              </Link>
              <Link to="/register">
                <DropdownMenuItem>
                  <Button
                    variant="outline"
                    className="w-full flex justify-between"
                  >
                    Register
                  </Button>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
