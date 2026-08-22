import { useState } from "react";

export default function Header() {
  return (
    <>
      <header className="h-10">
        <nav>
          <div className="container m-auto flex justify-between min-h-14 px-[200px]">
            <a
              href="/"
              className="text-2xl font-bold text-[#EE8A25] flex items-center"
            >
              SP
            </a>
            <div className="nav-links flex items-center justify-center gap-10 text-[#A1A1A1] font-semibold">
              <a href="/">Home</a>
              <a href="#projects">Projects</a>
              <a href="/blog">Contact</a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
