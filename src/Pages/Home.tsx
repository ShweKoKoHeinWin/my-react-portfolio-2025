
import FeaturedProjectsSection from "./sections/FeaturedProjectsSection";
import HeroSection from "./sections/HeroSection";
import StatsSection from "./sections/StatsSection";
import TechStackSection from "./sections/TechStackSection";

const Home = () => {
    return (
        <main className="relative min-h-screen overflow-hidden px-8 py-30 lg:py-20">
            {/* Hero Section */}
            <HeroSection/>
            {/* Stats Section */}
            <StatsSection/>
            {/* Featured Projects */}
            <FeaturedProjectsSection/>
            {/* TechStacks */}
            <TechStackSection/>
        </main>
    );
};

export default Home;
