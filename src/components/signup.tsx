export default function Signup() {
  return (
    <div className="mt-36 flex flex-col items-center gap-10">
      <h1 className="text-5xl font-extrabold">Signup</h1>
      <div className="w-[400px]">
        <div className="flex flex-col gap-4">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Signup
        </button>
      </div>
    </div>
  );
}
