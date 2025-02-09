
// import FeaturedRooms from "../components/Featuredrooms";
import Navbar from "../components/Navbar";
// import Navbar from "../components/";
import Room from "../components/room";

const Rooms = () => {
    return (
        <>
            <Navbar />
            <h1 className="text-3xl font-bold text-center mt-8">Rooms Page</h1>
            <Room/>
        </>
    );
};

export default Rooms;
