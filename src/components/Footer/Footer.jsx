import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <section className="Hero container m-auto px-5 sm:px-8 xl:px-[200px] pt-[20px] pb-[20px]">
        <div className="flex justify-between">
          <div className="text-white text-xs flex align-middle justify-center">
            © {year} | Sivapriya
          </div>
          <div>
            <ul className="flex gap-4 text-white row ">
              <li>
                <a
                  href="https://www.linkedin.com/in/sivapriya-k/"
                  target="_blank"
                >
                  <FaLinkedin size={25} className="hover:text-[#EE8A25]" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Sivapriyaa-k" target="_blank">
                  <FaGithub size={25} className="hover:text-[#EE8A25]" />
                </a>
              </li>
              <li>
                <a href="mailto:sivapriyakalamegam@gmail.com" target="_blank">
                  <FaEnvelope size={25} className="hover:text-[#EE8A25]" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
