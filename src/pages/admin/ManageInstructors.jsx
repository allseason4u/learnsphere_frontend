import React, { useState } from "react";
import {
  Plus,
  Edit,
  Trash2,
  UserX,
  UserCheck,
  Mail,
  BookOpen,
  Search,
} from "lucide-react";

  import AdminLayout from "@/Components/layout/adminLayout";

function ManageInstructors() {
  const [instructors, setInstructors] = useState([
    {
      id: 1,
      name: "Dr. Aditi Sharma",
      email: "aditi.sharma@learnsphere.com",
      courses: ["React Basics", "Advanced CSS"],
      status: "active",
      joinDate: "2023-01-15",
      avatar: "AS",
    },
    {
      id: 2,
      name: "Mr. Rohan Mehta",
      email: "rohan.mehta@learnsphere.com",
      courses: ["Python for Data Science"],
      status: "active",
      joinDate: "2023-03-20",
      avatar: "RM",
    },
    {
      id: 3,
      name: "Ms. Sneha Kapoor",
      email: "sneha.kapoor@learnsphere.com",
      courses: ["UI/UX Design", "Graphic Design"],
      status: "blocked",
      joinDate: "2023-02-10",
      avatar: "SK",
    },
    {
      id: 4,
      name: "Mr. Rishi Shekhawat",
      email: "rishishekhawat@learnsphere.com",
      courses: ["Microbiology", "Botany", "Zoology"],
      status: "active",
      joinDate: "2023-04-05",
      avatar: "RS",
    },
    {
      id: 5,
      name: "Ms. Naina Mathur",
      email: "nainamathur@learnsphere.com",
      courses: ["Digital Marketing"],
      status: "active",
      joinDate: "2023-05-12",
      avatar: "NM",
    },
    {
      id: 6,
      name: "Mr. Lavesh Arora",
      email: "lavesharora@learnsphere.com",
      courses: ["Business Management", "Economics"],
      status: "active",
      joinDate: "2023-06-18",
      avatar: "LA",
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingInstructor, setEditingInstructor] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    courses: "",
  });

  const filteredInstructors = instructors.filter(
    (instructor) =>
      instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      instructor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddInstructor = () => {
    if (formData.name && formData.email) {
      const newInstructor = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        courses: formData.courses
          .split(",")
          .map((course) => course.trim())
          .filter((course) => course),
        status: "active",
        joinDate: new Date().toISOString().split("T")[0],
        avatar: formData.name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase(),
      };
      setInstructors([...instructors, newInstructor]);
      setFormData({ name: "", email: "", courses: "" });
      setShowAddForm(false);
    }
  };

  const handleEditInstructor = (instructor) => {
    setEditingInstructor(instructor);
    setFormData({
      name: instructor.name,
      email: instructor.email,
      courses: instructor.courses.join(", "),
    });
    setShowAddForm(true);
  };

  const handleUpdateInstructor = () => {
    if (formData.name && formData.email) {
      setInstructors(
        instructors.map((instructor) =>
          instructor.id === editingInstructor.id
            ? {
                ...instructor,
                name: formData.name,
                email: formData.email,
                courses: formData.courses
                  .split(",")
                  .map((course) => course.trim())
                  .filter((course) => course),
                avatar: formData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase(),
              }
            : instructor
        )
      );
      setFormData({ name: "", email: "", courses: "" });
      setShowAddForm(false);
      setEditingInstructor(null);
    }
  };

  const handleDeleteInstructor = (id) => {
    if (window.confirm("Are you sure you want to delete this instructor?")) {
      setInstructors(instructors.filter((instructor) => instructor.id !== id));
    }
  };

  const handleToggleStatus = (id) => {
    setInstructors(
      instructors.map((instructor) =>
        instructor.id === id
          ? {
              ...instructor,
              status: instructor.status === "active" ? "blocked" : "active",
            }
          : instructor
      )
    );
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", courses: "" });
    setShowAddForm(false);
    setEditingInstructor(null);
  };

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Instructor Management
            </h1>
            <p className="text-gray-600 text-lg">
              Manage your teaching staff with ease
            </p>
          </div>

          {/* Search and Add Button */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search instructors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add Instructor
            </button>
          </div>

          {/* Add/Edit Form Modal */}
          {showAddForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {editingInstructor ? "Edit Instructor" : "Add New Instructor"}
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Courses (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={formData.courses}
                      onChange={(e) =>
                        setFormData({ ...formData, courses: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="e.g., React Basics, Advanced CSS"
                    />
                  </div>
                </div>
                <div className="flex gap-3 mt-8">
                  <button
                    onClick={
                      editingInstructor
                        ? handleUpdateInstructor
                        : handleAddInstructor
                    }
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    {editingInstructor ? "Update" : "Add"} Instructor
                  </button>
                  <button
                    onClick={resetForm}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Instructors Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredInstructors.map((instructor) => (
              <div
                key={instructor.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 ${
                  instructor.status === "active"
                    ? "border-green-500"
                    : "border-red-500"
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                        instructor.status === "active"
                          ? "bg-gradient-to-r from-purple-500 to-pink-500"
                          : "bg-gray-400"
                      }`}
                    >
                      {instructor.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {instructor.name}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Mail className="w-4 h-4" />
                        {instructor.email}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      instructor.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {instructor.status}
                  </div>
                </div>

                {/* Courses */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">
                      Courses ({instructor.courses.length})
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {instructor.courses.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-purple-100 text-purple-700 rounded-lg text-xs font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Join Date */}
                <div className="text-sm text-gray-500 mb-4">
                  Joined: {new Date(instructor.joinDate).toLocaleDateString()}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditInstructor(instructor)}
                    className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-600 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleToggleStatus(instructor.id)}
                    className={`flex-1 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                      instructor.status === "active"
                        ? "bg-red-50 hover:bg-red-100 text-red-600"
                        : "bg-green-50 hover:bg-green-100 text-green-600"
                    }`}
                  >
                    {instructor.status === "active" ? (
                      <>
                        <UserX className="w-4 h-4" />
                        Block
                      </>
                    ) : (
                      <>
                        <UserCheck className="w-4 h-4" />
                        Unblock
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => handleDeleteInstructor(instructor.id)}
                    className="bg-red-50 hover:bg-red-100 text-red-600 p-2 rounded-lg transition-all duration-200"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredInstructors.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">👨‍🏫</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No instructors found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or add a new instructor
              </p>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

export default ManageInstructors;
