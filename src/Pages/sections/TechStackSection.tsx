import { useGlobalContext } from "../../contexts/globalContext"
import HomeData from "../../data/home"

const TechStackSection = () => {
    const {lang} = useGlobalContext();
  return (
    <section className="py-16">
        <h2 className="text-extra-large text-center">{HomeData.TechStacks[lang].label}</h2>
        <p className="text-center text-medium">{HomeData.TechStacks[lang].description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 p-8">
            {Object.keys(HomeData.Tech).map(key => (
                <div key={key} className="border-2 rounded-xl p-3 space-y-4">
                    <h4 className="text-medium text-center font-bold capitalize">{key}</h4>
                    <div className="flex justify-center items-center flex-wrap gap-3">
                        {HomeData.Tech[key].map(tech => (
                            <span key={tech} className="border-1 text-extra-small rounded-xl px-3 py-1">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default TechStackSection
