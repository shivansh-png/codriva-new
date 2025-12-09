"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";

export default function JobsWithFilters() {
  // -------------------------------
  // JOB DATA
  // -------------------------------
  const jobs = [
    {
      title: "AI/ML Engineer",
      location: "Noida",
      function: "AI/ML",
      experience: "4-6",
      about:
        "The role of a Machine Learning Engineer focuses on applying ML algorithms, NLP, and statistical models to solve real-world business challenges. You will design, develop, deploy, and optimize production-ready AI systems that power intelligent digital experiences across industries.",
      todo: [
        "Design, build, and optimize machine learning models.",
        "Develop predictive, classification, and NLP-driven models.",
        "Deploy ML models into scalable production environments.",
        "Optimize model pipelines for latency, accuracy, and performance.",
        "Collaborate with sales and engineering teams to understand client requirements.",
        "Present AI solutions to clients and support proposal development.",
        "Integrate models via REST APIs into production systems.",
        "Monitor and maintain deployed ML models for drift and performance.",
        "Document ML workflows and ensure reproducibility.",
        "Stay updated with advancements in AI, NLP, OCR, and MLOps.",
      ],
      need: [
        "Bachelor’s or Master’s degree in Computer Science, Data Science, AI, or related field.",
        "3–4 years of experience in ML, NLP, OCR, and model deployment.",
        "Proficiency in Python and ML frameworks (TensorFlow, PyTorch, Keras).",
        "Experience with FastAPI, Flask, or Django for API development.",
        "Strong understanding of NLP models and transformers.",
        "Hands-on experience with OCR using OpenCV or Tesseract.",
        "Familiarity with queuing systems (RabbitMQ, Redis, Celery).",
        "Experience with AWS, Google Cloud, or Azure.",
        "Understanding of CI/CD and MLOps practices.",
      ],
    },

    {
      title: "Content Creator",
      location: "Noida",
      function: "Content Writer",
      experience: "0-2",
      about:
        "The Content Creator role focuses on producing engaging, clear, and compelling content tailored for technology audiences.",
      todo: [
        "Create high-quality written and visual content for blogs and social media.",
        "Collaborate with designers and marketers for content strategy.",
        "Research technology topics for accurate content.",
        "Write scripts, captions, emailers, and promotional copy.",
        "Develop content calendars.",
        "Optimize content for SEO.",
      ],
      need: [
        "Bachelor’s degree in English, Marketing, Journalism, or similar field.",
        "0–2 years of experience in content creation.",
        "Strong communication and storytelling skills.",
        "Ability to simplify technical topics.",
        "Basic SEO knowledge.",
      ],
    },

    {
      title: "Sr. Java + Spring Boot Developer",
      location: "Gurgaon",
      function: "Backend",
      experience: "5-8",
      about:
        "As a Senior Java Developer, you will design, develop, and maintain scalable backend services using Java and Spring Boot.",
      todo: [
        "Design and develop microservices using Spring Boot.",
        "Build REST APIs and middleware logic.",
        "Optimize application performance.",
        "Collaborate with cross-functional teams.",
        "Write clean and testable Java code.",
      ],
      need: [
        "5–8 years backend development experience.",
        "Strong Java + Spring Boot expertise.",
        "Understanding of microservices.",
        "Experience with SQL/NoSQL.",
        "Knowledge of CI/CD pipelines.",
      ],
    },

    {
      title: "Tech Lead Node.js",
      location: "Noida",
      function: "Backend",
      experience: "5-8",
      about:
        "The Node.js Tech Lead role involves leading backend engineering teams, architecting scalable systems, and ensuring high delivery standards.",
      todo: [
        "Lead backend developers.",
        "Architect scalable Node.js services.",
        "Write high-quality Node.js code.",
        "Conduct code reviews.",
        "Collaborate with DevOps for deployments.",
      ],
      need: [
        "5–8 years backend experience.",
        "Expertise in Node.js + TypeScript.",
        "Team leadership experience.",
        "Knowledge of distributed systems.",
        "Experience with PostgreSQL, MongoDB, Redis.",
      ],
    },

    {
      title: "Technical Content Writer",
      location: "Noida",
      function: "Technical Writer",
      experience: "0-2",
      about:
        "The Technical Content Writer creates clear, engaging, and accurate documentation and technical content.",
      todo: [
        "Write documentation and technical blogs.",
        "Simplify technical concepts.",
        "Create case studies and whitepapers.",
        "Ensure accuracy and SEO optimization.",
      ],
      need: [
        "Bachelor’s degree in Engineering, IT, English, or similar field.",
        "Understanding of software development concepts.",
        "Strong writing and research skills.",
      ],
    },
  ];

  // -------------------------------
  // FILTER OPTIONS
  // -------------------------------
  const functionFilters = [
    "AI/ML",
    "Backend",
    "Frontend",
    "Full Stack",
    "Mobile Developer",
    "DevOps / Cloud",
    "QA / Testing",
    "UI/UX Design",
    "Product Management",
    "Project Management",
    "Business Analyst",
    "Data Engineering",
    "Content Writer",
    "Technical Writer",
    "Sales / Business Development",
    "Marketing",
    "HR & Talent Acquisition",
    "Support / IT Operations",
  ];

  const locationFilters = ["Noida", "Gurgaon", "Remote"];
  const experienceFilters = ["0-2", "3-5", "5-8", "8+"];

  // -------------------------------
  // STATES
  // -------------------------------
  const [selectedFunctions, setSelectedFunctions] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [selectedJob, setSelectedJob] = useState<any | null>(null);

  const toggleFilter = (value: string, setter: any) => {
    setter((prev: string[]) =>
      prev.includes(value)
        ? prev.filter((x) => x !== value)
        : [...prev, value]
    );
  };

  // -------------------------------
  // FILTER PROCESSING
  // -------------------------------
  const filteredJobs = jobs.filter((job) => {
    const matchFunction =
      selectedFunctions.length === 0 ||
      selectedFunctions.includes(job.function);

    const matchLocation =
      selectedLocations.length === 0 ||
      selectedLocations.includes(job.location);

    const matchExperience =
      selectedExperience.length === 0 ||
      selectedExperience.includes(job.experience);

    const matchSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchFunction && matchLocation && matchExperience && matchSearch;
  });

  // -------------------------------
  // RENDER UI
  // -------------------------------
  return (
    <section className="container-max py-20">
      <h2 className="text-3xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-12 text-center">
        Open Positions
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* ---------------- FILTER PANEL ---------------- */}
        <div className="bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-gray-700 rounded-xl p-6 h-fit sticky top-24 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Filter by</h3>

          {/* FUNCTION */}
          <div className="mb-6">
            <div className="font-semibold mb-2 text-[#24292f] dark:text-[#f0f6fc]">Function</div>
            <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
              {functionFilters.map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm"
                    checked={selectedFunctions.includes(item)}
                    onChange={() => toggleFilter(item, setSelectedFunctions)}
                  />
                  <span className="text-[#656d76] dark:text-[#8b949e]">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* LOCATION */}
          <div className="mb-6">
            <div className="font-semibold mb-2 text-[#24292f] dark:text-[#f0f6fc]">Location</div>
            <div className="space-y-2">
              {locationFilters.map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm"
                    checked={selectedLocations.includes(item)}
                    onChange={() => toggleFilter(item, setSelectedLocations)}
                  />
                  <span className="text-[#656d76] dark:text-[#8b949e]">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}
          <div>
            <div className="font-semibold mb-2 text-[#24292f] dark:text-[#f0f6fc]">Experience</div>
            <div className="space-y-2">
              {experienceFilters.map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm"
                    checked={selectedExperience.includes(item)}
                    onChange={() => toggleFilter(item, setSelectedExperience)}
                  />
                  <span className="text-[#656d76] dark:text-[#8b949e]">{item} years</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* ---------------- JOBS LIST ---------------- */}
        <div className="lg:col-span-3">
          {/* search */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Find your role"
              className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0d1117] rounded-xl p-4 pr-12 text-[#24292f] dark:text-[#f0f6fc]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search size={20} className="absolute top-4 right-4 text-gray-500 dark:text-gray-400" />
          </div>

          <p className="text-sm text-[#656d76] dark:text-[#8b949e] mb-4">
            Showing {filteredJobs.length} positions
          </p>

          <div className="space-y-6">
            {filteredJobs.map((job, i) => (
              <button
                key={i}
                onClick={() => setSelectedJob(job)}
                className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 w-full text-left hover:bg-gray-50 dark:hover:bg-[#161b22] transition"
              >
                <div className="text-lg font-medium text-[#24292f] dark:text-[#f0f6fc]">
                  {job.title}
                </div>
                <div className="text-[#656d76] dark:text-[#8b949e]">
                  {job.location}
                </div>
              </button>
            ))}

            {filteredJobs.length === 0 && (
              <p className="text-center text-gray-500 dark:text-gray-400 py-10">
                No matching roles found.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ---------------- MODAL ---------------- */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white dark:bg-[#0d1117] w-full max-w-3xl rounded-2xl p-8 shadow-xl overflow-y-auto max-h-[90vh] relative">

            {/* close */}
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <X size={26} />
            </button>

            {/* title */}
            <h2 className="text-3xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-2">
              {selectedJob.title}
            </h2>

            <p className="text-[#656d76] dark:text-[#8b949e]">Location: {selectedJob.location}</p>
            <p className="text-[#656d76] dark:text-[#8b949e] mb-6">
              Experience: {selectedJob.experience} years
            </p>

            {/* apply button */}
            <Link
              href="#apply"
              className="btn-primary inline-block mb-6"
              onClick={() => setSelectedJob(null)}
            >
              Apply Now
            </Link>

            {/* about */}
            <h3 className="text-xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
              About the Role
            </h3>
            <p className="text-[#656d76] dark:text-[#8b949e] mb-6">
              {selectedJob.about}
            </p>

            {/* todo */}
            <h3 className="text-xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
              What You’ll Do
            </h3>
            <ul className="list-disc ml-6 mb-6 text-[#656d76] dark:text-[#8b949e] space-y-1">
              {selectedJob.todo.map((t: string, i: number) => (
                <li key={i}>{t}</li>
              ))}
            </ul>

            {/* need */}
            <h3 className="text-xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
              What You’ll Need
            </h3>
            <ul className="list-disc ml-6 mb-6 text-[#656d76] dark:text-[#8b949e] space-y-1">
              {selectedJob.need.map((t: string, i: number) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
