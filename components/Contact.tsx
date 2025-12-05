"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 768) setIsMobile(true);
  }, []);
  const serviceOptions = [
    "Software Development",
    "Mobile App Development",
    "Website Development",
    "UI/UX Design",
    "Cloud & DevOps",
    "AI & Data Services",
    "Quality Assurance",
    "Cybersecurity",
    "IT Consulting",
    "Support & Maintenance",
    "Integration Services",
    "ERP/CRM Solutions",
    "Tech Staffing / Resource Augmentation",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
    service: "",
    message: "",
  });
  const [messageCount, setMessageCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ctx = gsap.context(() => {
        // Enhanced title animation with dramatic effect
        gsap.fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 80,
            scale: 0.8,
            rotationX: 45,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 1.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Enhanced form animation with 3D effect
        gsap.fromTo(
          formRef.current,
          {
            opacity: 0,
            x: -80,
            scale: 0.9,
            rotationY: 15,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            rotationY: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Enhanced info section animation with 3D effect
        gsap.fromTo(
          infoRef.current,
          {
            opacity: 0,
            x: 80,
            scale: 0.9,
            rotationY: -15,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            rotationY: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: infoRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Text reveal animation
        gsap.utils.toArray(".contact-text").forEach((text: any) => {
          gsap.fromTo(
            text,
            {
              opacity: 0,
              y: 30,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: text,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        // Form input focus animations
        gsap.utils.toArray(".form-input").forEach((input: any) => {
          input.addEventListener("focus", () => {
            gsap.to(input, {
              scale: 1.02,
              duration: 0.2,
              ease: "power2.out",
            });
          });

          input.addEventListener("blur", () => {
            gsap.to(input, {
              scale: 1,
              duration: 0.2,
              ease: "power2.out",
            });
          });
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    // Limits
    const limits: Record<string, number> = {
      name: 30,
      phone: 15,
      company: 50,
      designation: 50,
      message: 300,
    };

    if (limits[name] && value.length > limits[name]) return;

    // Update message counter
    if (name === "message") {
      setMessageCount(value.length);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("error");
      alert("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLScbmQa9Hc9-hNHGj8AVVVsAVRIR1JVDsHKpggvG0G3rPKfyvg/formResponse";

    const formBody = new FormData();
    formBody.append("entry.1074030697", formData.name); // Name
    formBody.append("entry.913986537", formData.email); // Email
    formBody.append("entry.1462838736", formData.phone); // Phone
    formBody.append("entry.1485178666", formData.company); // Company
    formBody.append("entry.1112075466", formData.designation); // Designation
    formBody.append("entry.1501056122", formData.service); // NEW field
    formBody.append("entry.1533686460", formData.message); // Message

    try {
      await fetch(googleFormURL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        designation: "",
        message: "",
        service: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Google Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (submitStatus === "success") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle");
      }, 4000); // hide after 4 seconds

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Email",
      value: "info@codriva.com",
      href: "mailto:info@codriva.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Phone",
      value: "9211508849, +91-120-454-8122",
      href: isMobile ? "tel:9211508849" : undefined,
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Location",
      value:
        "Office no. 616 & 617, 6th Floor, Tower-B, Ithum, Plot A-40, Sector-62, Noida, Uttar Pradesh 201309",
      href: "https://www.google.com/maps?q=28.627342575507704,77.37247588037425",
    },
    {
      icon: <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "LinkedIn",
      value: "linkedin.com/company/codriva",
      href: "https://linkedin.com/company/codriva",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 dark:from-slate-800 dark:via-blue-900/30 dark:to-indigo-900/40"></div>

      {/* Background Image */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&auto=format&q=80")`,
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-blue-400/20 dark:bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-indigo-400/20 dark:bg-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-300/20 dark:bg-blue-400/30 rounded-full blur-xl animate-pulse"></div>
      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6 font-display"
          >
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600">
              Touch
            </span>
          </h2>
          <p className="contact-text text-xl text-[#656d76] dark:text-[#8b949e] max-w-3xl mx-auto">
            Ready to start your next project? We'd love to hear from you. Send
            us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6">
                Get a free consultation
              </h3>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
                  <div className="flex">
                    <svg
                      className="w-5 h-5 text-green-400 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-green-800 dark:text-green-200 text-sm">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                  <div className="flex">
                    <svg
                      className="w-5 h-5 text-red-400 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-red-800 dark:text-red-200 text-sm">
                      Sorry, there was an error sending your message. Please try
                      again.
                    </p>
                  </div>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                {/* NAME + PHONE */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#24292f] dark:text-[#f0f6fc] mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      maxLength={30}
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[#24292f] dark:text-[#f0f6fc] mb-2"
                    >
                      Phone *
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      maxLength={15}
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#24292f] dark:text-[#f0f6fc] mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>

                {/* COMPANY + DESIGNATION */}
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {/* COMPANY */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-[#24292f] dark:text-[#f0f6fc] mb-2"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      maxLength={50}
                      value={formData.company}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Your company"
                    />
                  </div>

                  {/* DESIGNATION → only show if company has value */}
                  {formData.company.trim() !== "" && (
                    <div className="transition-all duration-300">
                      <label
                        htmlFor="designation"
                        className="block text-sm font-medium text-[#24292f] dark:text-[#f0f6fc] mb-2"
                      >
                        Designation
                      </label>
                      <input
                        id="designation"
                        name="designation"
                        maxLength={50}
                        value={formData.designation}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Your designation"
                      />
                    </div>
                  )}
                </div>
                {/* SERVICE SELECTION DROPDOWN */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-[#24292f] dark:text-[#f0f6fc] mb-2"
                  >
                    Service Required *
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {serviceOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#24292f] dark:text-[#f0f6fc] mb-2"
                  >
                    Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    maxLength={300}
                    className="form-input resize-none"
                    placeholder="Tell us about your project..."
                  />

                  {/* Character Counter */}
                  <div className="text-right text-xs mt-1 text-[#656d76] dark:text-[#8b949e]">
                    {messageCount}/300
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary bg-blue-600 w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div ref={infoRef}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6">
                  Contact Information
                </h3>
                <p className="text-[#656d76] dark:text-[#8b949e] mb-8 leading-relaxed">
                  We're here to help and answer any question you might have. We
                  look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const isPhone = info.title === "Phone";
                  const link = isPhone && !isMobile ? undefined : info.href;

                  return (
                    <a
                      key={index}
                      href={link}
                      target={link?.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link?.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={`flex items-center justify-between p-4 rounded-lg transition-colors duration-200 group
        ${
          link
            ? "hover:bg-white dark:hover:bg-[#161b22] cursor-pointer"
            : "cursor-default pointer-events-none"
        }
      `}
                    >
                      <div className="flex items-center">
                        <div className="text-2xl mr-4">{info.icon}</div>
                        <div>
                          <div className="font-medium text-[#24292f] dark:text-[#f0f6fc]">
                            {info.title}
                          </div>
                          <div className="text-[#656d76] dark:text-[#8b949e] text-sm">
                            {info.value}
                          </div>
                        </div>
                      </div>

                      {/* Arrow appears only if clickable */}
                      {link && (
                        <ArrowUpRight
                          className="w-5 h-5 text-[#656d76] dark:text-[#8b949e] opacity-60 
          group-hover:opacity-100 group-hover:text-[#0969da] 
          dark:group-hover:text-[#58a6ff] transition-all duration-200"
                        />
                      )}
                    </a>
                  );
                })}
              </div>

              <div className="card p-6">
                <h4 className="font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-3">
                  Business Hours
                </h4>
                <div className="space-y-2 text-sm text-[#656d76] dark:text-[#8b949e]">
                  <div>Monday - Friday: 10:00 AM - 7:00 PM</div>
                  <div>Saturday - Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
