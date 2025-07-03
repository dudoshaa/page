import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function MainLayout() {
  return (
    <>
      <NavBar  />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
