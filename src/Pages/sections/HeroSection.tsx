import HomeData from "../../data/home";
import { motion } from "framer-motion";
import { SpringTransition } from "../../utils";
import AboutData from "../../data/about";
import Button from "../../components/core/Button";
import CTA from "../../data/cta";
import { Link } from "react-router-dom";
import { ROUTEs } from "../../constants";
import { useGlobalContext } from "../../contexts/globalContext";

const HeroSection = () => {
    const { lang } = useGlobalContext();
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div
                initial={{ x: "-10vw" }}
                whileInView={{ x: 0 }}
                transition={{ ...SpringTransition() }}
                className=" text-secondary font-semibold my-auto flex flex-col justify-center items-start"
            >
                <h2 className="text-small xs:text-medium sm:text-large md:text-extra-large">
                    {HomeData.Hero[lang].greet}
                </h2>
                <h1 className="text-medium sm:text-large lg:text-extra-large xl:text-ultra-large drop-shadow-xs drop-shadow-dark font-bold bg-gradient-to-r from-orange via-blue to-skin bg-clip-text text-transparent">
                    {AboutData.name[lang]}
                </h1>
                <h3 className="text-small text-primary md:text-large mb-2">
                    {HomeData.Hero[lang].intro}
                </h3>
                <h3 className="text-extra-small sm:text-small md:text-medium mb-4">
                    {HomeData.Hero[lang].description}
                </h3>
                <Link to={ROUTEs.CONTACT}>
                    <Button.Neno
                        label={CTA.Nav[lang].contact}
                    />
                </Link>
            </motion.div>
            <div className="flex justify-center items-center mt-5">
                <motion.div
                    className="relative"
                    whileInView={{ scale: [1.2, 1] }}
                    transition={SpringTransition()}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-50 animate-pulse"></div>
                    <img
                        src="/images/my_image1.png"
                        alt="Profile"
                        width={400}
                        loading="lazy"
                        className="relative rounded-full border-4 border-white/20 shadow-2xl"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
