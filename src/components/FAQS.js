import React from 'react';

const FAQS = () => {
  return (
    <div className="px-6 py-4 space-y-8 max-w-screen-lg ml-16">
      <div className="py-5 flex flex-col md:flex-row items-start md:items-center">
        <h1 className="text-6xl font-bold mb-4 md:mb-0 -ml-10 mr-10">
          Frequently asked <br /> questions
        </h1>
        <div className="mt-4 text-gray-500">
          <p class="text-xl">
            Service provided by real estate professionals to assist <br /> potential buyers in the process of finding and buying <br />
            residential properties such as houses or apartments.
          </p>
        </div>
      </div>

      <section className="p-6 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-1/2 bg-gray-300 rounded-3xl -ml-16 flex items-center justify-center">
          <div className="h-20 w-20 flex items-center justify-center rounded-full">
            <button className="bg-white text-blue-500 rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clip-rule="evenodd" />
                </svg>
            </button>
          </div>
        </div>

        <div className="w-full md:w-2/4 flex flex-col">
          <div className="bg-blue-950 text-white rounded-lg ml-10 p-4 mb-4">
            <h3 className="text-lg font-semibold">What is included in the home buying service ?</h3>
            <p className="text-sm text-gray-300 mt-4 mb-4">
              Covering property search, scheduling visits, negotiations, physical and legal inspections of property, as well as assistance to signing deed of sale and purchase at best price especially for first time customers.
            </p>
          </div>

          <div className="space-y-2 ml-10">
            <button className="w-full bg-gray-100 hover:bg-gray-200 rounded-lg p-3 mb-2">How long does it take home buying process ?</button>
            <button className="w-full bg-gray-100 hover:bg-gray-200 rounded-lg p-3 mb-2">What documents are required for purchase ?</button>
            <button className="w-full bg-gray-100 hover:bg-gray-200 rounded-lg p-3 mb-2">Can I cancel transaction if I change my mind ?</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQS;
