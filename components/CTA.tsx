"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const industryCTA = {
  retail: {
    title: "Empower Your Retail & E-Commerce Growth",
    subtitle:
      "Boost conversions, streamline operations, and deliver seamless shopping experiences with our tailored retail tech solutions.",
    button: "Build Your Retail Solution",
  },
  edtech: {
    title: "Reinvent Learning with Modern EdTech",
    subtitle:
      "Create engaging, scalable, and interactive digital learning platforms that empower institutions and learners.",
    button: "Start Your EdTech Project",
  },
  fintech: {
    title: "Accelerate Innovation in FinTech",
    subtitle:
      "Build secure, high-performance financial products that redefine digital banking, payments, and financial automation.",
    button: "Build FinTech Solutions",
  },
  logistics: {
    title: "Optimize Your Logistics & Supply Chain",
    subtitle:
      "Enhance tracking, automation, and real-time visibility with our intelligent logistics platforms.",
    button: "Transform Your Logistics",
  },
  realestate: {
    title: "Digitize Property & Real Estate Experiences",
    subtitle:
      "From virtual tours to property management platforms, create seamless real estate digital ecosystems.",
    button: "Build PropTech Solutions",
  },
  ondemand: {
    title: "Launch Your On-Demand Service Platform",
    subtitle:
      "From delivery apps to home services, we build scalable on-demand platforms that users love.",
    button: "Start Your On-Demand Platform",
  },
  telecom: {
    title: "Modernize Telecom with Smarter Software",
    subtitle:
      "Power telecom operations with automated systems, analytics, and digital customer engagement solutions.",
    button: "Build Telecom Solutions",
  },
  events: {
    title: "Power Seamless Events & Ticketing Experiences",
    subtitle:
      "Build platforms for event discovery, ticketing, live analytics, and user engagement.",
    button: "Build an Event Platform",
  },
  media: {
    title: "Transform Media & News Delivery",
    subtitle:
      "Develop platforms for streaming, news distribution, content delivery, and digital publishing.",
    button: "Start Your Media Project",
  },
  travel: {
    title: "Reimagine Travel & Hospitality Experiences",
    subtitle:
      "Create seamless booking, concierge, and travel management platforms built for global experiences.",
    button: "Build Travel Solutions",
  },
  restaurant: {
    title: "Digitize Your Restaurant & Cloud Kitchen",
    subtitle:
      "Enhance ordering, delivery, operations, and customer retention with modern restaurant tech solutions.",
    button: "Start Your Restaurant Project",
  },
  healthcare: {
    title: "Advance Healthcare with Intelligent Tech",
    subtitle:
      "Build secure, compliant, and patient-centric healthcare platforms for the future of medical innovation.",
    button: "Build Healthcare Solutions",
  },
};


const serviceCTA = {
  "custom-software-development": {
    title: "Build Custom Software Tailored to Your Vision",
    subtitle:
      "From concept to deployment, we craft software engineered for performance, scalability, and long-term growth.",
    button: "Start Custom Development",
  },
  "ui-ux-design": {
    title: "Create Beautiful & Intuitive Digital Experiences",
    subtitle:
      "Delight users with stunning UI and seamless UX crafted through research-driven design.",
    button: "Improve Your Product UX",
  },
  "mobile-app-development": {
    title: "Launch High-Quality Mobile Apps",
    subtitle:
      "We build fast, reliable, and feature-rich Android/iOS apps tailored for user engagement and business scale.",
    button: "Build Your Mobile App",
  },
  "product-engineering": {
    title: "Bring Your Product Idea to Life",
    subtitle:
      "From MVP to full-scale product, engineer robust, scalable solutions with a complete product lifecycle approach.",
    button: "Start Product Engineering",
  },
  "cloud-devops": {
    title: "Scale Efficiently with Cloud & DevOps",
    subtitle:
      "Optimize infrastructure, automate deployments, and improve reliability with modern cloud-native DevOps practices.",
    button: "Upgrade Your Cloud Ops",
  },
  "api-system-integration": {
    title: "Integrate Your Systems Seamlessly",
    subtitle:
      "Connect applications, automate workflows, and build unified systems through robust API integrations.",
    button: "Integrate Your Systems",
  },
  "data-analytics": {
    title: "Turn Data Into Actionable Insights",
    subtitle:
      "Unlock decision-making power with real-time dashboards, analytics models, and data strategy solutions.",
    button: "Start Data Transformation",
  },
  "ai-machine-learning": {
    title: "Leverage AI for Intelligent Automation",
    subtitle:
      "Build AI-powered systems that learn, predict, and automate across your operations.",
    button: "Start Your AI Project",
  },
  "big-data-solution": {
    title: "Process & Analyze Big Data at Scale",
    subtitle:
      "Deploy data pipelines, processing engines, and insights dashboards for enterprise-level data operations.",
    button: "Build Big Data Systems",
  },
  "it-consulting": {
    title: "Make Smarter Technology Decisions",
    subtitle:
      "Get expert guidance across strategy, architecture, modernization, and digital transformation.",
    button: "Get IT Consulting",
  },
  "qa-testing": {
    title: "Ensure Quality with Comprehensive Testing",
    subtitle:
      "Deliver stable, secure, and high-performance software through rigorous QA and automated testing.",
    button: "Test Your Product",
  },
  "support-maintenance": {
    title: "Keep Your Software Running Smoothly",
    subtitle:
      "Ensure reliability with monitoring, updates, bug fixes, optimizations, and ongoing support.",
    button: "Get Support & Maintenance",
  },
};



const CTA = () => {
  const pathname = usePathname();
  const slug = pathname.split("/")[2];

  let cta = {
    title: "Ready to Transform Your Business?",
    subtitle:
      "Let's discuss how we can help you achieve your goals with innovative digital solutions.",
    button: "Get a Free Consultation",
  };

type IndustrySlug = keyof typeof industryCTA;
type ServiceSlug = keyof typeof serviceCTA;

if (pathname.startsWith("/industries/") && slug in industryCTA) {
  cta = industryCTA[slug as IndustrySlug];
}

if (pathname.startsWith("/services/") && slug in serviceCTA) {
  cta = serviceCTA[slug as ServiceSlug];
}


  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container-max text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{cta.title}</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">{cta.subtitle}</p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all"
        >
          {cta.button}
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
