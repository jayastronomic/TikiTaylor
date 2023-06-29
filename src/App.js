import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Home";
import Reservation from "./pages/Reservation";
import AdminLogin from "./pages/AdminLogin";
import Guests from "./pages/Guests";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
        <Route path="/login" element={<AdminLogin />}></Route>
        <Route path="/RSVP_List" element={<Guests />}></Route>
      </Route>
    )
  );

  return (
    <div className="h-full">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

const Root = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
