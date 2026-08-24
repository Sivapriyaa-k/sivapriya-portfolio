import projectsData from "../Projects/projectsData.json";
import { useState } from "react";
import { FaArrowUpRightFromSquare, FaCheck, FaXmark } from "react-icons/fa6";
export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section className="Hero container m-auto px-5 sm:px-8 xl:px-[200px] py-[50px]">
      <h2 className="text-white font-bold text-3xl mb-10">
        Live Client Websites
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col justify-between rounded-lg p-5 bg-[#111317] border border-zinc-800 hover:border-[rgba(238,138,37,0.4)] transition-colors wow animate__animated animate__zoomIn"
            data-wow-delay="0.3s"
          >
            <div className="space-y-3">
              {/* Category */}
              {/* <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-zinc-800/80">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#EE8A25]">
                  {project.category}
                </span>

                <span className="text-[10px] font-mono text-zinc-500">
                  #{project.name.toLowerCase().replace(/\s+/g, "-")}
                </span>
              </div> */}

              {/* Name + URL */}
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-white group-hover:text-[#EE8A25] transition-colors">
                    {project.name}
                  </h3>

                  {/* <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 text-zinc-500 hover:text-zinc-100 transition-colors"
                    title="Open live site"
                  >
                    <FaArrowUpRightFromSquare className="w-3.5 h-3.5" />
                  </a> */}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-zinc-400 hover:text-[#EE8A25] hover:underline inline-block mt-0.5"
                >
                  {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </a>
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="space-y-1 pt-1">
                {project.highlights.map((highlight, highlightIndex) => (
                  <div
                    key={highlightIndex}
                    className="flex items-start gap-2 text-xs text-zinc-300"
                  >
                    <FaCheck className="w-3.5 h-3.5 text-[#EE8A25] shrink-0 mt-0.5" />

                    <span className="line-clamp-1">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom */}
            <div className="pt-4 mt-4 border-t border-zinc-800 space-y-3">
              {/* Technologies */}
              <div className="flex flex-wrap gap-1">
                {project.languages.map((language, languageIndex) => (
                  <span
                    key={languageIndex}
                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-900 text-zinc-400 border border-zinc-800"
                  >
                    {language}
                  </span>
                ))}
              </div>

              {/* Visit */}
              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-medium text-white bg-zinc-800 hover:bg-[rgba(238,138,37,0.2)] px-3 py-1.5 rounded transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>More Info</span>
                </button>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-white bg-zinc-800 hover:bg-[rgba(238,138,37,0.2)] px-3 py-1.5 rounded transition-colors flex items-center gap-2"
                >
                  <span>Visit Site</span>
                  <FaArrowUpRightFromSquare className="w-3 h-3 text-zinc-400" />
                </a>
              </div>
            </div>
          </div>
        ))}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-5"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#111317] border border-zinc-800 rounded-xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-4">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#EE8A25]">
                    {selectedProject.projectType}
                  </p>

                  <h2 className="text-2xl font-bold text-white mt-1">
                    {selectedProject.name}
                  </h2>

                  <p className="text-sm text-zinc-500 mt-1">
                    {selectedProject.type}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  <FaXmark className="w-5 h-5" />
                </button>
              </div>

              {/* Description */}
              <div className="mt-5">
                <h3 className="text-sm font-semibold text-[#EE8A25] mb-2">
                  About the Project
                </h3>

                <p className="text-sm leading-6 text-zinc-400">
                  {selectedProject.description}
                </p>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-4 mt-5">
                <div>
                  <p className="text-xs text-zinc-500">Role</p>
                  <p className="text-sm text-white mt-1">
                    {selectedProject.role}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-zinc-500">Company</p>
                  <p className="text-sm text-white mt-1">
                    {selectedProject.company}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-zinc-500">Project Type</p>
                  <p className="text-sm text-white mt-1">
                    {selectedProject.projectType}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-zinc-500">Duration</p>
                  <p className="text-sm text-white mt-1">
                    {selectedProject.duration}
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              {/* <div className="mt-6">
                <h3 className="text-sm font-semibold text-[#EE8A25] mb-3">
                  My Contributions
                </h3>

                <div className="space-y-2">
                  {selectedProject.responsibilities?.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 text-sm text-zinc-300"
                    >
                      <FaCheck className="w-3.5 h-3.5 text-[#EE8A25] shrink-0 mt-1" />

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Technologies */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-[#EE8A25] mb-3">
                  Technologies
                </h3>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.languages?.map((language, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-zinc-900 text-zinc-400 border border-zinc-800"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visit Website */}
              <div className="mt-6 pt-5 border-t border-zinc-800">
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#EE8A25] text-black text-sm font-medium px-4 py-2 rounded hover:opacity-90 transition"
                >
                  Visit Live Website
                  <FaArrowUpRightFromSquare className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
