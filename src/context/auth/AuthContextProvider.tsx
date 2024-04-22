import { PropsWithChildren, useMemo, useState } from "react";
import { AuthContext, AuthContextValue } from "./AuthContext";

const AuthContextProvider = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [student, setStudent] = useState("");

  const authContextValue: AuthContextValue = useMemo(
    () => ({
      student,
      setStudent,
    }),
    [student]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
