import React, { useState, useEffect } from "react";
import {
  Bell,
  BookOpen,
  Users,
  UserCheck,
  BarChart3,
  LogOut,
  X,
  TrendingUp,
  Award,
  Activity,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: BarChart3,
      link: "/admin/dashboard",
    },
    {
      id: "announcements",
      label: "Announcements",
      icon: Bell,
      link: "/admin/announcements",
    },
    {
      id: "courses",
      label: "Manage Courses",
      icon: BookOpen,
      link: "/admin/managecourses",
    },
    {
      id: "instructors",
      label: "Manage Instructors",
      icon: UserCheck,
      link: "/admin/manageinstructors",
    },
    {
      id: "users",
      label: "Manage Users",
      icon: Users,
      link: "/admin/manageusers",
    },
    { id: "reports", label: "Reports", icon: Activity, link: "/admin/reports" },
  ];

  // Auto-highlight current route
  useEffect(() => {
    const current = navItems.find((item) =>
      location.pathname.startsWith(item.link)
    );
    if (current) setActiveTab(current.id);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen bg-gray-50 transition-colors duration-300">
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                LearnSphere
              </span>
            </div>
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto scrollbar-hide">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  navigate(item.link);
                }}
                className={`group w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200
                  ${
                    activeTab === item.id
                      ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg scale-[1.02]"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
              >
                <item.icon
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeTab === item.id
                      ? "scale-110"
                      : "group-hover:scale-105"
                  }`}
                />
                <span className="font-medium transition-all duration-300">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition duration-200">
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden transition-all duration-300">
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;
