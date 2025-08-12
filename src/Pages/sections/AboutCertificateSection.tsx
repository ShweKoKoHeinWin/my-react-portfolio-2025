import AboutData from "../../data/about";
import { useGlobalContext } from "../../contexts/globalContext";
import { motion } from "framer-motion";
import { SpringTransition } from "../../utils";
import Carousel from "../../components/core/Carousel";
const AboutCertificateSection = () => {
    const { lang } = useGlobalContext();
    return (
        <section className="px-4 py-8">
            <motion.h2
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={SpringTransition()}
                className="text-center font-bold text-large  lg:text-extra-large text-primary mb-5"
            >
                {AboutData.AboutMe[lang].myTechJourney.certificates.title}
            </motion.h2>

            <Carousel>
                {AboutData.AboutMe[lang].myTechJourney.certificates.images.map(
                    (photo, i) => (
                        <Carousel.CarouselItem key={i}>
                            <img
                                src={`/images/certificates/${photo}`}
                                alt=""
                                loading="lazy"
                                className="mx-auto"
                            />
                        </Carousel.CarouselItem>
                    )
                )}
            </Carousel>
        </section>
    );
};

export default AboutCertificateSection;
