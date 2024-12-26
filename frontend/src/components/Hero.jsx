import React from "react";


const Hero = () => {
  return (
    <div className="relative h-screen w-full mx-auto">
      <img
        src='hero.jpg'
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy" 
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>{" "}
      {/* Slightly lighter overlay */}
      <div className="relative z-10 flex items-center justify-end h-full text-white px-4">
        <div className="bg-[#FFF3E3] p-8 shadow-lg max-w-xl mr-10">
          {" "}
          {/* Added rounded corners and shadow */}
          <h4 className="text-black font-semibold tracking-widest">New Arrival</h4>
          <h1 className="text-4xl lg:text-5xl tracking-wide font-bold mb-4 text-[#B88E2F]">
            Welcome to Our Platform
          </h1>
          <p className="text-md lg:text-md text-gray-700">
            Discover amazing features and take your productivity to the next
            level. Join us and start your journey today.
          </p>
          <button className="mt-4 px-6 py-3 bg-[#B88E2F] text-white rounded hover:bg-[#9E6D2F] transition-colors duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
