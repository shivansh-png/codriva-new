import Image from "next/image";
import Link from "next/link";
import Advantages from "@/components/Advantages";
import CTA from "@/components/CTA";

export default function MobileAppDevelopment() {
  return (
   <>  
<section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6">
            Mobile App Development
          </h1>
          <div className="w-24 h-1 bg-[#0969da] mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-4">
          <div className="relative">
            <Image
              src="/assets/images/representations.png"
              alt="Mobile app development"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
              <span className="text-[#0969da] font-semibold">
                Mobile app development
              </span>{" "}
              is the creation of seamless, high-performing applications designed
              for smartphones, tablets, and other mobile devices. At Codriva, we
              specialize in building intuitive, feature-rich mobile apps that
              help businesses connect with users on the go — across Android,
              iOS, or both through cross-platform solutions.
            </p>
            <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
              Our process covers the full lifecycle — from user-centric
              interface design and scalable architecture to rigorous testing and
              deployment on platforms like the App Store and Google Play. We
              leverage both native technologies (Java/Kotlin for Android, Swift
              for iOS) and modern cross-platform frameworks like Flutter and
              React Native to deliver apps that are responsive, fast, and
              secure.
            </p>
            <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
              In an increasingly mobile-first world, our solutions ensure your
              brand is always within reach — delivering exceptional user
              experiences, boosting engagement, and driving business growth
              through powerful digital mobility.
            </p>
          </div>
        </div>

         
       </div>
    </section>
      <Advantages />
      <CTA />
</>
  );
}
