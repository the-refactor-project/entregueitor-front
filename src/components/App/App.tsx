import { Outlet } from "react-router-dom";

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <header className="main-header">
        <h1>Entregueitor</h1>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
