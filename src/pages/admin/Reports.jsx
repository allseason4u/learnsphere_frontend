import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import {
  BookOpen,
  Users,
  GraduationCap,
  Award,
  TrendingUp,
  TrendingDown,
  Calendar,
  Filter,
  Download,
  Eye,
  MoreHorizontal,
  Clock,
  MessageSquare,
  FileText,
  Video,
} from "lucide-react";
import AdminLayout from "@/Components/layout/AdminLayout";

const courseEngagementData = [
  { name: "Week 1", completions: 89, submissions: 76, logins: 95 },
  { name: "Week 2", completions: 84, submissions: 82, logins: 88 },
  { name: "Week 3", completions: 78, submissions: 71, logins: 92 },
  { name: "Week 4", completions: 92, submissions: 85, logins: 89 },
  { name: "Week 5", completions: 87, submissions: 79, logins: 94 },
  { name: "Week 6", completions: 91, submissions: 88, logins: 91 },
];

const gradeDistributionData = [
  { grade: "A", count: 45, color: "#10b981" },
  { grade: "B", count: 38, color: "#06b6d4" },
  { grade: "C", count: 22, color: "#f59e0b" },
  { grade: "D", count: 8, color: "#ef4444" },
  { grade: "F", count: 3, color: "#6b7280" },
];

const coursePerformanceData = [
  { name: "Jan", enrollments: 124, completions: 89, avgGrade: 85 },
  { name: "Feb", enrollments: 156, completions: 112, avgGrade: 87 },
  { name: "Mar", enrollments: 189, completions: 145, avgGrade: 83 },
  { name: "Apr", enrollments: 167, completions: 134, avgGrade: 88 },
  { name: "May", enrollments: 198, completions: 156, avgGrade: 86 },
  { name: "Jun", enrollments: 223, completions: 189, avgGrade: 89 },
];

const recentReports = [
  {
    id: 1,
    name: "Student Performance Analytics",
    course: "Data Structures",
    date: "2024-07-08",
    status: "completed",
    views: 247,
    type: "performance",
  },
  {
    id: 2,
    name: "Course Completion Report",
    course: "Web Development",
    date: "2024-07-07",
    status: "processing",
    views: 189,
    type: "completion",
  },
  {
    id: 3,
    name: "Assignment Submission Analysis",
    course: "Machine Learning",
    date: "2024-07-05",
    status: "completed",
    views: 156,
    type: "submission",
  },
  {
    id: 4,
    name: "Discussion Forum Engagement",
    course: "Database Systems",
    date: "2024-07-03",
    status: "completed",
    views: 134,
    type: "engagement",
  },
];

function Reports() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedPeriod, setSelectedPeriod] = useState("30d");
  const [userRole] = useState("admin"); // This would come from auth context

  const StatCard = ({ title, value, change, icon: Icon, trend, subtitle }) => (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:border-indigo-200">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
          {subtitle && <p className="text-xs text-gray-500 mb-2">{subtitle}</p>}
          <div className="flex items-center">
            {trend === "up" ? (
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
            )}
            <span
              className={`text-sm font-medium ${
                trend === "up" ? "text-green-600" : "text-red-600"
              }`}
            >
              {change}
            </span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-indigo-600" />
        </div>
      </div>
    </div>
  );

  const ReportCard = ({ report }) => {
    const getTypeIcon = (type) => {
      switch (type) {
        case "performance":
          return Award;
        case "completion":
          return GraduationCap;
        case "submission":
          return FileText;
        case "engagement":
          return MessageSquare;
        default:
          return FileText;
      }
    };

    const Icon = getTypeIcon(report.type);

    return (
      <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group hover:border-indigo-200">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-3">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <Icon className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 mb-1">
                {report.name}
              </h3>
              <p className="text-sm text-gray-600">{report.course}</p>
            </div>
          </div>
          <button className="p-1 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <MoreHorizontal className="w-4 h-4 text-gray-500" />
          </button>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {report.date}
          </div>
          <div className="flex items-center">
            <Eye className="w-4 h-4 mr-1" />
            {report.views} views
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              report.status === "completed"
                ? "bg-green-100 text-green-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {report.status}
          </span>
          <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors duration-200">
            View Report
          </button>
        </div>
      </div>
    );
  };

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  LearnSphere Reports
                </h1>
                <p className="text-gray-600 mt-1">
                  Analytics & Insights for Educational Excellence
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="semester">This Semester</option>
                  <option value="year">Academic Year</option>
                </select>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Export</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Navigation Tabs */}
          <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-xl w-fit">
            {["overview", "courses", "students", "assessments"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-white text-indigo-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Students"
              value="2,847"
              change="+15.2%"
              icon={Users}
              trend="up"
              subtitle="Active learners"
            />
            <StatCard
              title="Active Courses"
              value="48"
              change="+8.1%"
              icon={BookOpen}
              trend="up"
              subtitle="This semester"
            />
            <StatCard
              title="Completion Rate"
              value="87.3%"
              change="+3.2%"
              icon={GraduationCap}
              trend="up"
              subtitle="Course completion"
            />
            <StatCard
              title="Avg Grade"
              value="B+"
              change="+0.3"
              icon={Award}
              trend="up"
              subtitle="Overall performance"
            />
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Course Performance Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Course Performance Trends
                </h3>
                <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <Filter className="w-4 h-4 text-gray-500" />
                </button>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={coursePerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="enrollments"
                    stackId="1"
                    stroke="#6366f1"
                    fill="#6366f1"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="completions"
                    stackId="2"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Grade Distribution */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Grade Distribution
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={gradeDistributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="count"
                  >
                    {gradeDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {gradeDistributionData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <div
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm text-gray-600">
                        Grade {item.grade}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Student Engagement Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Student Engagement Metrics
              </h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                  <span className="text-sm text-gray-600">Logins</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-600">Completions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-gray-600">Submissions</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={courseEngagementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="logins"
                  stroke="#6366f1"
                  strokeWidth={3}
                  dot={{ fill: "#6366f1", strokeWidth: 0, r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="completions"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ fill: "#10b981", strokeWidth: 0, r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="submissions"
                  stroke="#06b6d4"
                  strokeWidth={3}
                  dot={{ fill: "#06b6d4", strokeWidth: 0, r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Reports */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Recent Academic Reports
              </h3>
              <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors duration-200">
                View All Reports
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recentReports.map((report) => (
                <ReportCard key={report.id} report={report} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Reports;
