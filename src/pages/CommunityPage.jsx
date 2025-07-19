import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Plus,
  Calendar,
  Users,
  TrendingUp,
  Clock,
  Search,
  Filter,
  MoreHorizontal,
  Share2,
  Bookmark,
  Award,
  Star,
  Zap,
  Heart,
  Eye,
} from "lucide-react";

const CommunityPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const communityStats = [
    {
      number: "1,234",
      label: "Posts",
      bgColor:
        "bg-gradient-to-br from-[var(--primary-blue)]/10 to-[var(--secondary-blue)]/10",
      textColor: "text-[var(--primary-blue)]",
      icon: TrendingUp,
      change: "+12%",
      changeColor: "text-green-600",
    },
    {
      number: "5,678",
      label: "Members",
      bgColor:
        "bg-gradient-to-br from-[var(--success-green)]/10 to-emerald-400/10",
      textColor: "text-[var(--success-green)]",
      icon: Users,
      change: "+8%",
      changeColor: "text-green-600",
    },
    {
      number: "234",
      label: "Active Today",
      bgColor:
        "bg-gradient-to-br from-[var(--accent-orange)]/10 to-orange-400/10",
      textColor: "text-[var(--accent-orange)]",
      icon: Zap,
      change: "+15%",
      changeColor: "text-green-600",
    },
  ];

  const popularTopics = [
    { name: "Data Science", count: 156, color: "bg-blue-100 text-blue-800" },
    {
      name: "Web Development",
      count: 234,
      color: "bg-purple-100 text-purple-800",
    },
    { name: "Machine Learning", count: 89, color: "bg-pink-100 text-pink-800" },
    { name: "UI/UX Design", count: 123, color: "bg-green-100 text-green-800" },
    { name: "Cybersecurity", count: 67, color: "bg-red-100 text-red-800" },
    {
      name: "Mobile Development",
      count: 98,
      color: "bg-indigo-100 text-indigo-800",
    },
  ];

  const discussions = [
    {
      id: 1,
      author: "Sophia Clark",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDRFzSiQ6mouZV1_BJFfvaBWdpjodLn4FWRP6MJV5ZlEyu_HJxNpwX1QyJ1qWL0pVRvqarQNjnDqWZ1ob8PV06fT8yH1hNlHxbo0iYH2wTCiMEHUSc6LE8iUFUU67R_pdwF0SvP9U0U8WSpE3PavDXK4XhdufQlip4D7maRj4dnTRf4IixxvB_wWUAt-9Mn-mIldZyd09MNBq9BjmmzP1WcJk1yw6zkP6A_IxfZp0tUlFSRBGO8NahAFtpa01XXu3S0KKfQhlX0d1Ae",
      timeAgo: "2h ago",
      topic: "Data Science",
      topicColor: "bg-blue-100 text-blue-800",
      content:
        "Just finished the 'Introduction to Data Science' course. It was fantastic! The practical projects really helped me understand the concepts. Any recommendations for next steps? I'm thinking about diving into machine learning.",
      likes: 15,
      dislikes: 2,
      comments: 5,
      views: 234,
      isLiked: false,
      isBookmarked: false,
      badges: ["Course Graduate", "Top Contributor"],
    },
    {
      id: 2,
      author: "Ethan Bennett",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD-2OgSYgybAyFsaR9SfypYf4qIK-GrU8YjDPefbSaUAtB5ay8m0dG236FNAGRHsAgv2rB00aj3qPXR5zZ9FeLGhmNl8yjxzOzYItm1Y6cTG14q6JhLeK4ck8OmYKXpsHohkZRiSoBkfUXlzvxoryGRWhf71dNj4i9jzV2Q8pkSkl1XkQed0EIIt0gSDVvP_JRvVXvFmHV1sP2Na-1AYqts2JERd-SlScCCA8Y_KYAFpzXH_ekto1S-PBupYWB1jGFwlxRcXCi5NOVB",
      timeAgo: "4h ago",
      topic: "Web Development",
      topicColor: "bg-purple-100 text-purple-800",
      content:
        "Looking for a study group for the 'Advanced Web Development' course. Anyone interested in forming a group? We could meet weekly and work on projects together. I'm particularly interested in React and Node.js.",
      likes: 8,
      dislikes: 1,
      comments: 3,
      views: 156,
      isLiked: true,
      isBookmarked: true,
      badges: ["Study Group Leader"],
    },
    {
      id: 3,
      author: "Olivia Carter",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAD8PSYLaABQZjIY6xBmGJzoqfOUPDEpyH90ZkyvwIXXLjPpDZ6oklX66GSp4Fzv1LNx-KzTBlnH4b9uNBL2VLdeyoWDuv0eduRdgLZoaqlriAF1n7-JqXXTbmpuoeFR3okiiGylGX8RUAMIWbGYyIEY2r0GeDBlnaYtzbV6X8jh4oYXWfo_mbXlTdWBtk7NH5zef4bAtwKIKgktpHOtef99jMeaxBshu9mDnDiPgN4ajudkXyb5xAy2XR7om_fQgYqJfgB1jbAmLy9",
      timeAgo: "6h ago",
      topic: "Machine Learning",
      topicColor: "bg-pink-100 text-pink-800",
      content:
        "I'm having trouble with the final project in the 'Machine Learning' course. The neural network implementation is challenging. Any tips or resources? I've tried several approaches but keep getting stuck on the optimization part.",
      likes: 12,
      dislikes: 3,
      comments: 7,
      views: 189,
      isLiked: false,
      isBookmarked: false,
      badges: ["Problem Solver"],
    },
  ];

  const activeMembers = [
    {
      name: "Alex Johnson",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC-5L7c2Q1vg5rqKWpWeGzaq9b0fxVrjVMeefCRZkcvgZUu9feiQ15HtkjaSZa673YoIm9hErtAX0fqyjpJVIrR-BJHYK89GCX90wx1dDrv448LpVOTusdrHYmM-one265JtuZsY6ASL8q0oHmTQDsXtDL3Q13OPtpP7iuSMzLyMOWBl49uIeDkQ-Vd8lQS9bscukXN5lgmkNu_McMkOeIcvSkWhDtcbHfOZhSrtQyJ18h8BVThAOI0z54PEwH2gAk82VelcO0G0fvb",
      status: "online",
      lastActive: "2 min ago",
    },
    {
      name: "Sarah Wilson",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBWuf6fWzbXURPTpZhIYbs85TlPSnb9QFmoHDVCRu3ta-1C9di6AJBAv7Tjdhauu56WHBO0toMO7aY4U4vKB7NEVzjV9QXzHuIJUZJ6o53oX9vJ7GgIhgJtZ7xcYxekoFvxo5LQ2RYjUwea5tRSxJm6kJ2B-OhWI4uWsrzyWBW7XiMUKMfBqxPPSZqjAu_IZNPN3f0NECHvANHYSO6vf5Hj2EUMeZqIUow1Wq3u7gI7onFDu8QEyDsDwVwjE4W9bbWLV8Hi60QSIfwT",
      status: "online",
      lastActive: "5 min ago",
    },
    {
      name: "Mike Chen",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAyw-Ez5Vw8GLTLfhueiaH5ARuwk__FghpPIyiTXSHYJE-wOBQ0eCeihmeup4ZRIzAj7sfMBdYWVo0Qp6mlmVeWj1t4_ZxwWI_zV_2Vc6VvYXeuD68G5rgrqiC0wAmslaeFbt4jX-fdZlqif9OAidQ7iXnmK9n99nGb34b5wdqOEbk9Vo_VHExrZB5M_f3n2GAnwvj88h9qy8ItiUIyFkl3tXkpbpmDiQONIcGY--HQniPl3vOdMabiXzGDnLrTznSp-fNQNvYBZBA6",
      status: "away",
      lastActive: "15 min ago",
    },
    {
      name: "Emma Davis",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAb0XcBJ8gZFPPf10Wkk_gzEv0w1s8UA4YSXH-x7tlHf_kuMT8-58Lwu5tI5xeTSod6DBUSIifwFEdpPo8Ub_eh25ZYCljTA3T7JYMrpNa1QNnN6ciljKe8DrBc2mZWL0taOZGO-gWLtZGHRJT4pPeLFZPTZqpwhR6WOoNSHkGRYr9Qg3HYCqoRBywGOI16iM1pUht8DmDbsMTKiK8KaHhEjxmcmp7pIz6QgpozNdBBiqGNBXxgRRHl48I8vZP8qvHcK5JWANe3bQNi",
      status: "online",
      lastActive: "1 min ago",
    },
  ];

  const upcomingEvents = [
    {
      title: "Web Development Workshop",
      date: "July 15, 2024",
      time: "2:00 PM",
      attendees: 45,
      bgColor:
        "bg-gradient-to-br from-[var(--primary-blue)]/10 to-[var(--secondary-blue)]/10",
      textColor: "text-[var(--primary-blue)]",
      icon: Calendar,
      type: "Workshop",
    },
    {
      title: "Data Science Meetup",
      date: "July 22, 2024",
      time: "6:30 PM",
      attendees: 32,
      bgColor:
        "bg-gradient-to-br from-[var(--success-green)]/10 to-emerald-400/10",
      textColor: "text-[var(--success-green)]",
      icon: Users,
      type: "Meetup",
    },
    {
      title: "AI & ML Discussion",
      date: "July 28, 2024",
      time: "4:00 PM",
      attendees: 28,
      bgColor:
        "bg-gradient-to-br from-[var(--accent-orange)]/10 to-orange-400/10",
      textColor: "text-[var(--accent-orange)]",
      icon: Star,
      type: "Discussion",
    },
  ];

  const filters = [
    { id: "all", label: "All Posts", count: 1234 },
    { id: "data-science", label: "Data Science", count: 156 },
    { id: "web-dev", label: "Web Development", count: 234 },
    { id: "ml", label: "Machine Learning", count: 89 },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)]">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white py-8"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Learning Community</h1>
              <p className="text-blue-100 max-w-2xl">
                Connect with fellow learners, share knowledge, and grow together
                in our vibrant educational community.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
                <Plus className="h-4 w-4" />
                New Post
              </button>
              <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
                <Users className="h-4 w-4" />
                Join Study Group
              </button>
            </div>
          </div>
        </div>

        {/* Curved Bottom Edge */}
        <div
          className="absolute bottom-0 left-0 w-full h-20 md:h-32"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0v48.483c0 48.483 48.483 48.483 48.483 48.483h1343.034c48.483 0 48.483 0 48.483-48.483V0H0z' fill='%23F0FDFA'/%3E%3C/path%3E%3C/svg%3E")`,
            backgroundSize: "100% 100%",
          }}
        />
      </motion.div>

      {/* Main Content */}
      <main className="pt-6">
        <div className="container mx-auto grid grid-cols-12 gap-6 p-6">
          {/* Left Sidebar */}
          <aside className="col-span-12 lg:col-span-3 space-y-6">
            {/* Community Stats */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[var(--bg-card)] p-6 rounded-xl shadow-lg border border-[var(--light-border)]"
            >
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-[var(--primary-blue)]" />
                Community Stats
              </h2>
              <div className="space-y-4">
                {communityStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`${stat.bgColor} p-4 rounded-lg border border-[var(--light-border)]`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <stat.icon className={`h-5 w-5 ${stat.textColor}`} />
                      <span
                        className={`text-xs font-medium ${stat.changeColor}`}
                      >
                        {stat.change}
                      </span>
                    </div>
                    <p className={`text-2xl font-bold ${stat.textColor}`}>
                      {stat.number}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Popular Topics */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[var(--bg-card)] p-6 rounded-xl shadow-lg border border-[var(--light-border)]"
            >
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-[var(--accent-orange)]" />
                Popular Topics
              </h2>
              <div className="space-y-3">
                {popularTopics.map((topic, index) => (
                  <motion.div
                    key={topic.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
                    className="flex items-center justify-between p-3 bg-[var(--bg-secondary)] rounded-lg hover:bg-[var(--bg-secondary)]/80 transition-colors cursor-pointer"
                  >
                    <span
                      className={`px-3 py-1 ${topic.color} text-xs font-medium rounded-full`}
                    >
                      {topic.name}
                    </span>
                    <span className="text-sm text-[var(--text-muted)]">
                      {topic.count}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </aside>

          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-6 space-y-6">
            {/* Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[var(--bg-card)] p-6 rounded-xl shadow-lg border border-[var(--light-border)]"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--text-muted)]" />
                  <input
                    type="text"
                    placeholder="Search discussions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-[var(--light-border)] rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-[var(--light-border)] rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]/80 transition-colors">
                  <Filter className="h-4 w-4" />
                  Filter
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === filter.id
                        ? "bg-[var(--primary-blue)] text-white"
                        : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]/80"
                    }`}
                  >
                    {filter.label} ({filter.count})
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Discussions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              {discussions.map((discussion, index) => (
                <motion.div
                  key={discussion.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-[var(--bg-card)] p-6 rounded-xl shadow-lg border border-[var(--light-border)] hover:shadow-xl transition-shadow"
                >
                  <div className="flex gap-4">
                    <div className="relative">
                      <img
                        alt={discussion.author}
                        className="h-12 w-12 rounded-full border-2 border-[var(--light-border)]"
                        src={discussion.avatar}
                      />
                      {discussion.badges.length > 0 && (
                        <div className="absolute -top-1 -right-1">
                          <Award className="h-4 w-4 text-[var(--accent-orange)]" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-bold text-[var(--text-primary)]">
                              {discussion.author}
                            </p>
                            {discussion.badges.map((badge, badgeIndex) => (
                              <span
                                key={badgeIndex}
                                className="px-2 py-0.5 bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] text-xs font-medium rounded-full"
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                            <Clock className="h-3 w-3" />
                            {discussion.timeAgo}
                            <span className="w-1 h-1 bg-[var(--text-muted)] rounded-full"></span>
                            <Eye className="h-3 w-3" />
                            {discussion.views} views
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-3 py-1 ${discussion.topicColor} text-xs font-medium rounded-full`}
                          >
                            {discussion.topic}
                          </span>
                          <button className="p-1 hover:bg-[var(--bg-secondary)] rounded transition-colors">
                            <MoreHorizontal className="h-4 w-4 text-[var(--text-muted)]" />
                          </button>
                        </div>
                      </div>

                      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                        {discussion.content}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-[var(--text-muted)]">
                          <button
                            className={`flex items-center gap-1.5 hover:text-[var(--primary-blue)] transition-colors ${
                              discussion.isLiked
                                ? "text-[var(--primary-blue)]"
                                : ""
                            }`}
                          >
                            <Heart
                              className={`h-4 w-4 ${
                                discussion.isLiked ? "fill-current" : ""
                              }`}
                            />
                            <span className="text-sm font-medium">
                              {discussion.likes}
                            </span>
                          </button>
                          <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
                            <ThumbsDown className="h-4 w-4" />
                            <span className="text-sm font-medium">
                              {discussion.dislikes}
                            </span>
                          </button>
                          <button className="flex items-center gap-1.5 hover:text-[var(--success-green)] transition-colors">
                            <MessageCircle className="h-4 w-4" />
                            <span className="text-sm font-medium">
                              {discussion.comments} Comments
                            </span>
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            className={`p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition-colors ${
                              discussion.isBookmarked
                                ? "text-[var(--accent-orange)]"
                                : ""
                            }`}
                          >
                            <Bookmark
                              className={`h-4 w-4 ${
                                discussion.isBookmarked ? "fill-current" : ""
                              }`}
                            />
                          </button>
                          <button className="p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition-colors">
                            <Share2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <aside className="col-span-12 lg:col-span-3 space-y-6">
            {/* Active Members */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[var(--bg-card)] p-6 rounded-xl shadow-lg border border-[var(--light-border)]"
            >
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-[var(--success-green)]" />
                Active Members
              </h2>
              <div className="space-y-3">
                {activeMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-[var(--bg-secondary)] rounded-lg hover:bg-[var(--bg-secondary)]/80 transition-colors cursor-pointer"
                  >
                    <div className="relative">
                      <img
                        alt={member.name}
                        className="h-10 w-10 rounded-full border-2 border-[var(--light-border)]"
                        src={member.avatar}
                      />
                      <div
                        className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                          member.status === "online"
                            ? "bg-green-500"
                            : "bg-yellow-500"
                        }`}
                      ></div>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-[var(--text-primary)] text-sm">
                        {member.name}
                      </p>
                      <p className="text-xs text-[var(--text-muted)]">
                        {member.lastActive}
                      </p>
                    </div>
                  </motion.div>
                ))}
                <div className="text-center pt-2">
                  <span className="text-sm text-[var(--text-muted)]">
                    +5,234 more members
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[var(--bg-card)] p-6 rounded-xl shadow-lg border border-[var(--light-border)]"
            >
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[var(--accent-orange)]" />
                Upcoming Events
              </h2>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--light-border)] hover:bg-[var(--bg-secondary)]/80 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-lg ${event.bgColor} ${event.textColor} flex-shrink-0`}
                      >
                        <event.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold text-[var(--text-primary)] text-sm">
                            {event.title}
                          </p>
                          <span className="px-2 py-0.5 bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] text-xs font-medium rounded-full">
                            {event.type}
                          </span>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] mb-2">
                          {event.date} • {event.time}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                          <Users className="h-3 w-3" />
                          {event.attendees} attending
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 bg-[var(--primary-blue)] text-white rounded-lg hover:bg-[var(--secondary-blue)] transition-colors font-medium">
                View All Events
              </button>
            </motion.div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default CommunityPage;
