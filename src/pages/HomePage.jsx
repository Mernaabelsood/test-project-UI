import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  MessageSquare,
  Users,
  ArrowRight,
  Star,
  Users as UsersIcon,
  Award,
} from "lucide-react";

const HomePage = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "For Students",
      description:
        "Access a vast library of courses, learn from industry experts, and achieve your learning goals.",
      bgColor: "bg-[var(--secondary-blue)]",
    },
    {
      icon: MessageSquare,
      title: "For Instructors",
      description:
        "Share your expertise, create engaging courses, and build a thriving online community.",
      bgColor: "bg-[var(--accent-orange)]",
    },
    {
      icon: Users,
      title: "For Everyone",
      description:
        "Join a vibrant community of learners and educators, and expand your horizons.",
      bgColor: "bg-[var(--success-green)]",
    },
  ];

  const popularCourses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description: "Learn to build responsive websites and web applications.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCO2SfpkNqVSAt-3ap3G2Q_OTlEtaDZoh0QCSf_CYFXZ0XlPc-UL3IVJm_GzgFl5Ai_StXnAPg3DVdcuCnRzAIi7_-OOgxv01bvRFQXQW3bBIXYDxE_jQ-C66OJPKH0X3Q3tAf2V07V8GzwDfgJHHN6XCM-MmHWyV2G7wmwfSPbQ2tYJYMhKASJ9EWLRj150RXUPOeTiEdvHodQg8WZ2eZNaIsF9Ws7p0oFSCPAIYcbMuEfrBLH2DaXC9VXLSXRPL01-eehd4Z9gumO",
      category: "Development",
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      description:
        "Master the art of online marketing and drive business growth.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB_F6sdGlLa1XxKPAnvfPixnjoHIANrI9TxJLBniFi8rPDQs2XRDH3g8d5MOIpCz6vgmOANtUvYSJQXagBP3j1_JGcCCKOf4-S35q8yMoh_ldV1qdMS3A708SS3yr4yY0sni0iLk1p9_itkCpZixuJqcvxUNbM313-mTRfTloiqyqDzfbR3CVkEmkzxCg7OvdB1UPhtniKEGPd-YdSyYtG0eFjzcCUzdqq3K6_3jqrlFv8uRg96EkO6zqAO62Q1decW0z-ukmKMw5qN",
      category: "Marketing",
    },
    {
      id: 3,
      title: "Data Science Essentials",
      description: "Explore the world of data analysis and machine learning.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDaYq_C22Ms0LXnNS2xaTvqnSuZik7K-jKLsjnXvTTN10TsqwBlTjziZ9IiBPL7h4ZH1KxP6ZoWLGnRM0QP_Llz0Q1B69wNXDIYuYRWR1oDpY6GthvVh3Wtt5gbF83OV68i58e9g3avjj55lnRBxdhUvxrRNnaxHx6hX7NNkx84HfpbIVfrgTJPQbMzZUAulq-lJLiUn5gEK60QIoR4JNuGuZO0J6JEUnBBurOj2ytrcSpDYXlvLrInih7D-sz8xYicudMps4P-4e7I",
      category: "Data Science",
    },
  ];

  const instructors = [
    {
      name: "Sarah Chen",
      specialty: "Expert in Web Development",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA2QuYKWOGlQqkHLiyXLHBNyjt2jMIQViwAXWHfbZ_8RuCobp5j7MCI04_nnMT5e_ILrZORL78_O_PNGTdjel-cgWbchv8tlweNJ9oT57mQHWsL0_eJepdsw8tZT2gNFh8iZnOkEKALvLY94aRDvb7XC49WYQ704uhwv94xWlFIqjMuxpoOv1CAoLfaKaaH4tq5OFQacTdB-BrwG6T85d7ZEF6uLlAPNoNT5ccdoGZ6kzUyTSZJGCaxGoLc_qCO_X7hVN2zhlWvMsCI",
    },
    {
      name: "David Lee",
      specialty: "Master of Digital Marketing",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBVKcZLBpsTyR5DGObci8FfbVgJL3eLkUvoIWBYmjFhm3_4BQ-vUfGKxnrY0hy3pTC4BKL2p3umoFmq8E9sKpu1DiTj37SyTfxZF8DZ1x47_VWYrbXpCDuQtxSPrgTSHglhwz3TNmOOk0eWpa-kmBgg5trzE0dYj_JY88P39ln8_4Hfcp4RUWtGfLV1bWoOrhzzeYoFRjTnWcRlQGyIgQxbQe9YKhB-_aMp8qy2clN6WWtIcMT6P29kbeDMSuoz5IwVPwkpmUsO0743",
    },
    {
      name: "Emily Rodriguez",
      specialty: "Specialist in Data Science",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAzRfbT7UQWznNgpHMaBn_SNrm4dy8DVfg9ApE336Plu3KunuXi7eHYoVKVcpQ1eZIklwqvHsNKe5IkorYKlxd4Ph4EMy0TIXytNuRhhBgV1o_qurrCWbnW7qi0mqLcCbv9Qae7KX2oXzHupG-PeOHuvS6pDPQkOGxfkCtWR2QC4RG-dLCI1OPxbgXAZUtNWkLkOQHbt6IEzQw35PQWnFa3yfFLtiv23-ov09KE9AmWmqn85up_McC8mOr7kP4VoD0pxt38IF7_Mo-m",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(19, 78, 74, 0.7), rgba(19, 78, 74, 0.9)), url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-black leading-tight tracking-tighter mb-4"
          >
            Learn Without Limits, Teach With Purpose
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg md:text-xl font-light mb-8"
          >
            EduNas is your gateway to a world of knowledge. Explore diverse
            courses, master new skills, and connect with passionate instructors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-wrap gap-4 flex justify-center"
          >
            <Link
              to="/courses"
              className="px-8 py-4 rounded-full text-lg font-bold text-white bg-[var(--success-green)] hover:bg-green-600 transition-all transform hover:scale-105"
            >
              Start Learning
            </Link>
            <Link
              to="/calendar"
              className="px-8 py-4 rounded-full text-lg font-bold text-[var(--dark-gray)] bg-[var(--white)] hover:bg-[var(--neutral-gray)] transition-all transform hover:scale-105"
            >
              View Calendar
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-[var(--neutral-gray)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--dark-gray)]">
              Empowering Learners and Educators
            </h2>
            <p className="mt-4 text-lg text-[var(--dark-gray)]/80">
              A platform designed for growth, collaboration, and success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-[var(--white)] p-8 rounded-xl shadow-lg border border-[var(--light-border)] hover:shadow-2xl transition-shadow duration-300"
              >
                <div
                  className={`mx-auto flex items-center justify-center h-16 w-16 rounded-full ${feature.bgColor} text-white mb-6`}
                >
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[var(--dark-gray)]">
                  {feature.title}
                </h3>
                <p className="text-[var(--dark-gray)]/80">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-16 sm:py-24 bg-[var(--white)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--dark-gray)]">
              Explore Popular Courses
            </h2>
            <p className="mt-4 text-lg text-[var(--dark-gray)]/80">
              Start your learning journey with our most sought-after courses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col bg-[var(--white)] rounded-xl shadow-lg border border-[var(--light-border)] overflow-hidden transition-transform duration-300 hover:-translate-y-2"
              >
                <img
                  alt={course.title}
                  className="w-full h-48 object-cover"
                  src={course.image}
                />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold mb-2 text-[var(--dark-gray)]">
                    {course.title}
                  </h3>
                  <p className="text-[var(--dark-gray)]/80 flex-1 mb-4">
                    {course.description}
                  </p>
                  <Link
                    to={`/courses/${course.id}`}
                    className="text-[var(--primary-blue)] font-bold hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Spotlight Section */}
      <section className="py-16 sm:py-24 bg-[var(--neutral-gray)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--dark-gray)]">
              Instructor Spotlight
            </h2>
            <p className="mt-4 text-lg text-[var(--dark-gray)]/80">
              Meet some of our most inspiring and successful instructors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img
                  alt={`Instructor ${instructor.name}`}
                  className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-white"
                  src={instructor.image}
                />
                <h3 className="text-xl font-bold text-[var(--dark-gray)]">
                  {instructor.name}
                </h3>
                <p className="text-[var(--dark-gray)]/80">
                  {instructor.specialty}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
