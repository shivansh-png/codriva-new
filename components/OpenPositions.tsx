"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";
import CareersApplicationForm from "@/components/CareersApplicationForm";

export default function JobsWithFilters() {
  /* ---------------------------------------- */
  /* JOB DATA                                 */
  /* ---------------------------------------- */
  const jobs = [
    /* 1. Associate HR Manager */
    {
      title: "Associate HR Manager",
      location: "Noida, Sector 62 (WFO)",
      function: "HR & Talent Acquisition",
      experience: "6-10",
      about:
        "The Associate HR Manager will oversee end-to-end HR operations including hiring, employee engagement, performance management, and compliance. This role requires strong leadership, communication, and the ability to foster a productive workplace culture.",
      responsibilities: [
        "Manage full-cycle recruitment for technical and non-technical roles.",
        "Conduct onboarding, orientation, and employee engagement programs.",
        "Implement HR policies, performance evaluations, and review cycles.",
        "Resolve employee concerns and support leadership with HR decisions.",
        "Ensure statutory compliance and maintain HR documentation.",
        "Collaborate with department heads to identify hiring needs.",
        "Drive retention initiatives and culture-building activities.",
      ],
      qualifications: ["Bachelor’s or Master’s degree in related fields."],
      requirements: [
        "6–10 years of HR experience",
        "Strong understanding of HR operations, HRMS tools, and compliance.",
        "Excellent interpersonal, leadership, and decision-making skills.",
        "Ability to manage multiple HR functions independently.",
        "Must be comfortable working from office (Noida Sector 62).",
      ],
      preferred: [
        "Experience in fast-growing IT startups or service-based companies.",
        "Strong organizational development or culture-building experience.",
      ],
    },

    /* 2. Business Analyst */
    {
      title: "Business Analyst",
      location: "Noida, Sector 62 (WFO)",
      function: "Business Analyst",
      experience: "4-6",
      about:
        "The Business Analyst will work closely with clients and internal teams to gather requirements, design documentation, and ensure smooth project execution. This role requires analytical abilities and excellent communication skills.",
      responsibilities: [
        "Interact with clients to gather and analyze business requirements.",
        "Translate client needs into BRDs, FRDs, user stories, and workflows.",
        "Coordinate with development and design teams for requirement clarity.",
        "Conduct competitor and market research.",
        "Participate in sprint planning and backlog refinement.",
        "Ensure alignment between business goals and technical solutions.",
        "Support QA teams during testing cycles.",
      ],
      qualifications: ["Bachelor’s degree in Business, IT, or related field."],
      requirements: [
        "4–6 years experience as a Business Analyst in IT services.",
        "Strong documentation, analytical, and communication skills.",
        "Understanding of Agile/Scrum methodologies.",
        "Proficiency with tools like JIRA, Confluence, or similar.",
        "Must be comfortable working from office (Noida Sector 62).",
      ],
      preferred: [
        "Experience working with enterprise or SaaS products.",
        "Knowledge of UI/UX fundamentals.",
      ],
    },

    /* 3. Business Development Representative */
    {
      title: "Business Development Representative",
      location: "Noida, Sector 62 (WFO)",
      function: "Sales / Business Development",
      experience: "2-3",
      about:
        "We are seeking a driven Business Development Representative to generate leads, build client relationships, and support sales growth for Codriva’s IT services.",
      responsibilities: [
        "Generate qualified leads using LinkedIn, cold calling, and outbound tools.",
        "Identify new business opportunities and manage outreach cycles.",
        "Build and maintain long-term client relationships.",
        "Prepare proposals, presentations, and pitch decks.",
        "Collaborate with technical teams to align solutions with client needs.",
        "Meet monthly and quarterly sales targets.",
        "Maintain CRM records and track pipeline progress.",
      ],
      qualifications: [
        "MBA in Sales & Marketing (Preferred but not mandatory).",
      ],
      requirements: [
        "2–3 years experience in IT sales or B2B lead generation.",
        "Strong communication, negotiation, and presentation skills.",
        "Experience with LinkedIn Sales Navigator, ZoomInfo, or similar tools.",
        "Ability to understand technology offerings and position them effectively.",
        "Must be comfortable working from office (Noida Sector 62).",
      ],
      preferred: [
        "Experience in selling IT services or SaaS solutions.",
        "Strong record of achieving sales targets.",
      ],
    },

    /* 4. Fullstack Lead */
    {
      title: "Fullstack Lead",
      location: "Noida, Sector 62 (WFO)",
      function: "Full Stack",
      experience: "5-7",
      about:
        "The Fullstack Lead will architect and develop scalable applications while leading a team of engineers. This role requires strong backend expertise and very strong frontend skills.",
      responsibilities: [
        "Lead a team of frontend and backend developers.",
        "Architect full-stack solutions using modern technologies.",
        "Write efficient, reusable, and scalable code.",
        "Conduct code reviews and enforce coding standards.",
        "Collaborate with product managers and designers.",
        "Optimize applications for speed, security, and scalability.",
        "Guide team members through technical challenges.",
      ],
      qualifications: [
        "Bachelor’s or Master’s degree in Computer Science or related field.",
      ],
      requirements: [
        "5–7 years full-stack development experience.",
        "Strong frontend skills (React/Next.js, TypeScript, UI component design).",
        "Backend experience with Node.js, Express, or NestJS.",
        "Knowledge of database systems like PostgreSQL, MongoDB.",
        "Understanding of CI/CD and cloud environments.",
        "Must be comfortable working from office (Noida Sector 62).",
      ],
      preferred: [
        "Strong Understanding of frontend frameworks.",
        "Experience leading cross-functional teams.",
        "Experience with microservices or serverless architecture.",
      ],
    },

    /* 5. Intern Business Analyst */
    {
      title: "Intern Business Analyst",
      location: "Noida, Sector 62 (WFO)",
      function: "Business Analyst",
      experience: "0-1",
      about:
        "This internship is ideal for individuals eager to start a career in business analysis. You will work closely with teams to understand project requirements and assist with documentation.",
      responsibilities: [
        "Assist in gathering and documenting client requirements.",
        "Support creation of user stories, process flows, and reports.",
        "Coordinate with design and development teams.",
        "Conduct basic market and competitor research.",
        "Participate in sprint meetings and follow Agile practices.",
      ],
      qualifications: ["Bachelor’s degree in Business, IT, or related field."],
      requirements: [
        "Strong analytical and communication skills.",
        "Basic understanding of SDLC and Agile methodologies.",
        "Eagerness to learn tools like JIRA, Confluence, Figma.",
        "Must be comfortable working from office (Noida Sector 62).",
      ],
      preferred: ["Previous internship experience in BA or product roles."],
    },

    /* 6. Intern Business Development Representative */
    {
      title: "Intern Business Development Representative",
      location: "Noida, Sector 62 (WFO)",
      function: "Sales / Business Development",
      experience: "0-1",
      about:
        "The BDR Intern will support lead generation and outreach activities, assisting the sales team in building a strong pipeline.",
      responsibilities: [
        "Research and identify potential clients on LinkedIn and other platforms.",
        "Assist with cold outreach and lead qualification.",
        "Support proposal and presentation creation.",
        "Maintain CRM data and track follow-ups.",
        "Collaborate with sales and marketing teams.",
      ],
      qualifications: [
        "Bachelor’s degree or pursuing MBA in Sales & Marketing.",
      ],
      requirements: [
        "Strong verbal and written communication skills.",
        "Interest in IT sales and client communication.",
        "Basic knowledge of LinkedIn and CRM tools.",
        "Must be comfortable working from office (Noida Sector 62).",
      ],
      preferred: ["Some experience in sales or outreach roles."],
    },

    /* 7. Intern Software Developer */
    {
      title: "Intern Software Developer",
      location: "Noida, Sector 62 (WFO)",
      function: "Software Development",
      experience: "0-1",
      about:
        "The Software Developer Intern will learn to build real-world applications, work with senior developers, and gain hands-on technical experience.",
      responsibilities: [
        "Assist in writing and testing code.",
        "Debug and fix minor issues in applications.",
        "Collaborate with senior developers for feature development.",
        "Learn and follow coding standards and best practices.",
        "Participate in code reviews and team meetings.",
      ],
      qualifications: [
        "B.Tech/B.E. in Computer Science, IT, or related field.",
      ],
      requirements: [
        "Strong fundamentals in programming and data structures.",
        "Knowledge of JavaScript, React, or Node.js is a plus.",
        "Eagerness to learn modern tools and frameworks.",
        "Must be comfortable working from office (Noida Sector 62).",
      ],
      preferred: ["Personal projects or GitHub portfolio."],
    },

    /* 8. React Native Developer */
    {
      title: "React Native Developer",
      location: "Noida, Sector 62 (WFO)",
      function: "Mobile Developer",
      experience: "3-5",
      about:
        "The React Native Developer will build cross-platform mobile applications with high performance, clean UI, and scalable architecture.",
      responsibilities: [
        "Develop and maintain mobile apps using React Native.",
        "Build reusable components and front-end libraries.",
        "Integrate APIs and work with backend teams.",
        "Optimize performance and troubleshoot issues.",
        "Collaborate with designers to deliver polished UI/UX.",
        "Ensure application stability across devices.",
      ],
      qualifications: [
        "Bachelor’s degree in Computer Science, IT, or related field.",
      ],
      requirements: [
        "3–5 years experience in React Native development.",
        "Strong understanding of JavaScript and TypeScript.",
        "Experience with mobile build pipelines (Android/iOS).",
        "Knowledge of Redux, React Query, or similar libraries.",
        "Must be comfortable working from office (Noida Sector 62).",
      ],
      preferred: [
        "Experience publishing apps on Play Store or App Store.",
        "Familiarity with native modules.",
      ],
    },
  ];

  /* ---------------------------------------- */
  /* FILTERS, STATE, HANDLERS (unchanged)     */
  /* ---------------------------------------- */

  const functionFilters = [
    "AI/ML",
    "Backend",
    "Business Analyst",
    "Content Writer",
    "Data Engineering",
    "DevOps / Cloud",
    "Frontend",
    "Full Stack",
    "HR & Talent Acquisition",
    "Marketing",
    "Mobile Developer",
    "Product Management",
    "Project Management",
    "QA / Testing",
    "Sales / Business Development",
    "Software Development",
    "Support / IT Operations",
    "Technical Writer",
    "UI/UX Design",
  ];

  const locationFilters = ["Noida, Sector 62 (WFO)", "Remote"];
  const experienceFilters = [
    { label: "0-2", min: 0, max: 2 },
    { label: "3-5", min: 3, max: 5 },
    { label: "5-8", min: 5, max: 8 },
    { label: "8+", min: 8, max: 50 },
  ];
  const parseRange = (exp: string) => {
    const [min, max] = exp.split("-").map(Number);
    return { min, max };
  };

  const [selectedFunctions, setSelectedFunctions] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [selectedJob, setSelectedJob] = useState<any | null>(null);

  const toggleFilter = (value: string, setter: any) => {
    setter((prev: string[]) =>
      prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value]
    );
  };

  const filteredJobs = jobs.filter((job) => {
    const matchFunction =
      selectedFunctions.length === 0 ||
      selectedFunctions.includes(job.function);

    const matchLocation =
      selectedLocations.length === 0 ||
      selectedLocations.includes(job.location);

    const matchExperience =
      selectedExperience.length === 0 ||
      selectedExperience.some((label) => {
        const filter = experienceFilters.find((e) => e.label === label);
        if (!filter) return true;

        const { min: jobMin, max: jobMax } = parseRange(job.experience);
        return jobMax >= filter.min && jobMin <= filter.max;
      });

    const matchSearch = job.title.toLowerCase().includes(search.toLowerCase());

    return matchFunction && matchLocation && matchExperience && matchSearch;
  });

  /* ---------------------------------------- */
  /* RENDER UI                                */
  /* ---------------------------------------- */

  return (
    <section id="open-positions" className="container-max py-20">
      <h2 className="text-3xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-12 text-center">
        Open Positions
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Filters */}
        <div className="bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-gray-700 rounded-xl p-6 h-fit sticky top-24 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            Filter by
          </h3>

          {/* Function */}
          <div className="mb-6">
            <div className="font-semibold mb-2 text-[#24292f] dark:text-[#f0f6fc]">
              Function
            </div>
            <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
              {functionFilters.map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm"
                    checked={selectedFunctions.includes(item)}
                    onChange={() => toggleFilter(item, setSelectedFunctions)}
                  />
                  <span className="text-[#656d76] dark:text-[#8b949e]">
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="mb-6">
            <div className="font-semibold mb-2 text-[#24292f] dark:text-[#f0f6fc]">
              Location
            </div>
            <div className="space-y-2">
              {locationFilters.map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm"
                    checked={selectedLocations.includes(item)}
                    onChange={() => toggleFilter(item, setSelectedLocations)}
                  />
                  <span className="text-[#656d76] dark:text-[#8b949e]">
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="font-semibold mb-2 text-[#24292f] dark:text-[#f0f6fc]">
              Experience
            </div>
            <div className="space-y-2">
              {experienceFilters.map((exp) => (
                <label
                  key={exp.label}
                  className="flex items-center gap-2 text-sm"
                >
                  <input
                    type="checkbox"
                    checked={selectedExperience.includes(exp.label)}
                    onChange={() =>
                      toggleFilter(exp.label, setSelectedExperience)
                    }
                    className="checkbox checkbox-sm"
                  />
                  <span className="text-[#656d76] dark:text-[#8b949e]">
                    {exp.label} years
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Job List */}
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
            <Search
              size={20}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400"
            />
          </div>

          <p className="text-sm text-[#656d76] dark:text-[#8b949e] mb-4">
            Showing {filteredJobs.length} positions
          </p>

          <div className="space-y-3">
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
              <div className="text-center text-gray-500 dark:text-gray-400 py-10 space-y-3">
                <p className="text-lg font-medium text-[#24292f] dark:text-[#f0f6fc]">
                  No openings for that
                </p>

                <p className="text-sm text-[#656d76] dark:text-[#8b949e]">
                  Apply anyway and we will contact you if a position opens up.
                </p>

                <Link
                  href="#apply"
                  className="text-blue-600 dark:text-blue-400 font-semibold underline hover:opacity-80 transition"
                >
                  Apply anyway
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ---------------------------------------- */
      /* MODAL                                    */
      /* ---------------------------------------- */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="modal-scroll bg-white dark:bg-[#0d1117] w-full max-w-3xl rounded-2xl p-8 shadow-xl overflow-y-auto max-h-[90vh] relative">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <X size={26} />
            </button>

            {/* Title */}
            <h2 className="text-3xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-2">
              {selectedJob.title}
            </h2>

            <p className="text-[#656d76] dark:text-[#8b949e]">
              Location: {selectedJob.location}
            </p>
            <p className="text-[#656d76] dark:text-[#8b949e] mb-6">
              Experience: {selectedJob.experience} years
            </p>

           {/* APPLY BUTTON — hidden when form is open */}
{!selectedJob.apply && (
  <button
    className="btn-primary inline-block mb-6"
    onClick={() =>
      setSelectedJob((prev: any) => ({ ...prev, apply: true }))
    }
  >
    Apply Now
  </button>
)}

{/* FORM WHEN APPLY IS CLICKED */}
{selectedJob.apply && (
  <CareersApplicationForm
    presetPosition={selectedJob.title}
    onClose={() =>
      setSelectedJob((prev: any) => ({ ...prev, apply: false }))
    }
  />
)}


            {/* About */}
            <h3 className="text-xl font-semibold mb-2 text-[#24292f] dark:text-[#f0f6fc]">
              About the Role
            </h3>
            <p className="mb-6 text-[#656d76] dark:text-[#8b949e]">
              {selectedJob.about}
            </p>

            {/* Responsibilities */}
            <h3 className="text-xl font-semibold mb-2 text-[#24292f] dark:text-[#f0f6fc]">
              Key Responsibilities
            </h3>
            <ul className="list-disc ml-6 mb-6 space-y-1 text-[#656d76] dark:text-[#8b949e]">
              {selectedJob.responsibilities.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {/* Qualifications */}
            <h3 className="text-xl font-semibold mb-2 text-[#24292f] dark:text-[#f0f6fc]">
              Qualifications
            </h3>
            <ul className="list-disc ml-6 mb-6 space-y-1 text-[#656d76] dark:text-[#8b949e]">
              {selectedJob.qualifications.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {/* Requirements */}
            <h3 className="text-xl font-semibold mb-2 text-[#24292f] dark:text-[#f0f6fc]">
              Requirements
            </h3>
            <ul className="list-disc ml-6 mb-6 space-y-1 text-[#656d76] dark:text-[#8b949e]">
              {selectedJob.requirements.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {/* Preferred */}
            <h3 className="text-xl font-semibold mb-2 text-[#24292f] dark:text-[#f0f6fc]">
              Preferred
            </h3>
            <ul className="list-disc ml-6 mb-6 space-y-1 text-[#656d76] dark:text-[#8b949e]">
              {selectedJob.preferred.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
