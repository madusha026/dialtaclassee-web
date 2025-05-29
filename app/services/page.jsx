import Image from "next/image";
import Link from "next/link";

const ServicePage = () => {
    return (
        <div className="container relative ">
        <div className="absolute text-white py-8 text-left">
            <h3 className="text-4xl md:text-7xl font-light font-reckless">
            Services
            </h3>
        </div>

        <div className="container absolute mt-30">
            <hr className="border-t-1 border-gray-400 my-8"/>
        </div>

        <div className="flex flex-col justify-between mt-50">
            <p className=" md:text-3xl text-white/40 leading-relaxed">At <span className="text-yellow-500 text-3xl md:text-3xl">Di Alta Classe </span>
            we provide high-quality photography and videography services to elevate your brand. From fashion and product shoots to corporate events and aerial footage, our team delivers stunning visuals tailored to your needs. Whether it’s for social media, e-commerce, or promotional content, we capture every moment with precision and creativity.
            </p>
        </div>

        <div className=" py-16">
            <div className="container relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 ">
                <div className="w-full h-50 rounded-lg overflow-hidden mb-12">
                <Image 
                    src="/images/8.jpg" 
                    alt="Ukaye Cards" 
                    width={300} 
                    height={200} 
                    className="w-full h-full object-cover"
                    /> 
                <div className=" text-white absolute top-[80px] font-reckless font-light text-2xl md:text-4xl left-10">
                Fashion Photography & Videography
                </div>   
                <div className="mt-10 ml-280 flex justify-between items-center space-x-10 absolute top-[40px]">
                    <button className="border-2 border-white text-white rounded-4xl py-3 px-4">→</button>
                </div>               
                </div>
            </div>

            <div className="container relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                <div className="w-full h-50 rounded-lg overflow-hidden mb-12">
                <Image 
                    src="/images/image21.png" 
                    alt="Ukaye Cards" 
                    width={300} 
                    height={200} 
                    className="w-full h-full object-cover"
                    /> 
                <div className=" text-white absolute top-[80px] font-reckless font-light text-2xl md:text-4xl left-10">
                Product Photography & Videography
                </div>   
                <div className="mt-10 ml-280 flex justify-between items-center space-x-10 absolute top-[40px]">
                    <button className="border-2 border-white text-white rounded-4xl py-3 px-4">→</button>
                </div>               
                </div>
            </div>


            <div className="container relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                <div className="w-full h-50 rounded-lg overflow-hidden mb-12">
                <Image 
                    src="/images/37.jpg" 
                    alt="Uka" 
                    width={300} 
                    height={200} 
                    className="w-full h-full object-cover"
                    /> 
                <div className=" text-white absolute top-[80px] font-reckless font-light text-2xl md:text-4xl left-10">
                E-Commerce Photography & Videography
                </div>   
                <div className="mt-10 ml-280 flex justify-between items-center space-x-10 absolute top-[40px]">
                    <button className="border-2 border-white text-white rounded-4xl py-3 px-4">→</button>
                </div>               
                </div>
            </div>

            <div className="container relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                <div className="w-full h-50 rounded-lg overflow-hidden mb-12">
                <Image 
                    src="/images/32.png" 
                    alt="Ukaye Cards" 
                    width={300} 
                    height={200} 
                    className="w-full h-full object-cover"
                    /> 
                <div className=" text-white absolute top-[80px] font-reckless font-light text-2xl md:text-4xl left-10">
                Corporate & Commercial Photography & Videography
                </div>   
                <div className="mt-10 ml-280 flex justify-between items-center space-x-10 absolute top-[40px]">
                    <button className="border-2 border-white text-white rounded-4xl py-3 px-4">→</button>
                </div>               
                </div>
            </div>


            <div className="container relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                <div className="w-full h-50 rounded-lg overflow-hidden mb-12">
                <Image 
                    src="/images/image25.jpg" 
                    alt="Ukaye Cards" 
                    width={300} 
                    height={200} 
                    className="w-full h-full object-cover"
                    /> 
                <div className=" text-white absolute top-[80px] font-reckless font-light text-2xl md:text-4xl left-10">
                Social Media Content Creation
                </div>   
                <div className="mt-10 ml-280 flex justify-between items-center space-x-10 absolute top-[40px]">
                    <button className="border-2 border-white text-white rounded-4xl py-3 px-4">→</button>
                </div>               
                </div>
            </div>

            <div className="container relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                <div className="w-full h-50 rounded-lg overflow-hidden mb-12">
                <Image 
                    src="/images/image27.jpg" 
                    alt="Ukaye Cards" 
                    width={300} 
                    height={200} 
                    className="w-full h-full object-cover"
                    /> 
                <div className=" text-white absolute top-[80px] font-reckless font-light text-2xl md:text-4xl left-10">
                Aerial Photography & Videography
                </div>   
                <div className="mt-10 ml-280 flex justify-between items-center space-x-10 absolute top-[40px]">
                    <button className="border-2 border-white text-white rounded-4xl py-3 px-4">→</button>
                </div>               
                </div>
            </div>

            <div className="container relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                <div className="w-full h-50 rounded-lg overflow-hidden mb-12">
                <Image 
                    src="/images/52.jpg" 
                    alt="Ukaye Cards" 
                    width={300} 
                    height={200} 
                    className="w-full h-full object-cover "
                    /> 
                <div className=" text-white absolute top-[80px] font-reckless font-light text-2xl md:text-4xl left-10">
                Event Photography & Videography
                </div>   
                <div className="mt-10 ml-280 flex justify-between items-center space-x-10 absolute top-[40px]">
                    <button className="border-2 border-white text-white rounded-4xl py-3 px-4">→</button>
                </div>               
                </div>
            </div>

            <div className="container relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                <div className="w-full h-50 rounded-lg overflow-hidden mb-12">
                <Image 
                    src="/images/15.jpg" 
                    alt="Ukaye Cards" 
                    width={300} 
                    height={200} 
                    className="w-full h-full object-cover"
                    /> 
                <div className=" text-white absolute top-[80px] font-reckless font-light text-2xl md:text-4xl left-10">
                Real Estate Photography & Videography
                </div>   
                <div className="mt-10 ml-280 flex justify-between items-center space-x-10 absolute top-[40px]">
                    <button className="border-2 border-white text-white rounded-4xl py-3 px-4">→</button>
                </div>               
                </div>
            </div>

            <div className="container relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                <div className="w-full h-50 rounded-lg overflow-hidden mb-12">
                <Image 
                    src="/images/47.jpg" 
                    alt="Ukaye Cards" 
                    width={300} 
                    height={200} 
                    className="w-full h-full object-cover"
                    /> 
                <div className=" text-white absolute top-[80px] font-reckless font-light text-2xl md:text-4xl left-10">
                Documentary Filmmaking
                </div>   
                <div className="mt-10 ml-280 flex justify-between items-center space-x-10 absolute top-[40px]">
                    <button className="border-2 border-white text-white rounded-4xl py-3 px-4">→</button>
                </div>               
                </div>
            </div>

            <div className="container relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                <div className="w-full h-50 rounded-lg overflow-hidden mb-12">
                <Image 
                    src="/images/image30.jpg" 
                    alt="Ukaye Cards" 
                    width={300} 
                    height={200} 
                    className="w-full h-full object-cover"
                    /> 
                <div className=" text-white absolute top-[80px] font-reckless font-light text-2xl md:text-4xl left-10">
                Music Videos
                </div>   
                <div className="mt-10 ml-280 flex justify-between items-center space-x-10 absolute top-[40px]">
                    <button className="border-2 border-white text-white rounded-4xl py-3 px-4">→</button>
                </div>               
                </div>
            </div>

            <div className="container relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                <div className="w-full h-50 rounded-lg overflow-hidden mb-12">
                <Image 
                    src="/images/image31.jpg" 
                    alt="Ukaye Cards" 
                    width={300} 
                    height={200} 
                    className="w-full h-full object-cover"
                    /> 
                <div className=" text-white absolute top-[80px] font-reckless font-light text-2xl md:text-4xl left-10">
                Post-Production Services
                </div>   
                <div className="mt-10 ml-280 flex justify-between items-center space-x-10 absolute top-[40px]">
                    <button className="border-2 border-white text-white rounded-4xl py-3 px-4">→</button>
                </div>               
                </div>
            </div>
        </div>

        <div className="container absolute ">
            <hr className="border-t-1 border-gray-400 "/>
        </div>

        <div className="container absolute text-white py-16 text-left ">
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

export default ServicePage; 