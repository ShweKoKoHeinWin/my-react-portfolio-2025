import { X } from "lucide-react";
import { useGlobalContext } from "../../contexts/globalContext";
import Backdrop from "./Backdrop";
import type { ReactNode } from "react";
import Carousel from "./Carousel";
import Image from "./ImageViewer";
import type { ProjectProp } from "../../types";
import CTA from "../../data/cta";
import Button from "./Button";
import {motion} from 'framer-motion'

const ProjectOpener = ({
    children,
    project,
}: {
    children: ReactNode;
    project: ProjectProp;
}) => {
    const { lang } = useGlobalContext();
    const { setOpen, setProject } = useGlobalContext().projectViewer;
    const openViewer = () => {
        setOpen(true);
        setProject(project);
    };
    return (
        <div className="relative">
            {children}
            <div className="absolute top-0 left-0 w-full h-full group">
                <div className="scale-[0] group-hover:scale-[1] w-full h-full text-skin flex justify-center items-center transition-all duration-300">
                    <Button.Neno label={CTA.Actions[lang].detail} size="small" onClick={openViewer} />
                </div>
            </div>
        </div>
    );
};

const ProjectViewer = () => {
    const { lang, projectViewer } = useGlobalContext();
    const { open, setOpen, project, setProject } = projectViewer;
    const closeViewer = () => {
        setOpen(false);
        setProject(undefined);
    };

    if (!open || !project) return;
    return (
        <>
            {open && <Backdrop setState={setOpen} />}
            <motion.div initial={{ scale: 0, y: '100vh' }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0, y: '100vh' }}
                    transition={{ duration: 0.3 }} 
                    className="fixed inset-0 md:inset-x-10 md:inset-y-10 z-30 bg-background">
                <div className="border-2 w-full h-full overflow-x-hidden overflow-y-scroll p-5">
                    <div className="flex justify-between border-b">
                        <h3 className="text-large">{project.name} </h3>

                        <button
                            className="p-3 bg-dark text-skin"
                            onClick={closeViewer}
                        >
                            <X />
                        </button>
                    </div>
                    <div className="p-4">
                        <h3 className="text-medium whitespace-nowrap">
                            {CTA.Actions[lang].description} :
                        </h3>
                        <p className="text-small pl-5 mb-5">
                            {project[lang].description}
                        </p>

                        {project[lang].myContributions && (<>
                            <h3 className="text-medium"># {CTA.Actions[lang].myContributions} :</h3>
                            <p className="text-small pl-5 mb-5">
                                {project[lang].myContributions}
                            </p>
                        </>)}
                        <h3 className="text-medium">
                            {CTA.Actions[lang].features} :
                        </h3>
                        {/* Large screen */}
                        <table className="hidden lg:block border-separate border-spacing-y-4 pl-5 mb-5">
                            <tbody>
                                {Object.keys(project[lang].features).map(
                                    (feature) => (
                                        <tr key={feature} className="pb-3">
                                            <th className="text-small whitespace-nowrap align-top text-left pr-3">
                                                {feature}
                                            </th>
                                            <td>
                                                
                                                    {
                                                        Array.isArray(project[lang].features[feature]) ?
                                                            <ul className="list-inside list-disc leading-7 text-extra-small">
                                                            {project[lang].features[feature].map((func, i) => (
                                                                <li key={i}>
                                                                    {func}
                                                                </li>

                                                            ))}
                                                            </ul>
                                                            : 
                                                            ( <table className="border-separate border-spacing-y-4 pl-5 mb-5">
                                                                <tbody>
                                                                {Object.keys(project[lang].features[feature]).map((funKey: string) => {
                                                                    const featureGroup = project[lang].features[feature];
                                                                    if (!Array.isArray(featureGroup)) {
                                                                        return(<tr key={funKey}>
                                                                                    <th className="text-small whitespace-nowrap align-top text-left pr-3">{funKey}</th>
                                                                                    <td>
                                                                                        <ul className="list-inside list-disc leading-7 text-extra-small">
                                                                                            {featureGroup[funKey].map((text,j) => 
                                                                                                <li key={j}>{text}</li>
                                                                                            )}
                                                                                        </ul>
                                                                                    </td>
                                                                                </tr>)}
                                                                })}
                                                                </tbody>
                                                            </table>)
                                                    }
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>

                        {/* small screen */}
                        <div className="lg:hidden">
                             {Object.keys(project[lang].features).map(
                                    (feature) => (
                                        <div key={feature} className="pb-3">
                                            <h4 className="text-small align-top text-left pr-3">
                                                {feature}
                                            </h4>
                                            <div className="pl-4 sm:pl-8">
                                                
                                                    {
                                                        Array.isArray(project[lang].features[feature]) ?
                                                            <ul className="list-inside list-disc leading-7 text-extra-small">
                                                            {project[lang].features[feature].map((func, i) => (
                                                                <li key={i}>
                                                                    {func}
                                                                </li>

                                                            ))}
                                                            </ul>
                                                            : 
                                                            ( <div className="pl-4 sm:pl-8 mb-5">
                                                                {Object.keys(project[lang].features[feature]).map((funKey: string) => {
                                                                    const featureGroup = project[lang].features[feature];
                                                                    if (!Array.isArray(featureGroup)) {
                                                                        return(<div key={funKey}>
                                                                                    <h5 className="text-small align-top text-left pr-3">{funKey}</h5>
                                                                                    <ul className="list-inside list-disc leading-7 text-extra-small pl-4 sm:pl-8">
                                                                                        {featureGroup[funKey].map((text,j) => 
                                                                                            <li key={j}>{text}</li>
                                                                                        )}
                                                                                    </ul>
                                                                                </div>)}
                                                                })}
                                                            </div>)
                                                    }
                                            </div>
                                        </div>
                                    )
                                )}
                        </div>

                        <h3 className="text-medium">
                            {CTA.Actions[lang].techstack} :
                        </h3>
                        <div className="flex flex-wrap gap-2 px-5 my-5">
                            {project.techStack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="bg-blue font-medium text-light text-md rounded-md px-2 py-1"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="border-1">
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
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default { Opener: ProjectOpener, Viewer: ProjectViewer };
