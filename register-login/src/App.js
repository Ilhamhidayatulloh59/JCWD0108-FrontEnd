import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';
import { RegisterPage } from './pages/register';
import Axios from 'axios'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setValue } from './redux/userSlice';

function App() {
  const id = localStorage.getItem("id")
  const dispatch = useDispatch()
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/login", element: <LoginPage /> },
  ])

  const keepLogin = async () => {
    try {
      const { data } = await Axios.get(`http://localhost:2000/users/${id}`)
      dispatch(setValue(data))
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    keepLogin()
  },[])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
