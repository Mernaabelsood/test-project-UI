import { motion } from "framer-motion";
import { Users, Target, Award, Heart, Globe, BookOpen } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: Users,
      title: "Community First",
      description:
        "We believe in the power of community and collaboration in education.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from content quality to user experience.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "We're passionate about making education accessible to everyone, everywhere.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "We connect learners and educators from around the world.",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA2QuYKWOGlQqkHLiyXLHBNyjt2jMIQViwAXWHfbZ_8RuCobp5j7MCI04_nnMT5e_ILrZORL78_O_PNGTdjel-cgWbchv8tlweNJ9oT57mQHWsL0_eJepdsw8tZT2gNFh8iZnOkEKALvLY94aRDvb7XC49WYQ704uhwv94xWlFIqjMuxpoOv1CAoLfaKaaH4tq5OFQacTdB-BrwG6T85d7ZEF6uLlAPNoNT5ccdoGZ6kzUyTSZJGCaxGoLc_qCO_X7hVN2zhlWvMsCI",
      bio: "Former educator with 15+ years of experience in online learning.",
    },
    {
      name: "David Lee",
      role: "CTO",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBVKcZLBpsTyR5DGObci8FfbVgJL3eLkUvoIWBYmjFhm3_4BQ-vUfGKxnrY0hy3pTC4BKL2p3umoFmq8E9sKpu1DiTj37SyTfxZF8DZ1x47_VWYrbXpCDuQtxSPrgTSHglhwz3TNmOOk0eWpa-kmBgg5trzE0dYj_JY88P39ln8_4Hfcp4RUWtGfLV1bWoOrhzzeYoFRjTnWcRlQGyIgQxbQe9YKhB-_aMp8qy2clN6WWtIcMT6P29kbeDMSuoz5IwVPwkpmUsO0743",
      bio: "Tech enthusiast with expertise in scalable educational platforms.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Content",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAzRfbT7UQWznNgpHMaBn_SNrm4dy8DVfg9ApE336Plu3KunuXi7eHYoVKVcpQ1eZIklwqvHsNKe5IkorYKlxd4Ph4EMy0TIXytNuRhhBgV1o_qurrCWbnW7qi0mqLcCbv9Qae7KX2oXzHupG-PeOHuvS6pDPQkOGxfkCtWR2QC4RG-dLCI1OPxbgXAZUtNWkLkOQHbt6IEzQw35PQWnFa3yfFLtiv23-ov09KE9AmWmqn85up_McC8mOr7kP4VoD0pxt38IF7_Mo-m",
      bio: "Curriculum specialist focused on creating engaging learning experiences.",
    },
  ];

  const stats = [
    { number: "100M+", label: "Students Worldwide" },
    { number: "50K+", label: "Expert Instructors" },
    { number: "200K+", label: "Courses Available" },
    { number: "150+", label: "Countries Reached" },
  ];

  return (
    <div className="min-h-screen bg-[var(--neutral-gray)]">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              About Our Learning Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Empowering learners and educators worldwide through innovative
              online education.
            </p>
            <div className="flex items-center justify-center gap-8 text-gray-500">
              <div className="flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                <span>Founded 2020</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-6 w-6" />
                <span>Global Platform</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At our learning platform, we believe that education should be
                accessible to everyone, everywhere. Our mission is to
                democratize learning by connecting passionate instructors with
                eager students across the globe.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We're committed to providing high-quality, engaging educational
                content that empowers individuals to achieve their learning
                goals and advance their careers.
              </p>
              <div className="bg-[var(--primary-blue)] text-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                <p>
                  To become the world's leading platform for online education,
                  making quality learning accessible to billions of people
                  worldwide.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-[var(--primary-blue)]">
                What We Do
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-[var(--primary-blue)] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Quality Education</h4>
                    <p className="text-gray-600">
                      Curate and deliver high-quality educational content from
                      expert instructors.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-[var(--primary-blue)] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Community Building</h4>
                    <p className="text-gray-600">
                      Foster a supportive community of learners and educators.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="h-6 w-6 text-[var(--primary-blue)] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Global Access</h4>
                    <p className="text-gray-600">
                      Make education accessible to people worldwide, regardless
                      of location.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-gray-600">
              Numbers that tell our story of growth and impact
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[var(--primary-blue)] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at our platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-[var(--primary-blue)] text-white mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              The passionate people behind our platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-[var(--primary-blue)] font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-[var(--bg-secondary)] text-[var(--text-primary)] border-t border-[var(--light-border)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[var(--text-primary)]">
              Join Our Mission
            </h2>
            <p className="text-xl mb-8 text-[var(--text-secondary)] max-w-2xl mx-auto">
              Whether you're a student looking to learn or an instructor ready
              to teach, we'd love to have you join our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[var(--primary-blue)] text-white rounded-full text-lg font-bold hover:bg-[var(--secondary-blue)] transition-colors">
                Start Learning
              </button>
              <button className="px-8 py-4 border-2 border-[var(--primary-blue)] text-[var(--primary-blue)] rounded-full text-lg font-bold hover:bg-[var(--primary-blue)] hover:text-white transition-colors">
                Become an Instructor
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
