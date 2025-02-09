

const rooms = [
  {
    name: "Ocean View Suite",
    description: "A luxurious suite with a breathtaking city view. Perfect for couples or solo travelers looking for relaxation.",
    price: "Rs2800 per night",
    image: "/assets/ocean-view-suite.jpg"
  },
  {
    name: "Mountain Retreat",
    description: "A cozy retreat nestled in the mountains, offering serene views and complete tranquility.",
    price: "Rs2000 per night",
    image: "/assets/mountain-retreat.jpg"
  },  
  {
    name: "Garden Villa",
    description: "A spacious villa surrounded by lush gardens, ideal for families or groups looking for privacy and comfort.",
    price: "Rs3500 per night",
    image: "/assets/garden-villa.jpg"
  }
];

function FeaturedRooms() {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Featured Rooms</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {rooms.map((room, index) => (
          <div key={index} className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{room.name}</h3>
              <p className="text-gray-600 mt-2">{room.description}</p>
              <p className="text-lg font-semibold text-orange-600 mt-4">{room.price}</p>
              <button className="w-full mt-6 py-2 px-4 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 transition duration-300">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedRooms;
