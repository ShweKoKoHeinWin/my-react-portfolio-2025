import AboutData from '../../data/about'
import { useGlobalContext } from '../../contexts/globalContext'
import {motion} from 'framer-motion'
import { SpringTransition } from '../../utils';

const AboutMeSection = () => {
    const {lang} = useGlobalContext();
    return (
        <section>
            <h2 className="text-center font-bold text-large  lg:text-extra-large text-primary">
                {AboutData.AboutMe[lang].title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-5">
                <motion.div initial={{x: -200, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={SpringTransition()} className="flex justify-center items-center flex-col">
                    <h3 className="text-large text-primary font-semibold">
                        {AboutData.AboutMe[lang].whoami.title}
                    </h3>
                    <p className="text-small indent-15">
                        {AboutData.AboutMe[lang].whoami.description}
                    </p>
                </motion.div>

                <motion.div initial={{x: 100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={SpringTransition()} className="flex justify-center items-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-50 animate-pulse"></div>
                        <img loading='lazy' src="/images/my_img2.jpg" className="relative border-4 border-white/20 shadow-2xl object-cover" width={400} alt="" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutMeSection
