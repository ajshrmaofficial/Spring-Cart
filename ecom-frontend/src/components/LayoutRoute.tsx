import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function LayoutRoute(){
  return(
    <div className="h-svh w-4/5 mx-auto">
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default LayoutRoute;
