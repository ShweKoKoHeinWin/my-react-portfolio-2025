import { Eye, X } from "lucide-react";
import { useGlobalContext } from "../../contexts/globalContext";
import Backdrop from "./Backdrop";
import type { ReactNode } from "react";
import {motion} from 'framer-motion'

const ImageOpener = ({ children, image }: {children: ReactNode; image: string}) => {
    const { setOpen, setImage } = useGlobalContext().imageViewer;
    const openViewer = () => {
        setOpen(true);
        setImage(image);
    };
    return (
        <div className="relative">
            {children}
            <div
                className="absolute top-0 left-0 w-full h-full bg-dark/20 hover:bg-dark/30 text-skin flex justify-center items-center cursor-pointer"
                onClick={openViewer}
            >
                <Eye />
            </div>
        </div>
    );
};

const ImageViewer = () => {
    const { open, setOpen, image, setImage } = useGlobalContext().imageViewer;
    const closeViewer = () => {
        setOpen(false);
        setImage("");
    };

    if (!open || !image) return;
    return (
        <>
            {open && <Backdrop setState={setOpen} z="40" />}
            <motion.div initial={{ scale: 0, y: '100vh' }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0, y: '100vh' }}
                    transition={{ duration: 0.3 }}  className="fixed inset-0 md:inset-x-10 md:inset-y-10 z-40 bg-background">
                <div className="relative border-2 w-full h-full flex justify-center items-center overflow-y-scroll">
                    <button
                        className="absolute top-0 right-0 p-3 bg-dark text-skin border-1 cursor-pointer"
                        onClick={closeViewer}
                    >
                        <X />
                    </button>
                    <img src={image} alt="image" className="w-full h-auto object-cover" />
                </div>
            </motion.div>
        </>
    );
};

export default { Opener: ImageOpener, Viewer: ImageViewer };
