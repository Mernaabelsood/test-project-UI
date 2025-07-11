import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  Plus,
  X,
  Linkedin,
  Twitter,
  Globe,
  User,
  Mail,
  FileText,
  Briefcase,
  Code,
  Share2,
  CheckCircle,
  AlertCircle,
  Save,
  ArrowLeft,
} from "lucide-react";

const EditProfilePage = () => {
  const [formData, setFormData] = useState({
    name: "Sophia Carter",
    email: "sophia.carter@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Passionate learner and educator. Always excited to discover new skills and share knowledge with others.",
    experience: {
      title: "Senior Software Engineer",
      organization: "TechCorp Inc.",
      startDate: "2022-01",
      endDate: "",
      description:
        "Led development of scalable web applications using React and Node.js.",
    },
    skills: [],
    socialMedia: {
      linkedin: "https://linkedin.com/in/sophiacarter",
      twitter: "https://twitter.com/sophiacarter",
      website: "https://sophiacarter.dev",
    },
  });

  const [skillsInput, setSkillsInput] = useState("");
  const [existingSkills, setExistingSkills] = useState([
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "React",
    "Node.js",
  ]);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Calculate form completion percentage
  const calculateProgress = () => {
    const fields = [
      formData.name,
      formData.email,
      formData.bio,
      formData.experience.title,
      formData.experience.organization,
      existingSkills.length > 0,
    ];
    const completed = fields.filter(Boolean).length;
    return Math.round((completed / fields.length) * 100);
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Please enter a valid email";

    if (!formData.bio.trim()) errors.bio = "Bio is required";
    if (formData.bio.length < 20)
      errors.bio = "Bio must be at least 20 characters";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field, value) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }

    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleAddSkill = () => {
    if (skillsInput.trim() && !existingSkills.includes(skillsInput.trim())) {
      setExistingSkills((prev) => [...prev, skillsInput.trim()]);
      setSkillsInput("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setExistingSkills((prev) =>
      prev.filter((skill) => skill !== skillToRemove)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowSuccess(true);

    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const progress = calculateProgress();

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link
              to="/profile"
              className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--primary-blue)] transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Profile
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                Edit Profile
              </h1>
              <p className="text-[var(--text-secondary)]">
                Update your personal information and professional details
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="lg:w-64">
              <div className="bg-[var(--bg-card)] rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-[var(--text-secondary)]">
                    Profile Completion
                  </span>
                  <span className="text-sm font-bold text-[var(--primary-blue)]">
                    {progress}%
                  </span>
                </div>
                <div className="w-full bg-[var(--bg-secondary)] rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-2">
                  {progress === 100
                    ? "Profile complete!"
                    : `${
                        6 - Math.round((progress / 100) * 6)
                      } fields remaining`}
                </p>
              </div>
            </div>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3"
            >
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-medium">
                Profile updated successfully!
              </span>
            </motion.div>
          )}

          <div className="bg-[var(--bg-card)] rounded-2xl shadow-lg overflow-hidden">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] p-8 text-white">
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <div className="relative">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbWkNExms52tb2eyeCeY8E1ZS1AUmrDvNsioat0Rq5sBrZ97KX18HqLow09zC9g46jij7IcdFGLWlj5yYMsBGo1IQHEWAR05fAYBKGjnQUDbwvbXG5j9fCnx2d3QsWKOYcrVjPWCS5SqnquWQAwi7ZRyH1PQT-NO4gkFLxdDCBfwES7A3yPjWZFS16wMSN0CApjc0l7W4N09KrAMe4ewNeEJgdZEO3EvTRwugNKLORmqaY6JK6blojBvac9N0EhQDqHELkwgqAl_eB"
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <button className="absolute bottom-0 right-0 flex items-center justify-center w-10 h-10 bg-white rounded-full text-[var(--primary-blue)] hover:bg-gray-100 transition-colors shadow-lg">
                    <svg
                      fill="currentColor"
                      height="20"
                      viewBox="0 0 256 256"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M247.31,73.31,182.69,8.69a16,16,0,0,0-22.62,0L36.69,132.07a15.86,15.86,0,0,0-4.69,11.31V208a16,16,0,0,0,16,16H112a16,16,0,0,0,11.31-4.69L247.31,95.93a16,16,0,0,0,0-22.62ZM112,192H64V144l88-88,48,48ZM176,88,128,40l24-24,48,48Z"></path>
                    </svg>
                  </button>
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl font-bold">{formData.name}</h2>
                  <p className="text-blue-100">{formData.email}</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-10">
              {/* Basic Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[var(--primary-blue)] bg-opacity-10 rounded-lg">
                    <User className="h-5 w-5 text-[var(--primary-blue)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    Basic Information
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm font-medium text-[var(--text-primary)] pb-2"
                      htmlFor="name"
                    >
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <User className="h-5 w-5 text-[var(--text-muted)]" />
                      </div>
                      <input
                        className={`form-input-enhanced block w-full rounded-xl border-[var(--light-border)] bg-[var(--bg-secondary)] pl-10 pr-4 h-12 text-base placeholder:text-gray-400 text-[var(--text-primary)] ${
                          formErrors.name
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                            : "focus:border-[var(--primary-blue)] focus:ring-[var(--primary-blue)]"
                        }`}
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                      />
                    </div>
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium text-[var(--text-primary)] pb-2"
                      htmlFor="email"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Mail className="h-5 w-5 text-[var(--text-muted)]" />
                      </div>
                      <input
                        className={`form-input-enhanced block w-full rounded-xl border-[var(--light-border)] bg-[var(--bg-secondary)] pl-10 pr-4 h-12 text-base placeholder:text-gray-400 text-[var(--text-primary)] ${
                          formErrors.email
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                            : "focus:border-[var(--primary-blue)] focus:ring-[var(--primary-blue)]"
                        }`}
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                      />
                    </div>
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm font-medium text-[var(--text-primary)] pb-2"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      className="form-input-enhanced block w-full rounded-xl border-[var(--light-border)] bg-[var(--bg-secondary)] focus:border-[var(--primary-blue)] focus:ring-[var(--primary-blue)] h-12 px-4 text-base placeholder:text-gray-400 text-[var(--text-primary)]"
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium text-[var(--text-primary)] pb-2"
                      htmlFor="location"
                    >
                      Location
                    </label>
                    <input
                      className="form-input-enhanced block w-full rounded-xl border-[var(--light-border)] bg-[var(--bg-secondary)] focus:border-[var(--primary-blue)] focus:ring-[var(--primary-blue)] h-12 px-4 text-base placeholder:text-gray-400 text-[var(--text-primary)]"
                      id="location"
                      type="text"
                      placeholder="Enter your location"
                      value={formData.location}
                      onChange={(e) =>
                        handleInputChange("location", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-[var(--text-primary)] pb-2"
                    htmlFor="bio"
                  >
                    Bio *
                  </label>
                  <div className="relative">
                    <div className="absolute top-4 left-3 pointer-events-none">
                      <FileText className="h-5 w-5 text-[var(--text-muted)]" />
                    </div>
                    <textarea
                      className={`form-input-enhanced block w-full rounded-xl border-[var(--light-border)] bg-[var(--bg-secondary)] focus:border-[var(--primary-blue)] focus:ring-[var(--primary-blue)] p-4 pl-10 text-base placeholder:text-gray-400 text-[var(--text-primary)] ${
                        formErrors.bio
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : "focus:border-[var(--primary-blue)] focus:ring-[var(--primary-blue)]"
                      }`}
                      id="bio"
                      placeholder="Tell us a little about yourself, your interests, and what you're passionate about..."
                      rows="4"
                      value={formData.bio}
                      onChange={(e) => handleInputChange("bio", e.target.value)}
                    />
                  </div>
                  {formErrors.bio && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {formErrors.bio}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-[var(--text-muted)]">
                    {formData.bio.length}/500 characters
                  </p>
                </div>
              </motion.div>

              <hr className="border-t border-[var(--light-border)]" />

              {/* Experience Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[var(--accent-orange)] bg-opacity-10 rounded-lg">
                      <Briefcase className="h-5 w-5 text-[var(--accent-orange)]" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                      Experience
                    </h3>
                  </div>
                  <button
                    className="flex items-center gap-2 text-sm font-medium text-[var(--primary-blue)] hover:text-[var(--secondary-blue)] transition-colors"
                    type="button"
                  >
                    <Plus className="h-5 w-5" />
                    Add Experience
                  </button>
                </div>

                <div className="bg-[var(--bg-secondary)] rounded-xl p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-sm font-medium text-[var(--text-primary)] pb-2"
                        htmlFor="exp-title"
                      >
                        Job Title
                      </label>
                      <input
                        className="form-input-enhanced block w-full rounded-xl border-[var(--light-border)] bg-[var(--bg-card)] focus:border-[var(--primary-blue)] focus:ring-[var(--primary-blue)] h-12 px-4 text-base placeholder:text-gray-400 text-[var(--text-primary)]"
                        id="exp-title"
                        placeholder="e.g., Senior Software Engineer"
                        type="text"
                        value={formData.experience.title}
                        onChange={(e) =>
                          handleInputChange("experience.title", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-[var(--text-primary)] pb-2"
                        htmlFor="exp-org"
                      >
                        Organization
                      </label>
                      <input
                        className="form-input-enhanced block w-full rounded-xl border-[var(--light-border)] bg-[var(--bg-card)] focus:border-[var(--primary-blue)] focus:ring-[var(--primary-blue)] h-12 px-4 text-base placeholder:text-gray-400 text-[var(--text-primary)]"
                        id="exp-org"
                        placeholder="e.g., Google"
                        type="text"
                        value={formData.experience.organization}
                        onChange={(e) =>
                          handleInputChange(
                            "experience.organization",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-sm font-medium text-[var(--text-primary)] pb-2"
                        htmlFor="exp-start"
                      >
                        Start Date
                      </label>
                      <input
                        className="form-input-enhanced block w-full rounded-xl border-[var(--light-border)] bg-[var(--bg-card)] focus:border-[var(--primary-blue)] focus:ring-[var(--primary-blue)] h-12 px-4 text-base placeholder:text-gray-400 text-[var(--text-primary)]"
                        id="exp-start"
                        type="month"
                        value={formData.experience.startDate}
                        onChange={(e) =>
                          handleInputChange(
                            "experience.startDate",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-[var(--text-primary)] pb-2"
                        htmlFor="exp-end"
                      >
                        End Date
                      </label>
                      <input
                        className="form-input-enhanced block w-full rounded-xl border-[var(--light-border)] bg-[var(--bg-card)] focus:border-[var(--primary-blue)] focus:ring-[var(--primary-blue)] h-12 px-4 text-base placeholder:text-gray-400 text-[var(--text-primary)]"
                        id="exp-end"
                        type="month"
                        placeholder="Leave empty if current"
                        value={formData.experience.endDate}
                        onChange={(e) =>
                          handleInputChange(
                            "experience.endDate",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-[var(--text-primary)] pb-2"
                      htmlFor="exp-desc"
                    >
                      Description
                    </label>
                    <textarea
                      className="form-input-enhanced block w-full rounded-xl border-[var(--light-border)] bg-[var(--bg-card)] focus:border-[var(--primary-blue)] focus:ring-[var(--primary-blue)] p-4 text-base placeholder:text-gray-400 text-[var(--text-primary)]"
                      id="exp-desc"
                      placeholder="Briefly describe your responsibilities and achievements..."
                      rows="3"
                      value={formData.experience.description}
                      onChange={(e) =>
                        handleInputChange(
                          "experience.description",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>
              </motion.div>

              <hr className="border-t border-[var(--light-border)]" />

              {/* Skills Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[var(--success-green)] bg-opacity-10 rounded-lg">
                      <Code className="h-5 w-5 text-[var(--success-green)]" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                      Skills
                    </h3>
                  </div>
                  <button
                    className="flex items-center gap-2 text-sm font-medium text-[var(--primary-blue)] hover:text-[var(--secondary-blue)] transition-colors"
                    type="button"
                    onClick={handleAddSkill}
                  >
                    <Plus className="h-5 w-5" />
                    Add Skill
                  </button>
                </div>

                <div className="bg-[var(--bg-secondary)] rounded-xl p-6">
                  <label
                    className="block text-sm font-medium text-[var(--text-primary)] pb-2"
                    htmlFor="skills"
                  >
                    Your Skills
                  </label>
                  <input
                    className="form-input-enhanced block w-full rounded-xl border-[var(--light-border)] bg-[var(--bg-card)] focus:border-[var(--primary-blue)] focus:ring-[var(--primary-blue)] h-12 px-4 text-base placeholder:text-gray-400 text-[var(--text-primary)]"
                    id="skills"
                    placeholder="e.g., JavaScript, React, Node.js (press Enter to add)"
                    type="text"
                    value={skillsInput}
                    onChange={(e) => setSkillsInput(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" &&
                      (e.preventDefault(), handleAddSkill())
                    }
                  />

                  <div className="flex flex-wrap gap-2 mt-4">
                    {existingSkills.map((skill, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--primary-blue)] bg-opacity-20 text-[var(--primary-blue)] hover:bg-opacity-30 transition-colors"
                      >
                        {skill}
                        <button
                          className="ml-2 text-xs hover:text-red-500 transition-colors"
                          onClick={() => handleRemoveSkill(skill)}
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <hr className="border-t border-[var(--light-border)]" />

              {/* Social Media Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[var(--secondary-blue)] bg-opacity-10 rounded-lg">
                    <Share2 className="h-5 w-5 text-[var(--secondary-blue)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    Social Media
                  </h3>
                </div>

                <div className="bg-[var(--bg-secondary)] rounded-xl p-6 space-y-4">
                  <div>
                    <label
                      className="block text-sm font-medium text-[var(--text-primary)] pb-2"
                      htmlFor="linkedin"
                    >
                      LinkedIn
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Linkedin className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        className="form-input-enhanced block w-full rounded-xl border-[var(--light-border)] bg-[var(--bg-card)] focus:border-[var(--primary-blue)] focus:ring-[var(--primary-blue)] h-12 px-4 pl-10 text-base placeholder:text-gray-400 text-[var(--text-primary)]"
                        id="linkedin"
                        placeholder="https://linkedin.com/in/yourprofile"
                        type="url"
                        value={formData.socialMedia.linkedin}
                        onChange={(e) =>
                          handleInputChange(
                            "socialMedia.linkedin",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-[var(--text-primary)] pb-2"
                      htmlFor="twitter"
                    >
                      Twitter
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Twitter className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        className="form-input-enhanced block w-full rounded-xl border-[var(--light-border)] bg-[var(--bg-card)] focus:border-[var(--primary-blue)] focus:ring-[var(--primary-blue)] h-12 px-4 pl-10 text-base placeholder:text-gray-400 text-[var(--text-primary)]"
                        id="twitter"
                        placeholder="https://twitter.com/yourprofile"
                        type="url"
                        value={formData.socialMedia.twitter}
                        onChange={(e) =>
                          handleInputChange(
                            "socialMedia.twitter",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-[var(--text-primary)] pb-2"
                      htmlFor="website"
                    >
                      Personal Website
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Globe className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        className="form-input-enhanced block w-full rounded-xl border-[var(--light-border)] bg-[var(--bg-card)] focus:border-[var(--primary-blue)] focus:ring-[var(--primary-blue)] h-12 px-4 pl-10 text-base placeholder:text-gray-400 text-[var(--text-primary)]"
                        id="website"
                        placeholder="https://yourwebsite.com"
                        type="url"
                        value={formData.socialMedia.website}
                        onChange={(e) =>
                          handleInputChange(
                            "socialMedia.website",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex justify-end pt-6"
              >
                <button
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 rounded-full h-12 px-8 bg-[var(--primary-blue)] text-white text-base font-bold tracking-wide hover:bg-[var(--secondary-blue)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-blue)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  type="submit"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EditProfilePage;
