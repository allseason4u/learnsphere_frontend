// src/Components/Assignments.jsx
import React, { useState, useEffect } from "react";
import StudentLayout from "../../Components/layout/StudentLayout";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("dueDate");
  const [loading, setLoading] = useState(true);

  // Sample assignments data
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setAssignments([
        {
          id: 1,
          title: "React Fundamentals Project",
          course: "Web Development",
          description:
            "Build a responsive React application with hooks and component state management.",
          dueDate: "2024-03-15",
          status: "pending",
          priority: "high",
          points: 100,
          submitted: false,
          type: "project",
        },
        {
          id: 2,
          title: "JavaScript ES6 Quiz",
          course: "Advanced JavaScript",
          description:
            "Test your knowledge of ES6 features including arrow functions, destructuring, and modules.",
          dueDate: "2024-03-12",
          status: "completed",
          priority: "medium",
          points: 50,
          submitted: true,
          type: "quiz",
          grade: 85,
        },
        {
          id: 3,
          title: "Database Design Assignment",
          course: "Database Systems",
          description:
            "Design and implement a normalized database schema for an e-commerce application.",
          dueDate: "2024-03-20",
          status: "pending",
          priority: "high",
          points: 150,
          submitted: false,
          type: "assignment",
        },
        {
          id: 4,
          title: "CSS Animation Workshop",
          course: "UI/UX Design",
          description:
            "Create engaging CSS animations and transitions for modern web interfaces.",
          dueDate: "2024-03-18",
          status: "in-progress",
          priority: "medium",
          points: 75,
          submitted: false,
          type: "workshop",
        },
        {
          id: 5,
          title: "Python Data Structures",
          course: "Computer Science",
          description:
            "Implement and analyze various data structures including trees, graphs, and hash tables.",
          dueDate: "2024-03-25",
          status: "pending",
          priority: "low",
          points: 120,
          submitted: false,
          type: "assignment",
        },
        {
          id: 6,
          title: "API Integration Challenge",
          course: "Web Development",
          description:
            "Build a web application that integrates with multiple third-party APIs.",
          dueDate: "2024-03-10",
          status: "overdue",
          priority: "high",
          points: 100,
          submitted: false,
          type: "project",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  // Filter assignments
  const filteredAssignments = assignments.filter((assignment) => {
    if (filter === "all") return true;
    if (filter === "pending") return assignment.status === "pending";
    if (filter === "completed") return assignment.status === "completed";
    if (filter === "overdue") return assignment.status === "overdue";
    if (filter === "in-progress") return assignment.status === "in-progress";
    return true;
  });

  // Sort assignments
  const sortedAssignments = [...filteredAssignments].sort((a, b) => {
    if (sortBy === "dueDate") {
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
    if (sortBy === "priority") {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }
    if (sortBy === "points") {
      return b.points - a.points;
    }
    return 0;
  });

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "overdue":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Get priority color
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Calculate days until due
  const getDaysUntilDue = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading assignments...</p>
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
              My{" "}
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Assignments
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay organized and track your progress across all courses
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-violet-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Total</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {assignments.length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">📚</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Completed</p>
                  <p className="text-2xl font-bold text-green-600">
                    {assignments.filter((a) => a.status === "completed").length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">✅</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">In Progress</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {
                      assignments.filter((a) => a.status === "in-progress")
                        .length
                    }
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">⏳</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-red-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Overdue</p>
                  <p className="text-2xl font-bold text-red-600">
                    {assignments.filter((a) => a.status === "overdue").length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">⚠️</span>
                </div>
              </div>
            </div>
          </div>

          {/* Filters and Sort */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 border border-violet-100">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    filter === "all"
                      ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter("pending")}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    filter === "pending"
                      ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Pending
                </button>
                <button
                  onClick={() => setFilter("in-progress")}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    filter === "in-progress"
                      ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  In Progress
                </button>
                <button
                  onClick={() => setFilter("completed")}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    filter === "completed"
                      ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Completed
                </button>
                <button
                  onClick={() => setFilter("overdue")}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    filter === "overdue"
                      ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Overdue
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                >
                  <option value="dueDate">Due Date</option>
                  <option value="priority">Priority</option>
                  <option value="points">Points</option>
                </select>
              </div>
            </div>
          </div>

          {/* Assignments Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {sortedAssignments.map((assignment) => (
              <div
                key={assignment.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-violet-100 hover:border-violet-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {assignment.title}
                      </h3>
                      <div
                        className={`w-3 h-3 rounded-full ${getPriorityColor(
                          assignment.priority
                        )}`}
                      ></div>
                    </div>
                    <p className="text-violet-600 font-medium text-sm mb-2">
                      {assignment.course}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {assignment.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      assignment.status
                    )}`}
                  >
                    {assignment.status === "in-progress"
                      ? "In Progress"
                      : assignment.status.charAt(0).toUpperCase() +
                        assignment.status.slice(1)}
                  </span>
                  <span className="text-sm text-gray-500">
                    {assignment.points} points
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Due Date</p>
                    <p className="font-medium text-gray-900">
                      {formatDate(assignment.dueDate)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Days Left</p>
                    <p
                      className={`font-medium ${
                        getDaysUntilDue(assignment.dueDate) < 0
                          ? "text-red-600"
                          : getDaysUntilDue(assignment.dueDate) <= 3
                          ? "text-orange-600"
                          : "text-green-600"
                      }`}
                    >
                      {getDaysUntilDue(assignment.dueDate) < 0
                        ? `${Math.abs(
                            getDaysUntilDue(assignment.dueDate)
                          )} days overdue`
                        : `${getDaysUntilDue(assignment.dueDate)} days`}
                    </p>
                  </div>
                </div>

                {assignment.status === "completed" && assignment.grade && (
                  <div className="bg-green-50 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-800">
                        Grade Received
                      </span>
                      <span className="text-lg font-bold text-green-600">
                        {assignment.grade}%
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  {assignment.status !== "completed" && (
                    <button className="flex-1 bg-gradient-to-r from-violet-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                      {assignment.status === "pending"
                        ? "Start Assignment"
                        : "Continue Work"}
                    </button>
                  )}
                  <button className="px-4 py-2 border border-violet-300 text-violet-600 rounded-lg font-medium hover:bg-violet-50 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {sortedAssignments.length === 0 && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No assignments found
              </h3>
              <p className="text-gray-600">
                Try adjusting your filters to see more assignments.
              </p>
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
        `}</style>
      </div>
    </StudentLayout>
  );
};

export default Assignments;
