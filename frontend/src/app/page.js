export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <div className="flex flex-col justify-evenly items-center bg-green-800 rounded-xl md:p-20 p-10 border-solid border-1 border-slate-800">
        <h1 className="text-3xl w-full md:text-5xl pb-10 text-center font-semibold text-slate-200">
          Hi, how are you today?
        </h1>
        <input
          type="text"
          className="h-24 text-2xl p-5 rounded-xl bg-slate-50 w-full"
        />
        <button className="mt-10 w-1/3 h-10 bg-slate-50 rounded-xl">
          Send
        </button>
      </div>
    </main>
  );
}
