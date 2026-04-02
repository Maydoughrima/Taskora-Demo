import FooterLinks from "../../components/UI/FooterLinks";
import { LuCopyright } from "react-icons/lu";
import LOGO from "../../assets/LOGO.png";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function Footer(){
    return(
        
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
    );
}