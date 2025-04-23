import Image from "next/image";


const HomePage = () => {
    return (
        <div>
        <Image 
          src="/images/bg.png"  // Correct path to image in public folder
          alt="Company Logo" 
          className=""
          width={1000}  
          height={500} 
        />
        </div>
    );
    }

export default HomePage; 