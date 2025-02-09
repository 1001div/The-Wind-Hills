import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/logo.png"; // Make sure to have your logo in the correct path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-10" />
          <h1 className="text-xl font-bold">The Wind Hills</h1>
        </div>
        <button 
          className="md:hidden text-white focus:outline-none text-2xl" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul className={`absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0 text-center md:text-left flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 transition-all duration-300 ${isOpen ? "block" : "hidden"} md:flex`}>
          <li><Link to="/" className="block md:inline hover:underline" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/room" className="block md:inline hover:underline" onClick={() => setIsOpen(false)}>Rooms</Link></li>
          <li><Link to="/booking" className="block md:inline hover:underline" onClick={() => setIsOpen(false)}>Booking</Link></li>
          <li><Link to="/contact" className="block md:inline hover:underline" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
