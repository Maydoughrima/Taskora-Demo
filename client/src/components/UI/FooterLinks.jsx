import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function FooterLinks() {
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: "Products",
      links: ["Features", "Pricing", "Integrations", "Changelogs"],
    },
    {
      title: "Resources",
      links: ["Documentation", "Tutorials", "Blog", "Support"],
    },
    {
      title: "Company",
      links: ["About", "Carrers", "Contact", "Partner"],
    },
  ];

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[var(--secondary)] text-[var(--text)]">
      
      {/* MOBILE VIEW */}
      <div className="lg:hidden flex flex-col md:flex-row md:gap-6">
        {sections.map((section, index) => (
          <div key={index}>
            
            {/* BUTTON */}
            <button
              onClick={() => toggleSection(index)}
              className="flex w-full justify-between items-center font-medium text-ctaTxt"
            >
              {section.title}
              <IoMdArrowDropdown
                className={`text-xl transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* DROPDOWN */}
            <div
              className={`flex flex-col gap-2 mt-4 mb-4 overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {section.links.map((link, i) => (
                <a key={i} href="#" className="text-sm text-[color:rgba(0,0,0,0.6)] font-body">
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden lg:grid grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h3 className="font-medium text-ctaTxt">
              {section.title}
            </h3>
            {section.links.map((link, i) => (
              <a key={i} href="#" className="text-sm text-[color:rgba(0,0,0,0.6)]">
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

    </div>
  );
}