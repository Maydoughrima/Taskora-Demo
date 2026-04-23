import { MdOutlineDashboard } from "react-icons/md";
import { FiCheckSquare } from "react-icons/fi";
import { BsCalendar2Week } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbFileInvoice } from "react-icons/tb";
import { PiMagicWand } from "react-icons/pi";

const features = [
  {
    icon: <MdOutlineDashboard />,
    title: "Smart Dashboard",
    desc: "Real-time overview of everything in your system.",
    color: "text-[var(--cta)]",
    points: [
      "Live task & project tracking",
      "Instant workflow visibility",
      "Central performance overview",
    ],
    tags: ["Realtime", "Analytics", "Overview"],
  },
  {
    icon: <FiCheckSquare />,
    title: "Task Management",
    desc: "Organize work with structure, priorities, and clarity.",
    color: "text-[var(--accent)]",
    points: [
      "Priority-based task system",
      "Deadline tracking",
      "Progress monitoring",
    ],
    tags: ["Productivity", "Workflow"],
  },
  {
    icon: <BsCalendar2Week />,
    title: "Calendar System",
    desc: "Plan and visualize your schedule without friction.",
    color: "text-[var(--highlight)]",
    points: [
      "Drag & drop scheduling",
      "Deadline synchronization",
      "Daily / weekly planning",
    ],
    tags: ["Planning", "Time"],
  },
  {
    icon: <HiOutlineUserGroup />,
    title: "Client Management",
    desc: "Keep all client relationships and data centralized.",
    color: "text-neon-400",
    points: [
      "Client profiles & history",
      "Project linking system",
      "Communication tracking",
    ],
    tags: ["CRM", "Clients"],
  },
  {
    icon: <TbFileInvoice />,
    title: "Invoice System",
    desc: "Track billing and payments in a clean workflow.",
    color: "text-pink-400",
    points: [
      "Auto invoice generation",
      "Payment status tracking",
      "Billing history logs",
    ],
    tags: ["Finance", "Billing"],
  },
  {
    icon: <PiMagicWand />,
    title: "AI Assistance",
    desc: "Smart suggestions that improve productivity.",
    color: "text-indigo-400",
    points: [
      "Smart task suggestions",
      "Workflow optimization",
      "Auto prioritization hints",
    ],
    tags: ["AI", "Smart"],
  },
];

export default function FeaturesPage() {
  return (
    <section className="flex flex-col gap-14 p-4 md:px-6 lg:px-4 lg:pt-12 bg-[var(--primary)]">
      {/* HERO */}
      <div className="text-center flex flex-col gap-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[var(--text)] font-heading">
          Everything you need to run your workflow in one system
        </h1>

        <p className="text-[var(--secondary400)] text-sm md:text-base leading-relaxed font-body">
          Taskora brings your dashboard, tasks, calendar, clients, projects, and
          invoicing into a single structured workspace — so you can focus on
          execution, not switching tools.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-12 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="
              col-span-12 md:col-span-6 lg:col-span-4
              p-6 rounded-xl
              border 
              transition-all duration-300
              hover:-translate-y-1
              hover:border-white/20
              hover:shadow-lg
            "
          >
            <div className="flex flex-col gap-4">
              {/* ICON */}
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-lg
              bg-[var(--secondary)] border ${f.color}`}
              >
                {f.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-body font-semibold text-[var(--text)]">
                {f.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-[var(--secondary400)] leading-relaxed font-body">
                {f.desc}
              </p>

              {/* BULLETS */}
              <div className="flex flex-col gap-1 mt-1">
                {f.points.map((p, idx) => (
                  <div
                    key={idx}
                    className="text-xs text-[var(--secondary400)] flex items-start gap-2 font-body"
                  >
                    <span className={`${f.color} mt-[2px]`}>•</span>
                    <span>{p}</span>
                  </div>
                ))}
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mt-2">
                {f.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="
                      text-[10px] px-2 py-1 rounded-md
                       bg-[var(--accent400)]
                      text-[var(--secondary400)] font-body
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
