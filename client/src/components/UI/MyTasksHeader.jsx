import { IoSearchOutline } from "react-icons/io5";
import Button from "./Button";
import { MdOutlineFilterAlt } from "react-icons/md";
import { IoOptionsOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import { IoListOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";

export default function MyTasksHeader({onAddClick}) {
  return (
    <section className="flex p-4 md:px-6 lg:px-4 lg:pt-12">
      <div className="flex justify-between items-center w-full gap-4">
        <div className="flex items-center gap-2 lg:gap-4">
          <div className="relative w-full">
            <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text)] pointer-events-none" />
            <input
              type="text"
              id="search-bar"
              placeholder="Search Task"
              className="w-full text-base md:text-lg font-body text-[var(--text)] 
               bg-transparent outline outline-1 rounded-full 
               p-2 pl-10 
               focus:ring-2 focus:ring-[var(--secondary400)] focus:outline-none"
            />
          </div>
          <Button
            variant="secondary"
            className="inline-flex items-center gap-2 !px-2 lg:!px-4"
          >
            <MdOutlineFilterAlt className="text-[var(--text)] text-[18px]"/>
            <p className="hidden lg:inline-flex font-[var(--ctaTxt)]">Filter</p>
          </Button>
        </div>
        <div className="flex gap-1 lg:gap-2">
          <Button variant="secondary" className="inline-flex items-center gap-2 lg:hidden !px-2 lg:!px-4">
            <IoOptionsOutline className="text-[var(--text)] text-[18px]" />
          </Button>
          <Button
            variant="secondary"
            className="gap-2 hidden lg:inline-flex items-center !px-2 lg:!px-4"
          >
            <IoListOutline className="text-[var(--text)] text-[18px]" />
            <p className="hidden lg:block font-[var(--ctaTxt)]">List</p>
          </Button>
          <Button
            variant="secondary"
            className="gap-2 hidden lg:inline-flex items-center !px-2 lg:!px-4"
          >
            <MdOutlineDashboard className="text-[var(--text)] text-[18px]" />
            <p className="hidden lg:block font-[var(--ctaTxt)]">Board</p>
          </Button>
          <Button
            variant="secondary"
            className="gap-2 hidden lg:inline-flex items-center !px-2 lg:!px-4"
          >
            <IoCalendarOutline className="text-[var(--text)] text-[18px]" />
            <p className="hidden lg:block font-[var(--ctaTxt)]">Calendar</p>
          </Button>
          <Button variant="primary" className="inline-flex items-center gap-2 whitespace-nowrap !px-2 lg:!px-4" onClick={onAddClick}>
            <IoAddOutline className="text-[var(--primary)] text-[18px]" />
            <p className="hidden lg:block font-[var(--ctaTxt)]">Add Tasks</p>
          </Button>
        </div>
      </div>
    </section>
  );
}
