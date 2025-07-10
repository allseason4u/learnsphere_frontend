import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Filter,
  Star,
  Clock,
  Users,
  Award,
  ArrowRight,
  BookOpen,
  Play,
  Heart,
  Sparkles,
  TrendingUp,
  Shield,
  Globe,
  Zap,
  Code,
  Palette,
  Brain,
  DollarSign,
  Calendar,
  ChevronDown,
  Eye,
  Download,
  Share2,
} from "lucide-react";
import LandingLayout from "@/Components/layout/landingLayout.jsx";
function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [likedCourses, setLikedCourses] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);

  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      duration: "6 Months",
      price: 35000,
      rating: 4.9,
      students: 2847,
      category: "development",
      level: "Intermediate",
      instructor: "Alex Johnson",
      thumbnail:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      description:
        "Master modern web development with cutting-edge technologies and real-world projects.",
      trending: true,
      bestSeller: true,
    },
    {
      id: 2,
      title: "Data Science with Python",
      duration: "4 Months",
      price: 28000,
      rating: 4.8,
      students: 1956,
      category: "data-science",
      level: "Beginner",
      instructor: "Sarah Chen",
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn"],
      description:
        "Dive deep into data analysis and machine learning with Python.",
      trending: false,
      bestSeller: true,
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      duration: "3 Months",
      price: 15000,
      rating: 4.7,
      students: 3241,
      category: "design",
      level: "Beginner",
      instructor: "Maria Rodriguez",
      thumbnail:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      description:
        "Create stunning user experiences with modern design principles.",
      trending: true,
      bestSeller: false,
    },
    {
      id: 4,
      title: "Digital Marketing Masterclass",
      duration: "2 Months",
      price: 12000,
      rating: 4.6,
      students: 4521,
      category: "marketing",
      level: "Beginner",
      instructor: "David Kim",
      thumbnail:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=250&fit=crop",
      skills: ["SEO", "Google Ads", "Social Media", "Analytics"],
      description:
        "Master digital marketing strategies that drive real results.",
      trending: false,
      bestSeller: true,
    },
    {
      id: 5,
      title: "Machine Learning with Python",
      duration: "5 Months",
      price: 30000,
      rating: 4.9,
      students: 1687,
      category: "data-science",
      level: "Advanced",
      instructor: "Dr. James Wilson",
      thumbnail:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      skills: ["TensorFlow", "PyTorch", "Deep Learning", "Neural Networks"],
      description:
        "Build intelligent systems with advanced machine learning techniques.",
      trending: true,
      bestSeller: false,
    },
    {
      id: 6,
      title: "AWS Cloud Essentials",
      duration: "2 Months",
      price: 20000,
      rating: 4.8,
      students: 2134,
      category: "cloud",
      level: "Intermediate",
      instructor: "Michael Brown",
      thumbnail:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      skills: ["AWS", "EC2", "S3", "Lambda"],
      description: "Master cloud computing with Amazon Web Services.",
      trending: false,
      bestSeller: true,
    },
    {
      id: 7,
      title: "Cybersecurity Essentials",
      duration: "4 Months",
      price: 25000,
      rating: 4.7,
      students: 1432,
      category: "security",
      level: "Intermediate",
      instructor: "Lisa Zhang",
      thumbnail:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
      skills: [
        "Ethical Hacking",
        "Network Security",
        "Cryptography",
        "Incident Response",
      ],
      description:
        "Protect digital assets with comprehensive cybersecurity knowledge.",
      trending: true,
      bestSeller: false,
    },
    {
      id: 8,
      title: "Blockchain Technology Basics",
      duration: "3 Months",
      price: 22000,
      rating: 4.5,
      students: 987,
      category: "blockchain",
      level: "Beginner",
      instructor: "Robert Lee",
      thumbnail:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
      skills: ["Solidity", "Smart Contracts", "Ethereum", "DeFi"],
      description:
        "Understand the revolutionary world of blockchain and cryptocurrencies.",
      trending: false,
      bestSeller: false,
    },
    {
      id: 9,
      title: "Mobile App Development",
      duration: "5 Months",
      price: 27000,
      rating: 4.8,
      students: 2756,
      category: "development",
      level: "Intermediate",
      instructor: "Emma Davis",
      thumbnail:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      description: "Build powerful mobile applications for iOS and Android.",
      trending: true,
      bestSeller: true,
    },
  ];

  const categories = [
    { id: "all", name: "All Courses", icon: Globe },
    { id: "development", name: "Development", icon: Code },
    { id: "design", name: "Design", icon: Palette },
    { id: "data-science", name: "Data Science", icon: Brain },
    { id: "marketing", name: "Marketing", icon: TrendingUp },
    { id: "cloud", name: "Cloud", icon: Zap },
    { id: "security", name: "Security", icon: Shield },
    { id: "blockchain", name: "Blockchain", icon: Award },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "students":
        return b.students - a.students;
      default:
        return b.rating - a.rating;
    }
  });

  const toggleLike = (courseId) => {
    setLikedCourses((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(courseId)) {
        newSet.delete(courseId);
      } else {
        newSet.add(courseId);
      }
      return newSet;
    });
  };

  const handleEnroll = (course) => {
    alert(
      `🎉 Successfully enrolled in ${course.title}! Welcome to your learning journey.`
    );
  };

  return (
    <LandingLayout>
      <div className="min-h-screen pt-5 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.05),transparent_50%)]"></div>
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168,85,247,0.1) 0%, transparent 50%)`,
          }}
        ></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            >
              <div className="w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm"></div>
            </div>
          ))}
        </div>

        <div className="relative z-10 py-12" ref={containerRef}>
          {/* Header Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              id="header"
              className={`text-center mb-16 transform transition-all duration-1000 ${
                isVisible.header
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                  <div className="relative bg-white rounded-full p-6 shadow-xl border border-gray-100">
                    <BookOpen className="w-12 h-12 text-purple-600" />
                  </div>
                </div>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                <span className="text-gray-900 text-4xl md:text-5xl">
                  Course Collection
                </span>
              </h1>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 shadow-lg">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-gray-700 font-medium">
                    4.8 Average Rating
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 shadow-lg">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700 font-medium">
                    25,000+ Students
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 shadow-lg">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">
                    Certified Courses
                  </span>
                </div>
              </div>
            </div>

            {/* Search and Filter Section */}
            <div
              id="filters"
              className={`mb-12 transform transition-all duration-1000 delay-300 ${
                isVisible.filters
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-100 p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Search Bar */}
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search courses, skills, or instructors..."
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 text-gray-700 bg-white/90"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  {/* Category Filter */}
                  <div className="relative">
                    <select
                      className="appearance-none bg-white/90 border border-gray-200 rounded-2xl px-6 py-4 pr-12 text-gray-700 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 min-w-48"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                  </div>

                  {/* Sort By */}
                  <div className="relative">
                    <select
                      className="appearance-none bg-white/90 border border-gray-200 rounded-2xl px-6 py-4 pr-12 text-gray-700 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 min-w-48"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="popular">Most Popular</option>
                      <option value="rating">Highest Rated</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="students">Most Students</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Courses Grid */}
            <div
              id="courses"
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible.courses
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {sortedCourses.map((course, index) => (
                  <div
                    key={course.id}
                    className="group relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setHoveredCard(course.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Course Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Badges */}
                      <div className="absolute top-4 left-4 z-20 flex gap-2">
                        {course.bestSeller && (
                          <span className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                            BESTSELLER
                          </span>
                        )}
                        {course.trending && (
                          <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                            TRENDING
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => toggleLike(course.id)}
                          className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <Heart
                            className={`w-4 h-4 transition-colors duration-300 ${
                              likedCourses.has(course.id)
                                ? "text-red-500 fill-current"
                                : "text-gray-600"
                            }`}
                          />
                        </button>
                        <button className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300">
                          <Share2 className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                          <Play className="w-8 h-8 text-white fill-current" />
                        </div>
                      </div>
                    </div>

                    {/* Course Content */}
                    <div className="p-6">
                      {/* Course Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                        {course.title}
                      </h3>

                      {/* Course Description */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {course.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.skills.slice(0, 3).map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                        {course.skills.length > 3 && (
                          <span className="text-gray-500 text-xs py-1">
                            +{course.skills.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Course Stats */}
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-medium">{course.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{course.students.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                      </div>

                      {/* Instructor */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {course.instructor
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {course.instructor}
                          </p>
                          <p className="text-xs text-gray-500 capitalize">
                            {course.level} Level
                          </p>
                        </div>
                      </div>

                      {/* Price and Enroll Button */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-gray-900">
                            ₹{course.price.toLocaleString()}
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            ₹{Math.round(course.price * 1.5).toLocaleString()}
                          </span>
                        </div>
                        <button
                          onClick={() => handleEnroll(course)}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                        >
                          Enroll Now
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Empty State */}
            {sortedCourses.length === 0 && (
              <div className="text-center py-20">
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-100 p-12 max-w-md mx-auto">
                  <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    No courses found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search criteria or explore our featured
                    courses.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                    }}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    View All Courses
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
            }
          }

          @keyframes gradient {
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          .animate-float {
            animation: float 8s ease-in-out infinite;
          }

          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 4s ease infinite;
          }

          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>
    </LandingLayout>
  );
}

export default Courses;
