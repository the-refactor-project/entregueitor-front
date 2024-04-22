import { HttpClient } from "@/HttpClient/types";
import { UiContext } from "@/context/ui/UiContext";
import { Delivery, NewDelivery } from "@/types";
import { useCallback, useContext } from "react";

const useDeliveries = (httpClient: HttpClient) => {
  const { setIsLoading } = useContext(UiContext);

  const getDeliveries = useCallback(async () => {
    setIsLoading(true);

    const deliveries = await httpClient.getDeliveries();

    setIsLoading(false);

    return deliveries;
  }, [httpClient, setIsLoading]);

  const createDelivery = useCallback(
    async (newDelivery: NewDelivery): Promise<Delivery> => {
      setIsLoading(true);

      try {
        return await httpClient.createDelivery(newDelivery);
      } catch (error) {
        throw new Error("Error on creating delivery");
      } finally {
        setIsLoading(false);
      }
    },
    [httpClient, setIsLoading]
  );

  const deleteDelivery = useCallback(
    async (owner: string, week: number): Promise<void> => {
      setIsLoading(true);

      await httpClient.deleteDelivery(owner, week);

      setIsLoading(false);
    },
    [httpClient, setIsLoading]
  );

  return {
    getDeliveries,
    createDelivery,
    deleteDelivery,
  };
};

export default useDeliveries;
