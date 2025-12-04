import MainServices from "@/components/MainServices";
import Image from "next/image";
import Link from "next/link";

export default function AllServicesPage() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-[#C9E0F1]">
      
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 
      dark:from-slate-800 dark:via-blue-900/30 dark:to-indigo-900/40"></div>

      {/* FLOATING ELEMENTS */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-blue-400/20 dark:bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-36 h-36 bg-indigo-400/20 dark:bg-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-300/20 dark:bg-blue-400/30 rounded-full blur-xl animate-pulse"></div>

      {/* ========================== */}
      {/* HERO SECTION */}
      {/* ========================== */}
      <div className="relative z-10">
        
        {/* HERO BACKGROUND IMAGE (YOU WILL ADD) */}
        <div className="relative h-[85vh] w-full overflow-hidden rounded-b-3xl">
          <Image
            src="/assets/images/2149406783.jpg"                 // ← you will add your path
            alt="Services Background"
            fill
            className="object-cover "
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* HERO TEXT */}
        <div className="absolute top-0 left-0 w-full h-[70vh] flex flex-col items-center justify-center text-center px-6 z-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-display">
            Explore Our  
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100">
              {" "}Services
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-white/90 max-w-3xl leading-relaxed">
            Comprehensive digital services crafted to help your business scale, innovate, and succeed.
          </p>

          {/* CTA BUTTON */}
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 
              text-white px-8 py-3 rounded-lg text-lg font-medium shadow-lg transition-colors"
          >
            Lets talk
          </Link>
        </div>

      </div>

      {/* ========================== */}
      {/* MAIN SERVICES */}
      {/* ========================== */}
      <div className="relative z-20 mt-24 pb-20 container-max">
        <MainServices />
      </div>
    </section>
  );
}
