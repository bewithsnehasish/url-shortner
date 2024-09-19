import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Outlet />
        {/* header */}
      </main>
      <div className="p-10 text-center bg-gray-800 ">
        Made with Love by Snehasish Mandal
      </div>
    </div>
  );
};

export default AppLayout;
