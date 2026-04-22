import { useState } from "react";
import logo from "../../assets/LOGO.png";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Notifs } from "../../config/Notifications";
import { NavLink } from "react-router-dom";
import { navItems } from "../../config/NavItems";
import { IconMap } from "../../config/IconMap";
import dummy1 from "../../assets/dummy1.jpg";

export default function NavMobile({ className = "" }) {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNotif = () => {
    setIsNotifOpen(!isNotifOpen);
    setIsMenuOpen(false); //close menu if open
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsNotifOpen(false); //close notif if open
  };

  // collect unique section names from navItems
  const sections = [
    ...new Set(navItems.map((item) => item.section || "Others")),
  ];

  return (
    <nav
      className={`${className} relative flex justify-between items-center p-2 md:px-6 bg-[var(--primary)] border-b`}
    >
      <div className="image-container">
        <NavLink to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-center"
          />
        </NavLink>
      </div>

      <div className="flex gap-4 items-center">
        <button onClick={toggleNotif}>
          <IoNotificationsOutline className="text-2xl md:text-3xl text-[var(--cta)]" />
        </button>

        <NavLink to="/userpfp">
          <img
            src={dummy1}
            alt="user-pfp"
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full"
          />
        </NavLink>

        <button onClick={toggleMenu}>
          <IoMenu className="text-2xl md:text-3xl text-[var(--cta)]" />
        </button>

        <div
          className={`absolute bg-gray-300 top-20 left-4 right-4 p-2 md:px-6 z-20 rounded-md shadow
          transform transition-all duration-300 ease-out
          ${isNotifOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
        >
          <div className="flex flex-col gap-2">
            {Notifs.map((notif) => (
              <div
                key={notif.id}
                className={`flex items-center gap-2 p-3 md:p-6 rounded border-l-4 ${
                  notif.type === "taskora"
                    ? "border-blue-500 bg-blue-50"
                    : "border-green-500 bg-green-50"
                }`}
              >
                <img
                  src={notif.image}
                  alt={notif.title}
                  className="w-10 h-10 md:w-[50px] md:h-[50px] rounded-full object-cover"
                />
                <p className="font-semibold font-heading md:text-2xl">
                  {notif.name}
                </p>
                <p className="text-sm text-gray-700 md:text-2xl">
                  {notif.message}
                </p>
                <p className="text-xs text-gray-400 md:text-2xl">
                  {notif.time}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-2">
            <NavLink className="text-sm font-body text-[var(--cta)] cursor-pointer md:text-lg">
              View All
            </NavLink>
          </div>
        </div>
        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu} // clicking outside closes menu
          ></div>
        )}

        {/* Mobile Menu */}
        <div
          className={`flex flex-col fixed top-20 right-0 h-full overflow-y-auto rounded-3xl w-full bg-[var(--secondary)] z-50 p-6 md:p-12
          transform transition-all duration-1000 ease-in-out
          ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
        >
          <button onClick={toggleMenu} className="self-end mb-4">
            <IoClose className="text-2xl md:text-4xl text-[var(--cta)]" />
          </button>
          <div className="flex flex-col gap-4 md:gap-8">
            {sections.map((section) => (
              <div key={section} className="mb-4">
                <p className="text-xs md:text-xl font-semibold text-gray-500 uppercase mb-2 md:mb-4">
                  {section}
                </p>
                {navItems
                  .filter((item) => (item.section || "Others") === section)
                  .map((item) => {
                    const Icon = IconMap[item.icon];
                    return (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                          `flex items-center gap-2 rounded p-2 md:p-4 ${
                            isActive
                              ? "bg-[var(--cta)] font-semibold text-[var(--primary)]"
                              : "text-[color:rgba(0,0,0,0.7)]"
                          }`
                        }
                      >
                        <Icon className="text-lg md:text-3xl" />
                        <span className="font-body font-medium md:text-3xl">
                          {item.label}
                        </span>
                      </NavLink>
                    );
                  })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
