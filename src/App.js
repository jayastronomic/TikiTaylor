import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />}></Route>
      </Route>
    )
  );

  return (
    <div style={{ height: "100%" }}>
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
