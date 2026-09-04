import React, { useState } from "react";
import api from "../../api/axios";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await api.post("/auth/register", formData);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("userName", response.data.name);
      localStorage.setItem("userEmail", response.data.email);

      // Open dashboard application
      window.location.href = `http://localhost:3001?token=${encodeURIComponent(
        response.data.token
      )}`;
    } catch (error) {
      const message =
        error.response?.data?.error ||
        "Registration failed. Please try again.";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-70px)] bg-[#fafafa] flex items-center justify-center px-4 py-12">
      
      {/* Signup Card */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-sm px-8 py-10">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-medium text-gray-800 mb-2">
            Create your InvestX account
          </h1>

          <p className="text-sm text-gray-500 leading-relaxed">
            Start investing with a simple and secure
            trading platform.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-800 outline-none transition focus:border-[#387ed1] focus:ring-2 focus:ring-[#387ed1]/10"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-800 outline-none transition focus:border-[#387ed1] focus:ring-2 focus:ring-[#387ed1]/10"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
              minLength={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-800 outline-none transition focus:border-[#387ed1] focus:ring-2 focus:ring-[#387ed1]/10"
            />

            <p className="text-xs text-gray-400 mt-2">
              Password must be at least 6 characters.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="px-3 py-2.5 rounded-md bg-red-50 border border-red-200 text-red-600 text-sm">
              {error}
            </div>
          )}

          {/* Signup Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md text-sm font-medium text-white transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#387ed1] hover:bg-[#2f6fba] cursor-pointer"
            }`}
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-7 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-[#387ed1] font-medium hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;