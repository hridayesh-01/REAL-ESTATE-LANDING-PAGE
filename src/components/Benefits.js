import React from 'react';
import img1 from '../img/hero.png';
import img2 from '../img/REAL ESTATE.jpeg';

const Benefits = () => {
  return (
    <div className=" px-6 py-4 space-y-8">

      <div className="container">
        <h1 className="text-5xl font-bold">
            Benefits after <br /> making purchase at <br /> us?
        </h1>

        <p className="text-slate-400 mt-10">
        Buying a house with cash saves you from paying the <br />
        interest that is usually associated with debts to the bank.
        </p>
        
        <div className="mt-10">
          <button className="text-blue-600 p-2 flex">
            See More 
            <div class="mt-0.5 ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </div>
          </button>
        </div>
      </div>
      <div className="flex">
          <div className=" flex-col items-center">
            <div className="mb-4 text-right flex">
              <img src={img1} className='w-1/2'></img>
              <img src={img2} class="-mt-80 pl-10 w-1/2"></img>
            </div>
          </div>
      </div>

      <div class="text-center py-5 flex">
          <h1 class="text-6xl font-bold mb-4">Our flagship project <br /> with the best design</h1>
          <div class="justify-center font-bold grid grid-cols-3 ml-14 mt-4 space-x-2">
              <button class="px-4 py-2 bg-black text-white rounded-3xl text-xl">Residential</button>
              <button class="px-4 py-2 rounded-3xl text-xl border-4 border-black">Workplace</button>
              <button class="px-4 py-2 rounded-3xl text-xl border-4 border-black">Hospitality</button>
              <button class="px-4 py-2 rounded-3xl text-xl border-4 border-black mt-5 mb-4">Business</button>
              <button class="px-4 py-2 rounded-3xl text-xl border-4 border-black mt-5 mb-4">Industrial</button>
              <button class="px-4 py-2 rounded-3xl text-xl border-4 border-black mt-5 mb-4">Educational</button>
          </div>
      </div>

      <section class="max-w-6xl mx-auto p-6">
        <div class="grid grid-cols-4 gap-4 auto-rows-auto">
            <div class="col-span-2 row-span-1 bg-gray-300 rounded-lg p-6 h-72 text-left relative">
                <h2 class="text-xl font-semibold mt-48">The Newland Cottage</h2>
                <p>2023 Sagaponack, New York Residential</p>
            </div>
            <div class="col-span-2 row-span-2 bg-gray-300 rounded-lg p-6 text-center relative">
                <h2 class="text-xl font-semibold mt-96">Blue Ocean Estate</h2>
                <p>2023 Midina, Washington  Residential</p>
            </div>
            <div class="col-span-1 row-span-1 bg-gray-300 rounded-lg h-64 p-6 text-center  relative">
                <h2 class="text-xl font-semibold mt-36">Ghat Koper Colony</h2>
                <p>2022 Los Altos, California  Residential</p>
            </div>
            <div class="col-span-1 row-span-1 bg-gray-300 rounded-lg text-center relative">
                <h2 class="text-xl font-semibold mt-44">Sparrow Chirping Anytown</h2>
                <p>2022 Sagaponack, New York - Residential</p>
                <button class="absolute inset-0 flex items-center justify-center bg-slate-500 bg-opacity-50 text-white font-bold rounded-lg">See Detail</button>
            </div>
        </div>
      </section>

    </div>
  );
};

export default Benefits;