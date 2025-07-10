import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Shield,
  Chrome,
} from "lucide-react";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    cpassword: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordc, setShowPasswordc] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [focusedFieldc, setFocusedFieldc] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Check password match
    if (formData.password !== formData.cpassword) {
      alert("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      alert("Account created successfully!");
      setFormData({
        email: "",
        password: "",
        cpassword: "",
        rememberMe: false,
      });
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleOAuthLogin = (provider) => {
    alert(`Redirecting to ${provider} OAuth...`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-violet-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse delay-75"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-150"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 md:p-10 shadow-black/10">
          <h1 className="text-center text-l md:text-2xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-gradient">
              LearnSphere
            </span>
          </h1>

          {/* OAuth */}
          <div className="space-y-4 mb-8">
            <button
              onClick={() => handleOAuthLogin("Google")}
              className="group relative w-full bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 font-medium py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gray-200/50 overflow-hidden"
            >
              <div className="flex items-center justify-center gap-3">
                <Chrome className="w-6 h-6 text-gray-700" />
                <span className="text-gray-700 font-semibold">
                  Continue with Google
                </span>
              </div>
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-6 bg-white text-gray-500 font-medium">
                Or sign up with email
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="group">
              <label className="block text-gray-800 font-semibold mb-3 text-sm">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                    focusedField === "email" ? "text-blue-500" : "text-gray-400"
                  }`}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl pl-12 pr-4 py-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-gray-200/50"
                />
              </div>
            </div>

            {/* Password */}
            <div className="group">
              <label className="block text-gray-800 font-semibold mb-3 text-sm">
                Password
              </label>
              <div className="relative">
                <Lock
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                    focusedField === "password"
                      ? "text-blue-500"
                      : "text-gray-400"
                  }`}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your password"
                  required
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl pl-12 pr-12 py-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-gray-200/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="group">
              <label className="block text-gray-800 font-semibold mb-3 text-sm">
                Confirm Password
              </label>
              <div className="relative">
                <Lock
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                    focusedFieldc === "cpassword"
                      ? "text-blue-500"
                      : "text-gray-400"
                  }`}
                />
                <input
                  type={showPasswordc ? "text" : "password"}
                  name="cpassword"
                  value={formData.cpassword}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedFieldc("cpassword")}
                  onBlur={() => setFocusedFieldc(null)}
                  placeholder="Confirm your password"
                  required
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl pl-12 pr-12 py-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-gray-200/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPasswordc(!showPasswordc)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500"
                >
                  {showPasswordc ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mt-1"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to the{" "}
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-violet-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-3">
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <>
                    <span>Create Account</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </div>
            </button>
          </form>

          {/* Sign In Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?
              <button className="ml-2 text-violet-600 hover:text-violet-800 font-semibold hover:underline">
                Sign In
              </button>
            </p>
          </div>

          {/* Security Note */}
          <div className="mt-8 flex items-center justify-center gap-2 text-gray-500">
            <Shield className="w-4 h-4" />
            <span className="text-xs">
              Your information is secure and encrypted
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
