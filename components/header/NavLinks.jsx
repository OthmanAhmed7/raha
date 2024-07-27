import React from "react";
import Link from "next/link";

const NavLinks = ({ handelColorChange, handelActive, active }) => {
  return (
    <section>
      <nav>
        <ul className="flex items-center gap-[2.5rem] uppercase font-[500] text-[1rem] text-slate-200">
          <li
            onClick={() => handelActive("home")}
            className={`${active === "home" ? "text-white" : "text-slate-300"}`}
          >
            <Link href="/">home</Link>
          </li>
          <li
            onClick={() => handelActive("rooms")}
            className={`${
              active === "rooms" ? "text-white" : "text-slate-300"
            }`}
          >
            <Link href="/rooms">rooms</Link>
          </li>
          <li
            onClick={() => handelActive("events")}
            className={`${
              active === "events" ? "text-white" : "text-slate-300"
            }`}
          >
            <Link href="/events">events</Link>
          </li>
          <li
            onClick={() => handelActive("about")}
            className={`${
              active === "about" ? "text-white" : "text-slate-300"
            }`}
          >
            <Link href="/about">about</Link>
          </li>
          <li
            onClick={() => handelActive("contact")}
            className={`${
              active === "contact" ? "text-white" : "text-slate-300"
            }`}
          >
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default NavLinks;
