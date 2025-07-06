
import FeaturedProjectsSection from "./sections/FeaturedProjectsSection";
import HeroSection from "./sections/HeroSection";
import StatsSection from "./sections/StatsSection";

const Home = () => {
    return (
        <main className="relative min-h-screen overflow-hidden pt-20">
            {/* Hero Section */}
            <HeroSection/>
            {/* Stats Section */}
            <StatsSection/>
            {/* Featured Projects */}
            <FeaturedProjectsSection/>
        </main>
    );
};

export default Home;
