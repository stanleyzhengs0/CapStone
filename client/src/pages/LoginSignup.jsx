import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="glass w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          {isLogin ? "Welcome back" : "Create an account"}
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: auth
          }}
          className="space-y-4"
        >
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-pink-500"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-pink-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 rounded-full py-3 font-semibold text-white transition-colors"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-white/70">
          {isLogin ? "New here?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="font-medium text-pink-400 hover:text-pink-300"
          >
            {isLogin ? "Create one" : "Log in"}
          </button>
        </p>

        <p className="mt-6 text-center">
          <Link to="/" className="text-white/60 hover:text-white">
            ← Back Home
          </Link>
        </p>
      </div>
    </section>
  );
}
