import { LANGs } from "../constants";

const Nav = {
    [LANGs.ENGLISH]: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        contact: 'Contact',
    },
    [LANGs.MYANMAR]: {
        home: 'ပင်မ',
        about: 'အကြောင်း',
        projects: 'ပရောဂျက်များ',
        contact: 'ဆက်သွယ်ရန်',
    }
}

const Actions = {
    [LANGs.ENGLISH]: {
        detail: 'Detail',
        description: 'Description',
        features: 'Features',
        techstack: 'Tech Stack',
        myContributions: 'My Contributions',
    },
    [LANGs.MYANMAR]: {
        detail: 'အသေးစိတ်',
        description: 'ဖော်ပြချက်',
        features: 'အင်္ဂါရပ်များ',
        techstack: 'နည်းပညာ',
        myContributions: 'တာဝန်ယူခဲ့သောအပိုင်း',
    }
}

export default {Nav, Actions}