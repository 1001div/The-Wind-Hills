import image from "../assets/images/BGpic.jpg";

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto text-center text-white relative z-10 flex flex-col justify-center items-center h-full">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Escape to Serenity at The Wind Hills</h2>
        <p className="text-lg md:text-xl mb-8">Book your peaceful getaway today.</p>
        <a href="#booking" className="bg-yellow-500 text-black px-6 py-3 text-lg font-semibold rounded-lg hover:bg-yellow-400 transition duration-300">
          Book Your Room
        </a>
      </div>
    </section>
  );
};

export default Hero;
