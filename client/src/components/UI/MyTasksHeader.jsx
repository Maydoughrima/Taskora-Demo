import { useState, useEffect, useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Button from "./Button";
import { MdOutlineFilterAlt } from "react-icons/md";
import { IoOptionsOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";

export default function MyTasksHeader({
  onAddClick,
  onOpenCalendar,
  search = "",
  setSearch = () => {}, // SAFE DEFAULT
}) {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="flex p-4 md:px-6 lg:px-4 lg:pt-12">
      <div className="flex justify-between items-center w-full gap-4">
        {/* SEARCH */}
        <div className="flex items-center gap-2 lg:gap-4 w-full">
          <div className="relative w-full md:w-[320px] lg:w-[420px]">
            <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text)] opacity-60 text-[18px]" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search"
              className="
              w-full
              bg-[var(--secondary)]
              border border-transparent
              rounded-lg
              py-2.5 pl-10 pr-3
              text-sm md:text-base
              text-[var(--text)]
              outline-none
              transition
              focus:border-[var(--secondary400)]
              focus:bg-white"
            />
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-1 lg:gap-2">
          {/* MOBILE MENU */}
          <div ref={menuRef} className="relative lg:hidden">
            <Button
              variant="secondary"
              className="inline-flex items-center gap-2 !px-2"
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              <IoOptionsOutline className="text-[var(--text)] text-[18px]" />
            </Button>

            {openMenu && (
              <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                  onClick={() => {
                    onOpenCalendar?.();
                    setOpenMenu(false);
                  }}
                >
                  <IoCalendarOutline />
                  Calendar
                </button>
              </div>
            )}
          </div>

          {/* DESKTOP CALENDAR */}
          <Button
            variant="secondary"
            className="hidden lg:inline-flex items-center gap-2"
            onClick={onOpenCalendar}
          >
            <IoCalendarOutline />
            <p className="hidden lg:block font-[var(--ctaTxt)]">Calendar</p>
          </Button>

          {/* ADD */}
          <Button
            variant="primary"
            className="inline-flex items-center gap-2 whitespace-nowrap"
            onClick={onAddClick}
          >
            <IoAddOutline className="text-[var(--primary)] text-[18px]" />
            <p className="hidden lg:block font-[var(--ctaTxt)]">Add Tasks</p>
          </Button>
        </div>
      </div>
    </section>
  );
}
