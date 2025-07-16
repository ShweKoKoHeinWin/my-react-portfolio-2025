import ContactData from "../data/contact";
import { useGlobalContext } from "../contexts/globalContext";
import Button from "../components/core/Button";
import { Facebook, Github, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { SpringTransition } from "../utils";
import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const { lang } = useGlobalContext();
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        if(!formRef.current) return;
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );
            formRef.current.reset();
        } catch (error) {
            console.log("Email js err", error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <main className="min-h-relative px-8 py-30 lg:py-20">
            <motion.h1
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={SpringTransition()}
                className="text-center font-bold text-large  lg:text-extra-large text-primary"
            >
                {ContactData.Contact[lang].title}
            </motion.h1>
            <motion.p
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={SpringTransition()}
                className="text-medium text-center text-secondary"
            >
                {ContactData.Contact[lang].description}
            </motion.p>

            <div className="text-small grid md:grid-cols-12 gap-5 py-5">
                <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={SpringTransition()}
                    className=" col-span-12 lg:col-span-5 ring-2 ring-secondary rounded-xl p-4"
                    
                >
                    <form className="space-y-6" onSubmit={handleSubmit} ref={formRef} action="" method="POST">
                        <div>
                            <label htmlFor="name" className="block">
                                {ContactData.ContactForm[lang].name}
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className="block w-full rounded-md bg-white p-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-secondary placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block">
                                {ContactData.ContactForm[lang].email}
                            </label>
                            <div className="mt-2">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="block w-full rounded-md bg-white p-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-secondary placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block">
                                {ContactData.ContactForm[lang].message}
                            </label>
                            <div className="mt-2">
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={5}
                                    required
                                    className="block w-full rounded-md bg-white p-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-secondary placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <Button.Neno
                                label={loading ? ContactData.ContactForm[lang].sending : ContactData.ContactForm[lang].send}
                                size="small"
                            />
                        </div>
                    </form>
                </motion.div>

                <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={SpringTransition()}
                    className="col-span-12 lg:col-span-7"
                >
                    <div className="ring-2 ring-secondary h-fit rounded-xl p-3">
                        <h3 className="text-large font-bold text-center text-secondary">
                            {ContactData.ContactInfo[lang].title}
                        </h3>

                        <table className="border-separate border-spacing-5 text-small">
                            <tbody>
                                <tr>
                                    <th className="align-top">
                                        <MapPin size={25} />
                                    </th>
                                    <td>
                                        {ContactData.ContactInfo[lang].address}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="align-top">
                                        <Mail size={25} />
                                    </th>
                                    <td>
                                        <a
                                            href={`mailto:${ContactData.ContactInfo.gmail}`}
                                        >
                                            {ContactData.ContactInfo.gmail}
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="align-top">
                                        <Phone size={25} />
                                    </th>
                                    <td>
                                        {ContactData.ContactInfo.phones.map(
                                            (phone, i) => (
                                                <a
                                                    key={i}
                                                    href={`tel:${phone}`}
                                                >
                                                    {phone}{" "}
                                                    {i !==
                                                        ContactData.ContactInfo
                                                            .phones.length -
                                                            1 && ", "}
                                                </a>
                                            )
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="h-fit flex justify-center items-center gap-5 flex-wrap rounded-xl mt-5">
                        <a
                            href={ContactData.ContactInfo.github}
                            className="ring-3 ring-foreground hover:text-background hover:bg-foreground transition-all duration-300 p-3 rounded-xl"
                        >
                            <Github size={25} />
                        </a>

                        <a
                            href={ContactData.ContactInfo.facebook}
                            className="ring-3 ring-foreground hover:text-background hover:bg-foreground transition-all duration-300 p-3 rounded-xl"
                        >
                            <Facebook size={25} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

export default Contact;
