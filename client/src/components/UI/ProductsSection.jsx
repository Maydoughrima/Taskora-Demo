import dashboardImg from "../../assets/dashboardImg.png";
import tasksImg from "../../assets/tasksImg.png";
import calendarImg from "../../assets/calendarImg.png";
import clientsImg from "../../assets/clientsImg.png";
import projectsImg from "../../assets/projectsImg.png";
import invoiceImg from "../../assets/InvoiceImg.png";

import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ProductsSection() {
  const products = [
    {
      title: "Dashboard",
      desc: "Overview of your entire workflow in one place.",
      img: dashboardImg,
      link: "/dashboard",
    },
    {
      title: "My Tasks",
      desc: "Organize, prioritize, and complete your tasks efficiently.",
      img: tasksImg,
      link: "/tasks",
    },
    {
      title: "Calendar",
      desc: "Schedule and manage your time with a clean calendar view.",
      img: calendarImg,
      link: "/calendar",
    },
    {
      title: "Client List",
      desc: "Keep track of all your clients and their project history.",
      img: clientsImg,
      link: "/clients",
    },
    {
      title: "Project List",
      desc: "Manage and monitor all ongoing and completed projects.",
      img: projectsImg,
      link: "/projects",
    },
    {
      title: "Invoice List",
      desc: "Create and track invoices and payment status in one place.",
      img: invoiceImg,
      link: "/invoices",
    },
  ];

  return (
    <section className="flex flex-col gap-14 p-4 md:px-6 lg:px-4 lg:pt-12 bg-[var(--primary)]">

      {/* HERO */}
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[var(--text)] font-heading">
          Built for productivity. Designed for clarity.
        </h1>

        <p className="text-[var(--secondary400)] max-w-2xl mx-auto text-sm md:text-base font-body">
          Taskora unifies your workflow into one clean system — designed for speed, focus, and control.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {products.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)]/30 bg-[rgba(255,255,255,0.03)] backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            {/* subtle glow overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-[var(--cta)]/10 via-transparent to-transparent pointer-events-none" />

            {/* IMAGE */}
            <div className="h-44 w-full overflow-hidden bg-[var(--background)]">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col gap-3 p-5 relative z-10">

              <h2 className="text-lg font-semibold text-[var(--text)] font-body">
                {item.title}
              </h2>

              <p className="text-sm text-[var(--secondary400)] leading-relaxed font-body">
                {item.desc}
              </p>

              {/* CTA */}
              <Link
                to={item.link}
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[var(--cta)] group-hover:gap-3 transition-all duration-300"
              >
                Open Module
                <FaArrowRightLong className="w-4 h-4" />
              </Link>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}