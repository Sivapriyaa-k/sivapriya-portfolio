import { useState } from "react";

export default function Header() {
  return (
    <>
      <header className="h-10 fixed w-dvw min-h-14 bg-[#000]">
        <nav>
          <div className="container m-auto flex justify-between min-h-14 sm:px-8 xl:px-[200px] px-5">
            <a
              href="/"
              className="text-2xl font-bold text-[#EE8A25] flex items-center"
            >
              SP
            </a>
            <div className="nav-links flex items-center justify-center gap-10 text-[#A1A1A1]font-semibold">
              <a href="/" className=" hover:text-[#EE8A25] ">
                Home
              </a>
              <a href="#projects" className=" hover:text-[#EE8A25] ">
                Projects
              </a>
              <a href="#contact" className=" hover:text-[#EE8A25] ">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
