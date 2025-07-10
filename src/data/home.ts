import { LANGs } from "../constants";
import {
    DiaryApp,
    RealEstateApp,
    RiceMillApp,
    ShweAutomobile,
} from "./projects";

const Hero = {
    [LANGs.ENGLISH]: {
        greet: "Hi! I'm",
        intro: "A Junior Web Developer,",
        description:
            "Building my skills in development while working to become a better person every day",
    },
    [LANGs.MYANMAR]: {
        greet: "မင်္ဂလာပါ။ ကျွန်တော်",
        intro: "ဂျူနီယာဝဘ်ဆိုဒ်ရေးသူ တစ်ယောက်ပါ။",
        description:
            "ဝဘ်ဆိုဒ်နည်းပညာတွေ လေ့လာရင်း တစ်နေ့တစ်ခြား ပိုကောင်းတဲ့လူတစ်ယောက်ဖြစ်အောင် အစဥ်ကြိုးစားနေပါတယ်။",
    },
    files: {
        left: "hello",
    },
};

type TechProp = {
    [key: string]: string[]
}
const Tech:TechProp = {
    frontend: [
        "html",
        "css",
        "javascript",
        "tailwind",
        "bootstrap",
        "typescript",
        "react",
        'inertia',
        "livewire",
        "jquery",
    ],
    backend: ["php", "laravel", "backpack", "filament"],
    database: ["mysql", "sqlite"],
    tools: [
        "git",
        "github",
        "gitlab",
        "bitbucket",
        "vscode",
        "postman",
        "xampp",
        "vercel",
        'netlify',
    ],
};

const Stats = {
    [LANGs.ENGLISH]: {
        projects: {
            count: 30,
            label: "Projects",
        },
        experience: {
            count: 2,
            label: "Years Experience",
        },
        clients: {
            count: 1,
            label: "Clients",
        },
        tech: {
            count: Object.values(Tech).reduce(
                (count, tech) => count + tech.length,
                0
            ),
            label: "Technologies",
        },
    },
    [LANGs.MYANMAR]: {
        projects: {
            count: 30,
            label: "ပရောဂျက်များ",
        },
        experience: {
            count: 2,
            label: "အတွေ့အကြုံ(နှစ်)",
        },
        clients: {
            count: 1,
            label: "ဖောက်သည်များ",
        },
        tech: {
            count: Object.values(Tech).reduce(
                (count, tech) => count + tech.length,
                0
            ),
            label: "နည်းပညာများ",
        },
    },
};

const FeaturedProjects = {
    [LANGs.ENGLISH]: {
        label: "Featured Projects",
        description:
            "A showcase of selected works that represent my best efforts and creative vision",
        projects: [DiaryApp, RiceMillApp, RealEstateApp, ShweAutomobile],
    },
    [LANGs.MYANMAR]: {
        label: "အထူးပရောဂျက်များ",
        description:
            "ကျွန်တော့်အကောင်းဆုံးကြိုးစားမှုနှင့် တီထွင်မှုအမြင်ကို ကိုယ်စားပြုထားသော အလုပ်များ",
        projects: [DiaryApp, RiceMillApp, RealEstateApp, ShweAutomobile],
    },
};

const TechStacks = {
    [LANGs.ENGLISH]: {
        label: "Technologies I Can Work With",
        description:
            "I’ve worked with these technologies. My skills are still developing, but I can use them, and I am always learning to improve.",
    },
    [LANGs.MYANMAR]: {
        label: "ကျွန်တော် အသုံးပြုနိုင်တဲ့ နည်းပညာများ",
        description:
            "ဒီနည်းပညာတွေကို အလုပ်တွေမှာ အသုံးပြုဖူးပါတယ်။ ကျွမ်းကျင်မှုနည်းသေးပေမယ့် အသုံးပြုနိုင်ပါတယ်၊ တိုးတက်ဖို့လည်း အမြဲလေ့လာနေပါတယ်။",
    },
};

export default { Hero, Stats, Tech, FeaturedProjects, TechStacks };
