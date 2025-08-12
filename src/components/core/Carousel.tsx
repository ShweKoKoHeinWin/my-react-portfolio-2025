import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { useState, type ReactNode } from "react";

const CarouselItem = ({ children }: { children: ReactNode }) => {
    return <div className="min-w-full h-full">{children}</div>;
};

const CarouselControl = ({
    goPrev,
    goNext,
    curIndex,
    lastIndex
}: {
    goPrev: () => void;
    goNext: () => void;
    curIndex: number;
    lastIndex: number;
}) => {
    return (
        <>
            {curIndex !== 0 && (
                <button
                    className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/50 text-skin rounded-full p-1 hover:bg-primary/30"
                    onClick={goPrev}
                >
                    <ArrowLeftCircle />
                </button>
            )}
            {curIndex !== lastIndex && (
                <button
                    className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-primary/50 text-skin rounded-full p-1 hover:bg-primary/30"
                    onClick={goNext}
                >
                    <ArrowRightCircle />
                </button>
            )}
        </>
    );
};

const Carousel = ({ children }: { children: ReactNode[] }) => {
    const [curIndex, setCurIndex] = useState(0);
    const lastIndex = children.length - 1;
    const goPrev = () =>
        setCurIndex((prev) => (prev === 0 ? lastIndex : prev - 1));
    const goNext = () => setCurIndex((prev) => (prev + 1) % children.length);
    return (
        <>
            <div className="relative">
                <div className="overflow-hidden">
                    <div
                        className={`flex transition-transform duration-500 ease-in-out `}
                        style={{
                            transform: `translateX(-${curIndex * 100}%)`,
                        }}
                    >
                        {children}
                    </div>
                </div>
                <CarouselControl goPrev={goPrev} goNext={goNext} lastIndex={lastIndex} curIndex={curIndex} />
            </div>

            <div className="text-center text-extra-small text-primary">
                {curIndex + 1} / {children.length}
            </div>
        </>
    );
};

Carousel.CarouselItem = CarouselItem;

export default Carousel;
