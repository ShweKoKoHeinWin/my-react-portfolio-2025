import {
    createContext,
    useContext,
    type Dispatch,
    type SetStateAction,
} from "react";
import useAppearance from "../hooks/useAppearance";
import { useLanguage } from "../hooks/useLanguage";
import type { AppearanceMode, LangProp } from "../types/hook";
import useImageViewer from "../hooks/useImageViewer";
import useProjectViewer from "../hooks/useProjectViewer";
import type { ProjectProp } from "../types";

interface GlobalContextType {
    mode: AppearanceMode;
    setMode: Dispatch<SetStateAction<AppearanceMode>>;

    lang: LangProp;
    setLang: Dispatch<SetStateAction<LangProp>>;

    imageViewer: {
        open: boolean;
        setOpen: Dispatch<SetStateAction<boolean>>;
        image: string;
        setImage: Dispatch<SetStateAction<string>>;
    };

    projectViewer: {
        open: boolean;
        setOpen: Dispatch<SetStateAction<boolean>>;
        project: ProjectProp | undefined;
        setProject: Dispatch<SetStateAction<ProjectProp | undefined>>;
    };
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error(
            "useGlobalContext must be used within a GlobalContextProvider"
        );
    }
    return context;
};

export const GlobalContextProvider = (props: React.PropsWithChildren<{}>) => {
    const [mode, setMode] = useAppearance();
    const [lang, setLang] = useLanguage();
    const imageViewer = useImageViewer();
    const projectViewer = useProjectViewer();
    return (
        <GlobalContext.Provider
            value={{
                mode,
                setMode,
                lang,
                setLang,
                imageViewer,
                projectViewer,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};
