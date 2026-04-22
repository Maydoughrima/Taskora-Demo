import {
  IoSearchOutline,
  IoAddOutline,
  IoGridOutline,
  IoListOutline,
} from "react-icons/io5";
import Button from "./Button";

export default function ProjectsListHeader({
  onAddProject,
  search = "",
  setSearch = () => {},
  view = "table",
  setView = () => {},
}) {
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
              placeholder="Search..."
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
        <div className="flex items-center gap-1 lg:gap-2">
          
          {/* VIEW TOGGLE */}
          <div className="hidden md:flex items-center bg-[var(--secondary)] rounded-lg p-1">
            <button
              onClick={() => setView("table")}
              className={`p-2 rounded-md transition ${
                view === "table"
                  ? "bg-white shadow text-[var(--text)]"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <IoListOutline className="text-[18px]" />
            </button>

            <button
              onClick={() => setView("grid")}
              className={`p-2 rounded-md transition ${
                view === "grid"
                  ? "bg-white shadow text-[var(--text)]"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <IoGridOutline className="text-[18px]" />
            </button>
          </div>

          {/* ADD */}
          <Button
            variant="primary"
            className="inline-flex items-center gap-2 whitespace-nowrap"
            onClick={onAddProject}
          >
            <IoAddOutline className="text-[var(--primary)] text-[18px]" />
          </Button>
        </div>
      </div>
    </section>
  );
}