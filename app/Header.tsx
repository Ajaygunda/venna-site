"use client";

import { useState } from "react";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Our Story" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-venna-ivory/95 backdrop-blur border-b border-venna-brown/15">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-20">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-serif text-3xl lowercase tracking-wide text-venna-espresso">
            venna
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-venna-brown">
            Heritage Bangalore Dosa Cafe
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-wide text-venna-espresso hover:text-venna-brown transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.google.com/search?sca_esv=e6f5da5899513930&sxsrf=APpeQnuGeXRlr4yQ1YvQLwFbsVg3fCe4eQ:1785473866597&q=venna-heritage+bangalore+dosa+cafe+hyderabad+address&ludocid=17528056419269476634&sa=X&ved=2ahUKEwiD2Mu8kPyVAxWTbmwGHYqfOM8Q6BN6BAgnEAI"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-venna-brown text-venna-ivory text-sm uppercase tracking-wide px-5 py-2.5 rounded-full hover:bg-venna-brownDark transition-colors"
          >
            Get Directions
          </a>
        </nav>

        <button
          className="md:hidden text-venna-espresso"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-venna-brown/15 bg-venna-ivory px-5 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-wide text-venna-espresso"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
