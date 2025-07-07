const NeonButton = ({
    label = "Click Me!",
    size = "medium",
    isHover = false,
    onClick = () => {}
}: {
    color?: "secondary" | "primary";
    label?: string;
    size?: "small" | "medium" | "large";
    isHover?: boolean;
    onClick?: () => void;
}) => {
    let textSizes = "text-extra-small sm:text-small";
    if (size === "medium") {
        textSizes = "text-small sm:text-medium";
    } else if (size === "large") {
        textSizes = "text-medium sm:text-large";
    }

        return (
            <button
                onClick={onClick}
                className={`cursor-pointer relative px-4 py-2 border-2 border-secondary  overflow-hidden rounded-lg inline-flex justify-center items-center group hover:translate-y-[-10%] hover:shadow-lg hover:shadow-secondary active:scale-[0.9] active:translate-y-0 active:shadow-2xl active:shadow-secondary transition-all duration-300 ${isHover && 'translate-y-[-10%] bg-secondary shadow-lg shadow-secondary'}`}
            >
                <div
                    className={`absolute left-0 top-0 w-full h-full z-0 bg-secondary -translate-x-3/2 -translate-y-1/2 group-hover:translate-0 transition-all duration-300`}
                ></div>
                <div
                    className={`absolute left-0 bottom-0 w-full h-full z-0 bg-secondary translate-x-3/2 translate-y-1/2 group-hover:translate-0 transition-all duration-300`}
                ></div>
                <span
                    className={`${isHover ? 'text-light' : 'text-secondary'} ${textSizes} font-bold group-hover:text-light z-10`}
                >
                    {label}
                </span>
            </button>
        );
};

const NormalButton = ({ label, type = "normal", size = 'medium' }: {label: string, type: 'primary' | 'secondary' | 'normal', size: 'small' | 'medium' | 'large'}) => {
    let class_name = '';
    switch (size) {
        case 'small':
            class_name += 'text-extra-small p-1 ';
            break;

        case 'medium':
            class_name += 'text-small p-2 ';
            break;
    
        default:
            class_name += 'text-medium p-3 ';
            break;
    }

    class_name += 'rounded-xl border-1 bg-transparent '

    switch (type) {
        case 'primary':
            class_name += 'border-primary text-primary hover:bg-primary hover:text-secondary';
            break;

        case 'secondary':
            class_name += 'border-secondary text-secondary hover:bg-secondary hover:text-light';
            break;
    
        default:
            class_name += 'border-orange text-orange hover:bg-orange hover:text-skin';
            break;
    }
    
    return <button className={`${class_name} transition-all duration-300`}>{label}</button>;
};

export default { Neno: NeonButton, Normal: NormalButton };
