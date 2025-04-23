export default function Footer() {
    return (
      <div className=" text-white py-16 w-350 container mt-100">
        <div className=" mx-auto px-6">
          {/* Company Info */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold">DI ALTA CLASSE</h1>
              <p className="text-lg text-gray-400 mt-2">
                For Creators. By Creators
              </p>
              {/* Contact Info */}
              <div className=" text-xl mt-10">
                <p className="text-gray-400">+94 77 080 1859</p>
                <p className="text-gray-400">+94 75 206 5009</p>
                <p className="text-gray-400 mt-10">dialtac@gmail.com</p>
              </div>
            </div>
  
            {/* Navigation Links */}
            <div className="mt-8 md:mt-0 flex flex-wrap justify-between md:w-1/2 text-center md:text-left">
              <div className="w-full md:w-1/2 mb-6 md:mb-0 text-xl mt-20">
                <h4 className=" text-gray-400">Portfolio</h4>
                <h4 className=" text-gray-400 mt-4">Services</h4>
                <h4 className=" text-gray-400 mt-4">About Us</h4>
                <h4 className=" text-gray-400 mt-4">Contact</h4>
                
              </div>
              <div className="w-full md:w-1/2 mb-6 md:mb-0 text-xl mt-20">
                <p className="text-gray-400 ">Instagram</p>
                <p className="text-gray-400 mt-4">TikTok</p>
                <p className="text-gray-400 mt-4">Facebook</p>
                <p className="text-gray-400 mt-4">LinkedIn</p>
              </div>
            </div>
          </div>
  
          {/* Copyright Section */}
          <div className="mt-15 border-t-1 border-gray-400 pt-4 text-center">
            <p className="text-sm text-gray-500 mt-8">
              Copyright © 2025 DI ALTA CLASSE | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    );
  }
  