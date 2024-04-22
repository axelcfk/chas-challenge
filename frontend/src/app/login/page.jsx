"use client";

import Link from "next/link";

export default function Login() {
  return (
    <div className="p-10 h-screen w-screen flex flex-col justify-evenly">
      <h2 className="text-3xl font-semibold mb-14 text-center">LOGO</h2>
      <h2 className="text-2xl font-semibold text-center">Login</h2>
      <div className="flex flex-col ">
        <p className="mb-2">Email</p>
        <input
          type="email"
          placeholder="Enter your email address"
          style={{ border: "1px solid rgb(148, 163, 184, 0.5)" }}
          className="text-lg h-16 w-full bg-slate-200 rounded-xl font-semibold mb-2 px-5"
        />
        <p className="mb-2">Password</p>
        <input
          type="password"
          placeholder="Enter your password"
          style={{ border: "1px solid rgb(148, 163, 184, 0.5)" }}
          className="text-lg h-16 w-full bg-slate-200 rounded-xl font-semibold mb-8 px-5"
        />
        <button
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
