import { Outlet, useSearchParams } from "react-router-dom";
import Modal from "../Modal";
import Loading from "../Loading";
import { useContext } from "react";
import { UiContext } from "@/context/ui/UiContext";
import Header from "../Header";

const App = (): React.ReactElement => {
  const [searchParams] = useSearchParams();
  const { isLoading } = useContext(UiContext);

  return (
    <>
      <div className="container">
        <Header />
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
