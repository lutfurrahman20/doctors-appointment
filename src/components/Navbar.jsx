import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(true);
  const [token, setToken] = useState(true);
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt=""
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 py-1 border-b-2 border-blue-500"
              : "text-gray-700 py-1 hover:text-blue-500"
          }
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/doctors"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 py-1 border-b-2 border-blue-500"
              : "text-gray-700 py-1 hover:text-blue-500"
          }
        >
          <li>All Doctors</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 py-1 border-b-2 border-blue-500"
              : "text-gray-700 py-1 hover:text-blue-500"
          }
        >
          <li>About</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 py-1 border-b-2 border-blue-500"
              : "text-gray-700 py-1 hover:text-blue-500"
          }
        >
          <li>Contact</li>
        </NavLink>
      </ul>

      <div className="flex item gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium hidden text-gray-600 z-20 group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-blue py-3 text-white px-8 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
        <img onClick={()=>setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="" />
        {/* mobile menu------ */}
        <div className={`${showMenu ? "fixed-w-full" : "h-0 w-0"} md:hidden right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img className="w-7" onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div> 
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={()=>setShowMenu(false)} to="/">Home</NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to="/doctors">All Doctors</NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to="/about">About</NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to="/contact">Contact</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
