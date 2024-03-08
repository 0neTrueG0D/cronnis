import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Artworks from "./components/Artworks";
import Contact from "./components/Contact";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Artworks />
            <Contact />
            <footer className="w-full bg-gray-900 text-cyan-50 text-lg flex items-center justify-center">
                <p className="p-5">
                    Copyright &copy; Arawn Cronnis 2024. All rights reserved.
                </p>
            </footer>
        </>
    );
}
