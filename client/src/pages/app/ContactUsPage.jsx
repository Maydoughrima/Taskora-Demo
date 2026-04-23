import Heading from "../../components/UI/SectionTitle";
import Desc from "../../components/UI/SectionDescription";

import { FiMail, FiMessageCircle, FiClock } from "react-icons/fi";
import { HiOutlineSupport } from "react-icons/hi";

export default function ContactPage() {
  return (
    <section className="flex flex-col gap-14 p-4 md:px-6 lg:px-4 lg:pt-12 bg-[var(--primary)]">

      {/* HERO */}
      <div className="text-center flex flex-col gap-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[var(--text)] font-heading">
          Let’s build something productive together
        </h1>

        <p className="text-[var(--secondary400)] text-sm md:text-base leading-relaxed font-body">
          Got feedback, ideas, or issues? We’re always open to conversations that help improve Taskora.
          Expect a reply within 24 hours.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-12 gap-6">

        {/* LEFT INFO PANEL */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">

          {/* CONTACT CARDS */}
          <div className="p-6 rounded-xl border hover:bg-[var(--secondary)] transition font-body">
            <div className="flex items-center gap-3 mb-3 text-[var(--cta)]">
              <FiMail className="w-5 h-5" />
              <h3 className="text-sm font-semibold text-[var(--text)]">Email Support</h3>
            </div>
            <p className="text-sm text-[var(--secondary400)]">
              support@taskora.app
            </p>
          </div>

          <div className="p-6 rounded-xl border hover:bg-[var(--secondary)] transition font-body">
            <div className="flex items-center gap-3 mb-3 text-[var(--cta)]">
              <FiMessageCircle className="w-5 h-5" />
              <h3 className="text-sm font-semibold text-[var(--text)]">Live Feedback</h3>
            </div>
            <p className="text-sm text-[var(--secondary400)]">
              Feature requests, bugs, and suggestions
            </p>
          </div>

          <div className="p-6 rounded-xl border hover:bg-[var(--secondary)] transition font-body">
            <div className="flex items-center gap-3 mb-3 text-[var(--cta)]">
              <FiClock className="w-5 h-5" />
              <h3 className="text-sm font-semibold text-[var(--text)]">Response Time</h3>
            </div>
            <p className="text-sm text-[var(--secondary400)]">
              Usually within 24 hours
            </p>
          </div>

          {/* EXTRA INFO */}
          <div className="p-6 rounded-xl border hover:bg-[var(--secondary)] transition font-body">
            <div className="flex items-center gap-3 mb-3 text-[var(--cta)]">
              <HiOutlineSupport className="w-5 h-5" />
              <h3 className="text-sm font-semibold text-[var(--text)]">
                What we help with
              </h3>
            </div>

            <ul className="text-sm text-[var(--secondary400)] space-y-2">
              <li>• Bug reports & technical issues</li>
              <li>• Feature requests & improvements</li>
              <li>• Collaboration inquiries</li>
              <li>• General feedback</li>
            </ul>
          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="col-span-12 lg:col-span-7 p-6 md:p-10 rounded-xl border">

          <h2 className="text-xl font-semibold text-[var(--text)] mb-6">
            Send us a message
          </h2>

          <form className="flex flex-col gap-4">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="Your name"
                className="p-3 rounded-lg bg-[var(--primary)]/40 border text-[var(--text)] outline-none focus:border-[var(--cta)] transition"
              />

              <input
                type="email"
                placeholder="Your email"
                className="p-3 rounded-lg bg-[var(--primary)]/40 border text-[var(--text)] outline-none focus:border-[var(--cta)] transition"
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
              className="p-3 rounded-lg bg-[var(--primary)]/40 border text-[var(--text)] outline-none focus:border-[var(--cta)] transition"
            />

            <textarea
              rows="6"
              placeholder="Your message..."
              className="p-3 rounded-lg bg-[var(--primary)]/40 border text-[var(--text)] outline-none focus:border-[var(--cta)] transition resize-none"
            />

            <button
              type="submit"
              className="mt-2 py-3 rounded-lg bg-[var(--cta)] text-[var(--primary)] font-medium
              hover:opacity-90 hover:-translate-y-1 transition-all duration-200"
            >
              Send Message →
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}