function Hero() {
    return (
        <main className="min-h-screen w-screen relative bg-black bg-opacity-75 backdrop-blur-3xl overflow-hidden">
            <div className="absolute top-0 w-full">
                <div className="max-w-6xl mx-auto text-cyan-50 text-md flex justify-between items-center p-5">
                    <div className=" text-yellow-400 text-2xl md:text-3xl font-extrabold">
                        AC
                    </div>
                    <div className="md:flex gap-5 uppercase hidden">
                        <a href="#" className="hover:text-yellow-400">
                            Home
                        </a>
                        <a href="#" className="hover:text-yellow-400">
                            About
                        </a>
                        <a href="#" className="hover:text-yellow-400">
                            Music
                        </a>
                        <a href="#" className="hover:text-yellow-400">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto h-screen flex flex-col justify-center items-start p-5 gap-5">
                <h1 className=" text-5xl md:text-6xl lg:text-[100px] font-[900] text-yellow-400">
                    Arawn Cronnis
                </h1>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-[900] text-cyan-300">
                    Creating the soundtrack for the unsaid and the unforgettable
                </h2>
            </div>
            <video
                autoPlay
                loop
                muted
                className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
                src="video/edm.mp4"
            ></video>
        </main>
    );
}

export default Hero;
