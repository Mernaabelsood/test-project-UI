import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Filter, Star, Clock, Users, BookOpen } from "lucide-react";

const CoursesPage = () => {
  const categories = [
    "All Courses",
    "Development",
    "Business",
    "Design",
    "Marketing",
    "IT & Software",
  ];

  const courses = [
    {
      id: 1,
      title: "The Complete Web Development Bootcamp",
      instructor: "Angela Yu",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBY9c4CDjga_6y400B7L_KXxaeS1-c_-F3v40VWB2H1Uhte9gzMSl2f8ziL4kFnCzhPqabrjT82533rjLEV-eOrbB83ITLdhclqI1G1UHOmY5Yh_67ufsUiAtCkqzhNrIgPHzPv5CHU_ELNcXH2FQ18XYiDBqw4M6K5vXHZ3W7C_7t0KQcnXHlqsjdw1j246c0RhLW823Ow4OxqqcMVgN-FftwJHCd3vR1adxi6w1C54rnGn4JdO2X82G-qwZ2LjSpLEdGgmYsyM-By",
      level: "Beginner",
      badge: "Bestseller",
      rating: 4.7,
      students: "245,321",
      price: "$84.99",
      duration: "44 hours",
      lessons: 185,
    },
    {
      id: 2,
      title: "The Complete Python Bootcamp",
      instructor: "Jose Portilla",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBOp3DcFcpm8Ck5JYPV3tOq2_qmL0uuAtuVyKbRDfIx4udNjUeXdRMANI722NoqL4VVJOdKn24ct_Z702fIbZw8OKSqdj7Ey9ljy6Ef_cY6NUE6M-_vEYumw_B5zJHtR5MFAsuJDu2CLMxQSLVCmfjecNdl-4j8h5D5LkTe_34ZVXJGLN12Xows0LzgPePdRk9zINe2q-VybbU-oM_9O-izJwiVVwDIjl3vaBBWJ-m2Ek2G7lqyjEAWa-a8u1-5UIs_Y6cz5465czrI",
      level: "All Levels",
      badge: "Bestseller",
      rating: 4.6,
      students: "492,112",
      price: "$84.99",
      duration: "22 hours",
      lessons: 194,
    },
    {
      id: 3,
      title: "Machine Learning A-Z™: AI, Python & R",
      instructor: "Kirill Eremenko",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA1L0Wim1gwcRrCT5mex49_fhNEos7zHxAFEQB8hWitY1ClfeMywdPB20sRidKZvC5OKFfRsTwvaeT_Ci5ax9vyWwpaFktaxqammAeHwt0yRUJKXy9hv7QYpj8N9aHs5pwipSQy3zEiJHm-q7Zp_pkyPA0zt-jwX5z01J1laR0t7-rV7I97zYlkv6SlO8dDGuqr-h0H8EEPbIBIo0YeC_LM0IR1_Kr91uysPFd5chhPqr0GH7N5NDRIwahm7L17PeU2cXq6OsURBR3t",
      level: "Intermediate",
      badge: "New",
      rating: 4.5,
      students: "189,555",
      price: "$84.99",
      duration: "44 hours",
      lessons: 185,
    },
    {
      id: 4,
      title: "The Data Science Course 2024",
      instructor: "365 Careers",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDmk5R59h-gV7LBKA8JmVMgjX6bz2rSQ_c7__Lvow6X4Lk88xmD5JSo5yKcLYZboNfmIqHvypvsluW41F2dAuKnI63ym4e82vp2HinYvw5cDkRI2J3hBRudfiw6dk70JtA6gZ6XXEjOHSL2ntTSoVGgTG7mFc7o68txW5KlZK-aHgqErJAN9fdzK6VbeHy485if_BMmG7ZihGDthgY7pTszBC2TXyWxsiR-59ZyALt-oMtXls_e5G-oL6XVclZu9lK9aorJ9hzlAA0n",
      level: "All Levels",
      badge: "Bestseller",
      rating: 4.6,
      students: "133,021",
      price: "$84.99",
      duration: "28 hours",
      lessons: 365,
    },
    {
      id: 5,
      title: "React - The Complete Guide",
      instructor: "Maximilian Schwarzmüller",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCB3Ll7Fr5QjZolN4hs3Y84akhp8ZIbHcImuH5N1nPvViQgzu76Tr923cqi8BUqTVfMMz9cLR_ER4tS803fPXYgp8-C-VIZ1asoCn3dsDZK_VrD3u2pw6qAspGgHw4KZ-8NhTD56VDGq3f-9a9yUDzWDPf20QaB7MJdEnRraZwZ4aCwej4viPYMAiibmaM0xDcYBRb-l2BQylhufPIpU7aDY2CdLWTtpB686S4To824TlTy5h76DufZDWbFX9VoJnuo8WUDLlCtQ_U2",
      level: "Intermediate",
      badge: "Hot",
      rating: 4.6,
      students: "156,789",
      price: "$84.99",
      duration: "48 hours",
      lessons: 520,
    },
    {
      id: 6,
      title: "UX Design Fundamentals",
      instructor: "Joe Natoli",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAYjt8yBBAhWA6HK-e0D4opDLitMDO2LU4FYXsdR08SsRdqtXFOEv_30O3cswga681vroOcbZIZKWDod1jZJalJuBtsBmayknwJCwmHS-8hi65Zc-VpFMi69W-KDZGVUEWJe7WXgBMavPDfS0frpdrzEiMOwl0R94lK4JNnaQCThzd3tZb2aJK_yoyos-710NKXTYxJZwyeL-mGC5H21L3RoTImPCwcunX0REl3XT_fbOHqDtYJcEQAqpQYOK2XeD6KGWXahSNFkjdV",
      level: "Beginner",
      badge: "Popular",
      rating: 4.8,
      students: "89,234",
      price: "$84.99",
      duration: "32 hours",
      lessons: 245,
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)] grid-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-[var(--text-primary)] text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
            Explore Our Courses
          </h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Discover thousands of courses from top instructors around the world.
            Start your learning journey today.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--text-muted)]" />
            <input
              className="form-input-enhanced w-full pl-12 pr-4 py-3 rounded-full bg-[var(--bg-card)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]"
              placeholder="Search for courses, instructors, or topics..."
            />
          </div>

          {/* Category Filter */}
          <select className="form-input-enhanced px-6 py-3 rounded-full bg-[var(--bg-card)] text-[var(--text-primary)] border-0">
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* Filter Button */}
          <button className="btn-primary px-6 py-3 rounded-full bg-[var(--primary-blue)] text-white font-semibold flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </button>
        </motion.div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="card-hover bg-[var(--bg-card)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl"
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="w-full h-full bg-center bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url("${course.image}")` }}
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      course.badge === "Bestseller"
                        ? "bg-[var(--primary-blue)]/10 text-[var(--primary-blue)]"
                        : course.badge === "New"
                        ? "bg-green-500/10 text-green-600"
                        : "bg-orange-500/10 text-orange-600"
                    }`}
                  >
                    {course.badge}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 rounded-full text-xs font-semibold bg-black/20 text-white backdrop-blur-sm">
                    {course.level}
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-[var(--text-primary)] text-lg font-bold mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mb-4">
                  by {course.instructor}
                </p>

                {/* Course Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-[var(--text-secondary)]">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Course Details */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-sm text-[var(--text-secondary)]">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.lessons} lessons</span>
                  </div>
                  <span className="text-[var(--text-primary)] text-xl font-bold">
                    {course.price}
                  </span>
                </div>

                {/* Enroll Button */}
                <button className="btn-primary w-full py-3 rounded-full bg-[var(--primary-blue)] text-white font-semibold">
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="btn-primary px-8 py-3 rounded-full bg-[var(--bg-card)] text-[var(--text-primary)] font-semibold border-2 border-[var(--light-border)] hover:border-[var(--primary-blue)]">
            Load More Courses
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CoursesPage;
