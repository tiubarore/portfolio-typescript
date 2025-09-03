import { Outlet } from "react-router";
import Hero from "~/components/Hero";
const HomeLayout = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 px-6">
      <Hero name="Vincenzo" />
      <Outlet />
    </div>
  );
};
export default HomeLayout;
