import { AuthContext } from "@/context/auth/AuthContext";
import { PropsWithChildren, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedPage = ({ children }: PropsWithChildren): React.ReactElement => {
  const { student } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!student) {
      navigate("/login");
    }
  }, [navigate, student]);

  return <>{children}</>;
};

export default ProtectedPage;
