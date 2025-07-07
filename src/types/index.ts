import type { LangProp } from "./hook";

export type ProjectCategoryType = "own" | "company" | "tutorial";

export type ProjectCategoryProp = {
    keys: string[];
} & {
    [lang in LangProp]: {
        [key in ProjectCategoryType]: string;
    };
};

export type ProjectProp = {
    name: string;
    techStack: string[];
    category: ProjectCategoryType;
    photos: string[];
} & {
    [lang in LangProp]: {
        description: string;
        features: {
            [key: string]: string[] | { [key: string]: string[] };
        };
        myContributions: string;
    };
};

export type ActionProp = {
    [lang in LangProp]: {
        detail: string;
    };
};
