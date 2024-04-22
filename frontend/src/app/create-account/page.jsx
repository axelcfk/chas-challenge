"use client";

import Link from "next/link";

export default function CreateAccount() {
  return (
    <div className="py-10 px-5 h-screen w-screen flex flex-col justify-evenly">
      <h2 className="text-3xl font-semibold mb-14 text-center">LOGO</h2>
      <h2 className="text-2xl font-semibold ">Create an account</h2>
      <div className="flex flex-col ">
        <p className="mb-2">Email</p>
        <input
          type="email"
          placeholder="Enter email address"
          style={{ border: "1px solid rgb(148, 163, 184, 0.5)" }}
          className="text-lg h-16 w-full bg-slate-200 rounded-xl font-semibold mb-2 px-5"
        />
        <p className="mb-2">Password</p>
        <input
          type="password"
          placeholder="Enter password"
          style={{ border: "1px solid rgb(148, 163, 184, 0.5)" }}
          className="text-lg h-16 w-full bg-slate-200 rounded-xl font-semibold mb-8 px-5"
        />
        <button
          style={{ border: "1px solid rgb(148, 163, 184, 0.5)" }}
          className="text-xl h-16 w-full bg-slate-50 rounded-full font-semibold"
        >
          Log in
        </button>{" "}
        <button
          style={{ border: "1px solid rgb(148, 163, 184, 0.5)" }}
          className="text-xl h-16 w-full bg-slate-50 rounded-full font-semibold mt-4"
        >
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="-3 0 262 262"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                fill="#4285F4"
              />
              <path
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                fill="#34A853"
              />
              <path
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                fill="#FBBC05"
              />
              <path
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                fill="#EB4335"
              />
            </svg>
            <span className="ml-4">Continue with Google</span>
          </div>
        </button>{" "}
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
