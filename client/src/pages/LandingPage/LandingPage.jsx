import { FaWandMagicSparkles } from "react-icons/fa6";
import Button from "../../components/UI/Button";

export default function Login() {
  return (
    <>
      <section
        id="hero-section"
        className="min-h-screen flex flex-col gap-2 bg-gradient-to-b from-[rgb(43,130,246,0.2)] to-[var(--primary)] px-2 justify-center items-center"
      >
        {/* AI FEATURE LABEL */}
        <div className="flex items-center gap-2 bg-[var(--secondary)] px-4 py-2 border border-b/20 rounded-full">
          <FaWandMagicSparkles className="text-lg text-[var(--text)]" />
          <p className="text-[var(--text)] font-body text-sm">
            New Smart Task AI Feature
          </p>
        </div>

        {/* HERO TEXT */}
        <div className="flex">
          <h1 className="font-heading text-heroP font-extrabold text-center text-[var(--text)] leading-tight">
            Focus on What Matters.{" "}
            <span className="text-[var(--accent)]">Taskora</span> Handles the
            Rest
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <Button>Get Started</Button>
          <Button variant="secondary">Book a Demo</Button>
        </div>
      </section>
    </>
  );
}
