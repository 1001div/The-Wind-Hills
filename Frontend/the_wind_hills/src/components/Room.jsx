import { useEffect, useState } from "react";
import axios from "axios";

const Room = () => {
  const [roomData, setRoomData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch room data from the API
    axios
      .get("http://127.0.0.1:8000/api/rooms/available/")
      .then((response) => {
        setRoomData(response.data); // Assuming the API returns an array of rooms
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch room data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="rooms" className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Loading Rooms...</h2>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="rooms" className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{error}</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="rooms" className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Rooms</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {roomData.map((room) => (
            <div key={room.id} className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src={room.img}
                alt={room.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{room.name}</h3>
              <p className="text-gray-700">{room.price}</p>
              <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Room;
