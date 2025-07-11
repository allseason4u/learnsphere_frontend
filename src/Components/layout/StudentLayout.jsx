import React, { useState, useEffect } from "react";
import {
  BookOpen,
  TrendingUp,
  Award,
  Users,
  Bell,
  Search,
  Settings,
  User,
  Calendar,
  ChevronRight,
  Play,
  Star,
  Clock,
  Activity,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentLayout = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeCard, setActiveCard] = useState(null);
  const [notifications, setNotifications] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const sidebarItems = [
    {
      icon: BookOpen,
      label: "My Courses",
      path: "/student/mycourses",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Search,
      label: "Browse Courses",
      path: "/student/browsecourses",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Play,
      label: "Assignment",
      path: "/student/assignments",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      label: "Progress",
      path: "/student/progress",
      color: "from-orange-500 to-red-500",
    },
  ];

  const quickStats = [
    {
      label: "Courses Enrolled",
      value: "12",
      change: "+2",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Assignments Due",
      value: "5",
      change: "-1",
      icon: Calendar,
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Completion Rate",
      value: "87%",
      change: "+5%",
      icon: Award,
      color: "from-green-500 to-emerald-500",
    },
    {
      label: "Study Hours",
      value: "42h",
      change: "+8h",
      icon: Clock,
      color: "from-orange-500 to-red-500",
    },
  ];

  const recentActivities = [
    {
      title: "Completed React Fundamentals",
      time: "2 hours ago",
      progress: 100,
    },
    { title: "Started Advanced JavaScript", time: "5 hours ago", progress: 15 },
    { title: "Submitted Web Design Project", time: "1 day ago", progress: 100 },
    { title: "Joined Python Bootcamp", time: "2 days ago", progress: 5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="flex h-screen relative z-10">
        {/* Sidebar */}
        <aside className="w-72 bg-white/80 backdrop-blur-xl border-r border-slate-200 flex flex-col shadow-xl">
          {/* Header */}
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                LearnHub
              </h2>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  navigate(item.path);
                }}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-slate-100 transition-all duration-300 group relative overflow-hidden"
              >
                <div
                  className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}
                >
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-600 group-hover:text-slate-800 font-medium">
                  {item.label}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400 ml-auto group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-slate-200">
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-md">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-800">
                  John Doe
                </div>
                <div className="text-xs text-slate-500">Premium Student</div>
              </div>
              <Settings className="w-4 h-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default StudentLayout;
