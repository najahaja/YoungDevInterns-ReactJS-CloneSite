import React from 'react';
import headerimage from "../assets/header-bg-1.png";
import about from "../assets/ab.jpg";
import Footer from './footer';
const About = () => {
  return (
    <div>
      <div className="relative bg-center py-1 md:px-0">
        <img src={headerimage} className="w-full h-[400px]" alt="Header" />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl md:text-8xl font-bold text-center">
          ABOUT US
        </h1>
      </div>
      <section className="flex flex-wrap gap-8 p-4 md:p-10">
        <div className="flex-1">
          <img src={about} alt="About Us" className="w-full p-8" />
        </div>
        <div className="md:flex-1 block text-center p-4">
          <h3 className="text-4xl text-black font-bold mb-4 -mt-4">Why Choose Us?</h3>
          <p className="text-lg text-gray-500 mb-4">
            At YoungDev Interns, we're committed to fostering talent and offering exceptional learning experiences. We believe in breaking down barriers to entry by providing free, remote internship opportunities that empower aspiring developers to kickstart their careers.
          </p>
          <p className="text-lg text-gray-500">
            We offer a unique month-long internship program, allowing you to gain practical experience from the comfort of your own workspace. Each month, interns will tackle 3 to 4 real-world tasks, giving you hands-on exposure to industry-relevant projects. Upon successful completion of the internship, we provide a certificate to recognize your dedication and skills gained during your time with us.
          </p>
        </div>
      </section>
     <Footer/>
    </div>
  );
};
export default About;
