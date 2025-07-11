import { useEffect, useState } from "react";
import axios from "axios";
import {
  Plus,
  BookOpen,
  Star,
  Users,
  Calendar,
  Trash2,
  Edit3,
} from "lucide-react";
import AdminLayout from "@/Components/layout/adminLayout";
import { api_courses, api_instructors } from "../../utils/constants";

function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [instructors, setInstructors] = useState([]);
  const [newCourse, setNewCourse] = useState({
    name: "",
    description: "",
    technologies: [],
    duration: "",
    level: "",
    originalPrice: "",
    currentPrice: "",
    category: "",
    instructorName: "",
    instructorAvatar: "",
  });

  const [editingCourse, setEditingCourse] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [isAdding, setIsAdding] = useState(false);
  const [showFullForm, setShowFullForm] = useState(false);

  const colors = [
    "from-blue-500 to-purple-600",
    "from-pink-500 to-rose-600",
    "from-green-500 to-emerald-600",
    "from-yellow-500 to-orange-600",
    "from-red-500 to-pink-600",
    "from-indigo-500 to-blue-600",
    "from-teal-500 to-cyan-600",
    "from-purple-500 to-indigo-600",
  ];

  const categories = [
    "Full Stack",
    "Frontend",
    "Backend",
    "Data Science",
    "Mobile",
    "DevOps",
    "UI/UX",
    "Cloud",
  ];

  const levels = [
    "Beginner",
    "Intermediate",
    "Advanced",
    "Beginner to Advanced",
  ];

  const badges = [
    "Best Seller",
    "New",
    "Most Popular",
    "Featured",
    "Limited Time",
  ];
  const fetchInstructors = async () => {
    try {
      const res = await axios.get(api_instructors);
      if (Array.isArray(res.data)) {
        setInstructors(res.data);
      }
    } catch (err) {
      console.error("Failed to fetch instructors:", err.message);
    }
  };
  const fetchCourses = async () => {
    try {
      const res = await axios.get(api_courses);
      if (Array.isArray(res.data)) {
        setCourses(res.data);
      }
    } catch (err) {
      console.error("Failed to fetch courses:", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
    fetchInstructors();
  }, []);

  const resetNewCourse = () => {
    setNewCourse({
      name: "",
      description: "",
      technologies: [],
      duration: "",
      level: "",
      originalPrice: "",
      currentPrice: "",
      category: "",
      instructorName: "",
      instructorAvatar: "",
    });
    setIsAdding(false);
    setShowFullForm(false);
  };

  const handleAddCourse = async () => {
    if (!newCourse.name.trim()) return;

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomBadge = badges[Math.floor(Math.random() * badges.length)];

    const coursePayload = {
      ...newCourse,
      rating: parseFloat((Math.random() * 1 + 4).toFixed(1)),
      students: Math.floor(Math.random() * 3000) + 500,
      color: randomColor,
      badge: randomBadge,
      instructor: {
        name: newCourse.instructorName || "John Doe",
        avatar: newCourse.instructorAvatar || "JD",
      },
      originalPrice: parseInt(newCourse.originalPrice) || 40000,
      currentPrice: parseInt(newCourse.currentPrice) || 25000,
    };

    try {
      await axios.post(api_courses, coursePayload);
      await fetchCourses(); // Refresh list
      resetNewCourse();
    } catch (err) {
      console.error("Error adding course:", err.message);
    }
  };

  const handleDeleteCourse = async (id) => {
    try {
      await axios.delete(`${api_courses}/${id}`);
      await fetchCourses(); // Refresh list
    } catch (err) {
      console.error("Failed to delete course:", err.message);
    }
  };

  const handleEditCourse = (course) => {
    setEditingCourse(course._id);
    setEditForm({
      name: course.name,
      description: course.description,
      technologies: course.technologies,
      duration: course.duration,
      level: course.level,
      originalPrice: course.originalPrice,
      currentPrice: course.currentPrice,
      category: course.category,
      instructorName: course.instructor?.name,
      instructorAvatar: course.instructor?.avatar,
    });
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(`${api_courses}/${editingCourse}`, {
        ...editForm,
        instructor: {
          name: editForm.instructorName,
          avatar: editForm.instructorAvatar,
        },
      });
      await fetchCourses();
    } catch (err) {
      console.error("Failed to update course:", err.message);
    } finally {
      setEditingCourse(null);
      setEditForm({});
    }
  };

  const handleCancelEdit = () => {
    setEditingCourse(null);
    setEditForm({});
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !showFullForm) {
      setShowFullForm(true);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const calculateDiscount = (original, current) => {
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 p-8 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-2">
              Course Management
            </h1>
            <p className="text-xl text-gray-600">
              Create and manage your learning journey
            </p>
          </div>

          {/* Add New Course Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 mb-12 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                  <Plus className="w-5 h-5 text-white" />
                </div>
                Add New Course
              </h2>
              <button
                onClick={() => setIsAdding(!isAdding)}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Create Course
              </button>
            </div>

            {(isAdding || newCourse.name) && (
              <div className="space-y-6 animate-in slide-in-from-top-4 duration-300">
                {/* Course Name */}
                <div className="flex items-center space-x-4">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={newCourse.name}
                      onChange={(e) =>
                        setNewCourse({ ...newCourse, name: e.target.value })
                      }
                      onKeyPress={handleKeyPress}
                      placeholder="Enter course name..."
                      className="w-full border-2 border-gray-200 rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                      autoFocus
                    />
                  </div>
                  {!showFullForm && (
                    <button
                      onClick={() => setShowFullForm(true)}
                      className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                      Add Details
                    </button>
                  )}
                </div>

                {/* Full Form */}
                {showFullForm && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in slide-in-from-top-4 duration-300">
                    <div className="space-y-4">
                      <textarea
                        value={newCourse.description}
                        onChange={(e) =>
                          setNewCourse({
                            ...newCourse,
                            description: e.target.value,
                          })
                        }
                        placeholder="Course description..."
                        rows="3"
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                      />

                      <input
                        type="text"
                        value={newCourse.technologies.join(", ")}
                        onChange={(e) =>
                          setNewCourse({
                            ...newCourse,
                            technologies: e.target.value
                              .split(", ")
                              .filter((t) => t),
                          })
                        }
                        placeholder="Technologies (comma separated)..."
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                      />

                      <select
                        value={newCourse.category}
                        onChange={(e) =>
                          setNewCourse({
                            ...newCourse,
                            category: e.target.value,
                          })
                        }
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                      >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>

                      <select
                        value={newCourse.level}
                        onChange={(e) =>
                          setNewCourse({ ...newCourse, level: e.target.value })
                        }
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                      >
                        <option value="">Select Level</option>
                        {levels.map((level) => (
                          <option key={level} value={level}>
                            {level}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-4">
                      <input
                        type="text"
                        value={newCourse.duration}
                        onChange={(e) =>
                          setNewCourse({
                            ...newCourse,
                            duration: e.target.value,
                          })
                        }
                        placeholder="Duration (e.g., 6 Months)"
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                      />

                      <input
                        type="number"
                        value={newCourse.originalPrice}
                        onChange={(e) =>
                          setNewCourse({
                            ...newCourse,
                            originalPrice: e.target.value,
                          })
                        }
                        placeholder="Original Price (₹)"
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                      />

                      <input
                        type="number"
                        value={newCourse.currentPrice}
                        onChange={(e) =>
                          setNewCourse({
                            ...newCourse,
                            currentPrice: e.target.value,
                          })
                        }
                        placeholder="Current Price (₹)"
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                      />

                      <div className="flex gap-3">
                        <select
                          value={newCourse.instructorName}
                          onChange={(e) => {
                            const selected = instructors.find(
                              (inst) => inst._id === e.target.value
                            );
                            setNewCourse({
                              ...newCourse,
                              instructorName: selected.name,
                              instructorAvatar: selected.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")
                                .slice(0, 2)
                                .toUpperCase(),
                            });
                          }}
                          className="flex-1 border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                        >
                          <option value="">Select Instructor</option>
                          {instructors.map((inst) => (
                            <option key={inst._id} value={inst._id}>
                              {inst.name}
                            </option>
                          ))}
                        </select>

                        <input
                          type="text"
                          value={newCourse.instructorAvatar}
                          onChange={(e) =>
                            setNewCourse({
                              ...newCourse,
                              instructorAvatar: e.target.value,
                            })
                          }
                          placeholder="Initials"
                          className="w-24 border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => {
                      setIsAdding(false);
                      setShowFullForm(false);
                      setNewCourse({
                        name: "",
                        description: "",
                        technologies: [],
                        duration: "",
                        level: "",
                        originalPrice: "",
                        currentPrice: "",
                        category: "",
                        instructorName: "",
                        instructorAvatar: "",
                      });
                    }}
                    className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddCourse}
                    disabled={!newCourse.name.trim()}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <Plus className="w-5 h-5" />
                    Add Course
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Course Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                Your Courses
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-lg font-semibold shadow-lg">
                  {courses?.length}
                </span>
              </h2>
            </div>
            {courses?.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-16 h-16 text-gray-400" />
                </div>
                <p className="text-2xl text-gray-500 mb-4">No courses yet</p>
                <p className="text-gray-400">
                  Start by adding your first course above!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {courses?.map((course, index) => (
                  <div
                    key={course._id}
                    className="group bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 animate-in slide-in-from-bottom-4 overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Course Header */}
                    <div className="relative p-8 pb-6">
                      {editingCourse === course._id ? (
                        /* Edit Mode */
                        <div className="space-y-4">
                          <div className="flex items-center justify-between mb-4">
                            <div
                              className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center shadow-lg`}
                            >
                              <BookOpen className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleSaveEdit(course._id)}
                                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm"
                              >
                                Save
                              </button>
                              <button
                                onClick={handleCancelEdit}
                                className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>

                          {/* Edit Form */}
                          <div className="space-y-4">
                            <select
                              value={editForm.category}
                              onChange={(e) =>
                                setEditForm({
                                  ...editForm,
                                  category: e.target.value,
                                })
                              }
                              className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-white text-sm"
                            >
                              {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                  {cat}
                                </option>
                              ))}
                            </select>

                            <input
                              type="text"
                              value={editForm.name}
                              onChange={(e) =>
                                setEditForm({
                                  ...editForm,
                                  name: e.target.value,
                                })
                              }
                              className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-white font-bold text-lg"
                              placeholder="Course name"
                            />

                            <textarea
                              value={editForm.description}
                              onChange={(e) =>
                                setEditForm({
                                  ...editForm,
                                  description: e.target.value,
                                })
                              }
                              rows="2"
                              className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-white text-sm"
                              placeholder="Course description"
                            />

                            <input
                              type="text"
                              value={editForm.technologies.join(", ")}
                              onChange={(e) =>
                                setEditForm({
                                  ...editForm,
                                  technologies: e.target.value
                                    .split(", ")
                                    .filter((t) => t),
                                })
                              }
                              className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-white text-sm"
                              placeholder="Technologies (comma separated)"
                            />

                            <div className="grid grid-cols-2 gap-3">
                              <input
                                type="text"
                                value={editForm.duration}
                                onChange={(e) =>
                                  setEditForm({
                                    ...editForm,
                                    duration: e.target.value,
                                  })
                                }
                                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-white text-sm"
                                placeholder="Duration"
                              />
                              <select
                                value={editForm.level}
                                onChange={(e) =>
                                  setEditForm({
                                    ...editForm,
                                    level: e.target.value,
                                  })
                                }
                                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-white text-sm"
                              >
                                {levels.map((level) => (
                                  <option key={level} value={level}>
                                    {level}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              <input
                                type="number"
                                value={editForm.originalPrice}
                                onChange={(e) =>
                                  setEditForm({
                                    ...editForm,
                                    originalPrice:
                                      parseInt(e.target.value) || 0,
                                  })
                                }
                                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-white text-sm"
                                placeholder="Original Price"
                              />
                              <input
                                type="number"
                                value={editForm.currentPrice}
                                onChange={(e) =>
                                  setEditForm({
                                    ...editForm,
                                    currentPrice: parseInt(e.target.value) || 0,
                                  })
                                }
                                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-white text-sm"
                                placeholder="Current Price"
                              />
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                              <input
                                type="text"
                                value={editForm.instructorName}
                                onChange={(e) =>
                                  setEditForm({
                                    ...editForm,
                                    instructorName: e.target.value,
                                  })
                                }
                                className="col-span-2 border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-white text-sm"
                                placeholder="Instructor Name"
                              />
                              <input
                                type="text"
                                value={editForm.instructorAvatar}
                                onChange={(e) =>
                                  setEditForm({
                                    ...editForm,
                                    instructorAvatar: e.target.value,
                                  })
                                }
                                className="border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-white text-sm"
                                placeholder="Initials"
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Display Mode */
                        <>
                          <div className="flex items-start justify-between mb-4">
                            <div
                              className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center shadow-lg`}
                            >
                              <BookOpen className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              {course.badge && (
                                <span className="px-3 py-1 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs font-bold rounded-full shadow-lg">
                                  {course.badge}
                                </span>
                              )}
                              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button
                                  onClick={() => handleEditCourse(course)}
                                  className="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                                >
                                  <Edit3 className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleDeleteCourse(course._id)}
                                  className="w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="mb-4">
                            <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold">
                              {course.category}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                            {course.name}
                          </h3>

                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {course.description}
                          </p>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {course.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Rating and Stats */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                              <span className="font-bold text-gray-800">
                                {course.rating}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                <span>{course.students.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{course.duration}</span>
                              </div>
                            </div>
                          </div>

                          {/* Instructor */}
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {course.instructor.avatar}
                            </div>
                            <div>
                              <div className="font-semibold text-gray-800">
                                {course.instructor.name}
                              </div>
                              <div className="text-sm text-gray-600">
                                {course.level}
                              </div>
                            </div>
                          </div>

                          {/* Pricing */}
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-gray-800">
                                {formatPrice(course.currentPrice)}
                              </span>
                              <span className="text-lg text-gray-500 line-through">
                                {formatPrice(course.originalPrice)}
                              </span>
                            </div>
                            <div className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-sm font-semibold">
                              {calculateDiscount(
                                course.originalPrice,
                                course.currentPrice
                              )}
                              % OFF
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default ManageCourses;
