import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                about: "url('/images/about.jpg')",
                service: "url('/images/services.jpg')",
                artwork: "url('/images/artwork.jpg')",
                contact: "url('/images/contact.jpg')",
            },
        },
    },
    plugins: [],
};
export default config;
