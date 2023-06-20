import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { lazy } from "react";

import Root from "./pages/Root";

const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const Team = lazy(() => import("./scenes/team/Team"));
const Contacts = lazy(() => import("./scenes/contacts/Contacts"));
const Dashboard = lazy(() => import("./scenes/dashboard/dashboard"));
const Invoices = lazy(() => import("./scenes/invoices/Invoices"));
const Form = lazy(() => import("./scenes/form/form"));
const Calendar = lazy(() => import("./scenes/calendar/Calendar"));
const FAQ = lazy(() => import("./scenes/faq/Faq"));
const Bar = lazy(() => import("./scenes/bar/Bar"));
const Pie = lazy(() => import("./scenes/pie/Pie"));
const Line = lazy(() => import("./scenes/line/Line"));
const Geography = lazy(() => import("./scenes/geography/Geography"));

const LoadingMessage = <h1>"Loading Please Wiat... "</h1>;
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <Suspense fallback={LoadingMessage}>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={LoadingMessage}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "Team",
        element: (
          <Suspense fallback={LoadingMessage}>
            <Team />
          </Suspense>
        ),
      },
      {
        path: "contacts",
        element: (
          <Suspense fallback={LoadingMessage}>
            <Contacts />
          </Suspense>
        ),
      },

      {
        path: "invoices",
        element: (
          <Suspense fallback={LoadingMessage}>
            <Invoices />
          </Suspense>
        ),
      },
      {
        path: "/form",
        element: (
          <Suspense fallback={LoadingMessage}>
            <Form />
          </Suspense>
        ),
      },
      {
        path: "calendar",
        element: (
          <Suspense fallback={LoadingMessage}>
            <Calendar />
          </Suspense>
        ),
      },
      {
        path: "faq",
        element: (
          <Suspense fallback={LoadingMessage}>
            <FAQ />
          </Suspense>
        ),
      },
      {
        path: "bar",
        element: (
          <Suspense fallback={LoadingMessage}>
            <Bar />
          </Suspense>
        ),
      },
      {
        path: "pie",
        element: (
          <Suspense fallback={LoadingMessage}>
            <Pie />
          </Suspense>
        ),
      },
      {
        path: "line",
        element: (
          <Suspense fallback={LoadingMessage}>
            <Line />
          </Suspense>
        ),
      },
      {
        path: "geography",
        element: (
          <Suspense fallback={LoadingMessage}>
            <Geography />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
