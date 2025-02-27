"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { TbMenu3 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const menuItems = [
  { label: "Agency", href: "/agency" },
  { label: "Course", href: "/course" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed w-screen top-0 z-50 ${
          isScrolled || isMenuOpen ? "bg-[#17131b]" : ""
        }`}
      >
        <div className="flex justify-between items-center px-6 py-3 h-[84px]">
          <div className="text-[22px]">
            <FaPhone className="inline-block mr-2 text-white" />
            <span className="text-white font-futuraBook">1-234-567-890</span>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 ">
            <Image
              src="/assets/rocky-saggoo-logo-latest.jpg"
              alt="Rocky Saggoo"
              className="h-20 rounded-full"
              width={200}
              height={100}
            />
          </div>
          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:cursor-pointer flex items-center gap-2"
          >
            <span className="text-white text-[22px] font-futuraBook">
              {isMenuOpen ? "close" : "menu"}
            </span>
            {isMenuOpen ? (
              <IoClose className="h-8 w-8 text-white" />
            ) : (
              <TbMenu3 className="h-8 w-8 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#17131b]/90 backdrop-blur-md z-40 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "" : "translate-y-[-100%]"
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-white text-5xl font-futuraCondensed uppercase mb-8 hover:scale-105 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
