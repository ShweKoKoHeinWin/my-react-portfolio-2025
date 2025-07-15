import { useGlobalContext } from "../../contexts/globalContext";
import AboutData from "../../data/about";
import { motion } from "framer-motion";
import { SpringTransition } from "../../utils";

const AboutTechJourney = () => {
    const {lang} = useGlobalContext();
    return (
        <section>
            <motion.h3 initial={{scale: 0.5}} whileInView={{scale: 1}} transition={SpringTransition()} className="text-center font-bold text-large  lg:text-extra-large text-primary">
                {AboutData.AboutMe[lang].myTechJourney.title}
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <motion.div initial={{ x: '-10vw'}} whileInView={{x: 0}} transition={SpringTransition()} className="p-5">
                    <h3 className="text-medium font-semibold text-secondary">
                        {AboutData.AboutMe[lang].myTechJourney.experience.title}
                    </h3>

                    <div className="p-5">
                        {AboutData.AboutMe[lang].myTechJourney.experience.jobs.map((job, i) => (
                            <div key={i} className="border-l-2 mb-3 pl-3 pb-3">
                                <h4 className="text-small text-primary font-bold">{job.title}</h4>
                                <h5 className="text-md text-secondary font-semibold">{job.company} <span className="text-foreground text-extra-small font-medium">(📅{job.duration})</span></h5>
                                <p className="text-ultra-small font-medium pl-1">
                                    {job.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-medium font-semibold text-secondary">
                        {AboutData.AboutMe[lang].myTechJourney.education.title}
                    </h3>

                    <p className="text-small font-medium text-primary pl-8">
                        🏫 {AboutData.AboutMe[lang].myTechJourney.education.description}
                    </p>
                </motion.div>

                <motion.div initial={{x: '10vw'}} whileInView={{ x: 0}} transition={SpringTransition()} className="p-5">
                    <h3 className="text-medium font-semibold text-secondary">
                        {AboutData.AboutMe[lang].myTechJourney.journey.title}
                    </h3>

                    <ul className="text-extra-small font-medium list-disc pl-8 pt-3">
                        {AboutData.AboutMe[lang].myTechJourney.journey.list.map((item, i) => (
                            <li key={i} className="py-1">
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutTechJourney;
