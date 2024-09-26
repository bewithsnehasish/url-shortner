export default function Login() {
  return (
    <div className="mt-36 flex flex-col items-center gap-10">
      <h1 className="text-5xl font-extrabold">Login</h1>
      <div className="w-[400px]">
        <div className="flex flex-col gap-4">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Login
        </button>
      </div>
    </div>
  );
}
