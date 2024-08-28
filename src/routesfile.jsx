import App from './App'
import Dashboard from './pages/children-pages/dashboard'
import ErrorPage from './pages/error-page'
import Home from '@/pages/home'


export const routeConfig = [
  {
    path:'/home',
    element: <Home/> ,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
   
  },

]