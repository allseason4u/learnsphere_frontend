import React, { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Clock,
  User,
} from "lucide-react";

import AdminLayout from "@/Components/layout/AdminLayout";

function AnnouncementsBoard() {
  const announcements = [
    {
      id: 1,
      title: "New Course Launch: AI & Machine Learning",
      time: "2 hours ago",
      priority: "high",
      description:
        "Advanced AI course launching next week with hands-on projects",
      author: "Admin Team",
      views: 234,
    },
    {
      id: 2,
      title: "System Maintenance Scheduled",
      time: "1 day ago",
      priority: "medium",
      description: "Planned maintenance on July 15th from 2-4 AM EST",
      author: "IT Department",
      views: 89,
    },
    {
      id: 3,
      title: "Instructor Workshop: Advanced Teaching Tools",
      time: "3 days ago",
      priority: "low",
      description: "Join us this Friday for interactive workshop sessions",
      author: "Training Team",
      views: 156,
    },
    {
      id: 4,
      title: "New Partnership Announcement",
      time: "1 week ago",
      priority: "high",
      description: "Exciting collaboration with leading tech companies",
      author: "Marketing Team",
      views: 456,
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Announcements</h2>
            <p className="text-gray-600 mt-1">
              Manage and create announcements for your platform
            </p>
          </div>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-xl hover:from-violet-600 hover:to-purple-700 transition-all duration-200">
            <Plus className="w-4 h-4" />
            <span>New Announcement</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search announcements..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h3 className="font-semibold text-gray-900">
                        {announcement.title}
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(
                          announcement.priority
                        )}`}
                      >
                        {announcement.priority}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2">
                      {announcement.description}
                    </p>
                    <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{announcement.author}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{announcement.time}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{announcement.views} views</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AnnouncementsBoard;
