function Contact() {
    return (
        <div
            id="contact"
            className="min-h-screen w-screen flex items-center justify-center bg-fixed bg-cover bg-contact"
        >
            <div className="w-full p-5">
                <div className="max-w-6xl mx-auto">
                    <div className="w-full text-center text-yellow-400 text-6xl md:text-8xl font-extrabold">
                        A<span className="text-cyan-300">C</span>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <a
                            href="mailto:thewatcher025@gmail.com"
                            className="mt-16 py-3 px-10 text-cyan-300 border-2 border-cyan-300 uppercase text-lg font-semibold cursor-pointer hover:bg-cyan-300 hover:text-black duration-300"
                        >
                            Contact
                        </a>
                    </div>
                    <div className="mt-16 grid md:grid-cols-2 gap-5">
                        <div className="flex flex-col items-center md:items-start w-full">
                            <h4 className="text-2xl font-bold text-yellow-400">
                                Get in Touch
                            </h4>
                            <div className="text-xl text-cyan-50 flex flex-col mt-5 items-center md:items-start">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.instagram.com/arawn_cronnis?igsh=MXZxZTFpbHlyN2Vrag=="
                                >
                                    Instagram
                                </a>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.linkedin.com/in/irshad-mohamed-335707308"
                                >
                                    Linkedin
                                </a>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://x.com/Arawn_cronnis"
                                >
                                    Twitter
                                </a>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://youtube.com/@arawncronnis3112?si=xb0p4UAAFB1y4GMs"
                                >
                                    YouTube
                                </a>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://on.soundcloud.com/zxqP9"
                                >
                                    Soundcloud
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:items-start w-full">
                            <h4 className="text-2xl font-bold text-yellow-400">
                                Contact Info
                            </h4>
                            <div className="text-xl text-cyan-50 flex flex-col mt-5 items-center md:items-start">
                                <p>thewatcher025@gmail.com</p>
                                <p className="mt-5">+91 7709568741</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
