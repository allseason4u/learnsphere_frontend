import React, { useState, useEffect } from "react";

const Products = () => {
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [priceFilter, setPriceFilter] = useState("all");
  const [sortOption, setSortOption] = useState("none");

  const coursesData = [
    {
      id: 1,
      title: "Full Stack Web Development",
      duration: "6 Months",
      price: 6999,
      rating: 4.8,
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
      category: "Development",
    },
    {
      id: 2,
      title: "Digital Marketing",
      duration: "4 Months",
      price: 2999,
      rating: 4.6,
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055689.png",
      category: "Marketing",
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      duration: "3 Months",
      price: 3499,
      rating: 4.4,
      image: "https://cdn-icons-png.flaticon.com/512/2900/2900834.png",
      category: "Design",
    },
    {
      id: 4,
      title: "Digital Marketing Masterclass",
      duration: "2 Months",
      price: 2499,
      rating: 4.5,
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055692.png",
      category: "Marketing",
    },
    {
      id: 5,
      title: "Machine Learning with Python",
      duration: "5 Months",
      price: 6999,
      rating: 4.7,
      image: "https://cdn-icons-png.flaticon.com/512/747/747376.png",
      category: "AI/ML",
    },
    {
      id: 6,
      title: "AWS Cloud Practitioner Essentials",
      duration: "2 Months",
      price: 4499,
      rating: 4.3,
      image: "https://cdn-icons-png.flaticon.com/512/888/888078.png",
      category: "Cloud",
    },
  ];

  useEffect(() => {
    setFilteredCourses(coursesData);
  }, []);

  const handleFilter = (value) => {
    setPriceFilter(value);
    let updatedCourses = [...coursesData];
    if (value === "below5000") {
      updatedCourses = updatedCourses.filter((course) => course.price < 5000);
    }
    updatedCourses = sortCourses(updatedCourses, sortOption);
    setFilteredCourses(updatedCourses);
  };

  const handleSort = (value) => {
    setSortOption(value);
    let updatedCourses = [...filteredCourses];
    updatedCourses = sortCourses(updatedCourses, value);
    setFilteredCourses(updatedCourses);
  };

  const sortCourses = (courses, value) => {
    const getMonths = (text) => parseInt(text);
    if (value === "asc") {
      return courses.sort(
        (a, b) => getMonths(a.duration) - getMonths(b.duration)
      );
    } else if (value === "desc") {
      return courses.sort(
        (a, b) => getMonths(b.duration) - getMonths(a.duration)
      );
    }
    return courses;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-violet-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Our Popular Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover world-class courses designed to accelerate your learning
            journey
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 justify-center items-center">
          <div className="flex items-center gap-3">
            <label className="font-semibold text-gray-700">
              Filter by Price:
            </label>
            <select
              className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-violet-500 focus:outline-none transition-colors"
              onChange={(e) => handleFilter(e.target.value)}
              value={priceFilter}
            >
              <option value="all">All Courses</option>
              <option value="below5000">Below ₹5000</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <label className="font-semibold text-gray-700">
              Sort by Duration:
            </label>
            <select
              className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-violet-500 focus:outline-none transition-colors"
              onChange={(e) => handleSort(e.target.value)}
              value={sortOption}
            >
              <option value="none">Default</option>
              <option value="asc">Short to Long</option>
              <option value="desc">Long to Short</option>
            </select>
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
              <div className="p-8">
                <div className="text-center mb-6">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="inline-block bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 px-3 py-1 rounded-full text-sm font-medium">
                    {course.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {course.title}
                </h3>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">
                    Duration:{" "}
                    <span className="font-semibold">{course.duration}</span>
                  </span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                    ₹{course.price.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-center mb-6">
                  <div className="flex text-yellow-400">
                    {"★".repeat(Math.floor(course.rating))}
                    {"☆".repeat(5 - Math.floor(course.rating))}
                  </div>
                  <span className="text-gray-600 ml-2">({course.rating})</span>
                </div>

                <button className="w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
