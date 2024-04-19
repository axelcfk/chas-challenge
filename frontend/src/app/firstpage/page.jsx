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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

      if (!response.ok) {
        throw new Error("Couldn't fetch response");
      }

      const text = await response.text();
      setJoke(text);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="flex flex-col justify-evenly items-center bg-green-800 w-full rounded-xl md:p-20 p-10 border-solid border-1 border-slate-800">
        <h1 className="text-3xl w-full md:text-5xl pb-10 text-center font-semibold text-slate-200">
          Hi, how are you today?
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
    </div>
  );
}
