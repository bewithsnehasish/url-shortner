import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main>
        {/* Header */}
        {/* Content */}
        <Outlet />
      </main>
      {/* Footer */}
    </div>
  );
};

export default AppLayout;
