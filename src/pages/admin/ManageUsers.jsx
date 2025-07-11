import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Search,
  Edit,
  Trash2,
  Plus,
  GraduationCap,
  Mail,
  Calendar,
  Users,
  Filter,
} from "lucide-react";
import AdminLayout from "@/Components/layout/AdminLayout";
import { api_students } from "../../utils/constants";

function ManageStudents() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [courseFilter, setCourseFilter] = useState("All");
  const [editingStudent, setEditingStudent] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    course: "",
    status: "Active",
  });
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get(api_students);
      setStudents(res.data);
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  const courses = [...new Set(students.map((s) => s.course))];

  const filteredStudents = students.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || s.status === statusFilter;
    const matchesCourse = courseFilter === "All" || s.course === courseFilter;
    return matchesSearch && matchesStatus && matchesCourse;
  });

  const handleAddStudent = async () => {
    if (!newStudent.name || !newStudent.email || !newStudent.course) return;
    try {
      const res = await axios.post(api_students, newStudent);
      setStudents([...students, res.data]);
      setNewStudent({ name: "", email: "", course: "", status: "Active" });
      setShowAddForm(false);
    } catch (err) {
      console.error("Error adding student:", err);
    }
  };

  const handleEdit = (student) => {
    setEditingStudent({ ...student });
  };

  const handleSaveEdit = async () => {
    try {
      const res = await axios.put(
        `${api_students}/${editingStudent._id}`,
        editingStudent
      );
      setStudents(students.map((s) => (s._id === res.data._id ? res.data : s)));
      setEditingStudent(null);
    } catch (err) {
      console.error("Error updating student:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await axios.delete(`${api_students}/${id}`);
        setStudents(students.filter((s) => s._id !== id));
      } catch (err) {
        console.error("Error deleting student:", err);
      }
    }
  };

  const getStatusColor = (status) => {
    return status === "Active"
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return "bg-green-500";
    if (progress >= 60) return "bg-blue-500";
    if (progress >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-cyan-50 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Student Management
                  </h1>
                  <p className="text-gray-600">
                    Manage and monitor student progress
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowAddForm(true)}
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Plus className="h-5 w-5" />
                <span>Add Student</span>
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Students</p>
                    <p className="text-2xl font-bold text-gray-800">
                      {students.length}
                    </p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Students</p>
                    <p className="text-2xl font-bold text-green-600">
                      {students.filter((s) => s.status === "Active").length}
                    </p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-xl">
                    <GraduationCap className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </div>
              {/* <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Avg Progress</p>
                    <p className="text-2xl font-bold text-purple-600">
                      {Math.round(
                        students.reduce((acc, s) => acc + s.progress, 0) /
                          students.length
                      )}
                      %
                    </p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Calendar className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </div> */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Courses</p>
                    <p className="text-2xl font-bold text-pink-600">
                      {courses.length}
                    </p>
                  </div>
                  <div className="p-3 bg-pink-100 rounded-xl">
                    <Filter className="h-6 w-6 text-pink-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex-1 min-w-64">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search students..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-3 bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <select
                value={courseFilter}
                onChange={(e) => setCourseFilter(e.target.value)}
                className="px-4 py-3 bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="All">All Courses</option>
                {courses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Students Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="w-14 h-14 rounded-2xl object-cover shadow-md"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">
                        {student.name}
                      </h3>
                      <p className="text-sm text-gray-600 flex items-center">
                        <Mail className="h-4 w-4 mr-1" />
                        {student.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(student)}
                      className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-all duration-200"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(student.id)}
                      className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-all duration-200"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Course</span>
                    <span className="text-sm font-medium text-gray-800">
                      {student.course}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Status</span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        student.status
                      )}`}
                    >
                      {student.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-medium text-gray-800">
                      {student.progress}%
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(
                        student.progress
                      )}`}
                      style={{ width: `${student.progress}%` }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Last Active</span>
                    <span className="text-sm font-medium text-gray-800">
                      {student.lastActive}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Enrolled</span>
                    <span className="text-sm font-medium text-gray-800">
                      {new Date(student.enrollmentDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Edit Modal */}
          {editingStudent && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  Edit Student
                </h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={editingStudent.name}
                    onChange={(e) =>
                      setEditingStudent({
                        ...editingStudent,
                        name: e.target.value,
                      })
                    }
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={editingStudent.email}
                    onChange={(e) =>
                      setEditingStudent({
                        ...editingStudent,
                        email: e.target.value,
                      })
                    }
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <select
                    value={editingStudent.course}
                    onChange={(e) =>
                      setEditingStudent({
                        ...editingStudent,
                        course: e.target.value,
                      })
                    }
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                  <select
                    value={editingStudent.status}
                    onChange={(e) =>
                      setEditingStudent({
                        ...editingStudent,
                        status: e.target.value,
                      })
                    }
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="flex space-x-3 mt-6">
                  <button
                    onClick={handleSaveEdit}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => setEditingStudent(null)}
                    className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-xl hover:bg-gray-300 transition-all duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Add Student Modal */}
          {showAddForm && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  Add New Student
                </h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={newStudent.name}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, name: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={newStudent.email}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, email: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <select
                    value={newStudent.course}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, course: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select Course</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                  <select
                    value={newStudent.status}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, status: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="flex space-x-3 mt-6">
                  <button
                    onClick={handleAddStudent}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                  >
                    Add Student
                  </button>
                  <button
                    onClick={() => {
                      setShowAddForm(false);
                      setNewStudent({
                        name: "",
                        email: "",
                        course: "",
                        status: "Active",
                      });
                    }}
                    className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-xl hover:bg-gray-300 transition-all duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

export default ManageStudents;
