"use client";
import Image from "next/image";
import { AudioPlayer } from "react-audio-play";

function Artworks() {
    return (
        <div
            id="artworks"
            className="min-h-screen w-screen flex items-center justify-center bg-fixed bg-cover bg-artwork"
        >
            <div className="w-full p-5">
                <div className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-cyan-300 mt-16">
                        Artworks
                    </h2>
                    <div className="flex flex-col gap-5 mt-16 border-2 border-cyan-300">
                        <div className="flex flex-col md:flex-row">
                            <Image
                                src="/images/art1.jpg"
                                alt="Artwork 1"
                                width={384}
                                height={384}
                                className="w-full md:w-64 h-64 object-cover"
                            />
                            <div className="grow p-5 flex flex-col justify-center gap-5 items-start backdrop-blur">
                                <h3 className="text-2xl md:text-4xl lg:text-5xl font-[900] text-cyan-300">
                                    Liquid Mind
                                </h3>
                                <AudioPlayer
                                    src="/audios/liquid_mind.mp3"
                                    color="#67E8F9"
                                    sliderColor="#67E8F9"
                                    width={"100%"}
                                    style={{
                                        background: "transparent",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 mt-5 border-2 border-cyan-300">
                        <div className="flex flex-col md:flex-row">
                            <Image
                                src="/images/art2.jpg"
                                alt="Artwork 2"
                                width={384}
                                height={384}
                                className="w-full md:w-64 h-64 object-cover"
                            />
                            <div className="grow p-5 flex flex-col justify-center gap-5 items-start backdrop-blur">
                                <h3 className="text-2xl md:text-4xl lg:text-5xl font-[900] text-cyan-300">
                                    A Moment
                                </h3>
                                <AudioPlayer
                                    src="/audios/a_moment.mp3"
                                    color="#67E8F9"
                                    sliderColor="#67E8F9"
                                    width={"100%"}
                                    style={{
                                        background: "transparent",
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 mt-5 border-2 border-cyan-300">
                        <div className="flex flex-col md:flex-row">
                            <Image
                                src="/images/art3.jpg"
                                alt="Artwork 3"
                                width={384}
                                height={384}
                                className="w-full md:w-64 h-64 object-cover"
                            />
                            <div className="grow p-5 flex flex-col justify-center gap-5 items-start backdrop-blur">
                                <h3 className="text-2xl md:text-4xl lg:text-5xl font-[900] text-cyan-300">
                                    Old Times
                                </h3>
                                <AudioPlayer
                                    src="/audios/old_times.wav"
                                    color="#67E8F9"
                                    sliderColor="#67E8F9"
                                    width={"100%"}
                                    style={{
                                        background: "transparent",
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 mt-5 border-2 border-cyan-300">
                        <div className="flex flex-col md:flex-row">
                            <Image
                                src="/images/art4.jpg"
                                alt="Artwork 4"
                                width={384}
                                height={384}
                                className="w-full md:w-64 h-64 object-cover"
                            />
                            <div className="grow p-5 flex flex-col justify-center gap-5 items-start backdrop-blur">
                                <h3 className="text-2xl md:text-4xl lg:text-5xl font-[900] text-cyan-300">
                                    Sound Waves
                                </h3>
                                <AudioPlayer
                                    src="/audios/sound_waves.mp3"
                                    color="#67E8F9"
                                    sliderColor="#67E8F9"
                                    width={"100%"}
                                    style={{
                                        background: "transparent",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Artworks;
