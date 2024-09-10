import React from 'react'
import footerbg from "../assets/footer-bg.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
 const Footer = () => {
  return (
    <>
 <section className="relative bg-cover bg-center py-10 pl-8">
        <img src={footerbg} alt="Footer Background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative grid grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-10">
          <div>
            <h3 className="text-2xl mb-4 font-bold text-white">Quick Links</h3>
            <Link to="/" className="block mb-2 text-base text-gray-400 group ">
              <FontAwesomeIcon icon={faAngleRight} className='text-[#8e44ad] mr-2 transition-transform duration-1500 group-hover:mr-8 transform' /> Home
            </Link>
            <Link to="/about" className="block mb-2 text-base text-gray-400 group ">
              <FontAwesomeIcon icon={faAngleRight} className='text-[#8e44ad] mr-2 transition-transform duration-500 group-hover:mr-8 transform' /> About
            </Link>
            <Link to="/internship" className="block mb-2 text-base text-gray-400 group ">
              <FontAwesomeIcon icon={faAngleRight} className='text-[#8e44ad] mr-2 transition-transform duration-500 group-hover:mr-8 transform' /> Internships
            </Link>
          </div>
          <div>
            <h3 className="text-2xl mb-4 font-bold text-white">Contact Info</h3>
            <a href="mailto:youngdevinterns60@gmail.com" className="block mb-2 text-base text-gray-400 group ">
              <FontAwesomeIcon icon={faEnvelope} className='text-[#8e44ad] mr-2 transition-transform duration-500 group-hover:mr-8 transform' /> youngdevinterns60@gmail.com
            </a>
            <a href="#" className="block mb-2 text-base text-gray-400 group ">
              <FontAwesomeIcon icon={faMap} className='text-[#8e44ad] mr-2 transition-transform duration-500 group-hover:mr-8 transform' /> Pakistan - Islamabad
            </a>
          </div>
          <div>
            <h3 className="text-2xl mb-4 font-bold text-white">Follow Us</h3>
            <a href="https://www.facebook.com/profile.php?id=61552048663871&__cft__[0]=AZWgvYtjBMeJOXqyWw5T4YrAojDHFKMwtpgycutmBiazqJ6mCcV_-G8hIqOLWgILLyPiL7FrTeeMQPBS1XdG4eosYbpXo-gueN4La2qK0xyh94oBgqMvZ_R89_MSF6qx-LiReDKck7DmVlL1lNAvkK-iknMZyVXoQapiI7b0Vq6HOqkTsx23RQvy-qql66lPi8gkKKX14OeKyUlXJzyqO1En&__tn__=-]C%2CP-R" className="block mb-2 text-base text-gray-400 group ">
              <FontAwesomeIcon icon={faFacebookF} className='text-[#8e44ad] mr-2 transition-transform duration-500 group-hover:mr-8 transform' /> Facebook
            </a>
            <a href="https://www.linkedin.com/company/youngdev-intern/?miniCompanyUrn=urn%3Ali%3Afs_miniCompany%3A100750742&lipi=urn%3Ali%3Apage%3Ad_flagship3_company_admin%3BoTe6IUoQTHKqQA8ImNZuLg%3D%3D" className="block mb-2 text-base text-gray-400 group ">
              <FontAwesomeIcon icon={faLinkedin} className='text-[#8e44ad] mr-2 transition-transform duration-500 group-hover:mr-8 transform' /> LinkedIn
            </a>
          </div>
        </div>
        <div className="text-center text-white mt-8 relative border-t border-[#f4f4f4] mx-12 pt-4">
          <p className="text-xl">
            Created by <span className="text-[#8e44ad]">YoungDev Interns</span> | All rights reserved!
          </p>
        </div>
      </section>
    
    </>
  )
}
export default Footer;