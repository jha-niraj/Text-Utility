import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <section className="flex flex-col items-center w-full">
            <div className="w-[97%]">
                <Navbar />
            </div>
            <div className="w-[97%]">
                <Footer />
            </div>
        </section>
    )
}

export default HomePage;