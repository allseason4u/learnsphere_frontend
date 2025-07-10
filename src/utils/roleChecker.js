export const isAdmin = (role) => role === "admin";

export const isInstructor = (role) => role === "instructor";

export const isStudent = (role) => role === "student";

export const getDashboardRoute = (role) => {
  switch (role) {
    case "admin":
      return "/admin/dashboard";
    case "instructor":
      return "/instructor/dashboard";
    case "student":
      return "/student/dashboard";
    default:
      return "/";
  }
};
