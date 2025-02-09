
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedRooms from "../components/Featuredrooms";
import Footer from "../components/Footer";  // Ensure case matches

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <FeaturedRooms />
            <Footer/>
        </>
    );
};

export default Home;
