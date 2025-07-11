import React, { useState } from "react";
import { Mail, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginSignup() {
  const [mode, setMode]     = useState("signin"); // "signin" | "signup"
  const [formOpen, setOpen] = useState(false);
  const openForm = (v) => { setMode(v); setOpen(true); };

  return (
    <section className="fixed inset-0 flex text-white bg-black overflow-hidden">

      <div className="hidden md:flex w-1/2 items-center justify-center p-6 md:p-8">
        <div className="relative w-full h-[80%] overflow-hidden rounded-[4rem]">
          <img
            src="https://i.imgur.com/y99rFNu.jpeg"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/10 rounded-[4rem]" />

          <div className="absolute bottom-8 left-10 z-10">
            <h1 className="text-4xl font-display-header text-red-400">
             {/* some text*/}
            </h1>
          </div>
        </div>
      </div>

      <div className="flex w-full md:w-1/2 items-center justify-center p-6 md:p-8">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90" height="90"
              viewBox="0 0 24 24" fill="none"
              stroke="#ff0000" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12a10.06 10.06 1 0 0-20 0Z" />
              <path d="M12 12v8a2 2 0 0 0 4 0" />
              <path d="M12 2v1" />
            </svg>
          </div>

          <h2 className="text-center text-2xl font-display-header mb-8 capitalize">
            {mode === "signin" ? "Sign in" : "Create account"}
          </h2>


          {!formOpen ? (
            <button
              onClick={() => openForm("signin")}
              className="w-full flex items-center justify-center gap-2
                         border border-white/30 rounded-full py-3
                         hover:bg-white/10 transition-colors">
              <Mail className="w-4 h-4" />
              <span>Continue with Email</span>
            </button>
          ) : (
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {mode === "signup" && (
                <>
                  <input
                    placeholder="First name"
                    className="w-full rounded-lg bg-white/10 px-4 py-3 placeholder:text-white/50 outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                  <input
                    placeholder="Last name"
                    className="w-full rounded-lg bg-white/10 px-4 py-3 placeholder:text-white/50 outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </>
              )}

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg bg-white/10 px-4 py-3 placeholder:text-white/50 outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-lg bg-white/10 px-4 py-3 placeholder:text-white/50 outline-none focus:ring-2 focus:ring-red-500"
                required
              />

              <button className="w-full bg-red-600 hover:bg-red-700 rounded-full py-3 font-semibold transition">
                {mode === "signin" ? "Log In" : "Create account"}
              </button>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex items-center gap-1 text-sm text-white/60 hover:text-white">
                <X className="w-4 h-4" />
                Cancel
              </button>
            </form>
          )}

          <p className="mt-6 text-center text-sm text-white/60">
            {mode === "signin" ? "Don’t have an account?" : "Already a member?"}{" "}
            <button
              onClick={() =>
                mode === "signin" ? openForm("signup") : openForm("signin")
              }
              className="text-red-400 hover:text-red-300 font-medium">
              {mode === "signin" ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
