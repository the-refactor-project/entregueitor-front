import { AuthContext } from "@/context/auth/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Header = (): React.ReactElement => {
  const { student } = useContext(AuthContext);

  return (
    <header className="main-header">
      <h1>Entregueitor</h1>
      {!!student && (
        <nav className="main-navigation">
          <ul>
            <li>
              <Link to="/">Deliveries</Link>
            </li>
            <li>
              <Link to="/new">New delivery</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
