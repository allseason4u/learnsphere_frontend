
// src/components/ManageInstructors.jsx

function ManageInstructors() {
  const instructors = [
    {
      name: "Dr. Aditi Sharma",
      email: "aditi.sharma@learnsphere.com",
      courses: ["React Basics", "Advanced CSS"],
    },
    {
      name: "Mr. Rohan Mehta",
      email: "rohan.mehta@learnsphere.com",
      courses: ["Python for Data Science"],
    },
    {
      name: "Ms. Sneha Kapoor",
      email: "sneha.kapoor@learnsphere.com",
      courses: ["UI/UX Design", "Graphic Design"],
    },
    {
      name: "Mr. Rishi Shekhawat",
      email: "rishishekhawat@learnsphere.com",
      courses: ["Microbiology", "Botany", "Zoology"],
    },
    {
      name: "Ms. Naina Mathur",
      email: "nainamathur@learnsphere.com",
      courses: ["Digital Marketing"],
    },
    {
      name: "Mr. Lavesh Arora ",
      email: "lavesharora@learnsphere.com",
      courses: ["Business Management" , "Economics"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-8">
      <h1 className="text-4xl font-bold text-purple-700 mb-8 text-center">
        👩‍🏫 Manage Instructors
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {instructors.map((instructor, index) => (
          <div
            key={index}
            className="bg-white rounded shadow p-6 border-l-4 border-purple-500 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-pink-600 mb-2">
              {instructor.name}
            </h2>
            <p className="text-gray-700 mb-2">
              📧 <span className="font-medium">{instructor.email}</span>
            </p>
            <div className="mb-4">
              <h3 className="text-gray-800 font-semibold mb-1">Courses:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {instructor.courses.map((course, idx) => (
                  <li key={idx}>{course}</li>
                ))}
              </ul>
            </div>
            <button
              className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded transition"
              disabled
            >
              Assign Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageInstructors;