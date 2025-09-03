import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 px-6">
      <Outlet />
    </div>
  );
};
export default MainLayout;
