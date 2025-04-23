"use client";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    
        <div className="flex flex-row container w-full justify-between items-center p-2">
      <div>
        <Link href="/portfolio" className="text-md text-white/60">
          Portfolio
        </Link>
        <Link href="/services" className="text-md text-white/60 ml-4">
          Services
        </Link>
      </div>
      <div>
        <Image 
          src="/images/logo.png"  // Correct path to image in public folder
          alt="Company Logo" 
          className=""
          width={150}  
          height={150} 
        />
      </div>
      <div>
        <Link href="/aboutus" className="text-md text-white/60">
          About Us
        </Link>
        <Link href="/contact" className="text-md text-white/60 ml-4">
          Contact
        </Link>
      </div>
    </div>
    
    
  );
}

export default Navbar;
