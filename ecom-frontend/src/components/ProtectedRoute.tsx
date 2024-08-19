import { Navigate } from "react-router-dom";
import { useAuth } from "../utility/AuthContext"

type ProtectedRoutePropsType = {
  Component: ()=>React.JSX.Element, 
  isProtected?: boolean | undefined, 
  isAuthRoute?: boolean | undefined
}

function ProtectedRoute({Component, isProtected, isAuthRoute}: ProtectedRoutePropsType): React.JSX.Element{
    const {isLoggedIn} = useAuth();
    
  if (!isLoggedIn && isAuthRoute)
    return <Component/>;
  
  if(isLoggedIn && isAuthRoute)
    return <Navigate to={'/'}/>

    if(!isLoggedIn && isProtected)
      return <Navigate to={'/login'}/>
    
  return <Component/>;
}

export default ProtectedRoute;
