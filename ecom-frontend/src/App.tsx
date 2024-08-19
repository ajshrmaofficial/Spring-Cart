import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LayoutRoute from "./components/LayoutRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import ErrorRoute from "./components/ErrorRoute";
import ProtectedRoute from "./components/ProtectedRoute";

function App(){
  
  return(
    <Routes>
    <Route errorElement={<ErrorRoute/>}>
      <Route element={<LayoutRoute/>}>
        <Route path="/" element={<ProtectedRoute isProtected Component={Home}/>} />
        <Route path="/login" element={<ProtectedRoute isAuthRoute Component={Login}/>} />
        <Route path="/register" element={<ProtectedRoute isAuthRoute Component={Register}/>} />
      </Route>
    </Route>
    </Routes>
  )
}

// function App(){
//   return(
//     <div className="h-svh w-4/5 mx-auto">
//       <NavBar/>
//       <Outlet/>
//     </div>
//   )
// }

export default App;
