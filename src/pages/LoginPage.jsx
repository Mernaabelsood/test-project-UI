import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", formData);
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden bg-[var(--bg-secondary)]">
      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md space-y-8 rounded-lg bg-[var(--bg-card)] p-8 shadow-lg border border-[var(--light-border)]"
        >
          {/* Logo */}
          <div className="text-center">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="h-10 w-10 text-[var(--primary-blue)]">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-[var(--text-primary)]">
                EduNas
              </h1>
            </Link>
          </div>

          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Welcome back!
            </h2>
            <p className="mt-2 text-center text-sm text-[var(--text-secondary)]">
              Log in to continue your learning journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <input name="remember" type="hidden" value="true" />

            <div className="space-y-4">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="relative block w-full appearance-none rounded-lg border border-[var(--light-border)] bg-[var(--bg-secondary)] px-3 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--primary-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)] focus:ring-opacity-50 sm:text-sm transition-colors"
                />
              </div>

              <div className="relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="relative block w-full appearance-none rounded-lg border border-[var(--light-border)] bg-[var(--bg-secondary)] px-3 py-3 pr-10 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--primary-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)] focus:ring-opacity-50 sm:text-sm transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border-[var(--light-border)] text-[var(--primary-blue)] focus:ring-[var(--primary-blue)] focus:ring-opacity-50 bg-[var(--bg-secondary)]"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-[var(--text-primary)]"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="font-medium text-[var(--primary-blue)] hover:text-[var(--secondary-blue)] transition-colors"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-lg border border-transparent bg-[var(--primary-blue)] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--secondary-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)] focus:ring-offset-2 focus:ring-offset-[var(--bg-card)]"
              >
                Log in
              </button>
            </div>
          </form>

          <div className="text-center text-sm text-[var(--text-secondary)]">
            <p>
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-[var(--primary-blue)] hover:text-[var(--secondary-blue)] transition-colors"
              >
                Sign up now
              </Link>
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default LoginPage;
