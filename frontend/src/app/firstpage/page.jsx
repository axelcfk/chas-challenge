"use client";

import { useState } from "react";

export default function FirstPage() {
  const [joke, setJoke] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  async function fetchJoke() {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3010/joke", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error("Failed to fetch joke:", error);
      setJoke("Failed to load a joke. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
<<<<<<< HEAD
    <div className="flex flex-col justify-evenly items-center bg-green-800 w-full rounded-xl md:p-20 p-10 border-solid border-1 border-slate-800">
      <h1 className="text-3xl w-full md:text-5xl pb-10 text-center font-semibold text-slate-200">
        Want a joke?
      </h1>
      <input
        type="text"
        className="h-24 text-2xl p-5 rounded-xl bg-slate-50 w-full"
        placeholder="Ask for a joke here..."
        value={input}
        onChange={handleInputChange}
        disabled={loading}
      />
      <button
        onClick={fetchJoke}
        className="mt-10 w-1/3 h-10 bg-slate-50 rounded-xl"
        disabled={loading}
      >
        {loading ? "Loading..." : "Send"}
      </button>
      {joke && <p className="text-slate-200 mt-5 text-xl">{joke}</p>}
=======
    <div>
    <p>test/shanti</p>
      <div className="flex flex-col justify-evenly items-center bg-green-800 w-full rounded-xl md:p-20 p-10 border-solid border-1 border-slate-800">
        <h1 className="text-3xl w-full md:text-5xl pb-10 text-center font-semibold text-slate-200">
          Do you want a joke?
        </h1>
        {joke ? (
          <p className="text-slate-200 mt-5 text-xl ">{joke}</p>
        ) : (
          <input
            type="text"
            className="h-24 text-2xl p-5 rounded-xl bg-slate-50 w-full"
            placeholder="Ask for a joke here..."
            value={input}
            onChange={handleInputChange}
          />
        )}
        <button
          onClick={fetchJoke}
          className="mt-10 w-1/3 h-10 bg-slate-50 rounded-xl"
        >
          {loading ? "loading..." : "Send"}
        </button>
      </div>
>>>>>>> eb079bf0f37819f11337738009677fc6f59613d0
    </div>
  );
}
