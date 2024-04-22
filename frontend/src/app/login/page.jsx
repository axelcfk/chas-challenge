"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSignIn(e) {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3010/sessions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error("Failed to sign in");
      }

      const data = await response.json();

      if (data.token && data.userId) {
        // Kolla så  att både token och userId finns
        localStorage.setItem("token", data.token); // Lägg till token i local storage
        localStorage.setItem("userId", data.userId); // Lägg till userId i local storage
        router.push("/chatpage"); // Gå till userpage
      } else {
        throw new Error("Authentication failed, no token or userId received.");
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div className="py-10 px-5 h-screen w-screen flex flex-col justify-evenly">
      <h2 className="text-3xl font-semibold mb-14 text-center">LOGO</h2>
      <h2 className="text-2xl font-semibold text-center">Login</h2>
      <div className="flex flex-col ">
        <p className="mb-2">Email</p>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="email"
          required
          autoFocus
          placeholder="Enter your email address"
          style={{ border: "1px solid rgb(148, 163, 184, 0.5)" }}
          className="text-lg h-16 w-full bg-slate-200 rounded-xl font-semibold mb-2 px-5"
        />
        <p className="mb-2">Password</p>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          type="password"
          placeholder="Enter your password"
          style={{ border: "1px solid rgb(148, 163, 184, 0.5)" }}
          className="text-lg h-16 w-full bg-slate-200 rounded-xl font-semibold mb-8 px-5"
        />
        <button
          onClick={handleSignIn}
          style={{ border: "1px solid rgb(148, 163, 184, 0.5)" }}
          className="text-xl h-16 w-full bg-slate-50 rounded-full font-semibold"
        >
          Log in
        </button>{" "}
        <p className="underline text-sm  mt-2">Forgot password?</p>
        <div className="flex mt-10">
          <p>Don't have an account?</p>
          <a className="underline ml-2">Create one here</a>
        </div>
      </div>
      <div className=" ">
        <div className="flex justify-center items-center mt-20 mb-5">
          <p className="mr-3 font-semibold">Terms of use</p>
          <p className="ml-3 font-semibold">Privacy Policy</p>
        </div>
        <p className="text-center">2024 All rights reserved</p>
      </div>
    </div>
  );
}
