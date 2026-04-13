import { IoSearchOutline } from "react-icons/io5";

export default function DashHero() {
  return (
    <section className="flex flex-col p-4 md:px-6 lg:px-4 lg:pt-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
            {/* search bar & HERO TEXT */}
          <div className="order-1 lg:order-2 relative w-full lg:w-[320px] flex gap-2 items-center border-b lg:border lg:rounded-full px-2 py-4 lg:px-4 lg:py-2">
            <IoSearchOutline className="text-xl md:text-2xl text-[color:rgba(0,0,0,0.6)]"/>
          <input
          type="text"
          id="search-bar"
          placeholder="Search"
          className="w-full text-md md:text-lg font-body text-[var(--text)] bg-transparent outline-none focus:ring-0"
           />
          </div>
          {/* Hero Text */}
          <div className="order-2 lg:order-1">
            <h1 className="font-heading text-heroP leading-tight font-bold md:text-5xl">Welcome Back, <span className="text-[var(--accent)]">Joanne</span></h1>
          </div>
          </div>
        </section>
  )
}
