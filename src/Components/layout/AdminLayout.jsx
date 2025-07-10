import React, { useState } from "react";
import {
  Bell,
  BookOpen,
  Users,
  UserCheck,
  BarChart3,
  LogOut,
  Menu,
  X,
  TrendingUp,
  Calendar,
  Award,
  Activity,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const navigate = useNavigate();
  const stats = [
    {
      title: "Total Courses",
      value: "120",
      change: "+12%",
      icon: BookOpen,
      color: "from-violet-500 to-purple-600",
    },
    {
      title: "Total Users",
      value: "4,350",
      change: "+8%",
      icon: Users,
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Active Instructors",
      value: "75",
      change: "+5%",
      icon: UserCheck,
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Completion Rate",
      value: "89%",
      change: "+3%",
      icon: TrendingUp,
      color: "from-orange-500 to-red-600",
    },
  ];

  const announcements = [
    {
      title: "New Course Launch: AI & Machine Learning",
      time: "2 hours ago",
      priority: "high",
      description:
        "Advanced AI course launching next week with hands-on projects",
    },
    {
      title: "System Maintenance Scheduled",
      time: "1 day ago",
      priority: "medium",
      description: "Planned maintenance on July 15th from 2-4 AM EST",
    },
    {
      title: "Instructor Workshop: Advanced Teaching Tools",
      time: "3 days ago",
      priority: "low",
      description: "Join us this Friday for interactive workshop sessions",
    },
  ];

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
    {
      id: "reports",
      label: "Reports",
      icon: Activity,
      link: "/admin/reports",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
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
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  navigate(item.link);
                }}
                className={`
                  w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 text-left
                  ${
                    activeTab === item.id
                      ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg transform scale-105"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }
                `}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-200">
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        {/* Header */}
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;
