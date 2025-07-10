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
import AdminLayout from "@/Components/layout/adminLayout";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

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
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "announcements", label: "Announcements", icon: Bell },
    { id: "courses", label: "Manage Courses", icon: BookOpen },
    { id: "instructors", label: "Manage Instructors", icon: UserCheck },
    { id: "users", label: "Manage Users", icon: Users },
    { id: "reports", label: "Reports", icon: Activity },
  ];

  return (
    <>
      <AdminLayout>
        <header className="bg-white shadow-sm border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Dashboard Overview
                </h1>
                <p className="text-gray-600 mt-1">
                  Welcome back! Here's what's happening today.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
                  <Bell className="w-6 h-6 text-gray-600" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">AD</span>
              </div>
            </div>
          </div>
        </header>
        {/* Content */}
        <div className="p-6 overflow-auto h-full">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 hover:border-gray-200 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-gray-600 font-medium mb-2">{stat.title}</h3>
                <p className="text-3xl font-bold text-gray-900 group-hover:scale-105 transition-transform">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Announcements Section */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Latest Announcements
              </h2>
              <button className="text-violet-600 hover:text-violet-700 font-medium text-sm">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {announcements.map((announcement, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-100 rounded-xl hover:border-violet-200 hover:bg-violet-50 transition-all duration-200 cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          announcement.priority === "high"
                            ? "bg-red-500"
                            : announcement.priority === "medium"
                            ? "bg-yellow-500"
                            : "bg-green-500"
                        }`}
                      />
                      <h3 className="font-semibold text-gray-900 group-hover:text-violet-700 transition-colors">
                        {announcement.title}
                      </h3>
                    </div>
                    <span className="text-sm text-gray-500 flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{announcement.time}</span>
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {announcement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="mt-8 bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {[
                {
                  user: "Sarah Johnson",
                  action: "completed",
                  item: "Advanced React Course",
                  time: "2 minutes ago",
                },
                {
                  user: "Mike Chen",
                  action: "enrolled in",
                  item: "Machine Learning Basics",
                  time: "1 hour ago",
                },
                {
                  user: "Emily Davis",
                  action: "submitted",
                  item: "Final Project - Data Analysis",
                  time: "3 hours ago",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {activity.user
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium text-gray-900">
                        {activity.user}
                      </span>
                      <span className="text-gray-600"> {activity.action} </span>
                      <span className="font-medium text-gray-900">
                        {activity.item}
                      </span>
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}

export default Dashboard;
