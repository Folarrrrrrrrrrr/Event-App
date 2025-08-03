"use client";

import { useState, useEffect } from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/fullLogo.svg"


const Nav =()=>{

    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("");
    const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    ];
    return(
            <nav className="sticky top-0 z-10000 bg-white shadow-md px-6 py-4 flex justify-between h-[60px] items-center">
                {/* Brand */}
                <Image 
                    src="/fullLogo.svg"
                    width={100}
                    height={100}
                    alt="brand logo"
                />
                {/* Nav Links */}
                <div className="hidden md:flex space-x-6 font-nunito text-gray-700 text-sm">
                   {navItems.map(({ label, href }) => (
                        <a
                        key={href}
                        onClick={()=>setActiveSection(`${href}`)}
                        href={href}
                          className={`transition hover:text-orange-500 ${
                            activeSection === href ? "text-orange-500 font-semibold" : ""
                          }`}
                        >
                        {label}
                        </a>
                    ))}
                </div>
                <div className="hidden md:block">
                    <Button
                    btnLabel="Book a Date"
                    variant="primary"
                    className="pointer"
                    />
                </div>

                {/* Mobile Menu Icon (optional for later) */}
            </nav>
    )
}

export default Nav

