/* eslint-disable @typescript-eslint/no-unused-vars */
import Home from "./components/Homepage/Home";
import { Hero } from "./components/HeroFolder/Hero";
import { Tables } from "./components/Tables/Tables";
import { Chair } from "./components/Chair/Chair";
import { Dining } from "./components/Dining/Dining";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import {library} from "@fortawesome/fontawesome-svg-core"
// import {faw} from "@fortawesome/fontawesome-svg-core"
// library.add(faBars)

function App() {
  const route = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/dining", element: <Dining /> },
    {path: "/tables", element: <Tables />},
    {path: "/chair", element: <Chair/>}
  ]);
  return <RouterProvider router={route} />;
}

export default App;
