import DeliveriesList from "@/components/DeliveriesList";
import { UiContext } from "@/context/UiContext";
import { Delivery } from "@/types";
import { useContext, useEffect, useState } from "react";

const DeliveriesPage = (): React.ReactElement => {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const { setIsLoading } = useContext(UiContext);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/deliveries`
      );
      const deliveriesApi = (await response.json()) as {
        deliveries: Delivery[];
      };

      setIsLoading(false);

      setDeliveries(deliveriesApi.deliveries);
    })();
  }, []);

  return (
    <>
      <h2>Deliveries</h2>
      <DeliveriesList deliveries={deliveries} />
    </>
  );
};

export default DeliveriesPage;
