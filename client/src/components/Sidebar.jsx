import { navItems } from "../config/NavItems";
import { IconMap } from "../config/IconMap";
import Logo from "../assets/LOGO.png";
import { NavLink } from "react-router-dom";
import { User } from "../config/User";

export default function Sidebar({ className = "" }) {
  const user = User;
  const sections = [
    ...new Set(navItems.map((item) => item.section || "Others")),
  ];

  return (
    <aside
      className={`${className} flex flex-col w-64 h-screen p-2 bg-[var(--primary)] border-r shadow-md`}
    >
      <div className="flex flex-col justify-between h-full">

        {/* logo */}
        <div className="image-container flex items-center border-b">
          <NavLink to="/">
            <img
              src={Logo}
              alt="logo"
              className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-center"
            />
          </NavLink>
          <p className="font-body text-xl font-semibold text-[var(--text)]">
            TASKORA
          </p>
        </div>
        
        <div className="flex flex-col gap-8 p-2">
          {sections.map((section) => (
            <div key={section} className="mt-4">
              <p className="font-semibold text-gray-500 uppercase mb-2">
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
                        `flex items-center gap-2 rounded p-2 ${
                          isActive
                            ? "bg-[var(--cta)] font-semibold text-[var(--primary)]"
                            : "text-[color:rgba(0,0,0,0.7)]"
                        }`
                      }
                    >
                      <Icon className="text-xl" />
                      <span className="font-body font-medium text-base">
                        {item.label}
                      </span>
                    </NavLink>
                  );
                })}
            </div>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          <img src={user.image} alt="user-pfp" className="w-[50px] h-[50px] rounded-full" />
          <div className="flex flex-col">
           <p className="font-body text-[var(--text)]">{user.name}</p>
           <p className="font-body text-sm text-[var(--secondary400)]">{user.work}</p> 
          </div>
        </div>
      </div>
    </aside>
  );
}
