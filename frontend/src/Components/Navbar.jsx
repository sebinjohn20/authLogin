import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
export default function Navbar() {
  const navigate = useNavigate();
  const {
    userData,
    backendUrl,

    setIsLoggedin,

    setUserData,
  } = useContext(AppContext);
  return (
    <nav className="w-full flex justify-between items-center px-6 sm:px-24 py-4 absolute top-0 z-50">
      {/* Logo */}
      <img
        src={assets.logo}
        alt="Logo"
        className="w-24 sm:w-32 cursor-pointer"
      />

      {/* Login Button */}
      {userData ? (
        <div className=" w-8 h-8 flex justify-center items-center rounded-full bg-black text-white relative group">
          {userData.name[0].toUpperCase()}
          <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10">
            <ul className="list-none m-0 p-2 bg-gray-100 text-sm">
              <li className="">Verify email</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="

          flex items-center gap-2
          px-6 py-2
          border border-gray-400
          rounded-full
          text-gray-200
          hover:bg-white hover:text-black
          transition-all duration-300
        "
        >
          Login
          <img src={assets.arrow_icon} alt="Arrow" className="w-4 h-4" />
        </button>
      )}
    </nav>
  );
}
