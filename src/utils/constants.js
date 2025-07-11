export const USER_ROLES = {
  ADMIN: "admin",
  INSTRUCTOR: "instructor",
  STUDENT: "student",
};

export const COURSE_STATUS = {
  DRAFT: "Draft",
  PUBLISHED: "Published",
  ARCHIVED: "Archived",
};

export const NOTIFICATION_TYPES = {
  SUBMISSION: "submission",
  GRADE: "grade",
  ANNOUNCEMENT: "announcement",
};

const LiveUrl = "";
const localUrl = "http://localhost:5000/";
const baseurl = localUrl;
export const api_instructors = `${baseurl}api/instructors`;
export const api_courses = `${baseurl}api/courses`;
export const api_students = `${baseurl}api/students`;
