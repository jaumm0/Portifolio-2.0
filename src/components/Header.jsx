import React, { useState } from "react";
import { Menu } from 'lucide-react';


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Skills", href: "#skills" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ];

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <header className="w-full bg-Header1 border-b sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <h2 className="text-Header3 text-lg font-semibold">
          <a href="#inicio">Joao Victor</a>
        </h2>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center gap-8 text-Header2 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-Header3 transition-all duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botão hamburguer (mobile) */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-Header2/40 px-3 py-2 text-Header2 hover:text-Header3 hover:border-Header3 transition-colors duration-150"
          onClick={handleToggle}
          aria-label="Abrir menu"
          aria-expanded={isOpen}
        > 
          <Menu />
        </button>
      </nav>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden border-t border-Header2/20 bg-Header1">
          <ul className="flex flex-col gap-3 px-4 py-3 text-Header2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-1 hover:text-Header3 transition-colors duration-150"
                  onClick={handleClose}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;