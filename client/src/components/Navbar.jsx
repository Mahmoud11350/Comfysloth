import { NavLink } from "react-router-dom";
import { useHomeContext } from "../pages/HomeLayout";
import DesktopNavbar from "./DesktopNavbar";
import Logo from "./Logo";
import MobileNavbar from "./MobileNavbar";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { BsCartCheckFill } from "react-icons/bs";
import { BiSolidUserAccount } from "react-icons/bi";

const Navbar = () => {
  const { mobileNav, toggleMobileNav, user } = useHomeContext();

  return (
    <nav className="container flex items-center justify-between h-[80px]">
      <Logo />
      <DesktopNavbar />
      <div onClick={toggleMobileNav} className="lg:hidden">
        <AiOutlineAlignLeft className="text-3xl" />
      </div>
      <div className="hidden lg:block">
        <ul className="flex items-center gap-8 capitalize text-lg">
          <li>
            <NavLink
              to={`/cart`}
              className={({ isActive }) =>
                isActive == true
                  ? "bg-mainColor font-semibold text-white py-1 px-2 rounded text-lg flex items-center gap-2"
                  : "flex items-center gap-2"
              }
              end
            >
              <BsCartCheckFill />
              Cart
            </NavLink>
          </li>
          {user ? (
            <li>
              <NavLink
                to={`/user`}
                className={({ isActive }) =>
                  isActive == true
                    ? "bg-mainColor font-semibold text-white py-1 px-2 rounded text-lg flex items-center gap-2"
                    : "flex items-center gap-2"
                }
                end
              >
                <BiSolidUserAccount />
                {user.name}
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                to={`/login`}
                className={({ isActive }) =>
                  isActive == true
                    ? "bg-mainColor font-semibold text-white py-1 px-2 rounded text-lg flex items-center gap-2"
                    : "flex items-center gap-2"
                }
                end
              >
                <BiSolidUserAccount />
                Login & Register
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      {mobileNav && <MobileNavbar />}
    </nav>
  );
};
export default Navbar;
