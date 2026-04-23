import Heading from "../../components/UI/SectionTitle";
import Desc from "../../components/UI/SectionDescription";

import user1 from "../../assets/test-img-1.png";
import user2 from "../../assets/test-img-2.png";
import user3 from "../../assets/test-img-3.png";

export default function CustomersPage() {
  const stats = [
    { label: "Active Users", value: "12K+" },
    { label: "Projects Managed", value: "48K+" },
    { label: "Invoices Generated", value: "120K+" },
    { label: "Satisfaction Rate", value: "98%" },
  ];

  const testimonials = [
    {
      name: "Sarah Lim",
      role: "Freelance Designer",
      image: user1,
      text: "Taskora completely changed how I manage clients. Everything feels structured but effortless.",
    },
    {
      name: "Mark Rivera",
      role: "Startup Founder",
      image: user2,
      text: "The dashboard alone saves me hours every week. Clean, fast, and actually useful.",
    },
    {
      name: "Jasmine Cruz",
      role: "Project Manager",
      image: user3,
      text: "Finally, a tool that doesn’t feel bloated. Everything is exactly where it should be.",
    },
  ];

  return (
    <section className="flex flex-col gap-14 p-4 md:px-6 lg:px-4 lg:pt-12 bg-[var(--primary)]">

      {/* HERO */}
      <div className="text-center flex flex-col gap-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[var(--text)] font-heading">
          Trusted by creators, freelancers, and growing teams
        </h1>

        <p className="text-[var(--secondary400)] text-sm md:text-base leading-relaxed font-body">
          People use Taskora every day to organize work, manage clients, and ship projects faster without chaos.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="p-5 rounded-xl border
            hover:bg-[var(--secondary)] transition"
          >
            <h2 className="text-2xl font-body font-semibold text-[var(--text)]">
              {s.value}
            </h2>
            <p className="text-xs text-[var(--secondary400)] font-body mt-1">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* TESTIMONIALS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {testimonials.map((t, i) => (
          <div
            key={i}
            className="relative p-6 rounded-xl
            border overflow-hidden
            hover:-translate-y-2 hover:bg-[var(--secondary)] transition-all duration-300"
          >

            {/* glow */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition
            bg-gradient-to-br from-[var(--cta)]/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative flex flex-col gap-4">

              {/* user */}
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                />

                <div className="flex flex-col">
                  <h3 className="text-sm font-body font-semibold text-[var(--text)]">
                    {t.name}
                  </h3>
                  <span className="text-[10px] text-[var(--secondary400)] font-body">
                    {t.role}
                  </span>
                </div>
              </div>

              {/* quote */}
              <p className="text-sm text-[var(--secondary400)] leading-relaxed font-body">
                “{t.text}”
              </p>

              {/* small badge */}
              <div className="text-[10px] text-[var(--cta)] opacity-80 mt-2 font-body">
                Verified Customer
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* TRUST STRIP */}
      <div className="text-center text-xs text-[var(--secondary400)] opacity-70 font-body">
        Trusted by independent professionals worldwide — from freelancers to startup teams
      </div>

    </section>
  );
}