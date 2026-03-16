import React from "react";
import { useState } from "react";
import logo from "../assets/LOGO.png";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import Button from "./UI/Button";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-[var(--primary)] p-2 md:p-4 lg:p-6 xl:p-8">
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="Logo flex items-center font-semibold text-[var(--primary-text)]">
            <img src={logo} alt="logo" className="h-12 w-12 md:h-14 md:w-14" />
            <p className="font-heading text-lg hidden md:block">TASKORA</p>
          </div>

          {/* class-links */}
          <ul className="nav-links hidden lg:flex gap-2">
            <li>
              <Link
                className="inline-block text-[var(--text-primary)] font-body
                transition-all duration-300 
                hover:text-[var(--accent)] 
                hover:scale-105"
                to="/products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="inline-block text-[var(--text-primary)] font-body
                transition-all duration-300 
                hover:text-[var(--accent)] 
                hover:scale-105"
                to="/features"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                className="inline-block text-[var(--text-primary)] font-body
                transition-all duration-300 
                hover:text-[var(--accent)] 
                hover:scale-105"
                to="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className="inline-block text-[var(--text-primary)] font-body
                transition-all duration-300 
                hover:text-[var(--accent)] 
                hover:scale-105"
                to="/customers"
              >
                Customers
              </Link>
            </li>
            <li>
              <Link
                className="inline-block text-[var(--text-primary)] font-body
                transition-all duration-300 
                hover:text-[var(--accent)] 
                hover:scale-105"
                to="/contactUs"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* buttons */}
          <div className="hidden lg:flex flex gap-2">
            {/* LOGIN BUTTON */}
            <div>
              <Button
                variant="primary"
                className="rounded-[8px] transition-transform duration-300 hover:scale-105"
              >
                Login
              </Button>
            </div>

            {/* SIGN UP BUTTON */}
            <div>
              <Button
                variant="secondary"
                className="rounded-[8px] transition-transform duration-300 hover:scale-105"
              >
                Sign Up
              </Button>
            </div>
          </div>

          {/* menu bar */}
          <div className="Menu-bar lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <IoMenu className="text-3xl text-[var(--cta)]" />
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-50 p-6
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        lg:hidden`}
      >
        {/* Close Button */}
        <div className="flex p-2 justify-end border-b border-black/10">
          <button
            onClick={() => setIsOpen(false)}
          >
           <IoClose className="text-2xl text-[var(--cta)]"/>
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-6 mt-8">
          <li>
            <Link onClick={() => setIsOpen(false)} to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/features">
              Features
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/pricing">
              Pricing
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/customers">
              Customers
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/contactUs">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
