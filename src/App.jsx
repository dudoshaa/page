import { useFetch } from "./hooks/useFetch";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import Homee from "./pages/Homee";
import About from "./pages/About";
import Contact from "./pages/Contact";

import MainLayout from "./layout/MainLayout";
import SingleProduct from "./pages/SingleProduct";
import Location from "./pages/Location";
import BasketList from "./pages/BasketList";
import Decoration from "./pages/Decoration";
import Sunglasses from "./pages/Sunglasses";
import MansShoes from "./pages/MansShoes";
import Womens from "./pages/Womens";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Homee /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/location", element: <Location /> },
        { path: "/basketList", element: <BasketList /> },
        { path: "/decoration", element: <Decoration /> },
        { path: "/sunglasses", element: <Sunglasses /> },
        { path: "/women", element: <Womens /> },
        { path: "/mensShoes", element: <MansShoes /> },
        { path: "/singleProduct/:id", element: <SingleProduct /> },
      ],
    },
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
