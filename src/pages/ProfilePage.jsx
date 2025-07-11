import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen,
  Award,
  Settings,
  Edit,
  Camera,
  Shield,
  Bell,
  HelpCircle,
} from "lucide-react";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    joinDate: "March 2023",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdVSfUJsaqs4YiTfIM6Oiz0M40jFOX0E1pBZJ98fBvoUuuOfq2UuzS2UrZSPXB-819P-WrhVY8ZALAPQ6bzu2Vpphh4Ew_3uRsknNCtsMYCg63iesFOM7Rh3aATu9j4_fEU7VeQtw3NI2sy3yZvCQ-mXq-2lbw60DhwauAlXo_R7sd9ntrdTmfmHxnRdfNVqEkpCc3FqxKUb-BxMgwLkhPkXY58-vD9-BzXc8HlBSnl682dFoJiwO7iGhfCOGgNMZ3HW4pizvjRPES",
    bio: "Passionate learner and educator. Always excited to discover new skills and share knowledge with others.",
    stats: {
      coursesCompleted: 24,
      certificates: 8,
      hoursLearned: 156,
      currentCourses: 3,
    },
  };

  const recentCourses = [
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "Sarah Chen",
      progress: 85,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBY9c4CDjga_6y400B7L_KXxaeS1-c_-F3v40VWB2H1Uhte9gzMSl2f8ziL4kFnCzhPqabrjT82533rjLEV-eOrbB83ITLdhclqI1G1UHOmY5Yh_67ufsUiAtCkqzhNrIgPHzPv5CHU_ELNcXH2FQ18XYiDBqw4M6K5vXHZ3W7C_7t0KQcnXHlqsjdw1j246c0RhLW823Ow4OxqqcMVgN-FftwJHCd3vR1adxi6w1C54rnGn4JdO2X82G-qwZ2LjSpLEdGgmYsyM-By",
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      instructor: "Dr. Michael Brown",
      progress: 62,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBOp3DcFcpm8Ck5JYPV3tOq2_qmL0uuAtuVyKbRDfIx4udNjUeXdRMANI722NoqL4VVJOdKn24ct_Z702fIbZw8OKSqdj7Ey9ljy6Ef_cY6NUE6M-_vEYumw_B5zJHtR5MFAsuJDu2CLMxQSLVCmfjecNdl-4j8h5D5LkTe_34ZVXJGLN12Xows0LzgPePdRk9zINe2q-VybbU-oM_9O-izJwiVVwDIjl3vaBBWJ-m2Ek2G7lqyjEAWa-a8u1-5UIs_Y6cz5465czrI",
    },
    {
      id: 3,
      title: "UX/UI Design Masterclass",
      instructor: "Emma Wilson",
      progress: 23,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA1L0Wim1gwcRrCT5mex49_fhNEos7zHxAFEQB8hWitY1ClfeMywdPB20sRidKZvC5OKFfRsTwvaeT_Ci5ax9vyWwpaFktaxqammAeHwt0yRUJKXy9hv7QYpj8N9aHs5pwipSQy3zEiJHm-q7Zp_pkyPA0zt-jwX5z01J1laR0t7-rV7I97zYlkv6SlO8dDGuqr-h0H8EEPbIBIo0YeC_LM0IR1_Kr91uysPFd5chhPqr0GH7N5NDRIwahm7L17PeU2cXq6OsURBR3t",
    },
  ];

  const certificates = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      issued: "Dec 2023",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDmk5R59h-gV7LBKA8JmVMgjX6bz2rSQ_c7__Lvow6X4Lk88xmD5JSo5yKcLYZboNfmIqHvypvsluW41F2dAuKnI63ym4e82vp2HinYvw5cDkRI2J3hBRudfiw6dk70JtA6gZ6XXEjOHSL2ntTSoVGgTG7mFc7o68txW5KlZK-aHgqErJAN9fdzK6VbeHy485if_BMmG7ZihGDthgY7pTszBC2TXyWxsiR-59ZyALt-oMtXls_e5G-oL6XVclZu9lK9aorJ9hzlAA0n",
    },
    {
      id: 2,
      title: "Python for Data Analysis",
      issued: "Nov 2023",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAYjt8yBBAhWA6HK-e0D4opDLitMDO2LU4FYXsdR08SsRdqtXFOEv_30O3cswga681vroOcbZIZKWDod1jZJalJuBtsBmayknwJCwmHS-8hi65Zc-VpFMi69W-KDZGVUEWJe7WXgBMavPDfS0frpdrzEiMOwl0R94lK4JNnaQCThzd3tZb2aJK_yoyos-710NKXTYxJZwyeL-mGC5H21L3RoTImPCwcunX0REl3XT_fbOHqDtYJcEQAqpQYOK2XeD6KGWXahSNFkjdV",
    },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: User },
    { id: "courses", label: "My Courses", icon: BookOpen },
    { id: "certificates", label: "Certificates", icon: Award },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[var(--bg-card)] rounded-2xl p-8 mb-8 shadow-lg"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-[var(--primary-blue)]"
              />
              <button className="absolute bottom-0 right-0 bg-[var(--primary-blue)] text-white p-2 rounded-full hover:bg-[var(--secondary-blue)] transition-colors">
                <Camera className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                    {user.name}
                  </h1>
                  <p className="text-[var(--text-secondary)] mb-4 max-w-2xl">
                    {user.bio}
                  </p>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <Mail className="h-4 w-4" />
                      <span>{user.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <Phone className="h-4 w-4" />
                      <span>{user.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <MapPin className="h-4 w-4" />
                      <span>{user.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <Calendar className="h-4 w-4" />
                      <span>Joined {user.joinDate}</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/profile/edit"
                  className="flex items-center gap-2 bg-[var(--primary-blue)] text-white px-6 py-3 rounded-full hover:bg-[var(--secondary-blue)] transition-colors"
                >
                  <Edit className="h-4 w-4" />
                  Edit Profile
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-[var(--bg-card)] rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[var(--primary-blue)] mb-2">
              {user.stats.coursesCompleted}
            </div>
            <div className="text-[var(--text-secondary)]">
              Courses Completed
            </div>
          </div>
          <div className="bg-[var(--bg-card)] rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[var(--success-green)] mb-2">
              {user.stats.certificates}
            </div>
            <div className="text-[var(--text-secondary)]">Certificates</div>
          </div>
          <div className="bg-[var(--bg-card)] rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[var(--accent-orange)] mb-2">
              {user.stats.hoursLearned}
            </div>
            <div className="text-[var(--text-secondary)]">Hours Learned</div>
          </div>
          <div className="bg-[var(--bg-card)] rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[var(--secondary-blue)] mb-2">
              {user.stats.currentCourses}
            </div>
            <div className="text-[var(--text-secondary)]">Current Courses</div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[var(--bg-card)] rounded-2xl p-6 mb-8"
        >
          <div className="flex flex-wrap gap-2 border-b border-[var(--light-border)] mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-[var(--primary-blue)] text-white"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Recent Courses */}
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                    Recent Courses
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recentCourses.map((course) => (
                      <div
                        key={course.id}
                        className="bg-[var(--bg-secondary)] rounded-xl p-4"
                      >
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-32 object-cover rounded-lg mb-4"
                        />
                        <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                          {course.title}
                        </h4>
                        <p className="text-sm text-[var(--text-secondary)] mb-3">
                          by {course.instructor}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                            <div
                              className="bg-[var(--primary-blue)] h-2 rounded-full"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-[var(--text-secondary)]">
                            {course.progress}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Certificates */}
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                    Recent Certificates
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificates.map((cert) => (
                      <div
                        key={cert.id}
                        className="bg-[var(--bg-secondary)] rounded-xl p-4 flex items-center gap-4"
                      >
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                          <h4 className="font-semibold text-[var(--text-primary)]">
                            {cert.title}
                          </h4>
                          <p className="text-sm text-[var(--text-secondary)]">
                            Issued {cert.issued}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "courses" && (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 text-[var(--text-secondary)] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                  My Courses
                </h3>
                <p className="text-[var(--text-secondary)]">
                  View and manage all your enrolled courses here.
                </p>
              </div>
            )}

            {activeTab === "certificates" && (
              <div className="text-center py-12">
                <Award className="h-16 w-16 text-[var(--text-secondary)] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                  Certificates
                </h3>
                <p className="text-[var(--text-secondary)]">
                  Access and download your earned certificates.
                </p>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-[var(--bg-secondary)] rounded-lg">
                  <div className="flex items-center gap-3">
                    <Bell className="h-5 w-5 text-[var(--text-secondary)]" />
                    <div>
                      <h4 className="font-medium text-[var(--text-primary)]">
                        Notifications
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)]">
                        Manage your notification preferences
                      </p>
                    </div>
                  </div>
                  <button className="text-[var(--primary-blue)] hover:text-[var(--secondary-blue)]">
                    Configure
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-[var(--bg-secondary)] rounded-lg">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-[var(--text-secondary)]" />
                    <div>
                      <h4 className="font-medium text-[var(--text-primary)]">
                        Privacy & Security
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)]">
                        Manage your account security
                      </p>
                    </div>
                  </div>
                  <button className="text-[var(--primary-blue)] hover:text-[var(--secondary-blue)]">
                    Configure
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-[var(--bg-secondary)] rounded-lg">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-[var(--text-secondary)]" />
                    <div>
                      <h4 className="font-medium text-[var(--text-primary)]">
                        Help & Support
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)]">
                        Get help with your account
                      </p>
                    </div>
                  </div>
                  <button className="text-[var(--primary-blue)] hover:text-[var(--secondary-blue)]">
                    Contact
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;
