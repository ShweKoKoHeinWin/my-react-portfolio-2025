import Carousel from "./core/Carousel";
import { Categories } from "../data/projects";
import Image from "./core/ImageViewer";
import Project from "./core/ProjectViewer";
import { useGlobalContext } from "../contexts/globalContext";
import type { ProjectProp } from "../types";

const ProjectCard = ({ project }: { project: ProjectProp }) => {
    const { lang } = useGlobalContext();
    return (
        <div className="p-6 border border-primary/30 bg-background/50 hover:bg-primary/20 hover:shadow-sm shadow-primary transition-all duration-300">
            <div className="mb-4">
                <Carousel>
                    {project.photos.map((photo, i) => (
                        <Carousel.CarouselItem key={i}>
                            <Image.Opener
                                image={`/images/${project.name}/${photo}`}
                            >
                                <img
                                    src={`/images/${project.name}/${photo}`}
                                    alt=""
                                    loading="lazy"
                                />
                            </Image.Opener>
                        </Carousel.CarouselItem>
                    ))}
                </Carousel>
            </div>
            <Project.Opener project={project}>
                <div className="flex justify-between items-center gap-1">
                    <h3 className="text-medium font-bold text-secondary mb-2 leading-[1.2]">
                        {project.name}
                    </h3>
                    <span className="bg-skin text-blue font-bold border-1 text-extra-small rounded-lg p-2">
                        {Categories[lang][project.category]}
                    </span>
                </div>
                <p className="text-foreground text-extra-small mt-2">
                    {project[lang].description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech, i) => (
                        <span
                            key={i}
                            className="bg-blue text-light text-md font-medium rounded-md px-2 py-1"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </Project.Opener>
        </div>
    );
};

export default ProjectCard;
