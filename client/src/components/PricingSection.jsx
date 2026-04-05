import Heading from "../components/UI/SectionTitle";
import Desc from "../components/UI/SectionDescription";
import PricingCard from "../components/UI/Pricing-card";

export default function PricingSection() {
  return (
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
            Flexible plans designed for freelancers and teams to manage invoices
            effortlessly.
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
  );
}
