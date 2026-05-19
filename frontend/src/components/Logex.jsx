import {
  Eye,
  EyeOff,
  Mail,
  Lock,
} from "lucide-react";

import {useState} from 'react';

export function Logex() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Glass Card */}
      <div className="relative w-full max-w-md rounded-3xl border border-white/30 bg-white/10 backdrop-blur-xl shadow-2xl p-8 text-white">
        <h1 className="text-4xl font-bold text-center mb-10">Login</h1>

        {/* Email */}
        <div className="relative mb-6">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 w-5 h-5" />

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border-b border-white/50 pl-10 pb-3 pt-2 outline-none placeholder:text-white/70 focus:border-white"
          />
        </div>

        {/* Password */}
        <div className="relative mb-6">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 w-5 h-5" />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full bg-transparent border-b border-white/50 pl-10 pr-10 pb-3 pt-2 outline-none placeholder:text-white/70 focus:border-white"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Remember / Forgot */}
        <div className="flex items-center justify-between text-sm mb-8 text-white/80">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-white" />
            Remember me
          </label>

          <button className="hover:text-white transition">
            Forgot Password?
          </button>
        </div>

        {/* Button */}
        <button className="w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-gray-200 transition duration-300 shadow-lg">
          Login
        </button>

        {/* Register */}
        <p className="text-center text-sm text-white/80 mt-8">
          Don&apos;t have an account?{" "}
          <span className="text-white font-semibold cursor-pointer hover:underline">
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Logex