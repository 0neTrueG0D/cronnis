import Image from "next/image";
function About() {
    return (
        <div
            id="about"
            className="min-h-screen w-screen flex items-center justify-center bg-fixed bg-cover bg-about"
        >
            <div className="w-full p-5">
                <div className="max-w-4xl mx-auto">
                    <Image
                        src="/images/arawn.jpg"
                        alt="Arawn Cronnis"
                        width={500}
                        height={500}
                        className="object-cover w-full h-full mt-20"
                    />
                    <div className="md:px-32 -mt-5">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-cyan-300">
                            About
                        </h2>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-[900] text-cyan-300 mt-16">
                            The Artist: Arawn Cronnis
                        </h3>
                        <p className="mt-16 text-cyan-50 text-lg">
                            I'm Arawn Cronnis, and I've been crafting
                            experimental soundscapes for six years now. My
                            approach to music production involves blending
                            electronic textures, organic elements, and intricate
                            rhythms, creating captivating sonic landscapes that
                            don't fit neatly into traditional genres. I'm
                            passionate about pushing boundaries and constantly
                            exploring new sonic territories. Collaborating with
                            diverse artists fuels my creativity, and I thrive on
                            the challenge of creating tracks that engage
                            listeners with their unique sound. In the
                            experimental music scene, my fearless approach and
                            visionary production style have earned me a place
                            that continues to inspire and evolve.
                        </p>

                        <a href="#contact">
                            <button className="my-16 py-3 px-10 text-cyan-300 border-2 border-cyan-300 uppercase text-lg font-semibold cursor-pointer hover:bg-cyan-300 hover:text-black duration-300">
                                Know More
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
