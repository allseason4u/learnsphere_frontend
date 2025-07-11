import React, { useState, useEffect } from "react";
import {
  BookOpen,
  TrendingUp,
  Award,
  Bell,
  Search,
  Calendar,
  ChevronRight,
  Play,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import StudentLayout from "../../Components/layout/StudentLayout";

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeCard, setActiveCard] = useState(null);
  const [notifications, setNotifications] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

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
    <>
      {/* Header */}

      <StudentLayout>
        <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200 px-8 py-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-purple-600 bg-clip-text text-transparent">
                Welcome back, John! 👋
              </h1>
              <p className="text-slate-500 mt-1">
                {currentTime.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="w-6 h-6 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" />
                {notifications > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg">
                    {notifications}
                  </span>
                )}
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-slate-700">
                  {currentTime.toLocaleTimeString()}
                </div>
                <div className="text-xs text-slate-500">Live</div>
              </div>
            </div>
          </div>
        </header>
        {/* Dashboard Content */}
        <div className="p-8 space-y-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-200 hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:scale-105"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <div className="text-2xl font-bold text-slate-800 mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main Dashboard Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Progress Overview */}
            <div className="lg:col-span-2 bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-200 shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-6">
                Recent Activity
              </h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-300 border border-slate-100"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-sm"></div>
                    <div className="flex-1">
                      <div className="text-slate-800 font-medium">
                        {activity.title}
                      </div>
                      <div className="text-slate-500 text-sm">
                        {activity.time}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-700 font-bold">
                        {activity.progress}%
                      </div>
                      <div className="w-16 h-2 bg-slate-200 rounded-full mt-1">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                          style={{ width: `${activity.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-200 shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-6">
                Quick Actions
              </h3>
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Learning
                </button>
                <button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium py-4 px-6 rounded-xl transition-all duration-300 border border-slate-200 hover:border-slate-300 hover:shadow-md">
                  View Schedule
                </button>
                <button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium py-4 px-6 rounded-xl transition-all duration-300 border border-slate-200 hover:border-slate-300 hover:shadow-md">
                  Join Study Group
                </button>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Track Progress",
                desc: "Monitor your learning journey with detailed analytics",
                icon: TrendingUp,
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Explore Courses",
                desc: "Discover new courses tailored to your interests",
                icon: BookOpen,
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "Manage Assignments",
                desc: "Stay organized with smart assignment tracking",
                icon: Calendar,
                color: "from-green-500 to-emerald-500",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-200 hover:shadow-xl transition-all duration-500 group cursor-pointer transform hover:scale-105"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${card.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {card.title}
                </h4>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors">
                  {card.desc}
                </p>
                <div className="mt-4 flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors">
                  <span className="text-sm">Get Started</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </StudentLayout>
    </>
  );
};

export default Dashboard;
