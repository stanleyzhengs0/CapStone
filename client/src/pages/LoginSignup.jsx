import React, { useState } from "react";
import { Mail, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000/api/v1/auth";

export default function LoginSignup() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("signin");
  const [formOpen, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const openForm = (m) => {
    setMode(m);
    setOpen(true);
    setMessage("");
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const url = `${API_URL}/${mode === "signin" ? "login" : "register"}`;
    const body =
      mode === "signin"
        ? { email: form.email, password: form.password }
        : form;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong");

      if (mode === "signin") {
        setMessage("Welcome back! You're logged in.");
        navigate("/");
      } else {
        setMessage("Account created — sign in with your new credentials.");
        setMode("signin");
        setOpen(false);
      }
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

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
        </div>
      </div>
      <div className="flex w-full md:w-1/2 items-center justify-center p-6 md:p-8">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-6"></div>

          <h2 className="text-center text-2xl font-display-header mb-8 capitalize">
            {mode === "signin" ? "Sign in" : "Create account"}
          </h2>

          {!formOpen ? (
            <button
              onClick={() => openForm("signin")}
              className="w-full flex items-center justify-center gap-2 border border-white/30 rounded-full py-3 hover:bg-white/10 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Continue with Email</span>
            </button>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "signup" && (
                <>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="w-full rounded-lg bg-white/10 px-4 py-3 placeholder:text-white/50 outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="w-full rounded-lg bg-white/10 px-4 py-3 placeholder:text-white/50 outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </>
              )}

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full rounded-lg bg-white/10 px-4 py-3 placeholder:text-white/50 outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full rounded-lg bg-white/10 px-4 py-3 placeholder:text-white/50 outline-none focus:ring-2 focus:ring-red-500"
                required
              />

              <button
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 rounded-full py-3 font-semibold transition disabled:opacity-60"
              >
                {loading
                  ? "Please wait…"
                  : mode === "signin"
                  ? "Log In"
                  : "Create account"}
              </button>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex items-center gap-1 text-sm text-white/60 hover:text-white"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>

              {message && (
                <p
                  className={`text-center text-sm ${
                    message.toLowerCase().includes("welcome") ||
                    message.toLowerCase().includes("account created")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          )}

          <p className="mt-6 text-center text-sm text-white/60">
            {mode === "signin" ? "Don’t have an account?" : "Already a member?"}{" "}
            <button
              onClick={() =>
                mode === "signin" ? openForm("signup") : openForm("signin")
              }
              className="text-red-400 hover:text-red-300 font-medium"
            >
              {mode === "signin" ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
