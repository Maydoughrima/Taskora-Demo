import { TbFileInvoice } from "react-icons/tb";
import { AiOutlineUserAdd } from "react-icons/ai";
import { RiProgress2Line } from "react-icons/ri";
import { FaRegChartBar } from "react-icons/fa";
import Heading from "../components/UI/SectionTitle";
import Desc from "../components/UI/SectionDescription";
import WorkFlowCard from "../components/UI/WorkflowsCard";

export default function WorkflowsSection (){
    return (
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
    );
}