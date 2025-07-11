import { LANGs } from "../constants";

const Contact = {
    [LANGs.ENGLISH]: {
        title: "Get In Touch",
        description:
            "I'm glad you’re here. If you have any questions, ideas, or just want to connect, feel free to send a message. We’ll respond as quickly as possible",
    },
    [LANGs.MYANMAR]: {
        title: "ဆက်သွယ်ရန်",
        description:
            "သင့်ရဲ့ လည်ပတ်မှုအတွက် ဝမ်းသာမိပါတယ်။ မေးခွန်းများ၊ အကြံဉာဏ်များရှိရင်၊ ဒါမှမဟုတ် ဆက်သွယ်ချင်ရင် အချိန်မရ္ဂေးဆက်သွယ်လိုက်ပါ။ အမြန်ဆုံးပြန်လည်ဆက်သွယ်ပေးပါမယ်။",
    },
};

const ContactForm = {
    [LANGs.ENGLISH]: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
    },
    [LANGs.MYANMAR]: {
        name: "အမည်",
        email: "အီးမေး",
        message: "အကြောင်းအရာ",
        send: "ပေးပို့မည်။",
    },
};

const ContactInfo = {
    facebook: 'https://www.facebook.com/shweshooncorporation.shweshooncorporation/',
    gmail: "shwekokoh@gmail.com",
    github: 'https://github.com/ShweKoKoHeinWin',
    phones: ["09980969958"],
    [LANGs.ENGLISH]: {
        title: "Contact Infomation",
        address:
            "Seikgyikanaungto Township, Yangon",
    },
    [LANGs.MYANMAR]: {
        title: "ဆက်သွယ်ရန်အချက်အလက်",
        address:
            "ဆိပ်ကြီးခနောင်တိုမြို့နယ်၊ ရန်ကုန်။",
    },
};

export default { Contact, ContactForm, ContactInfo };
