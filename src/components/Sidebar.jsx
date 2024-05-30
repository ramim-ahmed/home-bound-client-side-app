import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { AiOutlineMenuFold } from "react-icons/ai";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
export default function Sidebar() {
  return (
    <div className="lg:border-r border-b">
      <div className="flex p-5 lg:p-0 lg:min-h-screen items-center lg:flex-col flex-row justify-between">
        <div>
          <div className=" lg:mt-5 ;g:px-5">
            <Link to="/" className="text-xl font-bold text-themeColor">
              Home Bound
            </Link>
          </div>
          <div className="hidden lg:block space-y-4 mt-5 px-5">
            <div>
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  isActive ? "text-themeColor font-bold border-b" : ""
                }
              >
                <p className="font-semibold">Statistics</p>
              </NavLink>
            </div>
            <div>
              <NavLink
                to="add-room"
                className={({ isActive }) =>
                  isActive ? "text-themeColor font-bold border-b " : ""
                }
              >
                <p className="font-semibold">Add Room</p>
              </NavLink>
            </div>
            <div>
              <NavLink
                to="my-listings"
                className={({ isActive }) =>
                  isActive ? "text-themeColor font-bold border-b" : ""
                }
              >
                <p className="font-semibold">My Listings</p>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="hidden lg:block px-5 pb-5 space-y-3">
          <Button variant="outline" className="w-full">
            Profile
          </Button>
          <Button variant="outline" className="w-full">
            Logout
          </Button>
        </div>
        <div className="lg:hidden block">
          <Sheet>
            <SheetTrigger>
              <AiOutlineMenuFold className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent>
              <div className="space-y-4">
                <div>
                  <SheetClose asChild>
                    <NavLink
                      to="/dashboard"
                      end
                      className={({ isActive }) =>
                        isActive ? "text-themeColor font-bold border-b" : ""
                      }
                    >
                      <p className="font-semibold">Statistics</p>
                    </NavLink>
                  </SheetClose>
                </div>
                <div>
                  <SheetClose asChild>
                    <NavLink
                      to="add-room"
                      className={({ isActive }) =>
                        isActive ? "text-themeColor font-bold border-b " : ""
                      }
                    >
                      <p className="font-semibold">Add Room</p>
                    </NavLink>
                  </SheetClose>
                </div>
                <div>
                  <SheetClose asChild>
                    <NavLink
                      to="my-listings"
                      className={({ isActive }) =>
                        isActive ? "text-themeColor font-bold border-b" : ""
                      }
                    >
                      <p className="font-semibold">My Listings</p>
                    </NavLink>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
