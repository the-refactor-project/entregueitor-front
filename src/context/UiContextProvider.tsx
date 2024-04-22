import { PropsWithChildren, useMemo, useState } from "react";
import { UiContext, UiContextValue } from "./UiContext";

const UiContextProvider = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [isLoading, setIsLoading] = useState(false);

  const uiContextValue: UiContextValue = useMemo(
    () => ({
      isLoading,
      setIsLoading,
    }),
    [isLoading]
  );

  return (
    <UiContext.Provider value={uiContextValue}>{children}</UiContext.Provider>
  );
};

export default UiContextProvider;
