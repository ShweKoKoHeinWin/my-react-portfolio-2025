import { Link } from "react-router-dom";
import Button from "../../components/core/Button";

import { useGlobalContext } from "../../contexts/globalContext";
import HomeData from "../../data/home";
import { ROUTEs } from "../../constants";
import { motion } from "framer-motion";
import { SpringTransition } from "../../utils";
import ProjectCard from "../../components/ProjectCard";

const sectionVariant = {
    initial: {},
    inView: {
        transition: {
            staggerChildren: 0.3,
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

const FeaturedProjectsSection = () => {
    const { lang } = useGlobalContext();
    return (
        <motion.section
            variants={sectionVariant}
            initial="initial"
            whileInView="inView"
            transition={SpringTransition()}
            className="px-4 py-8"
        >
            <motion.h2
                variants={sectionChildrenVariant}
                className="text-center text-extra-large"
            >
                {HomeData.FeaturedProjects[lang].label}
            </motion.h2>
            <motion.p
                variants={sectionChildrenVariant}
                className="text-center text-medium"
            >
                {HomeData.FeaturedProjects[lang].description}
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8">
                {HomeData.FeaturedProjects[lang].projects.map((project, i) => (
                    <div key={i}>
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
            <Link to={ROUTEs.PROJECTS} className="flex justify-center">
                <Button.Neno label="View All" />
            </Link>
        </motion.section>
    );
};

export default FeaturedProjectsSection;
