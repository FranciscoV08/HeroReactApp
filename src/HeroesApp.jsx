import { Outlet } from "react-router-dom";
import { AuthProvider } from "./auth/context/AuthProvider";
import { Navbar } from "./ui/components/Navbar";

export const HeroesApp = () => {
  return (
    <>
      <Navbar />
      <div className="container ">
        <Outlet />
        
      </div>
    </>
  );
};
