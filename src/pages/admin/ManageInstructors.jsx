import React, { useState, useEffect } from "react";
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
import AdminLayout from "@/Components/layout/AdminLayout";

function ManageInstructors() {
  const [instructors, setInstructors] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingInstructor, setEditingInstructor] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    courses: "x",
  });

  useEffect(() => {
    fetchInstructors();
  }, []);

  const fetchInstructors = async () => {
    const res = await axios.get(api_instructors);
    setInstructors(res.data);
  };

  const handleAddInstructor = async () => {
    if (formData.name && formData.email) {
      const res = await axios.post(api_instructors, {
        name: formData.name,
        email: formData.email,
        courses: formData.courses.split(",").map((c) => c.trim()),
      });
      setInstructors([...instructors, res.data]);
      resetForm();
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

  const handleUpdateInstructor = async () => {
    const res = await axios.put(`${api_instructors}/${editingInstructor._id}`, {
      name: formData.name,
      email: formData.email,
      courses: formData.courses.split(",").map((c) => c.trim()),
    });
    setInstructors(
      instructors.map((ins) => (ins._id === res.data._id ? res.data : ins))
    );
    resetForm();
  };

  const handleToggleStatus = async (id) => {
    const res = await axios.patch(`${api_instructors}/${id}/status`);
    setInstructors(
      instructors.map((ins) => (ins._id === res.data._id ? res.data : ins))
    );
  };

  const handleDeleteInstructor = async (id) => {
    if (window.confirm("Are you sure?")) {
      await axios.delete(`${api_instructors}/${id}`);
      setInstructors(instructors.filter((ins) => ins._id !== id));
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", courses: "" });
    setShowAddForm(false);
    setEditingInstructor(null);
  };

  const filteredInstructors = instructors.filter(
    (instructor) =>
      instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      instructor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

          {/* Form Modal */}
          {showAddForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {editingInstructor ? "Edit Instructor" : "Add New Instructor"}
                </h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                    placeholder="Full Name"
                  />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                    placeholder="Email"
                  />
                  {/* <input
                    type="text"
                    value={formData.courses}
                    onChange={(e) =>
                      setFormData({ ...formData, courses: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                    placeholder="Courses (comma separated)"
                  /> */}
                </div>
                <div className="flex gap-3 mt-8">
                  <button
                    onClick={
                      editingInstructor
                        ? handleUpdateInstructor
                        : handleAddInstructor
                    }
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold"
                  >
                    {editingInstructor ? "Update" : "Add"} Instructor
                  </button>
                  <button
                    onClick={resetForm}
                    className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Instructor Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredInstructors.map((instructor) => (
              <div
                key={instructor._id}
                className={`bg-white rounded-2xl shadow-lg p-6 border-l-4 ${
                  instructor.status === "active"
                    ? "border-green-500"
                    : "border-red-500"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                        instructor.status === "active"
                          ? "bg-gradient-to-r from-purple-500 to-pink-500"
                          : "bg-gray-400"
                      }`}
                    >
                      {instructor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
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

                {/* <div className="mb-4">
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
                </div> */}

                <div className="text-sm text-gray-500 mb-4">
                  Joined: {new Date(instructor.joinDate).toLocaleDateString()}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditInstructor(instructor)}
                    className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg font-medium flex items-center justify-center gap-2"
                  >
                    <Edit className="w-4 h-4" /> Edit
                  </button>
                  <button
                    onClick={() => handleToggleStatus(instructor._id)}
                    className={`flex-1 py-2 rounded-lg font-medium flex items-center justify-center gap-2 ${
                      instructor.status === "active"
                        ? "bg-red-50 text-red-600"
                        : "bg-green-50 text-green-600"
                    }`}
                  >
                    {instructor.status === "active" ? (
                      <>
                        <UserX className="w-4 h-4" /> Block
                      </>
                    ) : (
                      <>
                        <UserCheck className="w-4 h-4" /> Unblock
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => handleDeleteInstructor(instructor._id)}
                    className="bg-red-50 text-red-600 p-2 rounded-lg"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default ManageInstructors;
