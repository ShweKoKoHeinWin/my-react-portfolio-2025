import AboutData from "../../data/about";
import { useGlobalContext } from "../../contexts/globalContext";
import { motion } from "framer-motion";
import { SpringTransition } from "../../utils";

const AboutMyGoalSection = () => {
    const { lang } = useGlobalContext();
    return (
        <section className="py-8">
            <h3 className="text-center font-bold text-large  lg:text-extra-large text-primary">
                {AboutData.AboutMe[lang].mygoal.title}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="p-5">
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
                </div>

                <div className="p-5">
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
                </div>
            </div>
        </section>
    );
};

export default AboutMyGoalSection;
