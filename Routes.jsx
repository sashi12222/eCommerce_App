import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./src/pages/Home";
import About from './src/pages/About';
import Contact from './src/pages/Contact';

import ProductList from "./src/pages/products/List";
import { ABOUT_ROUTE, CONTACT_ROUTE ,LOGIN_ROUTE,REGISTER_ROUTE,PRODUCT_LIST_ROUTE} from "./src/constants/routes";
import MainLayout from './src/layouts/MainLayout';
import Login from './src/pages/auth/Login';
import Register from './src/pages/auth/Register';
import Detail from './src/pages/products/Detail';


const Routes = () => {
    const router =createBrowserRouter(
        createRoutesFromElements(
            <Route element={<MainLayout/>} >
                <Route index element={<Home/>}/>
                <Route path={ABOUT_ROUTE} element={<About/>}/>
                <Route path={CONTACT_ROUTE} element={<Contact/>}/>
                <Route path={LOGIN_ROUTE} element={<Login/>}/>
                <Route path={REGISTER_ROUTE} element={<Register/>}/>

                <Route path={PRODUCT_LIST_ROUTE}>
                <Route index element={<ProductList/>}/>
                <Route path=":id" element={<Detail/>}/>

                </Route>
                
            </Route>
        )
    );
  return (<RouterProvider router={router}/>)
}

export default Routes