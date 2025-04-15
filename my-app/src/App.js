
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Tripdetails from './pages/Dashboard/Tripdetails'
import BookForm from './pages/Dashboard/BookForm';
import Reviews from './pages/Dashboard/Reviews';

function App() {
  const router=createBrowserRouter([
    {path:'/',element:<Home/>},
    {path:'/login',element:<Login/>},
    {path:'/register',element:<Register/>},
    {path:'dashboard',element:<Dashboard/>},
    {path:'/details/:name',element:<Tripdetails/>},
    {path:'/bookform',element:<BookForm/>},
    {path:'/reviews',element:<Reviews/>}

  ])
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
