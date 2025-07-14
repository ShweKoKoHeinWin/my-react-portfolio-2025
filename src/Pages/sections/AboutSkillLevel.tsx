import { useGlobalContext } from "../../contexts/globalContext";
import AboutData from "../../data/about";

const AboutSkillLevel = () => {
    const {lang} = useGlobalContext();
    return (
        <section className="pt-8">
            <h2 className="text-center font-bold text-large  lg:text-extra-large text-primary pb-3">
                🛠️{AboutData.AboutMe.mySkills.title[lang]}
            </h2>

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 text-primary font-medium">
                {AboutData.AboutMe.mySkills.skills.map((skill, i) => (
                    <div key={i} className="flex flex-wrap justify-between items-center gap-3 border-2 rounded-lg p-3">
                        <h4 className="text-small">
                            {skill.name}
                        </h4>

                        <span className="text-small">
                            {skill.level}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutSkillLevel;
