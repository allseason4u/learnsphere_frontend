import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Trophy,
  Clock,
  CheckCircle,
  Star,
  TrendingUp,
} from "lucide-react";
import StudentLayout from "../../Components/layout/StudentLayout";

const Progress = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animatedProgress, setAnimatedProgress] = useState({});

  const progressData = [
    {
      id: 1,
      course: "React for Beginners",
      completion: 100,
      status: "Completed",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-emerald-400 to-cyan-400",
      bgGradient: "from-emerald-50 via-cyan-50 to-emerald-50",
      difficulty: "Beginner",
      duration: "8 weeks",
      rating: 4.9,
    },
    {
      id: 2,
      course: "Advanced JavaScript Mastery",
      completion: 75,
      status: "In Progress",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-amber-400 to-orange-400",
      bgGradient: "from-amber-50 via-orange-50 to-amber-50",
      difficulty: "Advanced",
      duration: "12 weeks",
      rating: 4.8,
    },
    {
      id: 3,
      course: "Full-Stack Web Development",
      completion: 60,
      status: "In Progress",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-purple-400 to-pink-400",
      bgGradient: "from-purple-50 via-pink-50 to-purple-50",
      difficulty: "Intermediate",
      duration: "16 weeks",
      rating: 4.7,
    },
    {
      id: 4,
      course: "Python for Data Science",
      completion: 100,
      status: "Completed",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-blue-400 to-indigo-400",
      bgGradient: "from-blue-50 via-indigo-50 to-blue-50",
      difficulty: "Intermediate",
      duration: "10 weeks",
      rating: 4.9,
    },
    {
      id: 5,
      course: "UI/UX Design Essentials",
      completion: 40,
      status: "In Progress",
      icon: <Star className="w-6 h-6" />,
      color: "from-rose-400 to-pink-400",
      bgGradient: "from-rose-50 via-pink-50 to-rose-50",
      difficulty: "Beginner",
      duration: "6 weeks",
      rating: 4.6,
    },
    {
      id: 6,
      course: "Machine Learning A-Z",
      completion: 20,
      status: "In Progress",
      icon: <Clock className="w-6 h-6" />,
      color: "from-violet-400 to-purple-400",
      bgGradient: "from-violet-50 via-purple-50 to-violet-50",
      difficulty: "Advanced",
      duration: "20 weeks",
      rating: 4.8,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated = {};
      progressData.forEach((item) => {
        animated[item.id] = item.completion;
      });
      setAnimatedProgress(animated);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "text-green-600 bg-green-100";
      case "Intermediate":
        return "text-yellow-600 bg-yellow-100";
      case "Advanced":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusIcon = (status) => {
    return status === "Completed" ? (
      <CheckCircle className="w-5 h-5 text-green-500" />
    ) : (
      <Clock className="w-5 h-5 text-orange-500" />
    );
  };

  const completedCourses = progressData.filter(
    (item) => item.status === "Completed"
  ).length;
  const inProgressCourses = progressData.filter(
    (item) => item.status === "In Progress"
  ).length;
  const totalProgress = Math.round(
    progressData.reduce((sum, item) => sum + item.completion, 0) /
      progressData.length
  );

  return (
    <StudentLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-8">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-800 via-purple-700 to-pink-700 bg-clip-text text-transparent mb-4">
              Learning Journey
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Track your progress and celebrate your achievements on the path to
              mastery
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-gray-200 hover:bg-white/90 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Completed Courses</p>
                  <p className="text-3xl font-bold text-gray-800">
                    {completedCourses}
                  </p>
                </div>
                <Trophy className="w-8 h-8 text-yellow-500" />
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-gray-200 hover:bg-white/90 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">In Progress</p>
                  <p className="text-3xl font-bold text-gray-800">
                    {inProgressCourses}
                  </p>
                </div>
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-gray-200 hover:bg-white/90 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Overall Progress</p>
                  <p className="text-3xl font-bold text-gray-800">
                    {totalProgress}%
                  </p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
            </div>
          </div>

          {/* Course Progress Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {progressData.map((item) => (
              <div
                key={item.id}
                className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                  hoveredCard === item.id ? "z-20" : "z-10"
                }`}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Background with Glassmorphism */}
                <div
                  className={`bg-gradient-to-br ${item.bgGradient} backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl hover:border-gray-300 transition-all duration-500`}
                >
                  {/* Course Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 rounded-2xl bg-gradient-to-r ${item.color} text-white shadow-lg`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                          {item.course}
                        </h2>
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(item.status)}
                          <span className="text-gray-600 font-medium">
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Course Details */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <p className="text-gray-500 text-sm">Difficulty</p>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(
                          item.difficulty
                        )}`}
                      >
                        {item.difficulty}
                      </span>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500 text-sm">Duration</p>
                      <p className="text-gray-800 font-semibold">
                        {item.duration}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500 text-sm">Rating</p>
                      <div className="flex items-center justify-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-gray-800 font-semibold">
                          {item.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600 font-medium">
                        Progress
                      </span>
                      <span className="text-gray-800 font-bold text-lg">
                        {item.completion}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{ width: `${animatedProgress[item.id] || 0}%` }}
                      >
                        {/* Animated shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Completion Badge */}
                  {item.completion === 100 && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                      ✓ Complete
                    </div>
                  )}

                  {/* Hover Effect Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}
                  ></div>
                </div>

                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-300 -z-10`}
                ></div>
              </div>
            ))}
          </div>

          {/* Motivational Footer */}
          <div className="text-center mt-16 p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Keep Learning, Keep Growing! 🚀
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Every step forward is progress. Your dedication to learning will
              unlock incredible opportunities ahead.
            </p>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Progress;
