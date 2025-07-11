// src/Components/BrowseCourses.jsx
import React, { useState, useEffect } from "react";
import StudentLayout from "../../Components/layout/StudentLayout";

const BrowseCourses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [loading, setLoading] = useState(true);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Sample courses data
  useEffect(() => {
    setTimeout(() => {
      setCourses([
        {
          id: 1,
          title: "Complete React Development",
          instructor: "Priya Sharma",
          category: "Web Development",
          level: "intermediate",
          price: 3999,
          originalPrice: 5999,
          rating: 4.8,
          reviews: 2847,
          students: 12453,
          duration: "42 hours",
          lessons: 156,
          image:
            "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&h=250&fit=crop",
          description:
            "Master React from basics to advanced concepts including hooks, context, and modern patterns. Perfect for Indian IT professionals.",
          features: [
            "Lifetime Access",
            "Certificate",
            "Hindi Support",
            "Live Projects",
          ],
          bestseller: true,
          updated: "2024-01-15",
        },
        {
          id: 2,
          title: "Python for Data Science & AI",
          instructor: "Dr. Rajesh Kumar",
          category: "Data Science",
          level: "beginner",
          price: 2999,
          originalPrice: 4999,
          rating: 4.9,
          reviews: 1892,
          students: 8234,
          duration: "38 hours",
          lessons: 142,
          image:
            "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
          description:
            "Learn Python programming with focus on data analysis, visualization, and machine learning with Indian case studies.",
          features: [
            "Industry Projects",
            "Certificate",
            "Placement Support",
            "Resources",
          ],
          bestseller: false,
          updated: "2024-02-10",
        },
        {
          id: 3,
          title: "UI/UX Design for Indian Apps",
          instructor: "Sneha Patel",
          category: "Design",
          level: "intermediate",
          price: 3499,
          originalPrice: 5499,
          rating: 4.7,
          reviews: 1456,
          students: 5678,
          duration: "35 hours",
          lessons: 98,
          image:
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
          description:
            "Design beautiful and functional user interfaces with modern design principles for Indian market and culture.",
          features: [
            "Design Tools",
            "Portfolio Projects",
            "Mentorship",
            "Certificate",
          ],
          bestseller: true,
          updated: "2024-01-28",
        },
        {
          id: 4,
          title: "Advanced JavaScript & Node.js",
          instructor: "Arjun Singh",
          category: "Programming",
          level: "advanced",
          price: 4999,
          originalPrice: 7999,
          rating: 4.6,
          reviews: 892,
          students: 3421,
          duration: "28 hours",
          lessons: 87,
          image:
            "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop",
          description:
            "Deep dive into advanced JavaScript patterns, async programming, and Node.js for building scalable applications.",
          features: [
            "Code Reviews",
            "Advanced Projects",
            "Expert Support",
            "Certificate",
          ],
          bestseller: false,
          updated: "2024-02-05",
        },
        {
          id: 5,
          title: "Digital Marketing Masterclass",
          instructor: "Kavita Mehta",
          category: "Marketing",
          level: "beginner",
          price: 0,
          originalPrice: 0,
          rating: 4.5,
          reviews: 3241,
          students: 15678,
          duration: "25 hours",
          lessons: 68,
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
          description:
            "Learn essential digital marketing strategies including SEO, social media, and content marketing for Indian businesses.",
          features: [
            "Free Course",
            "Certificate",
            "Community Access",
            "Templates",
          ],
          bestseller: false,
          updated: "2024-01-20",
        },
        {
          id: 6,
          title: "Machine Learning with Python",
          instructor: "Prof. Vikram Gupta",
          category: "Data Science",
          level: "advanced",
          price: 5999,
          originalPrice: 8999,
          rating: 4.8,
          reviews: 1234,
          students: 4567,
          duration: "52 hours",
          lessons: 178,
          image:
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
          description:
            "Master machine learning algorithms and build real-world AI applications with Indian industry examples.",
          features: [
            "ML Projects",
            "Industry Datasets",
            "Expert Mentoring",
            "Certificate",
          ],
          bestseller: true,
          updated: "2024-02-12",
        },
        {
          id: 7,
          title: "Flutter Mobile App Development",
          instructor: "Rohit Agarwal",
          category: "Mobile Development",
          level: "intermediate",
          price: 4499,
          originalPrice: 6999,
          rating: 4.7,
          reviews: 987,
          students: 2345,
          duration: "45 hours",
          lessons: 134,
          image:
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
          description:
            "Build native mobile apps for iOS and Android using Flutter. Perfect for Indian startup ecosystem.",
          features: [
            "Play Store Deployment",
            "Real Apps",
            "Code Reviews",
            "Certificate",
          ],
          bestseller: false,
          updated: "2024-01-18",
        },
        {
          id: 8,
          title: "Cybersecurity & Ethical Hacking",
          instructor: "Amit Verma",
          category: "Security",
          level: "beginner",
          price: 3799,
          originalPrice: 5799,
          rating: 4.6,
          reviews: 1567,
          students: 6789,
          duration: "32 hours",
          lessons: 95,
          image:
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
          description:
            "Learn cybersecurity fundamentals, ethical hacking, and network security principles with Indian compliance focus.",
          features: [
            "Hands-on Labs",
            "Security Tools",
            "Certificate",
            "Job Preparation",
          ],
          bestseller: false,
          updated: "2024-02-08",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  // Filter and search courses
  useEffect(() => {
    let filtered = courses;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (course) => course.category === selectedCategory
      );
    }

    // Level filter
    if (selectedLevel !== "all") {
      filtered = filtered.filter((course) => course.level === selectedLevel);
    }

    // Price filter
    if (selectedPrice !== "all") {
      if (selectedPrice === "free") {
        filtered = filtered.filter((course) => course.price === 0);
      } else if (selectedPrice === "paid") {
        filtered = filtered.filter((course) => course.price > 0);
      }
    }

    // Sort courses
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return b.students - a.students;
        case "rating":
          return b.rating - a.rating;
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "newest":
          return new Date(b.updated) - new Date(a.updated);
        default:
          return 0;
      }
    });

    setFilteredCourses(filtered);
  }, [
    courses,
    searchTerm,
    selectedCategory,
    selectedLevel,
    selectedPrice,
    sortBy,
  ]);

  // Get unique categories
  const categories = [...new Set(courses.map((course) => course.category))];

  // Handle enrollment
  const handleEnroll = (courseId) => {
    setEnrolledCourses((prev) => [...prev, courseId]);
  };

  // Format price
  const formatPrice = (price) => {
    return price === 0 ? "Free" : `₹${price.toLocaleString("en-IN")}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading courses...</p>
        </div>
      </div>
    );
  }

  return (
    <StudentLayout>
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Browse{" "}
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Courses
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover thousands of courses from expert Indian instructors and
              advance your skills
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 border border-violet-100">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search courses, instructors, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />
                <div className="absolute left-4 top-3.5 text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  <option value="all">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Level
                </label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  <option value="all">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price
                </label>
                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  <option value="all">All Prices</option>
                  <option value="free">Free</option>
                  <option value="paid">Paid</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            {/* Results count */}
            <div className="text-center text-gray-600">
              Showing {filteredCourses.length} of {courses.length} courses
            </div>
          </div>

          {/* Featured Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Popular Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedCategory === category
                      ? "border-violet-500 bg-violet-50 text-violet-700"
                      : "border-gray-200 hover:border-violet-300 hover:bg-violet-50"
                  }`}
                >
                  <div className="text-2xl mb-2">
                    {category === "Web Development" && "💻"}
                    {category === "Data Science" && "📊"}
                    {category === "Design" && "🎨"}
                    {category === "Programming" && "⚡"}
                    {category === "Marketing" && "📱"}
                    {category === "Mobile Development" && "📱"}
                    {category === "Security" && "🔒"}
                  </div>
                  <div className="text-sm font-medium">{category}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-violet-100 hover:border-violet-200 group"
              >
                {/* Course Image */}
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {course.bestseller && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Bestseller
                    </div>
                  )}
                  {course.price === 0 && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Free
                    </div>
                  )}
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-violet-600">
                      {course.category}
                    </span>
                    <span className="text-sm text-gray-500 capitalize">
                      {course.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {course.description}
                  </p>

                  <p className="text-sm text-gray-500 mb-4">
                    by {course.instructor}
                  </p>

                  {/* Course Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-medium">{course.rating}</span>
                      <span>({course.reviews.toLocaleString()})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>👥</span>
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <span>⏱️</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>📚</span>
                      <span>{course.lessons} lessons</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price and Enroll */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-900">
                        {formatPrice(course.price)}
                      </span>
                      {course.originalPrice > course.price &&
                        course.price > 0 && (
                          <span className="text-sm text-gray-500 line-through">
                            ₹{course.originalPrice.toLocaleString("en-IN")}
                          </span>
                        )}
                    </div>

                    <button
                      onClick={() => handleEnroll(course.id)}
                      disabled={enrolledCourses.includes(course.id)}
                      className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                        enrolledCourses.includes(course.id)
                          ? "bg-green-100 text-green-700 cursor-not-allowed"
                          : "bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:shadow-lg transform hover:scale-105"
                      }`}
                    >
                      {enrolledCourses.includes(course.id)
                        ? "Enrolled"
                        : "Enroll Now"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No courses found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filters to find what you're looking
                for.
              </p>
            </div>
          )}

          {/* Load More Button */}
          {filteredCourses.length > 0 && (
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Load More Courses
              </button>
            </div>
          )}

          {/* Floating Elements */}
          <div className="fixed top-1/4 -left-10 w-20 h-20 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-10 animate-float"></div>
          <div className="fixed top-1/3 -right-10 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-10 animate-float-delayed"></div>
          <div className="fixed bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-10 animate-float"></div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          @keyframes float-delayed {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-15px);
            }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-float-delayed {
            animation: float-delayed 6s ease-in-out infinite 2s;
          }

          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>
    </StudentLayout>
  );
};

export default BrowseCourses;
