// import Home from "./components/home";
// import Input from "./components/input";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Shop from "./pages/shop";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  { path: "/page1", element: <Page1 /> },
  { path: "/page2", element: <Page2 /> },
  { path: "/shop/:id", element: <Shop /> } //ini membuat params id
]);

function App() {
  // const info = "kapan futsal"
  return (
    <div>
      <RouterProvider router={router} />

      {/* <h1>Hello world!</h1>
      <Home message="Home 2" info={info} />
      <Input label="Full Name" type="text" name="fullName" />
      <Input label="Password" type="password" name="password" /> */}
    </div>
  );
}

export default App;
