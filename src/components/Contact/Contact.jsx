import { CiLinkedin } from "react-icons/ci";

export default function Contact() {
  return (
    <>
      <section className="Hero container m-auto px-[200px] py-[50px]">
        <div class="text-left space-y-3 mb-12">
          {/* <div class="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Direct Communication</span>
            </div> */}
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Have a project in mind?
          </h2>
          <p class="text-sm text-zinc-400 max-w-xl leading-relaxed">
            I'm currently open to WordPress and frontend opportunities.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div class="p-5 rounded-lg bg-[#111317] border border-zinc-800 hover:border-zinc-700 flex flex-col justify-between transition-colors">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <div class="p-2.5 rounded bg-[rgba(238,138,37,0.1)] text-[#EE8A25] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-mail w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                </div>
              </div>
              <div>
                <div class="text-xs font-mono uppercase text-zinc-500">
                  Direct Email
                </div>
                <div class="text-base sm:text-lg font-mono font-bold text-zinc-100 mt-0.5 break-all">
                  sivapriyakalamegam@gmail.com
                </div>
              </div>
            </div>
            <div class="pt-4 mt-4 border-t border-zinc-800 flex items-center justify-between">
              <a
                href="mailto:sivapriyakalamegam@gmail.com"
                class="text-xs font-mono font-semibold text-[#EE8A25] hover:underline flex items-center gap-1"
              >
                <span>Send Email</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-up-right w-3.5 h-3.5"
                  aria-hidden="true"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div class="p-5 rounded-lg bg-[#111317] border border-zinc-800 hover:border-zinc-700 flex flex-col justify-between transition-colors">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <div class="p-2.5 rounded bg-[rgba(238,138,37,0.1)] text-[#EE8A25] ">
                  <CiLinkedin size={25} />
                </div>
              </div>
              <div>
                <div class="text-xs font-mono uppercase text-zinc-500">
                  Direct Phone
                </div>
                <div class="text-base sm:text-lg font-mono font-bold text-zinc-100 mt-0.5">
                  +91 9788174642
                </div>
              </div>
            </div>
            <div class="pt-4 mt-4 border-t border-zinc-800 flex items-center justify-between">
              <a
                href="https://www.linkedin.com/in/sivapriya-k/"
                class="text-xs font-mono font-semibold text-[#EE8A25]  hover:underline flex items-center gap-1"
              >
                <span>Let's Connect</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-up-right w-3.5 h-3.5"
                  aria-hidden="true"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="p-6 rounded-lg bg-[#111317] border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="space-y-1 text-center sm:text-left">
            <h4 class="text-sm font-bold text-zinc-100">
              Quick Channels &amp; Credentials
            </h4>
            <p class="text-xs text-zinc-400">
              Direct chat, professional profile, and full ATS resume.
            </p>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-2.5">
            <a
              href="tel:9788174642"
              target="_blank"
              rel="noreferrer"
              class="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded bg-[rgba(238,138,37,0.1)] hover:text-[#EE8A25]  text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-message-circle w-3.5 h-3.5"
                aria-hidden="true"
              >
                <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
              </svg>
              <span>Call Me</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sivapriya-k/"
              target="_blank"
              rel="noreferrer"
              class="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin w-3.5 h-3.5 text-[#EE8A25]"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1DQnoBmfqxzZeha-Sw_ZtH1RiQgb8ey_y/view?usp=sharing"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-file-text w-3.5 h-3.5 text-zinc-400"
                aria-hidden="true"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
              <span>Resume PDF</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
