import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <section className="Hero container m-auto px-5 sm:px-8 xl:px-[200px] py-[50px] pt-[50px] pb-[50px]">
        <div className="flex justify-between">
          <div className="text-white text-xs ">© | Sivapriya</div>
          <div>
            <ul className="flex gap-3 text-white row">
              <li>
                <a href="https://www.linkedin.com/in/sivapriya-k/">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://github.com/Sivapriyaa-k">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="mailto:sivapriyakalamegam@gmail.com">
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
