// src/router/AppRouter.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/pages/public/Landing";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import Pricing from "@/pages/public/Pricing";
import Contact from "@/pages/public/Contact";
import About from "@/pages/public/About";
import Courses from "@/pages/public/Courses";
import AdminDashboard from "@/pages/admin/Dashboard";
import InstructorDashboard from "@/pages/instructor/Dashboard";
import StudentDashboard from "@/pages/student/Dashboard";
import AdminLogin from "@/pages/auth/AdminLogin";
import InstructorLogin from "@/pages/auth/InstructorLogin";
import ManageCourses from "@/pages/admin/ManageCourses";
import Announcements from "@/pages/admin/Announcements";
import ManageUsers from "@/pages/admin/ManageUsers";
import Reports from "@/pages/admin/Reports";
import ManageInstructors from "@/pages/admin/ManageInstructors";
import AdminPrivateRoute from "@/router/AdminPrivateRoute";

import StudentAssignments from "@/pages/student/Assignments";
import StudentBrowseCourses from "@/pages/student/BrowseCourses";
import StudentProgress from "@/pages/student/Progress";
import MyCourses from "@/pages/student/MyCourses";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Courses" element={<Courses />} />

        {/* ADMIN ROUTES  */}
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <AdminPrivateRoute>
              <AdminDashboard />
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/managecourses"
          element={
            <AdminPrivateRoute>
              <ManageCourses />
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/manageusers"
          element={
            <AdminPrivateRoute>
              <ManageUsers />
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/reports"
          element={
            <AdminPrivateRoute>
              <Reports />
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/announcements"
          element={
            <AdminPrivateRoute>
              <Announcements />
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/manageinstructors"
          element={
            <AdminPrivateRoute>
              <ManageInstructors />
            </AdminPrivateRoute>
          }
        />

        {/* INSTURCTOR ROUTES  */}
        <Route path="/InstructorLogin" element={<InstructorLogin />} />
        <Route path="/instructor/dashboard" element={<InstructorDashboard />} />

        {/* STUDENT / USERS ROUTES */}
        <Route path="/student/assignments" element={<StudentAssignments />} />
        <Route
          path="/student/browsecourses"
          element={<StudentBrowseCourses />}
        />
        <Route path="/student/mycourses" element={<MyCourses />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/Progress" element={<StudentProgress />} />

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
