"use client";

import React, { useState } from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";

const Header = () => {
  const [colorChange, setColorChange] = useState(false);
  const [active, setActive] = useState("home");

  function handelColorChange() {
    if (window.scrollY > 200) {
      setColorChange(true);
    }
  }

  function handelActive(page) {
    setActive(`${page}`);
  }
  return (
    <section className="fixed w-full z-[100]">
      <div
        className={`flex items-center justify-between py-[1.5rem] px-[1rem] max-w-[1200px] mx-auto ${
          !colorChange ? "bg-transparent" : "bg-white"
        }`}
      >
        <h1
          className={`text-[1.6rem] font-[400] ${
            !colorChange ? "text-white" : "text-black"
          }`}
        >
          <Link href="/">Raha</Link>
        </h1>

        <NavLinks
          handelColorChange={handelColorChange}
          handelActive={handelActive}
          active={active}
        />
      </div>
    </section>
  );
};

export default Header;
