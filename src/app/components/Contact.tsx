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
                                <a href="">Instagram</a>
                                <a href="">Linkedin</a>
                                <a href="">Twitter</a>
                                <a href="">YouTube</a>
                                <a href="">Spotify</a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:items-start w-full">
                            <h4 className="text-2xl font-bold text-yellow-400">
                                Contact Info
                            </h4>
                            <div className="text-xl text-cyan-50 flex flex-col mt-5 items-center md:items-start">
                                <p>thewatcher025@gmail.com</p>
                                <p className="mt-5">+91 1234567890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
