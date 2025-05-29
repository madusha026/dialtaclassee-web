import Image from "next/image";
import Link from "next/link";

const AboutusPage = () => {
    return (
        <div className="container relative">
        <div className="absolute text-white py-8 text-left">
            <h3 className="text-4xl md:text-7xl font-light font-reckless">
            About Us
            </h3>
        </div>

        <div className="container absolute mt-30">
            <hr className="border-t-1 border-gray-400 my-8"/>
        </div>

        <div className="flex flex-col justify-between mt-50">
            <p className=" md:text-3xl text-white/40 leading-relaxed">At <span className="text-yellow-500 text-3xl md:text-3xl">Di Alta Classe </span>
            e turn vision into visuals. We’re a full-service creative production house specializing in fashion, product, corporate, and lifestyle content. Whether it’s a high-impact fashion film, scroll-stopping social media content, or polished corporate branding, our team brings ideas to life through stunning visuals and thoughtful storytelling.
            <br/>
            <br/>
            From concept to final cut, we collaborate closely with brands, creatives, and businesses to craft content that connects, converts, and captivates. With a passion for aesthetics and a sharp eye for detail, DAC is where creativity meets strategy.
            </p>
        </div>

        <div className="container absolute mt-30">
            <hr className="border-t-1 border-gray-400 my-8"/>
        </div>

        <div className="container absolute text-white py-16 text-left   mt-40">
                <h2 className="text-3xl md:text-4xl font-light mb-4">
                    Don’t settle for ordinary.
                </h2>
                <h3 className="text-4xl md:text-5xl font-light">
                Let’s make your visuals <span className="text-yellow-500 font-reckless">extraordinary!</span>
                </h3>

                <div className="mt-20">
                    <Link href="/contact">
                        <button className="bg-transparent border-1 border-white text-white py-4 px-12 rounded-lg text-3xl">
                        Contact Us Now
                        </button>
                    </Link>
                </div>
        </div> 


        </div>
    );
    }

export default AboutusPage; 