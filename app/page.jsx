import Image from "next/image";

export default function Home() {
  return (
    <div className="container relative mt-25 ">
      <Image
        src="/images/image.jpg" 
        alt="Company Logo"
        width={1280}
        height={720}
      />

      <div className="absolute top-[-40px] w-full px-4 md:px-12">
        <h1 className="text-xl font-bold text-white/50 md:text-5xl ">
          For <br />
          <span className="text-yellow-500 text-xl md:text-5xl">Creators.</span>
        </h1>
      </div>

      <div className="absolute bottom-[-45px] w-full px-4 md:px-12 left-250">
        <h1 className="text-xl font-bold text-white/50 md:text-5xl ">
          By <br />
          <span className="text-yellow-500 text-xl md:text-5xl">Creators.</span>
        </h1>
      </div>

      <div  className="absolute mt-60">
      <div className="flex flex-row container w-500 justify-between items-center p-2 ">
      <div className="flex flex-col justify-between">
      <p className=" md:text-xl text-white/40 leading-relaxed"><span className="text-yellow-500 text-xl md:text-xl">Di Alta Classe </span>
       is a full-service production house driven by a team of <br/>extremely skilled storytellers, blending years of expertise in fashion,<br/> advertising, and film to craft compelling visual experiences across <br/>multiple platforms.
      </p>
      </div>
      <div className="flex justify-center items-center h-full">
      <Image 
        src="/images/white.png" 
        alt="Company Logo"
        width={320}
        height={320}
        />
        </div>
        </div>
        <div className="absolute container mt-25">
          <hr className="border-t-1 border-gray-400 my-8" />
        </div>  
      </div>   
      <div className="container absolute px-6 py-16 text-center">
        <h2 className="absolute text-4xl font-bold text-white mt-180">Recent Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-200">
          <div className="bg-black text-white p-4 rounded-lg shadow-md">
            <Image
            src="/images/image1.png"
            alt="Clothing Shoot for MAGS"
            width={500}
            height={300}
            className="w-full h-auto "
            />
            <h3 className="text-xl font-semibold mt-8 text-left">Clothing Shoot for MAGS</h3>
            <p className="text-gray-400 mt-2 text-left">Fashion Photography.</p>
          </div>

          <div className="bg-black text-white p-4 rounded-lg shadow-md">
            <Image 
              src="/images/image2.png" 
              alt="Product Shoot for Ghillli"
              width={500}
              height={300}
              className="w-full h-auto "
            />
            <h3 className="text-xl font-semibold mt-8 text-left">Product Shoot for Ghillli</h3>
            <p className="text-gray-400 text-left">Product Photography</p>
          </div>

          <div className="bg-black  text-white p-4 rounded-lg shadow-md">
            <Image 
              src="/images/image3.png" 
              alt="Royal Retreat Commercial Shoot"
              width={500}
              height={300}
              className="w-full h-auto "
            />
            <h3 className="text-xl font-semibold mt-8 text-left">Royal Retreat Commercial Shoot</h3>
            <p className="text-gray-400 text-left">Commercial Photography</p>
          </div>
          </div>

          <div className="mt-10 absolute">
            <button className="border-2 border-white text-xl text-white py-2 px-6 rounded-lg ml-2">View All</button>
          </div>

          <div className="mt-10 ml-260 flex justify-between items-center space-x-10 absolute">
            <button className="border-2 border-white text-white rounded-md py-2 px-6">←</button>
            <button className="border-2 border-white text-white rounded-md py-2 px-6">→</button>
          </div>

          <div className="container absolute mt-40">
            <hr className="border-t-1 border-gray-400 my-8"/>
          </div>
        
      </div>

      <div className="container absolute px-6 py-16 text-center">
        <h2 className="absolute text-4xl font-bold text-white mt-400">Our Expertise at a Glance</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-420">
          <div className=" text-white p-4 rounded-lg shadow-md">
            <Image
            src="/images/image4.png"
            alt="Fashion Photography & Videography"
            width={400}
            height={300}
            className="w-full h-auto rounded-md"
            />
          </div>

          <div className="bg-black text-white p-4 rounded-lg shadow-md">
            <Image 
              src="/images/image5.png" 
              alt="Product Shoot for Ghillli"
              width={400}
              height={300}
              className="w-full h-auto rounded-md"
            />
          </div>

          <div className="bg-black  text-white p-4 rounded-lg shadow-md">
            <Image 
              src="/images/image6.png" 
              alt="Royal Retreat Commercial Shoot"
              width={400}
              height={300}
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="bg-black  text-white p-4 rounded-lg shadow-md">
            <Image 
              src="/images/image7.png" 
              alt="Royal Retreat Commercial Shoot"
              width={400}
              height={300}
              className="w-full h-auto rounded-md"
            />
          </div>
          </div>  

          <div className="mt-10 absolute ">
            <button className="border-1 border-white text-xl text-white py-2 px-6 rounded-lg ml-140">View All</button>
          </div>

          <div className="container absolute mt-50">
            <hr className="border-t-1 border-gray-400 my-8"/>
          </div>
        
      </div>

      <div className="container absolute text-white py-16 text-left mt-550 ml-10">
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
