"use Client";
import Button from "./Button";
import { homeProps } from "../types/components";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import LazyVideo from "./LazyVideo";
// import Link from "next/link";
 
const HomePage =({className}:homeProps)=>{ 

    return(        
        <section id="home" className={`flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 relative md:top-0 -top-10 overflow-hidden ${className} h-screen  min-w-screen sm:w-screen`}>
        
        {/* LEFT SIDE */}
        <div className="max-w-lg z-10">
            <Image
                src="/svg/CirclesTwo.svg" 
                alt="Food"
                width={500}
                height={200}
                className=" z-0 md:-z-[200000] rounded-lg object-fill absolute top-30 hidden md:block -left-10 animate-spin  w-[550px]"
            />
           <h1 className="text-4xl md:text-3xl font-bold text-gray-900 leading-tight">
            We provide the best<br />
            <span className="text-gray-900 md:text-4xl"> Food and Ambience</span>
            </h1>
            <p className="text-gray-600 mt-4 md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex gap-4 mt-6">
                <a href='#contact'>
                    <Button 
                    btnLabel="Request a Call"
                    variant="secondary"
                    className="z-99999 hover:rounded-tl-2xl hover:rounded-br-2xl cursor-pointer"
                    />
                </a>
                
                <a href='#contact'>
                    <Button 
                    btnLabel="Book Inspection"
                    variant="primary"
                    className=" z-9999999 hover:rounded-tr-2xl hover:rounded-bl-2xl  cursor-pointer"
                    />
                </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8 md:ml-30 text-gray-600 text-sm">
                <span className="border-1 p-1 rounded-2xl hover:animate-bounce animate-pulse cursor-pointer">
                    <FaFacebookF />
                </span>
                <span className="border-1 p-1 rounded-2xl hover:animate-bounce animate-pulse cursor-pointer">
                <FaInstagram />
                </span>
                 <span className="border-1 p-1 rounded-2xl hover:animate-bounce animate-pulse cursor-pointer">
                    <FaTwitter />
                </span>
            </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative mt-12 lg:mt-0 w-full max-w-xl">
            {/* Background Image (Ambience) */}
            <div className="rounded-2xl hidden md:block overflow-hidden ml-45">
            {/* <Image
                src="/svg/homeEventDecor.svg" 
                alt="Ambience"
                width={300}
                height={350}
                className="rounded-xl object-cover"
            /> */}
             <LazyVideo
                src="https://res.cloudinary.com/drsh6mbvo/video/upload/v1754092147/Best_nyfopd.mp4"
                poster="" // optional
                className="max-w-3xl mx-auto max-h-[70%]"
            />
            </div>

            {/* Foreground Image (Food) */}
            <div className="absolute bottom-97 left-25 w-48 -z-10 ">
            <Image
                src="/svg/leftFlowers.svg" 
                alt="Food"
                width={200}
                height={200}
                className="rounded-lg object-fill"
            />
            </div>
            <div className="absolute bottom-2 -right-5 w-40 -z-10">
            <Image
                src="/svg/rightFlower.svg" 
                alt="Food"
                width={200}
                height={200}
                className="rounded-lg object-fill "
            />
            </div>
            <div className="absolute md:left-0  md:bottom-10 md:ml-25 md:w-48 w-25 left-45 -bottom-5  z-20 animate-pulse">
            <Image
                src="/svg/dish.svg" 
                alt="Food"
                width={200}
                height={200}
                className="rounded-lg object-contain  animate-bounce cursor-pointer hover:animate-spin "
            />
            </div>

            {/* Optional Decorative SVG or background lines can go here */}
        </div>
        </section>
    )
}

export default HomePage