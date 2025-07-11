import { useFetch } from "./hooks/useFetch";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

//pages
import Homee from "./pages/Homee";
import About from "./pages/About";

import MainLayout from "./layout/MainLayout";
import SingleProduct from "./pages/SingleProduct";
import Location from "./pages/Location";
import BasketList from "./pages/BasketList";
import Decoration from "./pages/Decoration";
import Sunglasses from "./pages/Sunglasses";
import MansShoes from "./pages/MansShoes";
import Womens from "./pages/Womens";
import Login from "./pages/Login";
import { ProtectedRoutes } from "./pages/ProtectedRoutes";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import SignUp from "./pages/SignUp";

function App() {
  const { user } = useContext(GlobalContext);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        { index: true, element: <Homee /> },
        { path: "/about", element: <About /> },
        { path: "/location", element: <Location /> },
        { path: "/basketList", element: <BasketList /> },
        { path: "/decoration", element: <Decoration /> },
        { path: "/sunglasses", element: <Sunglasses /> },
        { path: "/women", element: <Womens /> },
        { path: "/mensShoes", element: <MansShoes /> },
        { path: "/singleProduct/:id", element: <SingleProduct /> },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    { path: "/sign", element: user ? <Navigate to="/" /> : <SignUp /> },
  ]);

  const { data: products, loading } = useFetch(
    "https://dummyjson.com/products?limit=194"
  );
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg text-orange-500"></span>
      </div>
    );
  }

  return <RouterProvider router={routes} />;
}

export default App;
