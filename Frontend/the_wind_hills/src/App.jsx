import {   Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Rooms from "./pages/Rooms.jsx";
import BookingPage from "./pages/Booking.jsx";
import ContactUs from "./pages/ContactUs.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/room" element={<Rooms/>}/>
        <Route path="/booking" element={<BookingPage/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
    

  );
};

export default App;
