import { AuthContext } from "@/context/auth/AuthContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = (): React.ReactElement => {
  const { student, setStudent } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (student) {
      navigate("/deliveries");
    }
  }, [navigate, student]);

  const setStudentName = (studentName: string) => {
    setStudent(studentName);
  };

  return (
    <>
      <h2>¿Quién eres?</h2>
      <div className="login">
        <button className="button" onClick={() => setStudentName("Alexis")}>
          Alexis
        </button>
        <button className="button" onClick={() => setStudentName("Guillem")}>
          Guillem
        </button>
      </div>
    </>
  );
};

export default LoginPage;
