import { Link, Outlet, useSearchParams } from "react-router-dom";
import Modal from "../Modal";
import Loading from "../Loading";
import { useContext } from "react";
import { UiContext } from "@/context/UiContext";

const App = (): React.ReactElement => {
  const [searchParams] = useSearchParams();
  const { isLoading } = useContext(UiContext);

  return (
    <>
      <div className="container">
        <header className="main-header">
          <h1>Entregueitor</h1>
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
        </header>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
      {isLoading && <Loading />}
      {searchParams.has("message") && (
        <Modal
          code={searchParams.get("message")!}
          isError={searchParams.has("error")}
        />
      )}
    </>
  );
};

export default App;
