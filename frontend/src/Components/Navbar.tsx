import { assets } from "../assets/assets";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 sm:px-24 py-4 absolute top-0 z-50">
      {/* Logo */}
      <img
        src={assets.logo}
        alt="Logo"
        className="w-24 sm:w-32 cursor-pointer"
      />

      {/* Login Button */}
      <button
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
    </nav>
  );
}
