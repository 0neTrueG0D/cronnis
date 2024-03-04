import Image from "next/image";

function Services() {
    return (
        <div className="relative w-screen h-fit bg-gray-900 bg-opacity-75">
            <div className="max-w-6xl mx-auto h-full flex flex-col items-center p-5">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-cyan-300 mt-16">
                    Services
                </h2>
                <div className="grid md:grid-cols-4 gap-5 mt-16">
                    <div className="border-2 border-cyan-300 flex flex-col justify-start items-start">
                        <div className="text-2xl font-bold text-black w-full p-5 min-h-28 flex items-center justify-center text-center bg-cyan-300">
                            Music Production
                        </div>
                        <p className="text-cyan-50 text-lg mt-5 p-5 backdrop-blur-2xl">
                            Crafting distinctive soundscapes from concept to
                            completion, I blend innovative techniques with
                            traditional styles to produce music that resonates.
                        </p>
                    </div>
                    <div className="border-2 border-cyan-300 flex flex-col justify-start items-start">
                        <div className="text-2xl font-bold text-black w-full p-5 min-h-28 flex items-center justify-center text-center bg-cyan-300">
                            Movie Scoring
                        </div>
                        <p className="text-cyan-50 text-lg mt-5 p-5 backdrop-blur-2xl">
                            With a keen sense for cinematic narratives, I
                            compose and tailor music that enhances storytelling,
                            elevates emotion, and enriches the overall film
                            experience.
                        </p>
                    </div>
                    <div className="border-2 border-cyan-300 flex flex-col justify-start items-start">
                        <div className="text-2xl font-bold text-black w-full p-5 min-h-28 flex items-center justify-center text-center bg-cyan-300">
                            Mixing & Mastering
                        </div>
                        <p className="text-cyan-50 text-lg mt-5 p-5 backdrop-blur-2xl">
                            Merging technical precision with creative intuition,
                            I refine and balance audio elements to ensure
                            clarity, depth, and dynamic impact in every track.
                        </p>
                    </div>
                    <div className="border-2 border-cyan-300 flex flex-col justify-start items-start">
                        <div className="text-2xl font-bold text-black w-full p-5 min-h-28 flex items-center justify-center text-center bg-cyan-300">
                            Sound Design
                        </div>
                        <p className="text-cyan-50 text-lg mt-5 p-5 backdrop-blur-2xl">
                            Specializing in creating compelling auditory
                            environments, I design unique sounds that engage,
                            intrigue, and transform any audio-visual project.
                        </p>
                    </div>
                </div>
                <button className="my-16 py-3 px-10 text-cyan-300 border-2 border-cyan-300 uppercase text-lg font-semibold cursor-pointer hover:bg-cyan-300 hover:text-black duration-300">
                    Contact Me
                </button>
            </div>
            <div className="absolute inset-0 bg-service bg-cover -z-10"></div>
        </div>
    );
}

export default Services;
