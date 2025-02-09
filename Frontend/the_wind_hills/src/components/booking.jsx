/* Booking Component */
const Booking = () => {
    return (
      <section id="booking" className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Book Your Stay</h2>
          <form className="max-w-lg mx-auto bg-gray-100 p-6 shadow-lg rounded-lg">
            <div className="mb-4">
              <label className="block text-left font-semibold mb-2">Full Name</label>
              <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter your name" />
            </div>
            <div className="mb-4">
              <label className="block text-left font-semibold mb-2">Email</label>
              <input type="email" className="w-full p-2 border rounded-lg" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <label className="block text-left font-semibold mb-2">Check-in Date</label>
              <input type="date" className="w-full p-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label className="block text-left font-semibold mb-2">Check-out Date</label>
              <input type="date" className="w-full p-2 border rounded-lg" />
            </div>
            <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">Confirm Booking</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Booking;