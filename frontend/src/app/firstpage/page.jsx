"use client";

export default function FirstPage() {
  return (
    <div className="py-10 px-5 h-screen w-screen">
      <h1 className="text-3xl font-semibold mb-14 text-center">LOGO</h1>
      <div className="h-1/2 w-full flex justify-center">
        <img
          className="h-full w-full md:w-1/3  object-cover object-bottom  rounded-xl"
          src="/front-img.jpg"
          alt=""
        />
      </div>
      <div>
        <button className="text-xl h-16 w-full bg-orange-400 text-slate-50 rounded-full font-semibold mb-5 mt-16">
          Create an account
        </button>
        <button
          style={{ border: "1px solid rgb(148, 163, 184, 0.5)" }}
          className="text-xl h-16 w-full bg-slate-100 rounded-full font-semibold"
        >
          Log in
        </button>
      </div>
    </div>
  );
}
