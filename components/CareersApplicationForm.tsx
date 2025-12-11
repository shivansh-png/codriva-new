"use client";

import { useState, useEffect } from "react";

export default function CareersApplicationForm({
  presetPosition = "",
  onClose,
}: {
  presetPosition?: string;
  onClose?: () => void;
}) {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    phone: "",
    linkedin: "",
    location: "",
    message: "",
    position: presetPosition || "",
    resume: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] =
    useState<"idle" | "success" | "error">("idle");
  const [messageCount, setMessageCount] = useState(0);

  useEffect(() => {
    if (presetPosition) {
      setFormData((prev) => ({ ...prev, position: presetPosition }));
    }
  }, [presetPosition]);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;

    // block editing if position is pre-filled
    if (name === "position" && presetPosition) return;

    const limits: Record<string, number> = {
      Name: 30,
      phone: 15,
      linkedin: 150,
      location: 50,
      message: 2000,
    };

    if (limits[name] && value.length > limits[name]) return;

    if (name === "message") setMessageCount(value.length);

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");

    if (!formData.position.trim()) {
      alert("Please select a position.");
      setSubmitStatus("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("error");
      alert("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^[0-9]{7,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      setSubmitStatus("error");
      alert("Please enter a valid phone number.");
      return;
    }

    const linkedinRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/.+$/i;
    if (!linkedinRegex.test(formData.linkedin)) {
      setSubmitStatus("error");
      alert("Please enter a valid LinkedIn profile URL.");
      return;
    }

    if (formData.location.trim().length < 2) {
      setSubmitStatus("error");
      alert("Location is required.");
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSd2e1L5CF3vLX9Ed5992i6HbBZG9WsKTDZWyXblVViCYD6e7g/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: (() => {
            const body = new FormData();
            body.append("entry.913437780", formData.Name);
            body.append("entry.2024542103", formData.email);
            body.append("entry.1701224700", formData.phone);
            body.append("entry.1669018764", formData.position);
            body.append("entry.1190405057", formData.message);
            body.append("entry.1740960277", formData.linkedin);
            body.append("entry.1645537285", formData.location);
            return body;
          })(),
        }
      );

      setSubmitStatus("success");

      setFormData({
        Name: "",
        email: "",
        phone: "",
        linkedin: "",
        location: "",
        message: "",
        position: presetPosition || "",
        resume: null,
      });

      setMessageCount(0);

      // close form after success
      if (onClose) onClose();
    } catch {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  const positionOptions = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Lead",
    "React Native Developer",
    "Business Analyst",
    "Sales / Business Development",
    "Associate HR Manager",
    "Intern — Business Analyst",
    "Intern — BDR",
    "Intern — Software Developer",
    "Other / Not Listed",
  ];

  return (
    <section
      id="apply"
      className="relative max-w-3xl mx-auto card p-10 rounded-2xl shadow-xl mb-24"
    >
      {/* X Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          ✕
        </button>
      )}

      <h2 className="text-3xl font-bold text-center mb-6 text-[#24292f] dark:text-[#f0f6fc]">
        Apply Now
      </h2>

      {submitStatus === "success" && (
        <div className="p-4 mb-6 bg-green-100 border border-green-300 text-green-800 rounded">
          Application submitted successfully.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 mb-6 bg-red-100 border border-red-300 text-red-800 rounded">
          Something went wrong. Try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Position Field (locked when preset) */}
        <div className="relative">
          <label className="floating-label">Position Applying For *</label>
          <select
            name="position"
            required
            disabled={!!presetPosition}
            value={formData.position}
            onChange={handleChange}
            className="form-input peer pt-6 pb-3 bg-white dark:bg-[#0d1117]"
          >
            <option value="">Select a position</option>
            {positionOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* Input fields */}
        {[
          ["Name", "Name *"],
          ["email", "Email *"],
          ["phone", "Phone *"],
          ["linkedin", "LinkedIn *"],
          ["location", "Location *"],
        ].map(([name, label]) => (
          <div className="relative" key={name}>
            <label className="floating-label">{label}</label>
            <input
              type="text"
              name={name}
              required
              value={(formData as any)[name]}
              onChange={handleChange}
              className="form-input peer pt-6 pb-3"
              placeholder=" "
            />
          </div>
        ))}

        {/* Message */}
        <div className="relative">
          <label className="floating-label">Message (optional)</label>
          <textarea
            name="message"
            rows={5}
            maxLength={2000}
            value={formData.message}
            onChange={handleChange}
            className="form-input peer pt-6 pb-3 resize-none"
            placeholder=" "
          />
          <div className="text-right text-xs mt-1 text-[#656d76] dark:text-[#8b949e]">
            {messageCount}/2000
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary bg-blue-600 w-full py-3 text-lg disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </section>
  );
}
