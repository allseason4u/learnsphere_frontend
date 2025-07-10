
// src/components/ManageUsers.jsx

function ManageUsers() {
  const users = [
    {
      name: "Ananya Verma",
      email: "ananya.verma@student.learnsphere.com",
      role: "Student",
    },
    {
      name: "Rahul Singh",
      email: "rahul.singh@student.learnsphere.com",
      role: "Student",
    },
    {
      name: "Neha Joshi",
      email: "neha.joshi@instructor.learnsphere.com",
      role: "Instructor",
    },
    {
      name: "Amit Sharma",
      email: "amit.sharma@admin.learnsphere.com",
      role: "Admin",
    },
     {
      name: "Zain Imam",
      email: "zain.imam@instructor.learnsphere.com",
      role: "Instructor",
    },
     {
      name: "Ishika Gupta",
      email: "ishika.gupta@student.learnsphere.com",
      role: "Student",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-8">
      <h1 className="text-4xl font-bold text-purple-700 mb-8 text-center">
        🧑‍🤝‍🧑 Manage Users
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-white rounded shadow p-6 border-l-4 border-pink-500 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-pink-600 mb-2">
              {user.name}
            </h2>
            <p className="text-gray-700 mb-1">
              📧 <span className="font-medium">{user.email}</span>
            </p>
            <p className="text-gray-700 mb-4">
              🏷 Role: <span className="font-medium">{user.role}</span>
            </p>
            <button
              className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded transition"
              disabled
            >
              Block User
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageUsers;