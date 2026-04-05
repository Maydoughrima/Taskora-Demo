import { FaWandMagicSparkles } from "react-icons/fa6";
import { IoBarChartOutline } from "react-icons/io5";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdOutlineCloudDone } from "react-icons/md";
import { TiThListOutline } from "react-icons/ti";
import Button from "./UI/Button";
import DemoImage from "../assets/web-img1.jpg";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    //trigger the animation after mount
    setAnimate(true);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative flex flex-col justify-center items-center gap-8 bg-gradient-to-b from-[rgb(43,130,246,0.2)] to-[var(--primary)] px-4 pt-12 sm:px-6 lg:px-8 lg:py-12 overflow-hidden"
    >
      {/* CONTENT WRAPPER */}
      <div className="w-full max-w-5xl flex flex-col items-center text-center gap-6">
        {/* AI FEATURE LABEL */}
        <div
            className={`flex items-center gap-2 text-[var(--text)] bg-[var(--secondary)] px-4 py-2 border border-black/10 rounded-full shadow-sm 
            transition-all duration-1000 ease-out
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"} 
            hover:bg-[var(--accent)] hover:text-[var(--primary)] hover:shadow-lg`}
        >
          <FaWandMagicSparkles className="text-sm sm:text-base" />
          <p className="font-body text-xs sm:text-sm">
            New Smart Task AI Feature
          </p>
        </div>

        {/* HERO TEXT */}
        <div
          className={`flex flex-col items-center gap-3 max-w-3xl transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}`}
        >
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--text)] leading-tight ">
            Focus on What Matters.{" "}
            <span className="text-[var(--accent)]">Taskora</span> Handles the
            Rest
          </h1>

          <p className="text-[color:rgba(0,0,0,0.6)] font-body text-sm sm:text-base md:text-lg">
            An AI-powered system that plans, prioritizes, and adapts to your
            workflow.
          </p>
        </div>

        {/* BUTTONS */}
        <div
          className={`flex flex-col sm:flex-row gap-3 w-full sm:w-auto transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}`}
        >
          <Button to="/dashboard" className="shadow-sm w-full sm:w-auto">Get Started</Button>
          <Button className="shadow-sm w-full sm:w-auto" variant="secondary">
            Book a Demo
          </Button>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="w-full max-w-5xl mt-5 px-2 sm:px-4">
        <img
          src={DemoImage}
          alt="demo-image"
          className={`w-full rounded-xl shadow-[0_0_30px_rgba(99,102,241,0.3)] border border-black/10 transition-all duration-1000 ease-out 
          ${animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[200%]"}`}
        />
      </div>

      {/* FLOATING ELEMENTS */}
      <div className="absolute inset-0 hidden lg:block floating pointer-events-none">
        <div
            className={`absolute top-[8%] right-[12%] text-[var(--accent)] bg-[var(--secondary)] p-3 rounded-xl shadow-sm
            transition-all duration-1000 ease-out
            ${animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[200%]"}
            hover:bg-[var(--accent)] hover:text-[var(--primary)] hover:shadow-[0_0_50px_rgb(99,102,241)] pointer-events-auto`}
        >
          <IoBarChartOutline />
        </div>

        <div className={`absolute top-[24%] right-[15%] text-[var(--accent)] bg-[var(--secondary)] p-3 rounded-xl shadow-sm
             transition-all duration-1000 ease-out ${animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[200%]"} 
             hover:bg-[var(--accent)] hover:text-[var(--primary)] hover:shadow-[0_0_50px_rgb(99,102,241)] pointer-events-auto`}>
          <TiThListOutline />
        </div>

        <div className={`absolute top-[24%] left-[15%] text-[var(--accent)] bg-[var(--secondary)] p-3 rounded-xl shadow-sm 
             transition-all duration-1000 ease-out ${animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-200%]"}
             hover:bg-[var(--accent)] hover:text-[var(--primary)] hover:shadow-[0_0_50px_rgb(99,102,241)] pointer-events-auto`}>
          <AiOutlineFileDone />
        </div>
        <div className={`absolute top-[8%] left-[12%] text-[var(--accent)] bg-[var(--secondary)] p-3 rounded-xl shadow-sm 
             transition-all duration-1000 ease-out ${animate ?  "opacity-100 translate-x-0" : "opacity-0 translate-x-[-200%]"}
             hover:bg-[var(--accent)] hover:text-[var(--primary)] hover:shadow-[0_0_50px_rgb(99,102,241)] pointer-events-auto`}>
          <MdOutlineCloudDone />
        </div>
      </div>
    </section>
  );
}
