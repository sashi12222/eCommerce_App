import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"


const MainLayout = () => {
  return <>
    <Navbar/>
    <Outlet />
    <h1 className="mt-30"> This is main layout</h1>
  
  </>
}

export default MainLayout