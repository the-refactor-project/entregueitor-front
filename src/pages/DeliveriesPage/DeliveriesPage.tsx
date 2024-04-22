import DeliveriesList from "@/components/DeliveriesList";
import { Delivery } from "@/types";
import { useEffect, useState } from "react";

const DeliveriesPage = (): React.ReactElement => {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/deliveries`
      );
      const deliveriesApi = (await response.json()) as {
        deliveries: Delivery[];
      };

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
