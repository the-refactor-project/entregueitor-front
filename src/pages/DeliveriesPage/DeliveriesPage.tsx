import DeliveriesList from "@/components/DeliveriesList";
import { UiContext } from "@/context/UiContext";
import { Delivery } from "@/types";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const DeliveriesPage = (): React.ReactElement => {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [, setSearchParams] = useSearchParams();
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
  }, [setIsLoading]);

  const deleteDelivery = async (
    deliveryId: number,
    deliveryOwner: string,
    deliveryWeek: number
  ) => {
    setIsLoading(true);

    const response = await fetch(
      `${
        import.meta.env.VITE_API_URL
      }/deliveries?owner=${deliveryOwner}&week=${deliveryWeek}`,
      {
        method: "DELETE",
      }
    );

    setIsLoading(false);

    if (response.status !== 200) {
      setSearchParams({
        message: "delete-error",
        error: "",
      });
    }

    setSearchParams({
      message: "delete-ok",
    });

    setDeliveries((deliveries) =>
      deliveries.filter((delivery) => delivery.id !== deliveryId)
    );
  };

  return (
    <>
      <h2>Deliveries</h2>
      <DeliveriesList deliveries={deliveries} deleteDelivery={deleteDelivery} />
    </>
  );
};

export default DeliveriesPage;
