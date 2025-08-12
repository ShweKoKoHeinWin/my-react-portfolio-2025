import AboutData from '../../data/about'
import { useGlobalContext } from '../../contexts/globalContext'
import {motion} from 'framer-motion'
import { SpringTransition } from '../../utils';
import Button from '../../components/core/Button';

const AboutMeSection = () => {
    const {lang} = useGlobalContext();
    return (
        <section>
            <motion.h2 initial={{scale: 0.5}} whileInView={{scale: 1}} transition={SpringTransition()} className="text-center font-bold text-large  lg:text-extra-large text-primary">
                {AboutData.AboutMe[lang].title}
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-5">

                <motion.div initial={{x: "-10vw", opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={SpringTransition()} className="flex justify-center items-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-50 animate-pulse"></div>
                        <img loading='lazy' src="/images/my_image2.png" className="relative  object-cover" width={400} alt="" />
                    </div>
                </motion.div>
                <motion.div initial={{x: "10vw", opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={SpringTransition()} className="flex justify-center items-center flex-col">
                    <h3 className="text-large text-primary font-semibold">
                        🧑🏻{AboutData.AboutMe[lang].whoami.title}
                    </h3>
                    <p className="text-small indent-15 mb-5">
                        {AboutData.AboutMe[lang].whoami.description}
                    </p>
                    <a href="/new_resume.pdf" target="_blank" >
                        <Button.Neno label='My Resume' />
                    </a>
                    
                </motion.div>
            </div>
        </section>
    )
}

export default AboutMeSection
