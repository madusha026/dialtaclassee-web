import Image from "next/image";

const PortfolioPage = () => {
    return (
        <div className="container relative ">
        <div className="absolute text-white py-8 text-left  ">
            <h3 className="text-4xl md:text-7xl font-light font-reckless">
            Portfolio
            </h3>
        </div>

        <div className="container absolute mt-30">
            <hr className="border-t-1 border-gray-400 my-8"/>
        </div>

        <div className="flex items-center space-x-8 mt-50 text-left">
                <button className="text-white hover:text-yellow-500 font-medium text-md">
                    <span className="text-white">►</span> ALL
                </button>
                <button className="text-white/60 hover:text-yellow-500 font-medium text-md">
                    FASHION
                </button>
                <button className="text-white/60 hover:text-yellow-500 font-medium text-md">
                    PRODUCT
                </button>
                <button className="text-white/60 hover:text-yellow-500 font-medium text-md">
                    COMMERCIAL
                </button>
                <button className="text-white/60 hover:text-yellow-500 font-medium text-md">
                    PHOTOGRAPHY
                </button>
                <button className="text-white/60 hover:text-yellow-500 font-medium text-md">
                    VIDEOGRAPHY
                </button>
        </div>

            <div className=" px-10 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="mb-4">
                    <Image 
                        src="/images/image8.png" 
                        alt="Ukaye Cards" 
                        width={305} 
                        height={200} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all">
                        Ukaye Cards
                    </div>
                    </div>
                    <div className="mb-4 break-inside-avoid">
                        <Image 
                            src="/images/image9.png" 
                            alt="Royale Retreat" 
                            width={305} 
                            height={200} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all">
                            Royale Retreat
                        </div>
                        </div>

                        <div className="mb-4 break-inside-avoid col-span-2 row-span-2">
                        <Image 
                            src="/images/image10.png" 
                            alt="Ghillli Premium Soda" 
                            width={630} 
                            height={410} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all">
                            Ghillli Premium Soda
                        </div>
                        </div>

                        <div className="mb-4 break-inside-avoid">
                        <Image 
                            src="/images/image13.png" 
                            alt="Panikanda State" 
                            width={305} 
                            height={200} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all">
                            Mags Collection
                        </div>
                        </div>
                        <div className="mb-4 break-inside-avoid">
                        <Image 
                            src="/images/image11.png" 
                            alt="Panikanda State" 
                            width={305} 
                            height={200} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all">
                            Panikanda State
                        </div>
                        </div>

                        <div className="mb-4 break-inside-avoid col-span-2 row-span-2">
                        <Image 
                            src="/images/image14.png" 
                            alt="Panikanda State" 
                            width={305} 
                            height={200} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all">
                            Panikanda State
                        </div>
                        </div>

                        <div className="mb-4 break-inside-avoid">
                        <Image 
                            src="/images/image15.png" 
                            alt="Panikanda State" 
                            width={305} 
                            height={200} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all">
                            Panikanda State
                        </div>
                        </div>

                        <div className="mb-4 break-inside-avoid">
                        <Image 
                            src="/images/image16.png" 
                            alt="Panikanda State" 
                            width={305} 
                            height={200} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all">
                            Panikanda State
                        </div>
                        </div>

                        <div className="mb-4 break-inside-avoid">
                        <Image 
                            src="/images/image17.png" 
                            alt="Panikanda State" 
                            width={305} 
                            height={200} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all">
                            Panikanda State
                        </div>
                        </div>

                        <div className="mb-4 break-inside-avoid">
                        <Image 
                            src="/images/image19.png" 
                            alt="Panikanda State" 
                            width={305} 
                            height={200} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all">
                            Panikanda State
                        </div>
                        </div>
                </div>

            </div>

            <div className="container absolute px-10">
            <hr className="border-t-1 border-gray-400 "/>
            </div>

            <div className="container absolute text-white py-16 text-left  ml-10">
                <h2 className="text-3xl md:text-4xl font-light mb-4">
                    Don’t settle for ordinary.
                </h2>
                <h3 className="text-4xl md:text-5xl font-light">
                Let’s make your visuals <span className="text-yellow-500 font-reckless">extraordinary!</span>
                </h3>

                <div className="mt-20">
                    <button className="bg-transparent border-1 border-white text-white py-4 px-12 rounded-lg text-3xl">
                    Contact Us Now
                    </button>
                </div>
            </div>  
        </div>
    );
    }

export default PortfolioPage; 