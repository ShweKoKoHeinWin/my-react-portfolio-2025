import AboutCertificateSection from "./sections/AboutCertificateSection";
import AboutMeSection from "./sections/AboutMeSection";
import AboutMyGoalSection from "./sections/AboutMyGoalSection";
import AboutSkillLevel from "./sections/AboutSkillLevel";
import AboutTechJourney from "./sections/AboutTechJourney";

const About = () => {
    return (
       <main className="relative min-h-screen overflow-hidden px-8 py-30 lg:py-20">
            <AboutMeSection/>

            <AboutMyGoalSection/>

            <AboutTechJourney/>

            <AboutSkillLevel/>

            <AboutCertificateSection/>
        </main>
    );
};

export default About;
