// src/components/ManageCourses.jsx

import { useState } from "react";

function ManageCourses() {
  const [courses, setCourses] = useState([
    "React Basics",
    "Advanced CSS",
    "Python for Data Science",
  ]);
  const [newCourse, setNewCourse] = useState("");

  const handleAddCourse = () => {
    if (newCourse.trim() !== "") {
      setCourses([...courses, newCourse.trim()]);
      setNewCourse("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-purple-100 p-8">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">
        Manage Courses
      </h1>

      {/* Add New Course */}
      <div className="bg-white rounded shadow p-6 mb-8">
        <h2 className="text-xl font-semibold text-pink-600 mb-4">
          Add New Course
        </h2>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
            placeholder="Enter course name"
            className="flex-1 border border-pink-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            onClick={handleAddCourse}
            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded transition flex items-center space-x-2"
          >
            <span className="text-lg">+</span>
            <span>Add</span>
          </button>
        </div>
      </div>

      {/* List of Courses */}
      <div className="bg-white rounded shadow p-6">
        <h2 className="text-xl font-semibold text-purple-700 mb-4">
          Course List
        </h2>
        {courses.length === 0 ? (
          <p className="text-gray-600">No courses added yet.</p>
        ) : (
          <ul className="space-y-3">
            {courses.map((course, index) => (
              <li
                key={index}
                className="border-b pb-2 flex justify-between items-center"
              >
                <span>{course}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ManageCourses;