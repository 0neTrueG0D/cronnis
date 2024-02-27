import Image from "next/image";
function About() {
    return (
        <div className="min-h-screen w-screen flex items-center justify-center bg-fixed bg-cover bg-about">
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
                            Arawn Cronnis is a musician and producer from the
                            United States. He has been creating music for over
                            10 years. His music is a blend of electronic, rock,
                            and pop. He has released several albums and singles
                            on various platforms. He is known for his unique
                            sound and style. He is currently working on new
                            music and projects. Arawn Cronnis is a musician and
                            producer from the United States. He has been
                            creating music for over 10 years. His music is a
                            blend of electronic, rock, and pop. He has released
                            several albums and singles on various platforms. He
                            is known for his unique sound and style. He is
                            currently working on new music and projects.
                        </p>
                        <button className="my-16 py-3 px-10 text-cyan-300 border-2 border-cyan-300 uppercase text-lg font-semibold cursor-pointer hover:bg-cyan-300 hover:text-black duration-300">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
