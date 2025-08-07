"use client";

import { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi"; // For hamburger and close icons

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-6 py-4 flex justify-between h-[60px] items-center">
      {/* Brand Logo */}
      <a href='#' >
        <Image src="/fullLogo.svg" width={100} height={100} alt="brand logo"  className="cursor-pointer"/>
      </a>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6 font-nunito text-gray-700 text-sm">
        {navItems.map(({ label, href }) => (
          <a
            key={href}
            onClick={() => setActiveSection(href)}
            href={href}
            className={`transition hover:text-orange-500 ${
              activeSection === href ? "text-orange-500 font-semibold" : ""
            }`}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <Button btnLabel="Book a Date" variant="primary" className="pointer" />
      </div>

      {/* Mobile Menu Icon */}
      <button onClick={toggleMenu} className="md:hidden text-gray-700 cursor-pointer">
        {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-4 z-40">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              onClick={() => {
                setActiveSection(href);
                setMobileOpen(false);
              }}
              href={href}
              className="block px-6 py-2 text-gray-700 hover:bg-amber-100"
            >
              {label}
            </a>
          ))}
          <a href='#contact'>
            <Button btnLabel="Book a Date" variant="primary" className="w-full" />
          </a >
        </div>
      )}
    </nav>
  );
};

export default Nav;
