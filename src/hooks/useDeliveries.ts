import { HttpClient } from "@/HttpClient/types";
import { UiContext } from "@/context/UiContext";
import { useCallback, useContext } from "react";

const useDeliveries = (httpClient: HttpClient) => {
  const { setIsLoading } = useContext(UiContext);

  const getDeliveries = useCallback(async () => {
    setIsLoading(true);

    const deliveries = await httpClient.getDeliveries();

    setIsLoading(false);

    return deliveries;
  }, [httpClient, setIsLoading]);

  return {
    getDeliveries,
  };
};

export default useDeliveries;
