import AboutData from "../../data/about";
import { useGlobalContext } from "../../contexts/globalContext";
import { motion } from "framer-motion";
import { SpringTransition } from "../../utils";

const AboutMyGoalSection = () => {
    const { lang } = useGlobalContext();
    return (
        <section className="py-8">
            <motion.h3 initial={{scale: 0.5}} whileInView={{scale: 1}} transition={SpringTransition()} className="text-center font-bold text-large  lg:text-extra-large text-primary">
                {AboutData.AboutMe[lang].mygoal.title}
            </motion.h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <motion.div initial={{ x: '-10vw'}} whileInView={{x:0}} transition={SpringTransition()} className="p-5">
                    <h4 className="font-semibold text-medium lg:text-large text-center text-secondary">
                        {AboutData.AboutMe[lang].mygoal.shortTerm.title}
                    </h4>

                    <ul className="list-disc leading-7 text-small">
                        {AboutData.AboutMe[lang].mygoal.shortTerm.goals.map((goal, i) => (
                            <li key={i}>
                                {goal}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div initial={{x: '10vw'}} whileInView={{x: 0}} transition={SpringTransition()}  className="p-5">
                    <h4 className="font-semibold text-medium lg:text-large text-center text-secondary">
                        {AboutData.AboutMe[lang].mygoal.longTerm.title}
                    </h4>

                    <ul className="list-disc leading-7 text-small">
                        {AboutData.AboutMe[lang].mygoal.longTerm.goals.map((goal, i) => (
                            <li key={i}>
                                {goal}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMyGoalSection;
