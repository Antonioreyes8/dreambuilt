import { useState } from "react";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Investing", id: "investing" },
    { name: "Projects", id: "projects" },
    { name: "Contact Us", id: "contact" },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    // "sticky top-0 z-50" guarantees it snaps to the top and stays above page content
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo / Brand Name */}
        <div 
          className="cursor-pointer text-xl font-bold tracking-tight text-slate-900"
          onClick={() => handleNavClick("home")}
        >
          MyBrand
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-colors hover:text-sky-500 cursor-pointer ${
                currentPage === item.id ? "text-sky-500" : "text-slate-600"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 text-slate-500 hover:text-slate-900 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {/* Conditional icon toggle (Hamburger vs Close X) */}
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-6 py-4 space-y-3 shadow-inner">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left text-base font-medium py-2 cursor-pointer ${
                currentPage === item.id ? "text-sky-500" : "text-slate-600"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}