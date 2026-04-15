import Heading from "../components/UI/SectionTitle";
import Desc from "../components/UI/SectionDescription";
import TesCardMain from "../components/UI/TestimonyCard-main";
import TesCardSec from "../components/UI/TestimonyCard-sec";
import testimonialimg1 from "../assets/test-img-1.png";
import testimonialimg2 from "../assets/test-img-2.png";
import testimonialimg3 from "../assets/test-img-3.png";

export default function TestimonialsSection() {
  return (
    <section
      id="testimony-section"
      className="flex flex-col gap-6 bg-[var(--secondary)] px-4 py-8 sm:px-6 lg:px-8 lg:py-20 overflow-hidden items-center"
    >
      {/* content wrapper */}
      <div className="w-full flex flex-col items-center justify-center gap-6">
        {/* Page header */}
        <div className="flex flex-col gap-2">
          <Heading level={2}>Trusted by Professionals Worldwide</Heading>
          <Desc>
            See how teams and freelancers use Taskora to simplify invoicing and
            stay productive.
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
  );
}
