import dashboardImg from "../../assets/dashboardImg.png";
import tasksImg from "../../assets/tasksImg.png";
import calendarImg from "../../assets/calendarImg.png";
import clientsImg from "../../assets/clientsImg.png";
import projectsImg from "../../assets/projectsImg.png";
import invoiceImg from "../../assets/invoiceImg.png";

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
    <section className="flex flex-col gap-12 p-4 md:px-6 lg:px-4 lg:pt-12 bg-[var(--primary)]">

      {/* HERO */}
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[var(--text)] font-heading">
          Built for productivity. Designed for clarity.
        </h1>

        <p className="text-[var(--secondary400)] max-w-2xl mx-auto text-sm md:text-base font-body">
          Taskora unifies your workflow into one clean system — designed to keep you focused and fast.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {products.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border border-[var(--border)]/40 bg-[var(--card-bg)] rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >

            {/* IMAGE */}
            <div className="h-40 w-full overflow-hidden bg-[var(--background)]">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col gap-2 p-5">

              <h2 className="text-lg font-semibold text-[var(--text)] font-body">
                {item.title}
              </h2>

              <p className="text-sm text-[var(--secondary400)] leading-relaxed font-body">
                {item.desc}
              </p>

              {/* CTA */}
              <Link
                to={item.link}
                className="mt-4 flex items-center gap-2 text-sm font-medium text-[var(--cta)] hover:gap-3 transition-all duration-200"
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