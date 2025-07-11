import { motion } from "framer-motion";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Bell,
  FlaskConical,
  Terminal,
} from "lucide-react";

const CourseCalendarPage = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 9, 22)); // October 22, 2024
  const [selectedCategory, setSelectedCategory] =
    useState("Filter by Category");
  const [selectedInstructor, setSelectedInstructor] = useState(
    "Filter by Instructor"
  );

  // Calendar data for October 2024
  const calendarData = {
    unavailable: [1, 2, 4, 6, 7, 9, 11, 12, 14, 16, 19, 21, 25, 27, 29, 31],
    available: [3, 5, 8, 10, 13, 15, 17, 20, 24, 26, 28],
    booked: [18, 23, 30],
    selected: [22],
  };

  const getDayClass = (day) => {
    if (calendarData.selected.includes(day)) {
      return "bg-[var(--primary-blue)] text-white dark:text-gray-900 transition-colors text-sm font-bold ring-2 ring-offset-2 ring-[var(--primary-blue)] dark:ring-offset-gray-800 relative";
    } else if (calendarData.booked.includes(day)) {
      return "bg-[var(--booked-slot)] text-red-700 dark:bg-booked-slot dark:text-red-300 text-sm font-medium relative";
    } else if (calendarData.available.includes(day)) {
      return "bg-[var(--available-slot)] text-green-700 dark:bg-available-slot dark:text-green-300 text-sm font-medium";
    } else {
      return "bg-[var(--unavailable-slot)] text-gray-400 dark:bg-unavailable-slot dark:text-gray-500 cursor-not-allowed text-sm font-medium";
    }
  };

  const getDayIndicator = (day) => {
    if (calendarData.selected.includes(day)) {
      return (
        <span className="booked-indicator bg-white dark:bg-gray-900"></span>
      );
    } else if (calendarData.booked.includes(day)) {
      return <span className="booked-indicator bg-red-500"></span>;
    }
    return null;
  };

  const isDayClickable = (day) => {
    return (
      calendarData.available.includes(day) ||
      calendarData.selected.includes(day)
    );
  };

  const handleDayClick = (day) => {
    if (isDayClickable(day)) {
      setSelectedDate(new Date(2024, 9, day));
    }
  };

  const navigateMonth = (direction) => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev);
      if (direction === "next") {
        newMonth.setMonth(newMonth.getMonth() + 1);
      } else {
        newMonth.setMonth(newMonth.getMonth() - 1);
      }
      return newMonth;
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const courses = [
    {
      id: 1,
      title: "Introduction to Data Science",
      instructor: "Dr. Emily Carter",
      time: "10:00 AM - 12:00 PM",
      description:
        "A comprehensive introduction to the field of data science, covering key concepts and tools.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCrqEMWw0JF4oCeQDYh3sXCRCkEoQ5_954n0033Q5aRI9bb0rWrr0cjToc2MFXpP_dwO3GMp5d2K0enDeF8dUcoTJAjmL-3lZ7SYoh2RsQBAImAikudNIU94b4WuJND_4yfGaQSP3GydpSpyfCduLiW3ZrKYBdOOEIPp7_t-85qU63txQyhBz5PJ9-X3DARKT89vkuCeB0mXNOQCop-V1uoyoibLqGcAehMB44D4ulBrB424JnS9LEd663C3bScsW9ST5S4JoXe8SW3",
      status: "available",
      icon: FlaskConical,
    },
    {
      id: 2,
      title: "Advanced Python Programming",
      instructor: "Mr. David Lee",
      time: "2:00 PM - 4:00 PM",
      description:
        "Take your Python skills to the next level with advanced topics and practical exercises.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB3qNmUjq6gxoINXJKjrD_wpOOnnuCT5OFd-_6UHwGQZAJobl2sHmp50LeEbGyYjnfxBL3SVxAqEn75eHqpbweSyY7uumHueewIOj6-CGbegcYMA-JQxn_29uKQrLUlQPGI_f9lW2HddwYQE648Z2xalzqaBI9cIA-dOh5-QV_wlDIS_82V8ejKEosLOZkFNdlT_XMI0YuMCNvps9VNGwUHGmrOQo2Ptpc8pKd-9UCkWVRBzB1L3eo7XVsT4v2u1Gmosqwlrcwn9V2n",
      status: "booked",
      icon: Terminal,
    },
  ];

  const categories = [
    "Filter by Category",
    "Data Science",
    "Programming",
    "Marketing",
    "Writing",
  ];
  const instructors = [
    "Filter by Instructor",
    "Dr. Emily Carter",
    "Mr. David Lee",
    "Ms. Sarah Chen",
    "Prof. Michael Brown",
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 mb-10 text-center"
        >
          <h1 className="text-[var(--text-primary)] text-4xl font-bold tracking-tighter sm:text-5xl">
            Course Calendar
          </h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Explore our courses and find the perfect time to learn. Use the
            calendar to see available slots and book your next learning
            adventure.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Calendar Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:w-[45%] flex-shrink-0 bg-[var(--bg-card)] p-6 rounded-2xl shadow-sm"
          >
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => navigateMonth("prev")}
                className="p-2 rounded-full hover:bg-[var(--light-border)] dark:hover:bg-gray-700 transition-colors duration-200 transform hover:scale-110"
              >
                <ChevronLeft className="h-5 w-5 text-[var(--text-primary)]" />
              </button>
              <h3 className="text-[var(--text-primary)] text-xl font-bold">
                {currentMonth.toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </h3>
              <button
                onClick={() => navigateMonth("next")}
                className="p-2 rounded-full hover:bg-[var(--light-border)] dark:hover:bg-gray-700 transition-colors duration-200 transform hover:scale-110"
              >
                <ChevronRight className="h-5 w-5 text-[var(--text-primary)]" />
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2 text-center">
              {/* Day Headers */}
              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
                <div
                  key={day}
                  className="text-[var(--text-secondary)] text-xs font-bold py-2"
                >
                  {day}
                </div>
              ))}

              {/* Calendar Days */}
              {/* First week - starting from Tuesday (October 1, 2024 is a Tuesday) */}
              <div className="col-start-3">
                <button
                  className={`calendar-day size-10 flex items-center justify-center rounded-full ${getDayClass(
                    1
                  )}`}
                  onClick={() => handleDayClick(1)}
                  disabled={!isDayClickable(1)}
                >
                  1{getDayIndicator(1)}
                </button>
              </div>
              <div>
                <button
                  className={`calendar-day size-10 flex items-center justify-center rounded-full ${getDayClass(
                    2
                  )}`}
                  onClick={() => handleDayClick(2)}
                  disabled={!isDayClickable(2)}
                >
                  2{getDayIndicator(2)}
                </button>
              </div>
              <div>
                <button
                  className={`calendar-day size-10 flex items-center justify-center rounded-full ${getDayClass(
                    3
                  )}`}
                  onClick={() => handleDayClick(3)}
                  disabled={!isDayClickable(3)}
                >
                  3{getDayIndicator(3)}
                </button>
              </div>
              <div>
                <button
                  className={`calendar-day size-10 flex items-center justify-center rounded-full ${getDayClass(
                    4
                  )}`}
                  onClick={() => handleDayClick(4)}
                  disabled={!isDayClickable(4)}
                >
                  4{getDayIndicator(4)}
                </button>
              </div>
              <div>
                <button
                  className={`calendar-day size-10 flex items-center justify-center rounded-full ${getDayClass(
                    5
                  )}`}
                  onClick={() => handleDayClick(5)}
                  disabled={!isDayClickable(5)}
                >
                  5{getDayIndicator(5)}
                </button>
              </div>
              <div>
                <button
                  className={`calendar-day size-10 flex items-center justify-center rounded-full ${getDayClass(
                    6
                  )}`}
                  onClick={() => handleDayClick(6)}
                  disabled={!isDayClickable(6)}
                >
                  6{getDayIndicator(6)}
                </button>
              </div>
              <div>
                <button
                  className={`calendar-day size-10 flex items-center justify-center rounded-full ${getDayClass(
                    7
                  )}`}
                  onClick={() => handleDayClick(7)}
                  disabled={!isDayClickable(7)}
                >
                  7{getDayIndicator(7)}
                </button>
              </div>

              {/* Remaining days */}
              {Array.from({ length: 24 }, (_, i) => i + 8).map((day) => (
                <div key={day}>
                  <button
                    className={`calendar-day size-10 flex items-center justify-center rounded-full ${getDayClass(
                      day
                    )}`}
                    onClick={() => handleDayClick(day)}
                    disabled={!isDayClickable(day)}
                  >
                    {day}
                    {getDayIndicator(day)}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Courses Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-[55%] flex flex-col gap-6"
          >
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative w-full sm:w-1/2">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none w-full rounded-full border border-[var(--light-border)] bg-[var(--bg-card)] dark:bg-[var(--bg-card)] py-3 px-5 pr-10 text-base text-[var(--text-primary)] shadow-sm focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-[var(--primary-blue)] transition-colors outline-none"
                >
                  {categories.map((category) => (
                    <option
                      key={category}
                      value={category}
                      className="text-[var(--text-primary)]"
                    >
                      {category}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>
              <div className="relative w-full sm:w-1/2">
                <select
                  value={selectedInstructor}
                  onChange={(e) => setSelectedInstructor(e.target.value)}
                  className="appearance-none w-full rounded-full border border-[var(--light-border)] bg-[var(--bg-card)] dark:bg-[var(--bg-card)] py-3 px-5 pr-10 text-base text-[var(--text-primary)] shadow-sm focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-[var(--primary-blue)] transition-colors outline-none"
                >
                  {instructors.map((instructor) => (
                    <option
                      key={instructor}
                      value={instructor}
                      className="text-[var(--text-primary)]"
                    >
                      {instructor}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <h3 className="text-[var(--text-primary)] text-2xl font-bold pt-2">
              Available Courses for {formatDate(selectedDate)}
            </h3>

            <div className="space-y-6">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className={`flex flex-col md:flex-row items-stretch justify-between gap-6 rounded-2xl bg-[var(--bg-card)] p-5 shadow-sm hover:shadow-lg transition-shadow duration-300 ${
                    course.status === "booked" ? "opacity-70" : ""
                  }`}
                >
                  <div className="flex flex-col gap-2 flex-1">
                    <div className="flex items-center gap-3">
                      <course.icon className="h-5 w-5 text-[var(--primary-blue)]" />
                      <p className="text-[var(--primary-blue)] text-sm font-bold tracking-wider">
                        {course.time}
                      </p>
                    </div>
                    <p className="text-[var(--text-primary)] text-xl font-bold">
                      {course.title}
                    </p>
                    <p className="text-[var(--text-secondary)] text-sm font-medium">
                      with {course.instructor}
                    </p>
                    <p className="text-[var(--text-secondary)] text-sm mt-2 line-clamp-2">
                      {course.description}
                    </p>
                    <button
                      className={`mt-4 w-full md:w-auto self-start text-center rounded-full px-6 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-100 ${
                        course.status === "booked"
                          ? "bg-green-500 cursor-not-allowed"
                          : "bg-[var(--primary-blue)]"
                      }`}
                      disabled={course.status === "booked"}
                    >
                      {course.status === "booked" ? "Booked" : "Book Now"}
                    </button>
                  </div>
                  <div
                    className="w-full md:w-48 h-48 md:h-auto bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex-shrink-0"
                    style={{ backgroundImage: `url("${course.image}")` }}
                  ></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourseCalendarPage;
