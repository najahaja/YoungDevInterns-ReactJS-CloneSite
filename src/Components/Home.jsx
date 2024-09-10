import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import homeimage1 from '../assets/home-slide-1.jpg';
import homeimage2 from '../assets/home-slide-2.jpg';
import homeimage3 from '../assets/hom-slide-3.jpg';
import Footer from './footer';
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import icon4 from "../assets/icon-4.png";
import icon5 from "../assets/icon-5.png";
import icon6 from "../assets/icon-6.png";
import ab from "../assets/ab.jpg";
import im1 from "../assets/im-1.jpg";
import im2 from "../assets/im-2.jpg";
import im3 from "../assets/im-3.jpg";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
const images = [homeimage1, homeimage2, homeimage3];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('animate-zoomIn');
  useEffect(() => {
    setAnimationClass('animate-zoomIn');
    const timeout = setTimeout(() => setAnimationClass(''), 500); 
    return () => clearTimeout(timeout);
  }, [currentIndex]);
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-screen w-full">
          <img
            src={images[currentIndex]}
            className="absolute inset-0 h-full w-full object-cover transition-all duration-500"
            alt="Home Slide"
          />
         <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 text-white text-center p-4">
            <span className={`text-2xl text-black ${animationClass}`}>
              Explore Remote Internships
            </span>
            <h3 className={`text-4xl font-bold mt-2 px-48 py-4 ${animationClass}`}>
              EMPOWERING TOMORROW'S DEVELOPERS TODAY
            </h3>
            <a
              href="/internship"
              className={`btn mt-4 bg-black hover:bg-[#8e44ad] text-white py-2 px-4 rounded ${animationClass}`}
            >
              Browse Internships
            </a>
          </div>
          <div
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white cursor-pointer"
            onClick={goToPrevious}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white cursor-pointer"
            onClick={goToNext}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </section>
      <section className="services py-16 px-10">
        <h1 className="text-4xl font-bold text-center mb-8">WE ARE HIRING</h1>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 px-4 gap-6 ">
          <div className="box bg-[#8e44ad] p-8 text-center cursor-pointer hover:bg-black">
            <img src={icon1} alt="Multitalented" className="h-20 mx-auto" />
            <h3 className="text-white text-xl mt-4">Multitalented</h3>
          </div>
          <div className="box bg-[#8e44ad] p-8 text-center cursor-pointer hover:bg-black">
            <img src={icon2} alt="Leaders" className="h-20 mx-auto" />
            <h3 className="text-white text-xl mt-4">Leaders</h3>
          </div>
          <div className="box bg-[#8e44ad] p-8 text-center cursor-pointer hover:bg-black">
            <img src={icon3} alt="Leaders" className="h-20 mx-auto" />
            <h3 className="text-white text-xl mt-4">Learners</h3>
          </div>
          <div className="box bg-[#8e44ad] p-8 text-center cursor-pointer hover:bg-black">
            <img src={icon4} alt="Leaders" className="h-20 mx-auto" />
            <h3 className="text-white text-xl mt-4">Developers</h3>
          </div>
          <div className="box bg-[#8e44ad] p-8 text-center cursor-pointer hover:bg-black">
            <img src={icon5} alt="Leaders" className="h-20 mx-auto" />
            <h3 className="text-white text-xl mt-4">Programmers</h3>
          </div>
          <div className="box bg-[#8e44ad] p-8 text-center cursor-pointer hover:bg-black">
            <img src={icon6} alt="Leaders" className="h-20 mx-auto" />
            <h3 className="text-white text-xl mt-4">IT Experts</h3>
          </div>
        </div>
      </section>
      <section className="index-about flex flex-wrap items-center py-16 px-10">
        <div className="image flex-1">
          <img src={ab} alt="About Us Image" className="w-full" />
        </div>
        <div className="content flex-1 p-12 bg-gray-200">
          <h3 className="text-3xl text-black">About Us</h3>
          <p className="text-lg text-black my-4">
            Welcome to YoungDev Interns – Your Gateway to Skill Development!
          </p>
          <a
            href="about.html"
            className="btn bg-black text-white py-2 px-6 hover:bg-[#8e44ad]"
          >
            Read More
          </a>
        </div>
      </section>
      <section className="index-packages bg-gray-200 py-16 px-20">
        <h1 className="text-4xl font-bold text-center mb-8">OUR INTERNSHIPS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="box border border-black shadow-lg bg-white">
            <div className="image h-64 overflow-hidden">
              <img
                src={im1}
                alt="Web Development"
                className="h-full w-full object-cover transition-transform duration-200 transform hover:scale-110"
              />
            </div>
            <div className="content p-8 text-center">
              <h3 className="text-2xl text-black">Web Development</h3>
              <p className="text-lg text-gray-400 my-4">
                All the tasks will be assigned on Backend and frontend of the website
              </p>
              <a
                href="https://forms.gle/STc1h9p2eJ1pSXPr5"
                className="btn hover:bg-[#8e44ad] bg-black text-white py-2 px-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </a>
            </div>
          </div>
          <div className="box border border-black shadow-lg bg-white">
            <div className="image h-64 overflow-hidden">
              <img
                src={im2}
                alt="Android Development"
                className="h-full w-full object-cover transition-transform duration-200 transform hover:scale-110"
              />
            </div>
            <div className="content p-8 text-center">
              <h3 className="text-2xl text-black">Android Development</h3>
              <p className="text-lg text-gray-400 my-4">
                The tasks will be on Android Studio using Java/Kotlin and XML
              </p>
              <a
                href="https://forms.gle/STc1h9p2eJ1pSXPr5"
                className="btn hover:bg-[#8e44ad] bg-black text-white py-2 px-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </a>
            </div>
          </div>
          <div className="box border border-black shadow-lg bg-white">
            <div className="image h-64 overflow-hidden">
              <img
                src={im3}
                alt="Python Development"
                className="h-full w-full object-cover transition-transform duration-200 transform hover:scale-110"
              />
            </div>
            <div className="content p-8 text-center">
              <h3 className="text-2xl text-black">Python Development</h3>
              <p className="text-lg text-gray-400 my-4">
                Basic tasks of Python on different modules
              </p>
              <a
                href="https://forms.gle/STc1h9p2eJ1pSXPr5"
                className="btn hover:bg-[#8e44ad] bg-black text-white py-2 px-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="/internship"
            className="btn bg-black hover:bg-[#8e44ad] text-white py-2 px-4"
          >
            Browse More
          </a>
        </div>
      </section>
      <section className="index-offer text-center py-16 px-10">
        <div className="content mx-auto max-w-screen-md">
          <h3 className="text-4xl text-black">FREE</h3>
          <p className="text-xl text-gray-700 my-4">
            We are Freely Assigning tasks and will guide every student
          </p>
          <a
            href="https://forms.gle/STc1h9p2eJ1pSXPr5"
            className="btn bg-black hover:bg-[#8e44ad] text-white py-2 px-4 rounded"
          >
            Apply Now
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
