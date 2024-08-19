import { Link } from "react-router-dom";
import { useAuth } from "../utility/AuthContext";

function NavItem({
  isLoggedIn,
  path,
  name,
}: {
  isLoggedIn: boolean;
  path: string;
  name: string;
}): React.JSX.Element {
  const { logout } = useAuth();
  return (
    <>
      {isLoggedIn && (
        <li className="cursor-pointer font-semibold hover:font-bold">
          {name !== "Logout" && (
            <Link className="active:font-bold" to={path}>
              {name}
            </Link>
          )}
          {name === "Logout" && (
            <button className="active:font-bold hover:border-red-800 border border-red-600 p-1 rounded" type="button" onClick={logout}>
              {name}
            </button>
          )}
        </li>
      )}
    </>
  );
}

function NavBar(): React.JSX.Element {
  const { isLoggedIn } = useAuth();
  const navBarElements = [
    { name: "Home", path: "/", secured: true },
    { name: "Login", path: "/login", secured: false },
    { name: "Logout", path: "", secured: true },
    { name: "Register", path: "/register", secured: false },
  ];

  return (
    <nav className="flex justify-between p-3">
      <h2 className="font-bold">SpringECom</h2>
      <ul className="flex gap-4 items-center">
        {navBarElements.map((navBarElement) => (
          <NavItem
            key={navBarElement.name}
            isLoggedIn={navBarElement.secured ? isLoggedIn : !isLoggedIn}
            path={navBarElement.path}
            name={navBarElement.name}
          />
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
