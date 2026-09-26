"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logoImg from "../../assets/logo.png";

const Navbar = () => {
  const pathname = usePathname();

  const links = (
    <>
      <Link
        href="/"
        className={`px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-[#C2F800] ${
          pathname === "/" ? "text-[#C2F800]" : "text-white"
        }`}
      >
        Workouts
      </Link>

      <Link
        href="/my-plan"
        className={`px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-[#C2F800] ${
          pathname === "/my-plan" ? "text-[#C2F800]" : "text-white"
        }`}
      >
        My Plan
      </Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        <div className="dropdown lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:border-[#C2F800] hover:text-[#C2F800]"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu dropdown-content mt-3 w-52 rounded-xl border border-white/10 bg-[#111] p-3 shadow-xl"
          >
            {links}
          </ul>
        </div>

        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logoImg}
            alt="FitLog logo"
            width={36}
            height={36}
            className="object-contain"
          />

          <span className="text-lg font-bold tracking-wide text-white">
            FIT<span className="text-[#C2F800]">LOG</span>
          </span>
        </Link>

        <div className="hidden lg:flex">
          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1">
            {links}
          </div>
        </div>


        <div className="flex items-center gap-1">
          <Link
            href="/my-plan"
            className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium transition-all duration-200 hover:bg-white/5 ${
              pathname === "/my-plan"
                ? "text-[#C2F800]"
                : "text-white"
            }`}
          >
            <span>Plan</span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C2F800] text-[12px] font-bold text-black">
              0
            </span>
          </Link>

          <Link
            href="/status"
            className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium transition-all duration-200 hover:bg-white/5 ${
              pathname === "/status"
                ? "text-[#C2F800]"
                : "text-white"
            }`}
          >
            <span>Status</span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[12px] text-white">
              0
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;