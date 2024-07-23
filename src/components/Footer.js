import React from 'react';
import img from '../img/icons8-real-estate-30.png';
import img1 from '../img/instagram-logo-facebook-2-svgrepo-com.svg';
import img2 from '../img/facebook-round-svgrepo-com.svg';
import img3 from '../img/twitter-svgrepo-com.svg';


const Footer = () => {
  return (
    // <div className="px-6 py-4 space-y-8 max-w-screen-lg mx-auto line">
        <nav class="bg-white shadow-md">
            <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center py-6">
                    <div class="flex items-center ml-5">
                        <img src={img} class="relative h-7"></img>
                        <span class="text-xl ml-3 font-bold">Real Estate</span>
                    </div>
                    <div class="hidden md:flex space-x-8">
                            <a href="#" class="hover:text-blue-900">Home</a>
                            <a href="#" class="hover:text-blue-900">About</a>
                            <a href="#" class="hover:text-blue-900">Services</a>
                            <a href="#" class="hover:text-blue-900">Portfolio</a>
                            <a href="#" class="hover:text-blue-900">FAQ</a>
                    </div>
                    <div class="flex space-x-4">
                        <img src={img1} class="relative h-7"></img>
                        <img src={img2} class="relative h-7"></img>
                        <img src={img3} class="relative h-7"></img>
                    </div>
                </div>
            </div>
        </nav>
    // </div>
  );
};

export default Footer;
