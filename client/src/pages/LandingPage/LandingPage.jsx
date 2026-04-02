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
import Footer from "../../components/UI/Footer";
import HeroSection from "../../components/HeroSection";

export default function Login() {
  return (
    <>
      {/* HERO SECTION */}
      <HeroSection/>

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
        <Footer/>
      </footer>
    </>
  );
}
