import Heading from "../components/UI/SectionTitle";
import Desc from "../components/UI/SectionDescription";
import Card from "../components/UI/Card";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbFileInvoice } from "react-icons/tb";
import { PiMagicWand } from "react-icons/pi";


export default function FeaturesSection (){
    return(
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
    );
}