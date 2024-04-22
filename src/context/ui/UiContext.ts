import { createContext } from "react";

export interface UiContextValue {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const UiContext = createContext<UiContextValue>({} as UiContextValue);
