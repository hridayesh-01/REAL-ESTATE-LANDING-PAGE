import React from 'react';
import img from '../img/icons8-real-estate-30.png';

const Header = () => {
  return (
    <header>
      <div className="container flex justify-around items-center px-6 ml-10 py-4">
        <img src={img} class=" h-7"></img>
        <div className="text-2xl font-bold -ml-48">Real Estate</div>
          <nav>
            <ul className="flex space-x-6">
              <li className="cursor-pointer"><strong>Home</strong></li>
              <li className="text-slate-500 cursor-pointer">About</li>
              <li className="text-slate-500 cursor-pointer">Services</li>
              <li className="text-slate-500 cursor-pointer">Portfolio</li>
              <li className="text-slate-500 cursor-pointer">FAQ</li>
            </ul>
          </nav>
          <button className="text-blue-600 py-1 px-4 border-2 rounded-xl border-blue-600 hover:bg-rose-500">Contact</button>
      </div>
    </header>
  );
};

export default Header;
