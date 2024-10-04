import {React, lazy, Suspense} from 'react'
import style from "./App.module.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RouterProvider } from "react-router";
const  Layout = lazy(()=> import('./components/Layout/Layout')); 
const  ErrorPage = lazy(()=> import('./ErrorPage/ErrorPage')); 
const  Home = lazy(()=> import('./components/Home/Home')); 
const Products = lazy(() => import('./components/Products/Products'));

const ProductDesc = lazy(() => import('./components/Products/ProductDesc'));

const ProductsLayout = lazy(() => import('./components/Products/ProductsLayout'));

const HelpLayout = lazy(() => import('./components/Help/HelpLayout'));

const About = lazy(() => import('./components/About/About'));

const UserLogin = lazy(() => import('./Login/UserLogin'));

const AdminDashboard = lazy(() => import('./components/Profile/AdminDashboard'));

const DashboardLayout = lazy(() => import('./components/Profile/DashboardLayout'));

const CreateProduct = lazy(() => import('./components/Profile/CreateProduct'));

const LoginLayout = lazy(() => import('./Login/LoginLayout'));

function App() {
  if (!sessionStorage["isLoggedIn"] && !sessionStorage["userName"]) {
    sessionStorage.setItem("isLoggedIn", false);
    sessionStorage.setItem("userName", "");
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Suspense fallback="loading..."><Layout /></Suspense>}>
        <Route index element={<Suspense fallback="loading..."><Home /></Suspense>} />
        <Route path="/products" element={<Suspense fallback="loading..."><ProductsLayout /></Suspense>}>
          <Route index element={<Suspense fallback="loading..."><Products /></Suspense>}></Route>
          <Route path=":id" element={<Suspense fallback="loading..."><ProductDesc /></Suspense>}></Route>
        </Route>
        <Route path="/help" element={<Suspense fallback="loading..."><HelpLayout /></Suspense>} />
        <Route path="about" element={<Suspense fallback="loading..."><About /></Suspense>} />
        <Route path="auth" element={<Suspense fallback="loading..."><LoginLayout /></Suspense>}>
          <Route path="login" element={<Suspense fallback="loading..."><UserLogin/></Suspense>} />
          <Route path="signup" element={<Suspense fallback="loading..."><UserLogin/></Suspense>} />
        </Route>
        <Route path="admin-dashboard" element={<Suspense fallback="loading..."><DashboardLayout /></Suspense>}>
          <Route index element={<Suspense fallback="loading..."><AdminDashboard /></Suspense>} />
          <Route path="create-product" element={<Suspense fallback="loading..."><CreateProduct /></Suspense>} />
        </Route>
        <Route path="*" element={<Suspense fallback="loading..."><ErrorPage /></Suspense>} />
      </Route>
    )
  );
  return (
    <div className={style["app-container"]}>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
