import { FaGithub } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";

export default function Hero() {
  return (
    <>
      <section className="Hero container m-auto px-5 sm:px-8 xl:px-[200px] py-[50px] pt-[50px] pb-[50px]">
        <div className="Hero-content">
          <h1
            className="text-6xl text-[#EE8A25] font-semibold wow animate__animated animate__fadeInUp"
            data-wow-delay="0.05s"
          >
            Sivapriya,
          </h1>
          <h2
            className="text-6xl text-white font-semibold mt-3  wow animate__animated animate__fadeInUp"
            data-wow-delay="0.05s"
          >
            Wordpress Developer
          </h2>
          <p
            className=" mt-10 w-auto xl:w-3xl text-[#A1A1A1]  wow animate__animated animate__fadeInUp"
            data-wow-delay="0.05s"
          >
            i'm a web developer with 4 years of experience, previously at{" "}
            <a
              href="https://kavisoftek.in/"
              className="font-medium underline underline-offset-2 hover:text-[#EE8A25] text-white"
            >
              kavisoftek
            </a>
            , building responsive websites and web applications. i enjoy
            creating clean, user-friendly experiences with wordpress, javascript
            and react. these days, i'm focused on growing as a frontend
            developer and building things that i'm excited about.
          </p>
          <div
            className="hero-linkedin text-[#A1A1A1]  mt-10  wow animate__animated animate__fadeInUp"
            data-wow-delay="0.05s"
          >
            Want to chat?
            <a
              href="https://www.linkedin.com/in/sivapriya-k/"
              target="_blank"
              className="font-medium underline underline-offset-2 ml-2 text-white hover:text-[#EE8A25]  wow animate__animated animate__zoomIn"
              data-wow-delay="0.05s"
            >
              connect on linkedin
            </a>
          </div>
          <div className="hero-btns flex gap-[20px] mt-10">
            <a
              href=""
              className="border text-black bg-white p-3 w-[150px] flex gap-3 center justify-center items-center rounded-xl hover:bg-black hover:text-white animate__animated animate__zoomIn"
              data-wow-delay="0.5s"
            >
              View Work <FaArrowDown />
            </a>
            <a
              href="https://github.com/Sivapriyaa-k"
              target="_blank"
              className="border text-white p-3 w-[150px] flex gap-3 center justify-center items-center rounded-xl hover:bg-white hover:text-black  animate__animated animate__zoomIn"
              data-wow-delay="0.5s"
            >
              Github <FaGithub />
            </a>
          </div>
          {/*  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            <div className="text-white border border-[#EE8A25] p-6 bg-[rgba(238,138,37,0.1)] rounded-2xl">
              <h4 className="text-[24px] text-[#EE8A25] font-semibold">4+</h4>
              <p className="text-[16px]">Years Experience</p>
            </div>
            <div className="text-white border border-[#EE8A25] p-6 bg-[rgba(238,138,37,0.1)] rounded-2xl">
              <h4 className="text-[24px] text-[#EE8A25] font-semibold">20+</h4>
              <p>Live Commercial Sites</p>
            </div>
            <div className="text-white border border-[#EE8A25] p-6 bg-[rgba(238,138,37,0.1)] rounded-2xl">
              <h4 className="text-[24px] text-[#EE8A25] font-semibold">90+</h4>
              <p>Target Pagespeed Score</p>
            </div>
            <div className="text-white border border-[#EE8A25] p-6 bg-[rgba(238,138,37,0.1)] rounded-2xl">
              <h4 className="text-[24px] text-[#EE8A25] font-semibold">100%</h4>
              <p>Pixel-Perfect Delivery</p>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
