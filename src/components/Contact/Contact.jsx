import { CiLinkedin, CiMail, CiPhone } from "react-icons/ci";

export default function Contact() {
  return (
    <section
      id="contact"
      className="Hero container m-auto px-4 sm:px-8 xl:px-[200px] py-[50px]"
    >
      {/* Heading */}
      <div className="text-left space-y-3 mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Have a project in mind?
        </h2>

        <p className="text-sm text-zinc-400 max-w-xl leading-relaxed">
          I'm currently open to WordPress and frontend opportunities.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {/* Email Card */}
        <div className="p-5 rounded-lg bg-[#111317] border border-zinc-800 hover:border-zinc-700 flex flex-col justify-between transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded bg-[rgba(238,138,37,0.1)] text-[#EE8A25]">
                <CiMail size={25} />
              </div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase text-zinc-500">
                Email
              </div>

              <div className="text-base sm:text-lg font-mono font-bold text-zinc-100 mt-0.5 break-all">
                sivapriyakalamegam@gmail.com
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-zinc-800">
            <a
              href="mailto:sivapriyakalamegam@gmail.com"
              className="text-xs font-mono font-semibold text-[#EE8A25] hover:underline flex items-center gap-1 w-fit"
            >
              <span>Send Email</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Phone Card */}
        <div className="p-5 rounded-lg bg-[#111317] border border-zinc-800 hover:border-zinc-700 flex flex-col justify-between transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded bg-[rgba(238,138,37,0.1)] text-[#EE8A25]">
                <CiPhone size={25} />
              </div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase text-zinc-500">
                Phone
              </div>

              <div className="text-base sm:text-lg font-mono font-bold text-zinc-100 mt-0.5">
                +91 9788174642
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-zinc-800">
            <a
              href="tel:+919788174642"
              className="text-xs font-mono font-semibold text-[#EE8A25] hover:underline flex items-center gap-1 w-fit"
            >
              <span>Call Me</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Social / Resume Section */}
      <div className="p-6 rounded-lg bg-[#111317] border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-sm font-bold text-zinc-100">Let's Connect</h4>

          <p className="text-xs text-zinc-400">
            Connect with me or view my resume for more about my experience.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {/* Call */}
          {/*  <a
            href="tel:+919788174642"
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded bg-[rgba(238,138,37,0.1)] hover:bg-[rgba(238,138,37,0.2)] hover:text-[#EE8A25] text-white border border-[rgba(238,138,37,0.4)] transition-colors"
          >
            <CiPhone size={18} />
            <span>Call Me</span>
          </a> */}

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sivapriya-k/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded bg-[rgba(238,138,37,0.1)] hover:bg-[rgba(238,138,37,0.2)] text-zinc-200 hover:text-[#EE8A25] border border-[rgba(238,138,37,0.4)] transition-colors"
          >
            <CiLinkedin size={18} />
            <span>LinkedIn</span>
          </a>

          {/* Resume */}
          <a
            href="https://drive.google.com/file/d/1DQnoBmfqxzZeha-Sw_ZtH1RiQgb8ey_y/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded bg-[rgba(238,138,37,0.1)] hover:bg-[rgba(238,138,37,0.2)] text-zinc-200  hover:text-[#EE8A25] border border-[rgba(238,138,37,0.4)] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>

            <span>Resume PDF</span>
          </a>
        </div>
      </div>
    </section>
  );
}
