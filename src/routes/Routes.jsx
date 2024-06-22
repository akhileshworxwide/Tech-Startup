import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Gateway = lazy(() => import("./Gateway"));
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Blog = lazy(() => import("../pages/Blog"));

const Routes = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Gateway />
      </Suspense>
    ),
    path: "/",
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/blog",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Blog />
          </Suspense>
        ),
      },
    ],
  },
]);

export default Routes;
