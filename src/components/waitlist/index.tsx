"use client";

import { useState } from "react";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setMessage("Thank you for joining the waitlist!");
        setEmail("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="waitlist" className="py-20 md:py-[120px]">
      <div className="container px-4">
        <div className="text-center">
          <h2 className="mb-6 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
            Join Our Waitlist
          </h2>
          <p className="mb-12 text-base leading-relaxed text-body-color dark:text-dark-6">
            Enter your email to be notified when we launch.
          </p>
          <form onSubmit={handleSubmit} className="max-w-[500px] mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-primary text-white rounded-md"
            >
              Join Waitlist
            </button>
          </form>
          {message && <p className="mt-4 text-green-500">{message}</p>}
        </div>
      </div>
    </section>
  );
};

export default Waitlist;