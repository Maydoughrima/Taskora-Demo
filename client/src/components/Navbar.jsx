import { useState } from "react";
import logo from "../assets/LOGO.png";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Button from "./UI/Button";
import { IoClose } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { IoSparklesOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoHelpCircleOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi";
import pfp from "../assets/test-img-1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-[var(--primary)] p-2 md:p-4 lg:px-8 lg:py-4 xl:px-8 xl:py-4">
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="Logo flex items-center font-semibold text-[var(--primary-text)]">
            <img src={logo} alt="logo" className="h-12 w-12 md:h-14 md:w-14" />
            <p className="font-heading text-lg hidden md:block">TASKORA</p>
          </div>

          {/* class-links */}
          <ul className="nav-links hidden lg:flex gap-4">
            <li>
              <NavLink
                className="inline-block text-[var(--text-primary)] font-body
                transition-all duration-300 
                hover:text-[var(--accent)] 
                hover:scale-105"
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                className="inline-block text-[var(--text-primary)] font-body
                transition-all duration-300 
                hover:text-[var(--accent)] 
                hover:scale-105"
                to="/features"
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                className="inline-block text-[var(--text-primary)] font-body
                transition-all duration-300 
                hover:text-[var(--accent)] 
                hover:scale-105"
                to="/pricing"
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                className="inline-block text-[var(--text-primary)] font-body
                transition-all duration-300 
                hover:text-[var(--accent)] 
                hover:scale-105"
                to="/customers"
              >
                Customers
              </NavLink>
            </li>
            <li>
              <NavLink
                className="inline-block text-[var(--text-primary)] font-body
                transition-all duration-300 
                hover:text-[var(--accent)] 
                hover:scale-105"
                to="/contactUs"
              >
                Contact Us
              </NavLink>
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
        className={`flex flex-col fixed top-0 right-0 h-full w-full bg-white z-50 p-6
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        lg:hidden`}
      >
        {/* Close Button */}
        <div className="flex p-2 justify-between border-b border-black/10">
          <NavLink to="/">
            <img src={logo} alt="logo-img" className="w-[50px] h-[50px]" />
          </NavLink>
          <button onClick={() => setIsOpen(false)}>
            <IoClose className="text-2xl text-[var(--cta)]" />
          </button>
        </div>

        <div className="flex flex-col h-full gap-8">
          {/* Links */}
          <ul className="flex flex-col gap-2 mt-8">
            <li>
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/products"
                className={({ isActive }) =>
                  `inline-flex items-center gap-2 font-body font-medium p-2 w-full rounded-md
              ${isActive ? "bg-[var(--cta)] text-[var(--primary)]" : "text-[color:rgba(0,0,0,0.6)]"}`
                }
              >
                <AiOutlineProduct className="text-xl fill-current" />
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/features"
                className={({ isActive }) =>
                  `inline-flex items-center gap-2 font-body font-medium p-2 w-full rounded-md
              ${isActive ? "bg-[var(--cta)] text-[var(--primary)]" : "text-[color:rgba(0,0,0,0.6)]"}`
                }
              >
                <IoSparklesOutline className="text-xl fill-current" />
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/pricing"
                className={({ isActive }) =>
                  `inline-flex items-center gap-2 font-body font-medium p-2 w-full rounded-md
              ${isActive ? "bg-[var(--cta)] text-[var(--primary)]" : "text-[color:rgba(0,0,0,0.6)]"}`
                }
              >
                <IoCartOutline className="text-xl fill-current" />
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/customers"
                className={({ isActive }) =>
                  `inline-flex items-center gap-2 font-body font-medium p-2 w-full rounded-md
              ${isActive ? "bg-[var(--cta)] text-[var(--primary)]" : "text-[color:rgba(0,0,0,0.6)]"}`
                }
              >
                <HiOutlineUsers className="text-xl" />
                Customers
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/contactUs"
                className={({ isActive }) =>
                  `inline-flex items-center gap-2 font-body font-medium p-2 w-full rounded-md
              ${isActive ? "bg-[var(--cta)] text-[var(--primary)]" : "text-[color:rgba(0,0,0,0.6)]"}`
                }
              >
                <IoChatbubblesOutline className="text-xl fill-current" />
                Contact Us
              </NavLink>
            </li>
          </ul>

          <div className="bottom-nav">
            <ul className="flex flex-col gap-2 mt-8">
              <li>
                <NavLink
                  onClick={() => setIsOpen(false)}
                  to="/notification"
                  className={({ isActive }) =>
                    `inline-flex items-center gap-2 font-body font-medium p-2 w-full rounded-md
              ${isActive ? "bg-[var(--cta)] text-[var(--primary)]" : "text-[color:rgba(0,0,0,0.6)]"}`
                  }
                >
                  <IoNotificationsOutline className="text-xl fill-current" />
                  Notification
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setIsOpen(false)}
                  to="/settings"
                  className={({ isActive }) =>
                    `inline-flex items-center gap-2 font-body font-medium p-2 w-full rounded-md
              ${isActive ? "bg-[var(--cta)] text-[var(--primary)]" : "text-[color:rgba(0,0,0,0.6)]"}`
                  }
                >
                  <IoSettingsOutline className="text-xl fill-current" />
                  Settings
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setIsOpen(false)}
                  to="/docs"
                  className={({ isActive }) =>
                    `inline-flex items-center gap-2 font-body font-medium p-2 w-full rounded-md
              ${isActive ? "bg-[var(--cta)] text-[var(--primary)]" : "text-[color:rgba(0,0,0,0.6)]"}`
                  }
                >
                  <HiOutlineDocumentText className="text-xl" />
                  Docs
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setIsOpen(false)}
                  to="/help"
                  className={({ isActive }) =>
                    `inline-flex items-center gap-2 font-body font-medium p-2 w-full rounded-md
              ${isActive ? "bg-[var(--cta)] text-[var(--primary)]" : "text-[color:rgba(0,0,0,0.6)]"}`
                  }
                >
                  <IoHelpCircleOutline className="text-xl fill-current" />
                  Help
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="user-profile flex justify-between items-center p-2 py-4 border-t mt-auto">
            <div className="flex items-center gap-4">
              <img src={pfp} alt="pfp-img"
            className="rounded-md w-[40px] h-[40px]"
            />

            <p className="text-[var(--text)] font-body font-medium">Jane Does</p>   
            </div>   
            <HiOutlineUserCircle className="text-[var(--cta)] text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
}
