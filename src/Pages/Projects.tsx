import { useMemo, useState } from "react";
import Button from "../components/core/Button";
import { useGlobalContext } from "../contexts/globalContext";
import ProjectData, { Categories } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import CTA from "../data/cta";
import type { ProjectCategoryType } from "../types";

const Projects = () => {
    const { lang } = useGlobalContext();
    const [selectedType, setSelectedType] = useState("All");

    const filteredProjects = useMemo(() => {
        let projects = ProjectData.AllProjects;
        if (Categories.keys.includes(selectedType)) {
            projects = ProjectData.AllProjects.filter(
                (project) => project.category === selectedType
            );
        }
        return projects;
    }, [selectedType]);
    return (
        <main className="relative min-h-screen overflow-hidden px-8 py-30 lg:py-20">
            <h1 className="text-center font-bold text-large  lg:text-extra-large text-primary">
                {ProjectData.ProjectPage[lang].label}
            </h1>
            <p className="text-medium text-center text-secondary">
                {ProjectData.ProjectPage[lang].description}
            </p>
            <section className="py-5">
                <div className="flex justify-center items-center gap-1 sm:gap-3 md:gap-5">
                    <Button.Neno
                        label={CTA.Actions[lang].all}
                        isHover={"All" === selectedType}
                        onClick={() => setSelectedType("All")}
                        size="small"
                    />
                    {Categories.keys.map((type) => (
                        <div key={type}>
                            <Button.Neno
                                label={Categories[lang][type as ProjectCategoryType]}
                                isHover={type === selectedType}
                                onClick={() => setSelectedType(type)}
                                size="small"
                            />
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8">
                    {filteredProjects.map((project, i) => (
                        <div key={i}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Projects;
