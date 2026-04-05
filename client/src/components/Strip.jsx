import { AiOutlineQuestionCircle } from "react-icons/ai";

export default function Strip() {
  return (
    <section className="flex flex-col p-2 md:px-6 lg:px-4">
      {/* Strip */}
      <div className="flex border p-2 items-center bg-gradient-to-b from-[rgb(43,130,246,0.2)] to-[var(--primary)]">
        <p className="inline-flex items-center gap-2 mobile text-sm text-[var(--text)] font-body md:hidden">
          <AiOutlineQuestionCircle className="text-inherit text-lg"/>
          Upgrade to Premium to unlock more features.
        </p>
        <p className="items-center gap-2 text-sm text-[var(--text)] font-body hidden md:inline-flex">
          <AiOutlineQuestionCircle className="text-inherit text-lg"/>
          Unlock powerful tools, smarter workflows, and premium features by
          upgrading your account.
        </p>
      </div>
    </section>
  );
}
