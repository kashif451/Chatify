import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './pages/register';

const router=createBrowserRouter([
  {
    path:'/register',
    element: <Register/>
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/chatify',
    element: <Home/>
  },
  {
    path:'/',
    element: <h1>HELLO</h1>
  },
])

function App() {
  return (
   <>
   <div >
   <RouterProvider router={router}/>
   </div>
   </>
  );
}

export default App;
