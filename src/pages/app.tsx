import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfirmTrip } from "./confirm-trip";
import { TripDetails } from "./trip-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ConfirmTrip />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetails />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
