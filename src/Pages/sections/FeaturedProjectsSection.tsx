import { Link } from "react-router-dom";
import Button from "../../components/core/Button";
import Carousel from "../../components/core/Carousel";
import Image from "../../components/core/ImageViewer";
import Project from "../../components/core/ProjectViewer";
import { useGlobalContext } from "../../contexts/globalContext";
import HomeData from "../../data/home";
import { Categories } from "../../data/projects";
import { ROUTEs } from "../../constants";
const FeaturedProjectsSection = () => {
    const { lang } = useGlobalContext();
    return (
        <section className="px-4 py-8">
            <h2 className="text-center text-extra-large">
                {HomeData.FeaturedProjects[lang].label}
            </h2>
            <p className="text-center text-medium">
                {HomeData.FeaturedProjects[lang].description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8">
                {HomeData.FeaturedProjects[lang].projects.map((project, i) => (
                    <div
                        key={i}
                        className="p-6 border border-primary/30 bg-background/50 hover:bg-primary/20 hover:shadow-sm shadow-primary transition-all duration-300"
                    >
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
                                            />
                                        </Image.Opener>
                                    </Carousel.CarouselItem>
                                ))}
                            </Carousel>
                        </div>
                        <Project.Opener project={project}>
                            <div className="flex justify-between items-center gap-1">
                                <h3 className="text-medium font-bold text-secondary mb-2">
                                    {project.name}
                                </h3>
                                <span className="bg-skin text-blue font-bold border-1 text-extra-small rounded-lg p-2">
                                    {Categories[lang][project.category]}
                                </span>
                            </div>
                            <p className="text-foreground text-extra-small">
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
                ))}
            </div>
            <Link to={ROUTEs.PROJECTS} className="flex justify-center">
                <Button.Neno label="View All" />
            </Link>
        </section>
    );
};

export default FeaturedProjectsSection;
