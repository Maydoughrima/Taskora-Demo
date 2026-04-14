import TaskDropdown from "../UI/TaskDropdown";

export default function TaskCard() {
  return (
    <section className="flex w-full p-2 pt-4 md:px-6 lg:px-4">
      {/* CARD CONTAINER */}
      <div className="flex flex-col p-2 gap-4 bg-[var(--secondary)] border w-full rounded-[16px]">
        {/* CONTAINER HEADER */}
        <div className="flex justify-between">
          {/* HEADER LEFT */}
          <div className="flex gap-2">
            <TaskDropdown/>
          </div>
          {/* HEADER RIGHT */}
          <div>

          </div>
        </div>
      </div>
    </section>
  );
}
