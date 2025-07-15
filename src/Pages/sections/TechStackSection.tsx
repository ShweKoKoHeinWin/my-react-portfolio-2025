import { useGlobalContext } from "../../contexts/globalContext";
import HomeData from "../../data/home";
import { motion } from "framer-motion";
import { SpringTransition } from "../../utils";

const sectionVariant = {
    initial: { scale: 0.5 },
    inView: {
        scale: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const sectionChildrenVariant = {
    initial: {
        scale: 0,
    },
    inView: {
        scale: 1,
    },
};
const TechStackSection = () => {
    const { lang } = useGlobalContext();
    return (
        <section className="py-16 px-4">
            <motion.h2
                variants={sectionChildrenVariant}
                initial="initial"
                whileInView="inView"
                transition={SpringTransition()}
                className="text-center font-bold text-large  lg:text-extra-large text-primary"
            >
                {HomeData.TechStacks[lang].label}
            </motion.h2>
            <motion.p
                variants={sectionChildrenVariant}
                initial="initial"
                whileInView="inView"
                transition={SpringTransition()}
                className="text-center text-medium"
            >
                {HomeData.TechStacks[lang].description}
            </motion.p>

            <motion.div
                variants={sectionVariant}
                initial="initial"
                whileInView="inView"
                transition={SpringTransition()}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 p-8"
            >
                {Object.keys(HomeData.Tech).map((key) => (
                    <motion.div
                        key={key}
                        variants={sectionChildrenVariant}
                        className="border-2 rounded-xl p-3 space-y-4"
                    >
                        <h4 className="text-medium text-center font-bold capitalize">
                            {key}
                        </h4>
                        <div className="flex justify-center items-center flex-wrap gap-3">
                            {HomeData.Tech[key].map((tech) => (
                                <motion.span
                                    variants={sectionChildrenVariant}
                                    key={tech}
                                    className="border-1 text-extra-small rounded-xl px-3 py-1"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default TechStackSection;
