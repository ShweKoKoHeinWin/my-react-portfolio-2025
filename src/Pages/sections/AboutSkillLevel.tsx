import { useGlobalContext } from "../../contexts/globalContext";
import AboutData from "../../data/about";
import { motion } from "framer-motion";
import { SpringTransition } from "../../utils";

const parentVariant = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: .1,
        }
    }
}

const childVariant = {
    hidden: {scale: 0},
    show: {
        scale: 1,
        transition: SpringTransition()
    }
}

const AboutSkillLevel = () => {
    const {lang} = useGlobalContext();
    return (
        <section className="pt-8">
            <motion.h2 initial={{scale: 0.5}} whileInView={{scale: 1}} transition={SpringTransition()} className="text-center font-bold text-large  lg:text-extra-large text-primary pb-3">
                🛠️{AboutData.AboutMe.mySkills.title[lang]}
            </motion.h2>

            <motion.div initial="hidden" whileInView='show' variants={parentVariant} className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 text-primary font-medium mt-5">
                {AboutData.AboutMe.mySkills.skills.map((skill, i) => (
                    <motion.div variants={childVariant} key={i} className="flex flex-wrap justify-between items-center gap-3 border-2 rounded-lg p-3">
                        <h4 className="text-small">
                            {skill.name}
                        </h4>

                        <span className="text-small">
                            {skill.level}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default AboutSkillLevel;
