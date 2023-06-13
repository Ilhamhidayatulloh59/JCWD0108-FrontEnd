import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Chat } from './pages/chat';
import { List } from './pages/list';
import { LoginForm } from "./pages/login";

const router = createBrowserRouter([
  { path : "/", element: <Chat /> },
  { path : "/list", element: <List />},
  { path : "/login", element: <LoginForm />},
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
