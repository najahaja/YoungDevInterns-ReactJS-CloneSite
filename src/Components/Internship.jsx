import React, { useState } from 'react';
import head2 from "../assets/header-bg-2.png";
import Footer from './Footer';
import im1 from "../assets/im-1.jpg";
import im2 from "../assets/im-2.jpg";
import im3 from "../assets/im-3.jpg";
import im4 from "../assets/im-4.jpg";
import im5 from "../assets/im-5.jpg";
import im6 from "../assets/im-6.jpg";
import im7 from "../assets/im-7.jpg";
import im8 from "../assets/im-8.jpg";
import im9 from "../assets/im-9.jpg";
import im10 from "../assets/im-10.jpg";
import im11 from "../assets/im-11.jpg";
import im12 from "../assets/im-12.jpg";
import im13 from "../assets/img-14.jpg";
import im14 from "../assets/im-16.jpg";
import im15 from "../assets/img-18.jpg";
const internships = [
  {
    title: 'Full-Stack Web',
    description: 'All the tasks will be assigned on Backend and frontend of the website',
    image: im1,
    link: 'https://docs.google.com/forms/d/1yznUkpNyLxZ6RjLIBkakjsKdfejv9OsMuIo_ZaGaYHo/prefill',
  },
  {
    title: 'Frontend Development',
    description: 'All the tasks will be assigned on only frontend of a website',
    image: im2,
    link: 'https://docs.google.com/forms/d/1yznUkpNyLxZ6RjLIBkakjsKdfejv9OsMuIo_ZaGaYHo/prefill',
  },
  {
    title: 'Backend Development',
    description: 'All the tasks will be assigned on only backend of a website',
    image: im3,
    link: 'https://docs.google.com/forms/d/1yznUkpNyLxZ6RjLIBkakjsKdfejv9OsMuIo_ZaGaYHo/prefill',
  },
  {
    title: 'Andriod Development',
    description: 'The tasks will be on andriod studio using java/kotlin and xml',
    image: im4,
    link: 'https://docs.google.com/forms/d/1yznUkpNyLxZ6RjLIBkakjsKdfejv9OsMuIo_ZaGaYHo/prefill',
  },
  {
    title: 'python Development',
    description: 'Basic tasks of python on diffrent modules',
    image: im5,
    link: 'https://docs.google.com/forms/d/1yznUkpNyLxZ6RjLIBkakjsKdfejv9OsMuIo_ZaGaYHo/prefill',
  },
  {
    title: 'Flutter Development',
    description: 'Flutter tasks will be assigned like, cross platform applications',
    image: im6,
    link: 'https://docs.google.com/forms/d/1yznUkpNyLxZ6RjLIBkakjsKdfejv9OsMuIo_ZaGaYHo/prefill',
  },
  {
    title: 'C# .Net Development',
    description: 'C# .Net 2 simple and 1 complex task will be assigned',
    image: im7,
    link: 'https://docs.google.com/forms/d/1yznUkpNyLxZ6RjLIBkakjsKdfejv9OsMuIo_ZaGaYHo/prefill',
  },
  {
    title: 'ASP .NET Development',
    description: 'Simple and Complex tasks will be there using ASP.Net',
    image: im8,
    link: 'https://docs.google.com/forms/d/1yznUkpNyLxZ6RjLIBkakjsKdfejv9OsMuIo_ZaGaYHo/prefill',
  },
  {
    title: 'Django (Python)',
    description: '3 tasks will be assigned for a month using django (Python)',
    image: im9,
    link: 'https://docs.google.com/forms/d/1yznUkpNyLxZ6RjLIBkakjsKdfejv9OsMuIo_ZaGaYHo/prefill',
  },
  {
    title: 'Graphic Design',
    description: 'All the tasks will be assigned to done on AI and also on Figma',
    image: im10,
    link: 'https://docs.google.com/forms/d/1yznUkpNyLxZ6RjLIBkakjsKdfejv9OsMuIo_ZaGaYHo/prefill',
  },
  {
    title: 'Java Desktop',
    description: 'The tasks will be assigned for javaeffects',
    image: im11,
    link: 'https://docs.google.com/forms/d/1yznUkpNyLxZ6RjLIBkakjsKdfejv9OsMuIo_ZaGaYHo/prefill',
  },
  {
    title: 'Machine Learning',
    description: 'Machine Learning complex tasks will be assigned',
    image: im12,
    link: 'https://docs.google.com/forms/d/1yznUkpNyLxZ6RjLIBkakjsKdfejv9OsMuIo_ZaGaYHo/prefill',
  },
  {
    title: 'Wordpress',
    description: 'Simple and Difficult Wordpress tasks will be assigned here',
    image: im13,
    link: 'https://docs.google.com/forms/d/1yznUkpNyLxZ6RjLIBkakjsKdfejv9OsMuIo_ZaGaYHo/prefill',
  },
  {
    title: 'C++',
    description: 'C++ Complex and simple tasks will be assigned',
    image: im14,
    link: 'https://docs.google.com/forms/d/1yznUkpNyLxZ6RjLIBkakjsKdfejv9OsMuIo_ZaGaYHo/prefill',
  },
  {
    title: 'Figma Design',
    description: 'Figma App design and Web Design tasks will be assigned here',
    image: im15,
    link: 'https://docs.google.com/forms/d/1yznUkpNyLxZ6RjLIBkakjsKdfejv9OsMuIo_ZaGaYHo/prefill',
  },
  
];

const Internships = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMoreItems = () => {
    setVisibleCount(prevCount => prevCount + 3);
  }
  return (
    <>
       <div className="relative bg-cover bg-center text-center text-white">
        <img src={head2} alt="Header Background" className="w-full h-[400px] object-cover" />
        <h1 className="md:text-8xl text-2xl font-bold text-shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">INTERNSHIPS</h1>
      </div>
      <section className="p-6">
        <h1 className="md:text-6xl text-2xl font-bold text-center mb-12 text-black">TOP INTERNSHIPS</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-6">
          {internships.slice(0, visibleCount).map((internship, index) => (
            <div key={index} className="border border-black shadow-lg bg-white overflow-hidden">
              <div className="w-full h-64 overflow-hidden">
                <img src={internship.image} alt={internship.title} className="w-full h-full object-cover transform transition-transform duration-200 hover:scale-110" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-2xl font-semibold text-black">{internship.title}</h3>
                <p className="text-lg text-gray-700 mt-2">{internship.description}</p>
                <a href={internship.link} className="inline-block mt-4 bg-black text-white text-lg py-2 px-4 rounded hover:bg-[#8e44ad]" target="_blank" rel="noopener noreferrer">Apply Now</a>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < internships.length && (
          <div className="text-center mt-8">
            <button onClick={showMoreItems} className="bg-black text-white text-lg py-2 px-4 rounded hover:bg-main-color hover:bg-[#8e44ad]">Browse More</button>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Internships;
