"use client";

import { useState } from "react";
import Link from "next/link";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    phone: "",
    linkedin: "",
    location: "",
    message: "",
    resume: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const openPositions = [
    {
      title: "Frontend Developer",
      type: "Full-time",
      location: "Noida, India (Hybrid)",
      description:
        "React, Next.js, Tailwind, GSAP animation experience preferred.",
      link: "#apply",
    },
    {
      title: "Backend Developer",
      type: "Full-time",
      location: "Noida, India (Hybrid)",
      description: "Node.js, Express, PostgreSQL, Microservices architecture.",
      link: "#apply",
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Remote",
      description: "Figma, wireframing, prototyping, design systems.",
      link: "#apply",
    },
  ];

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSeRUSanucmjbdZy4AfBXfuoM8duALZxf9-7yEQNlU2UC0HsEg/formResponse";

    const body = new FormData();

    // Replace the entry IDs with real Google Form IDs
    body.append("entry.1034807482", formData.Name);
    body.append("entry.748039128", formData.email);
    body.append("entry.442978354", formData.phone);
    body.append("entry.1350125836", formData.message);
    body.append("entry.1517918904", formData.linkedin);
    body.append("entry.534075004", formData.location);

    try {
      await fetch(googleFormURL, {
        method: "POST",
        mode: "no-cors",
        body,
      });

      setSubmitStatus("success");
      setFormData({
        Name: "",
        email: "",
        phone: "",
        linkedin: "",
        location: "",
        message: "",
        resume: null,
      });
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 
      dark:from-slate-800 dark:via-blue-900/30 dark:to-indigo-900/40"
      ></div>

      <div className="container-max relative z-10 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] font-display mb-6">
            Join Our{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r 
              from-blue-600 via-blue-700 to-blue-800 dark:from-blue-400 
              dark:via-blue-500 dark:to-blue-600"
            >
              Team
            </span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-[#656d76] dark:text-[#8b949e]">
            We're always looking for talented, passionate people who want to
            build meaningful digital products.
          </p>
        </div>

        {/* Open Positions */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-10 text-center">
            Open Positions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openPositions.map((job, index) => (
              <div key={index} className="card p-8 hover-card transition-all">
                <h3 className="text-xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
                  {job.title}
                </h3>
                <p className="text-[#656d76] dark:text-[#8b949e] text-sm mb-2">
                  {job.type} • {job.location}
                </p>
                <p className="text-[#656d76] dark:text-[#8b949e] mb-4 text-sm">
                  {job.description}
                </p>
                <Link href="#apply" className="btn-primary text-center">
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div
          id="apply"
          className="max-w-3xl mx-auto card p-10 rounded-2xl shadow-xl"
        >
          <h2 className="text-3xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6 text-center">
            Apply Now
          </h2>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded">
              <p className="text-green-800 text-sm">
                Your application has been successfully submitted.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded">
              <p className="text-red-800 text-sm">
                Something went wrong. Please try again.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="relative">
              <input
                type="text"
                name="Name"
                required
                value={formData.Name}
                onChange={handleChange}
                className="form-input peer pt-6 pb-3"
                placeholder=" "
              />
              <label className="floating-label"> Name *</label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="form-input peer pt-6 pb-3"
                placeholder=" "
              />
              <label className="floating-label">Email *</label>
            </div>

            {/* Phone (Simplified — mobile code removed) */}
            <div className="relative">
              <input
                type="text"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="form-input peer pt-6 pb-3"
                placeholder=" "
              />
              <label className="floating-label">Phone *</label>
            </div>

            {/* LinkedIn */}
            <div className="relative">
              <input
                type="text"
                name="linkedin"
                required
                value={formData.linkedin}
                onChange={handleChange}
                className="form-input peer pt-6 pb-3"
                placeholder=" "
              />
              <label className="floating-label">LinkedIn Profile *</label>
            </div>

            {/* Location */}
            <div className="relative">
              <input
                type="text"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="form-input peer pt-6 pb-3"
                placeholder=" "
              />
              <label className="floating-label">Location *</label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="form-input peer pt-6 pb-3 resize-none"
                placeholder=" "
              />
              <label className="floating-label">Message (optional)</label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full py-3 text-lg disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
