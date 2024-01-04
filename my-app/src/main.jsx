// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root.jsx";
import HomePage from "./pages/HomePage.jsx";
import SelectionSortPage from "./pages/SelectionSortPage.jsx";
import InsertionSortPage from "./pages/InsertionSortPage.jsx";
import QuickSortPage from "./pages/QuickSortPage.jsx";
import BinarySearchPage from "./pages/BinarySearchPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "searching/binary-search", element: <BinarySearchPage /> },
      { path: "sorting/selection-sort", element: <SelectionSortPage /> },
      { path: "sorting/insertion-sort", element: <InsertionSortPage /> },
      { path: "sorting/quick-sort", element: <QuickSortPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
