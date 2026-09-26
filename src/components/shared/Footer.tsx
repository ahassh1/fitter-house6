import Image from "next/image";
import footerLogo from "../../assets/fitfooterlogo.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0d0d0d]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row lg:px-0">
        <div className="flex items-center gap-3">
          <Image
            src={footerLogo}
            alt="FitLog logo"
            width={40}
            height={40}
            className="object-contain"
          />

          <h2 className="text-lg font-bold tracking-wide text-white">
            FIT<span className="text-[#C2F800]">LOG</span>
          </h2>
        </div>

        <p className="text-center text-xs text-gray-500 sm:text-right sm:text-sm">
          © 2026 FitLog — Workout Library.
          <span className="text-gray-400">Train hard, log honest.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;