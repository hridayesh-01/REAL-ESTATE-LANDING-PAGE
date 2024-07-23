import React from 'react';

const maincontent = [
  { number: '48K+', title: 'Property Options', description: 'Property options present a diverse and intriguing landscape of the possibilities within of real estate.' },
  { number: '170K+', title: 'Capital Raised', description: 'The concept of raised capital encapsulates the essence of real estate empowerment business.' },
  { number: '310K+', title: 'Happy Customers', description: 'Happy customers are the driving force behind the continued growth prosperity of products and services.' }
];

const MainContent = () => {
  return (
    <div className="mx-auto px-6 py-4 space-y-8">
      {/* Header Section */}
      <div className="bg-indigo-950 rounded-2xl p-10">
        <h1 className="text-white text-5xl font-extrabold text-center">
          Modern build with best eco
        </h1>
        <p className="text-slate-400 mt-10 text-center">
          Find a modern building with the best design and price of your dreams here.<br />
          Make it a priority where you live very comfortable to live in family.
        </p>
        <div className="text-center mt-10">
          <button className="text-white bg-blue-600 py-2 px-6 border-2 rounded-xl border-blue-600 hover:bg-rose-500">
            Get started
          </button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex items-center">
        <div className="flex">
          {/* Sidebar */}
          <div className="bg-blue-500 p-8 mr-10 rounded-lg">
            <ul className="space-y-4">
              {maincontent.map((item, index) => (
                <li key={index} className="flex space-x-2 pt-10">
                  <strong className="text-white text-5xl">{item.number}</strong>
                  <div>
                    <p className="font-bold text-white">{item.title}</p>
                    <p className="text-slate-300">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Search Section */}
          <div className="bg-gray-300 p-8 rounded-lg flex-col items-center">
            <div className="mb-4 text-right w-full">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full">Explore</button>
            </div>
            <form className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Search the price you're looking for</h2>
              <div className="mb-4">
                <input type="text" className="w-full px-4 py-2 border rounded-lg mb-4" placeholder="Search location" />
                <input type="date" className="w-full px-4 py-2 border rounded-lg mb-4" placeholder="Start date" />
                <input type="date" className="w-full px-4 py-2 border rounded-lg mb-4" placeholder="End date" />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full">Search</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
