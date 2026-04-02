import { FaWandMagicSparkles } from "react-icons/fa6";
import { IoBarChartOutline } from "react-icons/io5";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdOutlineCloudDone } from "react-icons/md";
import { TiThListOutline } from "react-icons/ti";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbFileInvoice } from "react-icons/tb";
import { PiMagicWand } from "react-icons/pi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { RiProgress2Line } from "react-icons/ri";
import { FaRegChartBar } from "react-icons/fa";
import Button from "../../components/UI/Button";
import demoImage from "../../assets/web-img1.jpg";
import Card from "../../components/UI/Card";
import PricingCard from "../../components/UI/Pricing-card";
import Heading from "../../components/UI/SectionTitle";
import Desc from "../../components/UI/SectionDescription";
import WorkFlowCard from "../../components/UI/WorkflowsCard";
import TesCardMain from "../../components/UI/TestimonyCard-main";
import TesCardSec from "../../components/UI/TestimonyCard-sec";
import testimonialimg1 from "../../assets/test-img-1.png";
import testimonialimg2 from "../../assets/test-img-2.png";
import testimonialimg3 from "../../assets/test-img-3.png";
import LOGO from "../../assets/LOGO.png";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import FooterLinks from "../../components/UI/FooterLinks";
import { LuCopyright } from "react-icons/lu";

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
        className="flex flex-col gap-6 bg-[var(--secondary)] px-4 py-14 sm:px-6 lg:px-8 lg:py-20 overflow-hidden items-center"
      >
        {/* content-wrapper */}
        <div className="w-full flex flex-col items-center justify-center gap-12">
          {/* PAGE HEADER */}
          <div className="flex flex-col gap-2">
            <Heading level={2}>Everything You Need to Know</Heading>
            <Desc>
              Thoughtfully designed tools powered by AI to help you plan,
              prioritize, and stay focused.
            </Desc>
          </div>

          {/* cards container */}
          <div className="w-full items-stretch flex flex-col md:flex-row gap-2 md:gap-6">
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
        className="flex flex-col gap-6 bg-[var(--secondary)] px-4 py-12 sm:px-6 lg:px-8 lg:py-20 overflow-hidden items-center"
      >
        {/* content wrapper */}
        <div className="w-full flex flex-col items-center justify-center gap-12">
          {/* PAGE HEADER */}
          <div className="flex flex-col gap-2">
            <Heading level={2}>Pricing That Scales With You</Heading>
            <Desc>
              Flexible plans designed for freelancers and teams to manage
              invoices effortlessly.
            </Desc>
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
              btnClass="transition-all hover:bg-[var(--cta)] duration-300 hover:-translate-y-1"
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
              btnClass="bg-transparent border border-[var(--text)]/50 text-[var(--text)] transition-all hover:bg-[var(--cta)] duration-300 hover:-translate-y-1 hover:text-[var(--primary)]"
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
              btnClass="bg-transparent border border-[var(--text)]/50 text-[var(--primary)] transition-all hover:bg-[var(--cta)] hover:border-none duration-300 hover:-translate-y-1"
            />
          </div>
        </div>
      </section>

      {/* WORKFLOWS SECTION */}
      <section
        id="worflows-section"
        className="flex flex-col lg:flex-row gap-6 bg-gradient-to-r from-[rgb(43,130,246,0.3)] to-[var(--primary)] px-4 py-12 sm:px-6 lg:px-8 lg:py-20 overflow-hidden items-center"
      >
        {/* content wrapper */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* PAGE Title */}
          <div className="order-1 lg:order-2">
            <div className="flex flex-col gap-2">
              <Heading level={2} className="lg:text-start">
                Built for{" "}
                <span className="text-[var(--accent)]">Efortless</span> Billing
                From Setup to Payments
              </Heading>
              <Desc className="lg:text-start">
                Everything you need to create, send, and track invoices
                streamlined in one simple platform.
              </Desc>
            </div>
          </div>

          {/* PAGE CONTENT */}
          <div className="order-2 lg:order-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
              <WorkFlowCard
                icon={<AiOutlineUserAdd />}
                stepName="Step 1"
                step="01"
                title="Sign up & Add Clients"
                description="Create an account and add your clients in seconds."
              />

              <WorkFlowCard
                icon={<TbFileInvoice />}
                stepName="Step 2"
                step="02"
                title="Create Projects & Invoices"
                description="Set up projects and generate invoices in minutes."
              />
              <WorkFlowCard
                icon={<RiProgress2Line />}
                stepName="Step 3"
                step="03"
                title="Track Progress & AI Insights"
                description="Monitor progress and get smart, actionable insights."
              />
              <WorkFlowCard
                icon={<FaRegChartBar />}
                stepName="Step 4"
                step="04"
                title="Analyze Reports & Optimize Work"
                description="Analyze performance and improve your workflow."
              />
            </div>
          </div>
        </div>
      </section>

      {/* testimony section */}
      <section
        id="testimony-section"
        className="flex flex-col gap-6 bg-[var(--secondary)] px-4 py-12 sm:px-6 lg:px-8 lg:py-20 overflow-hidden items-center"
      >
        {/* content wrapper */}
        <div className="w-full flex flex-col items-center justify-center gap-12">
          {/* Page header */}
          <div className="flex flex-col gap-2">
            <Heading level={2}>Trusted by Professionals Worldwide</Heading>
            <Desc>
              See how teams and freelancers use Taskora to simplify invoicing
              and stay productive.
            </Desc>
          </div>

          {/* CARD CONTAINER */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* card1 */}
            <TesCardMain
              image={testimonialimg1}
              header="“Taskora helped me simplify how I manage clients and invoices.”"
              feedback="Everything is easy to understand, and I always know what needs to be done next. It keeps my work organized without feeling overwhelming."
              author="Hannah Cole"
              title="Freelance Creatives"
            />

            <TesCardSec
              image={testimonialimg2}
              header="“We finally have clarity across our projects and billing.”"
              feedback="Taskora brings our tasks, invoices, and progress into one system, which makes collaboration smoother and planning more accurate."
              author="Luis Mendoza"
              title="Team Lead, Bright Studios"
            />

            <TesCardMain
              image={testimonialimg3}
              header="“It’s a tool that quietly improves how we work.”"
              feedback="The reports and insights give us better visibility without extra effort. It helps our team stay focused and efficient."
              author="Mark Rivera"
              title="Operations Manager, Northway"
            />
          </div>
        </div>
      </section>

      {/* footer */}
      <footer
        id="footer"
        className="flex flex-col gap-6 bg-[var(--secondary)] px-4 py-8 sm:px-6 lg:px-8 lg:pt-20 overflow-hidden items-center border border-t"
      >
        {/* content wrapper */}
        <div className="w-full flex flex-col justify-between gap-4 md:gap-8">
          <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-4 md:gap-8">
            {/* left */}
            <div className="flex flex-col gap-4 lg:max-w-lg">
              {/* header */}
              <div className="flex gap-4 items-center">
                <img
                  src={LOGO}
                  alt="logo"
                  className="w-[40px] h-[40px] bg-center"
                />
                <h4 className="font-heading font-semibold text-xl text-[var(--text)]">
                  Taskora
                </h4>
              </div>
              {/* Description */}
              <p className="font-body text-sm text-[var(--text)]">
                Taskora helps teams turn everyday tasks, projects, and invoices
                into a streamlined workflow — so work stays organized, progress
                is visible, and decisions are easier to make.
              </p>
              {/* icons */}
              <div className="flex gap-2">
                <Link className="inline-block text-[var(--text)] text-2xl">
                  <FaFacebookF />
                </Link>
                <Link className="inline-block text-[var(--text)] text-2xl">
                  <FaXTwitter />
                </Link>
                <Link className="inline-block text-[var(--text)] text-2xl">
                  <FaInstagram />
                </Link>
              </div>
            </div>

            {/* right */}
            <div className="flex gap-6 ">
              <FooterLinks />
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between item-center gap-10">
            {/* LEFT */}
            <div className="order-2 md:order-1">
              <p className="inline-flex text-sm md:text-base items-center gap-4 text-[color:rgba(0,0,0,0.6)] font-body">
                <LuCopyright className="text-xl" />
                2026 Taskora. All rights reserved.
              </p>
            </div>
            {/* right */}
            <div className="flex flex-col md:flex-row gap-2 order-1 md:order-2">
              <Link
                to="/"
                className="text-[color:rgba(0,0,0,0.6)] font-body underline underline-offset-4 decoration-[color:rgba(0,0,0,0.6)]"
              >
                Privacy Policy
              </Link>
              <Link
                to="/"
                className="text-[color:rgba(0,0,0,0.6)] font-body underline underline-offset-4 decoration-[color:rgba(0,0,0,0.6)]"
              >
                Terms of Service
              </Link>
              <Link
                to="/"
                className="text-[color:rgba(0,0,0,0.6)] font-body underline underline-offset-4 decoration-[color:rgba(0,0,0,0.6)]"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
