"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const cardData = [
    {
      imageSrc: "/images/11.jpg",
      title: "Clothing Shoot for MAGS - January Shoot",
      description: "Fashion Photography",
    },
    {
      imageSrc: "/images/12.jpg",
      title: "Clothing Shoot for MAGS - February Shoot",
      description: "Fashion Photography",
    },
    {
      imageSrc: "/images/9.jpg",
      title: "Clothing Shoot for MAGS - April Shoot",
      description: "Fashion Photography",
    },
    {
      imageSrc: "/images/3.jpg",
      title: "Product Shoot for Ghillli",
      description: "Product Photography",
    },
    {
      imageSrc: "/images/14.jpg",
      title: "Royal Retreat Commercial Shoot",
      description: "Commercial Photography",
    },
    {
      imageSrc: "/images/6.jpg",
      title: "Burger Boss Commercial Shoot",
      description: "Commercial Videography",
    },
    {
      imageSrc: "/images/4.jpg",
      title: "FOGG Product Shoot",
      description: "Product Photography",
    },
    {
      imageSrc: "/images/15.jpg",
      title: "Panilkhanda Commercial Video Shoot",
      description: "Commercial Videography",
    },
    {
      imageSrc: "/images/2.jpg",
      title: "ISLA Fashion Shoot",
      description: "Fashion Photography",
    },
    {
      imageSrc: "/images/32.png",
      title: "DSI Commercial Video Shoot",
      description: "Commercial Videography",
    },
  ];

  const doubledData = [...cardData, ...cardData]; 

  return (
    <div className="container relative mt-25">
      <video
        src="/videos/Our Video export.mp4"
        autoPlay
        loop
        muted
        className="w-full h-auto"
      ></video>

      <div className="absolute top-[-40px] w-full px-4 md:px-12 text-right">
        <h1 className="text-xl font-bold text-white/50 md:text-5xl">
          For <br />
          <span className="text-yellow-500 text-xl md:text-5xl">Creators.</span>
        </h1>
      </div>

      <div className="absolute top-[680px] w-full px-4 md:px-12 text-left">
        <h1 className="text-xl font-bold text-white/50 md:text-5xl">
          By <br />
          <span className="text-yellow-500 text-xl md:text-5xl">Creators.</span>
        </h1>
      </div>

      <div className="mt-30">
        <div className="flex flex-row container w-full justify-between items-center p-2 ">
          <div className="flex flex-col justify-between w-1/2">
            <p className="md:text-xl text-white/40 leading-relaxed">
              <span className="text-yellow-500 text-xl md:text-xl">Di Alta Classe </span>
              is a full-service production house driven by a team of <br />
              extremely skilled storytellers, blending years of expertise in fashion,<br />
              advertising, and film to craft compelling visual experiences across <br />
              multiple platforms.
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
      </div>
      
      <div className="container mt-20">
          <hr className="border-t-1 border-gray-400 my-8" />
      </div>

      <div className="container absolute px-6 py-16 text-center">
        <h2 className="absolute text-4xl font-bold text-white ">Recent Works</h2>

      <div className="relative w-full overflow-hidden">

        <div
          className="flex scroll-track mt-20"
          style={{
            animation: "scroll 30s linear infinite", // Adjust the speed of scrolling
          }}
        >
          <div className="carousel-track flex gap-6 animate-scroll">
            {doubledData.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-zinc-900 text-white rounded-lg shadow-lg w-[280px] md:w-[350px] p-4"
              >
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  width={500}
                  height={300}
                  className="w-full h-[300px] object-cover rounded"
                />
                <h3 className="text-xl font-semibold mt-4">{card.title}</h3>
                <p className="text-gray-400 mt-2">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

        <div className="container absolute mt-20">
          <hr className="border-t-1 border-gray-400 my-8" />
        </div>
      </div>


      <div className="container absolute px-6 py-16 text-center mt-200">
        <h2 className="absolute text-4xl font-bold text-white ">Our Expertise at a Glance</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
          <div className="text-white p-4 rounded-lg shadow-md">
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

          <div className="bg-black text-white p-4 rounded-lg shadow-md">
            <Image
              src="/images/image6.png"
              alt="Royal Retreat Commercial Shoot"
              width={400}
              height={300}
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="bg-black text-white p-4 rounded-lg shadow-md">
            <Image
              src="/images/image7.png"
              alt="Royal Retreat Commercial Shoot"
              width={400}
              height={300}
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>

        <div className="mt-10 absolute">
          <Link href="/portfolio">
            <button className="border-2 border-white text-xl text-white py-2 px-6 rounded-lg ml-2">
              View All
            </button>
          </Link>
        </div>

        <div className="container absolute mt-50">
          <hr className="border-t-1 border-gray-400 my-8" />
        </div>
      </div>

      <div className="container absolute text-white py-16 text-left mt-330  ml-10">
        <h2 className="text-3xl md:text-4xl font-light mb-4">
          Don’t settle for ordinary.
        </h2>
        <h3 className="text-4xl md:text-5xl font-light">
          Let’s make your visuals{" "}
          <span className="text-yellow-500 font-reckless">extraordinary!</span>
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