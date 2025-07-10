import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Sparkles,
  Globe,
  Heart,
  Target,
  Zap,
  Star,
} from "lucide-react";
import LandingLayout from "../../Components/layout/landingLayout.jsx";

function About() {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    { icon: Users, number: "50K+", label: "Active Learners" },
    { icon: BookOpen, number: "500+", label: "Expert Courses" },
    { icon: Award, number: "95%", label: "Success Rate" },
    { icon: Globe, number: "120+", label: "Countries" },
  ];

  const features = [
    {
      icon: Target,
      title: "Personalized Learning",
      description:
        "AI-powered recommendations tailored to your unique learning style and goals.",
    },
    {
      icon: Zap,
      title: "Interactive Experience",
      description:
        "Hands-on projects and real-world applications that make learning stick.",
    },
    {
      icon: Heart,
      title: "Community Driven",
      description:
        "Connect with peers, mentors, and industry experts in our vibrant community.",
    },
  ];

  return (
    <LandingLayout>
      <div className="relative pt-5 min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,197,253,0.1),transparent_50%)]"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168,85,247,0.1) 0%, transparent 50%)`,
          }}
        ></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            >
              <div className="w-2 h-2 bg-purple-300 rounded-full opacity-40 blur-sm"></div>
            </div>
          ))}
        </div>

        {/* Hero Section */}
        <div className="relative z-10 pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              id="hero"
              className={`text-center transform transition-all duration-1000 ${
                isVisible.hero
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
                  <div className="relative bg-white rounded-full p-4 shadow-lg border border-gray-200">
                    <GraduationCap className="w-12 h-12 text-purple-600" />
                  </div>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-gray-900">About</span>{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-gradient">
                    LearnSphere
                  </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transforming education through innovation, community, and
                personalized learning experiences
              </p>

              <div className="mt-8 flex justify-center">
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 shadow-lg">
                  <Sparkles className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700 font-medium">
                    Trusted by learners worldwide
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative z-10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              id="stats"
              className={`grid grid-cols-2 md:grid-cols-4 gap-8 transform transition-all duration-1000 delay-300 ${
                isVisible.stats
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-4">
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative bg-white rounded-full p-4 border border-gray-200 shadow-lg group-hover:shadow-xl group-hover:border-purple-300 transition-all duration-300">
                      <stat.icon className="w-8 h-8 text-purple-600 mx-auto" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              id="content"
              className={`bg-white/80 backdrop-blur-md rounded-3xl border border-gray-200 shadow-xl p-8 md:p-12 transform transition-all duration-1000 delay-500 ${
                isVisible.content
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  LearnSphere goes beyond traditional learning by blending
                  cutting-edge technology with personalized experiences. Whether
                  you're mastering new skills, enhancing your career, or
                  exploring your passions, our platform provides flexible,
                  self-paced learning options that adapt to your lifestyle.
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-12">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Our Mission
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      To foster a vibrant learning community where
                      knowledge-sharing thrives. We provide structured learning
                      paths, live mentoring from industry experts, and
                      collaborative projects that bridge the gap between theory
                      and practice.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Our Vision
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      To make education accessible, flexible, and impactful for
                      learners worldwide. We believe learning should be an
                      exciting journey of discovery, not just a task to
                      complete.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  From beginner-friendly courses to advanced certifications,
                  LearnSphere caters to learners at every stage. Our platform
                  features expert-led lessons, hands-on projects, and globally
                  recognized certifications, ensuring every learner receives a
                  practical and rewarding experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative z-10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              id="features"
              className={`transform transition-all duration-1000 delay-700 ${
                isVisible.features
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                What Makes Us Different
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="group">
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:border-purple-300 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      <div className="relative">
                        <div className="flex justify-center mb-6">
                          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-full">
                            <feature.icon className="w-8 h-8 text-purple-600" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-center leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative z-10 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              id="cta"
              className={`transform transition-all duration-1000 delay-1000 ${
                isVisible.cta
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative bg-gradient-to-r from-purple-50 to-pink-50 backdrop-blur-sm rounded-3xl p-12 border border-gray-200 shadow-xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-200 to-pink-200 rounded-3xl blur opacity-20"></div>
                <div className="relative">
                  <div className="flex justify-center mb-6">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 text-yellow-500 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Ready to Start Your Journey?
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Join thousands of learners from around the world and take
                    your education to the next level with LearnSphere!
                  </p>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Start Learning Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </LandingLayout>
  );
}

export default About;
