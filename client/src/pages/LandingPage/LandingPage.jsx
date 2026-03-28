import { FaWandMagicSparkles } from "react-icons/fa6";
import { IoBarChartOutline } from "react-icons/io5";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdOutlineCloudDone } from "react-icons/md";
import { TiThListOutline } from "react-icons/ti";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbFileInvoice } from "react-icons/tb";
import { PiMagicWand } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";
import Button from "../../components/UI/Button";
import demoImage from "../../assets/web-img1.jpg";
import Card from "../../components/UI/Card";
import PricingCard from "../../components/UI/Pricing-card";

export default function Login() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        id="hero-section"
        className="relative min-h-screen flex flex-col justify-center items-center gap-8 bg-gradient-to-b from-[rgb(43,130,246,0.2)] to-[var(--primary)] px-4 sm:px-6 lg:px-8 lg:py-12 overflow-hidden"
      >
        {/* CONTENT WRAPPER */}
        <div className="w-full max-w-5xl flex flex-col items-center text-center gap-6">
          {/* AI FEATURE LABEL */}
          <div className="flex items-center gap-2 text-[var(--text)] bg-[var(--secondary)] px-4 py-2 border border-black/10 rounded-full shadow-sm transition hover:bg-[var(--accent)] hover:text-[var(--primary)] duration-300">
            <FaWandMagicSparkles className="text-sm sm:text-base" />
            <p className="font-body text-xs sm:text-sm">
              New Smart Task AI Feature
            </p>
          </div>

          {/* HERO TEXT */}
          <div className="flex flex-col items-center gap-3 max-w-3xl">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--text)] leading-tight">
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
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button className="shadow-sm w-full sm:w-auto">Get Started</Button>
            <Button className="shadow-sm w-full sm:w-auto" variant="secondary">
              Book a Demo
            </Button>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="w-full max-w-5xl mt-5 px-2 sm:px-4">
          <img
            src={demoImage}
            alt="demo-image"
            className="w-full rounded-xl shadow-[0_0_30px_rgba(99,102,241,0.3)] border border-black/10"
          />
        </div>

        {/* FLOATING ELEMENTS */}
        <div className="absolute inset-0 hidden lg:block floating pointer-events-none">
          <div className="absolute top-[8%] right-[12%] text-[var(--accent)] bg-[var(--secondary)] p-3 rounded-xl shadow-sm transition duration-300 hover:bg-[var(--accent)] hover:text-[var(--primary)] hover:shadow-[0_0_50px_rgb(99,102,241)] pointer-events-auto">
            <IoBarChartOutline />
          </div>

          <div className="absolute top-[24%] right-[15%] text-[var(--accent)] bg-[var(--secondary)] p-3 rounded-xl shadow-sm transition duration-300 hover:bg-[var(--accent)] hover:text-[var(--primary)] hover:shadow-[0_0_50px_rgb(99,102,241)] pointer-events-auto">
            <TiThListOutline />
          </div>

          <div className="absolute top-[24%] left-[15%] text-[var(--accent)] bg-[var(--secondary)] p-3 rounded-xl shadow-sm transition duration-300 hover:bg-[var(--accent)] hover:text-[var(--primary)] hover:shadow-[0_0_50px_rgb(99,102,241)] pointer-events-auto">
            <AiOutlineFileDone />
          </div>
          <div className="absolute top-[8%] left-[12%] text-[var(--accent)] bg-[var(--secondary)] p-3 rounded-xl shadow-sm transition duration-300 hover:bg-[var(--accent)] hover:text-[var(--primary)] hover:shadow-[0_0_50px_rgb(99,102,241)] pointer-events-auto">
            <MdOutlineCloudDone />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section
        id="features-section"
        className="flex flex-col gap-2 bg-[var(--secondary)] px-4 py-12 sm:px-6 lg:px-8 lg:py-12 overflow-hidden items-center"
      >
        {/* content-wrapper */}
        <div className="w-full flex flex-col items-center justify-center gap-6">
          {/* PAGE HEADER */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-center font-heading font-semibold text-[var(--text)] leading-tight">
              Everything You Need To Know
            </h2>
            <p className="hidden md:block text-[color:rgba(0,0,0,0.6)] font-body text-sm sm:text-base md:text-lg text-center">
              Thoughtfully designed tools powered by AI to help you plan,
              prioritize, and stay focused.
            </p>
          </div>

          {/* cards container */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-6">
            <Card
              icon={<HiOutlineUserGroup className="w-4 h-4" />}
              title="Manage Client & Projects"
              description="Keep clients, projects, and tasks organized in one clear workspace."
              link="/readmore-card1"
            />

            <Card
              icon={<TbFileInvoice className="w-4 h-4" />}
              title="Create & Track Invoices"
              description="Easily manage your billing and stay on top of payments in one place."
              link="/readmore-card2"
            />

            <Card
              icon={<PiMagicWand className="w-4 h-4 text-[var(--accent)]" />}
              title="AI-Powered Suggestions"
              description="Easily manage your billing and stay on top of payments in one place."
              link="/readmore-card3"
              className="bg-[var(--accent)]"
              iconClass="bg-[var(--primary)]"
              titleClass="text-[var(--primary)]"
              descClass="text-white/80"
              ctaClass="text-[var(--primary)]"
            />
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section
        id="pricing-section"
        className="flex flex-col gap-6 bg-[var(--secondary)] px-4 py-12 sm:px-6 lg:px-8 lg:py-12 overflow-hidden items-center"
      >
        {/* content wrapper */}
        <div className="w-full flex flex-col items-center justify-center gap-6">
          {/* PAGE HEADER */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-center font-heading font-semibold text-[var(--text)] leading-tight">
              Pricing That Scales With You
            </h2>
            <p className="hidden md:block text-[color:rgba(0,0,0,0.6)] font-body text-sm sm:text-base md:text-lg text-center">
              Flexible plans designed for freelancers and teams to manage
              invoices effortlessly.
            </p>
          </div>
          {/* pricing-card-container */}
          <div className="w-full flex flex-col items-stretch justify-center md:flex-row gap-2 md:gap-6">
            <PricingCard
              id="starter"
              title="Starter"
              titleClass="text-[var(--text)]"
              description="Get started with the essentials and manage 
            your invoices effortlessly."
              descriptionClass="text-[color:rgba(0,0,0,0.6)]"
              pricing="FREE"
              pricingClass="text-[var(--accent)]"
              features={[
                "Create Up to 10 Invoices/Month",
                "Tracks Payment in Real-time",
                "Basic Support & Insights",
                "Email Support",
              ]}
              featuresClass="text-[var(--text)]"
              iconClass="text-[var(--text)]"
              btn="Get Started"
            />

            <PricingCard
              id="pro"
              title="Pro"
              titleClass="text-[var(--text)]"
              description="Unlock advanced features for growing 
            teams and streamline your workflow."
              descriptionClass="text-[color:rgba(0,0,0,0.6)]"
              pricing="$15/MONTH"
              pricingClass="text-[var(--accent)]"
              features={[
                "Unlimited Invoices",
                "Advanced payment tracking",
                "Recurring invoices & automated reminders",
                "Export to CSV/PDF",
                "Priority email support",
              ]}
              featuresClass="text-[var(--text)]"
              btn="Upgrade to Pro"
              btnClass="bg-transparent border border-[var(--text)]/50 text-[var(--text)]"
              iconClass="text-[var(--text)]"
            />

            <PricingCard
              id="enterprise"
              className="bg-[var(--accent)] text-[var(--primary)]"
              title="Enterprise"
              titleClass="text-[var(--primary)]"
              description="Full control and insights for teams scaling
            fast with custom support."
              descriptionClass="text[var(--primary)]"
              pricing="$49/Month"
              pricingClass="text-[var(--primary)]"
              features={[
                "Everything in Pro",
                "Team management & permissions",
                "Advanced analytics dashboard",
                "API access for integrations",
                "Dedicated support & onboarding",
              ]}
              btn="Contact Sales"
              btnClass="bg-transparent border border-[var(--text)]/50 text-[var(--primary)]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
