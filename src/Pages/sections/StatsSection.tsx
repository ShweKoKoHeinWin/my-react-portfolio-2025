import { motion } from "framer-motion";
import { SpringTransition } from "../../utils";
import HomeData from "../../data/home";
import { useGlobalContext } from "../../contexts/globalContext";

const parentVariant = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: .3,
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

const StatsSection = () => {
    const { lang } = useGlobalContext();
    
    return (
        <section className="py-16 relative">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div variants={parentVariant} initial="hidden" animate='show' className="text-center text-medium text-primary grid grid-cols-2 md:grid-cols-4 gap-8">
                    <motion.div variants={childVariant}>
                        <div className="text-extra-large font-bold mb-2">
                            {HomeData.Stats[lang].projects.count} +
                        </div>
                        <div className="">{HomeData.Stats[lang].projects.label}</div>
                    </motion.div>
                    <motion.div variants={childVariant}>
                        <div className="text-extra-large font-bold mb-2">
                            {HomeData.Stats[lang].experience.count} +
                        </div>
                        <div className="">{HomeData.Stats[lang].experience.label}</div>
                    </motion.div>
                    <motion.div variants={childVariant}>
                        <div className="text-extra-large font-bold mb-2">
                            {HomeData.Stats[lang].clients.count}
                        </div>
                        <div className="">{HomeData.Stats[lang].clients.label}</div>
                    </motion.div>
                    <motion.div variants={childVariant}>
                        <div className="text-extra-large font-bold mb-2">
                            {HomeData.Stats[lang].tech.count} +
                        </div>
                        <div className="">{HomeData.Stats[lang].tech.label}</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default StatsSection;
