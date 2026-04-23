import PricingCard from "../../components/UI/Pricing-card";

export default function PricingPage() {
  return (
    <section className="flex flex-col gap-14 p-4 md:px-6 lg:px-4 lg:pt-12 bg-[var(--primary)]">
      {/* HEADER */}
      <div className="text-center flex flex-col gap-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[var(--text)] font-heading">
          Simple pricing for individuals and teams
        </h1>

        <p className="text-[var(--secondary400)] text-sm md:text-base leading-relaxed font-body">
          Start free, scale when you need to. Taskora’s pricing is designed to
          grow with your workflow — from personal productivity to full team
          operations.
        </p>
      </div>

      {/* PRICING GRID */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {/* STARTER */}
        <PricingCard
          id="starter"
          title="Starter"
          titleClass="text-[var(--text)]"
          description="Perfect for freelancers starting to organize work and manage basic invoices."
          descriptionClass="text-[var(--secondary400)]"
          pricing="FREE"
          pricingClass="text-[var(--cta)]"
          features={[
            "Up to 10 invoices per month",
            "Basic task & workflow tracking",
            "Client management (limited)",
            "Email support",
          ]}
          featuresClass="text-[var(--text)]"
          iconClass="text-[var(--cta)]"
          btn="Get Started"
          btnClass="w-full mt-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--cta)]"
        />

        {/* PRO (FEATURED) */}
        <PricingCard
          id="pro"
          title="Pro"
          className="border border-[var(--cta)]/40 shadow-lg"
          titleClass="text-[var(--text)]"
          description="Best for growing freelancers and small teams that need full control."
          descriptionClass="text-[var(--secondary400)]"
          pricing="$15 / month"
          pricingClass="text-[var(--cta)]"
          features={[
            "Unlimited invoices",
            "Advanced task automation",
            "Full client & project system",
            "Calendar & scheduling tools",
            "Priority support",
          ]}
          featuresClass="text-[var(--text)]"
          iconClass="text-[var(--cta)]"
          btn="Upgrade to Pro"
          btnClass="w-full mt-4 bg-[var(--cta)] text-[var(--primary)] transition-all duration-300 hover:-translate-y-1"
        />

        {/* ENTERPRISE */}
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
          btnClass="bg-transparent border border-[var(--text)]/50 text-[var(--primary)] transition-all hover:bg-[var(--primary)] hover:text-[var(--text)] hover:border-none duration-300 hover:-translate-y-1"
          iconClass="text-[var(--primary)]"
        />
      </div>
    </section>
  );
}
