"use client";

import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

const items = [
  'Lorem ipsum dolor sit amet, consectetur',
  'Lorem ipsum dolor sit amet, consectetur',
  'Lorem ipsum dolor sit amet, consectetur',
  'Lorem ipsum dolor sit amet, consectetur',
];

export default function ExpertChef() {
  return (
    <section className="py-2 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h5 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
            Our Chef
          </h5>
          <p className="text-gray-600  text-wrap mb-6 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <ul className="space-y-4 text-gray-700 mb-8 grid grid-cols-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-orange-500 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* <button className="bg-gray-900 text-white px-6 py-3 rounded-md shadow hover:bg-gray-800 transition">
            Meet us
          </button> */}
        </div>

        {/* Right Image */}
        <div className="flex-1 relative w-full max-w-md">
          <div className="w-[280px] h-[280px] md:w-[240px] md:h-[240px] overflow-hidden bg-orange-500 rounded-full mx-auto relative">
            <Image
              src="/jpg/folaTransparent.png" // 🔁 Replace with actual path
              alt="Expert Chef"
            //   fill
            width={300}
            height={150}
            className="object-cover h-[370px] relative -top-[90px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
