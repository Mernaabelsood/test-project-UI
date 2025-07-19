import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, Sun, Moon, Bell } from "lucide-react";

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/courses", label: "Courses" },
    { path: "/calendar", label: "Calendar" },
    { path: "/community", label: "Community" },
  ];

  return (
    <header className="sticky top-0 z-20 bg-[var(--neutral-gray)] backdrop-blur-lg border-b border-[var(--light-border)] shadow-lg relative overflow-hidden">
      {/* Enhanced Curved Background Design */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-blue)]/20 via-[var(--secondary-blue)]/15 to-[var(--primary-blue)]/20"></div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
        <div className="w-full h-full bg-[var(--primary-blue)] rounded-full blur-2xl animate-pulse"></div>
      </div>
      <div className="absolute top-6 left-1/4 w-20 h-20 opacity-8">
        <div className="w-full h-full bg-[var(--secondary-blue)] rounded-full blur-xl animate-pulse"></div>
      </div>
      <div className="absolute top-2 left-1/2 w-16 h-16 opacity-6">
        <div className="w-full h-full bg-[var(--primary-blue)] rounded-full blur-lg animate-pulse"></div>
      </div>

      {/* Additional Floating Elements */}
      <div className="absolute top-8 right-1/3 w-8 h-8 opacity-5">
        <div className="w-full h-full bg-[var(--accent-orange)] rounded-full blur-md animate-bounce"></div>
      </div>
      <div className="absolute top-4 left-1/3 w-12 h-12 opacity-4">
        <div className="w-full h-full bg-[var(--success-green)] rounded-full blur-lg animate-pulse"></div>
      </div>

      <div className="container mx-auto flex items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-8 py-4 relative z-10">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-[var(--dark-gray)]">
            <h2 className="text-2xl font-bold leading-tight tracking-tighter">
              Learning Platform
            </h2>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium leading-normal transition-colors ${
                  isActive(link.path)
                    ? "text-[var(--primary-blue)]"
                    : "text-[var(--dark-gray)] hover:text-[var(--primary-blue)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="hidden lg:flex relative max-w-xs w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <Search className="h-5 w-5" />
            </div>
            <input
              className="form-input w-full rounded-full border-[var(--light-border)] bg-[var(--white)] pl-10 pr-4 py-2 text-base focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent transition-all text-[var(--dark-gray)] placeholder-gray-400"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[var(--neutral-gray)] transition-colors text-[var(--dark-gray)]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <button
              className="p-2 rounded-full hover:bg-[var(--neutral-gray)] transition-colors text-[var(--dark-gray)]"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
            </button>

            <Link to="/profile" className="block">
              <img
                alt="User Avatar"
                className="h-10 w-10 rounded-full border-2 border-transparent hover:border-[var(--primary-blue)] transition-colors cursor-pointer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdVSfUJsaqs4YiTfIM6Oiz0M40jFOX0E1pBZJ98fBvoUuuOfq2UuzS2UrZSPXB-819P-WrhVY8ZALAPQ6bzu2Vpphh4Ew_3uRsknNCtsMYCg63iesFOM7Rh3aATu9j4_fEU7VeQtw3NI2sy3yZvCQ-mXq-2lbw60DhwauAlXo_R7sd9ntrdTmfmHxnRdfNVqEkpCc3FqxKUb-BxMgwLkhPkXY58-vD9-BzXc8HlBSnl682dFoJiwO7iGhfCOGgNMZ3HW4pizvjRPES"
              />
            </Link>

            <Link
              to="/login"
              className="hidden sm:inline-block px-6 py-2.5 rounded-full text-base font-bold text-[var(--primary-blue)] bg-[var(--white)] border border-[var(--primary-blue)] hover:bg-[var(--secondary-blue)] hover:text-white transition-colors"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-6 py-2.5 rounded-full text-base font-bold text-[var(--white)] bg-[var(--primary-blue)] hover:bg-[var(--secondary-blue)] transition-colors"
            >
              Sign Up
            </Link>

            <button
              className="md:hidden p-2 rounded-full hover:bg-[var(--neutral-gray)] transition-colors text-[var(--dark-gray)]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--white)] border-t border-[var(--light-border)] relative z-10">
          <div className="px-4 py-4 space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                <Search className="h-5 w-5" />
              </div>
              <input
                className="w-full rounded-full border-[var(--light-border)] bg-[var(--neutral-gray)] pl-10 pr-4 py-2 text-base focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent transition-all text-[var(--dark-gray)] placeholder-gray-400"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <nav className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-[var(--primary-blue)] bg-[var(--neutral-gray)]"
                      : "text-[var(--dark-gray)] hover:text-[var(--primary-blue)] hover:bg-[var(--neutral-gray)]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
