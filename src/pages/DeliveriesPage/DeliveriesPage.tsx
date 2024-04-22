import { HttpAxiosClient } from "@/HttpClient/HttpAxiosClient";
import DeliveriesList from "@/components/DeliveriesList";
import { UiContext } from "@/context/UiContext";
import useDeliveries from "@/hooks/useDeliveries";
import { Delivery } from "@/types";
import { useContext, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

const DeliveriesPage = (): React.ReactElement => {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [, setSearchParams] = useSearchParams();
  const { setIsLoading } = useContext(UiContext);
  const httpAxiosClient = useRef(new HttpAxiosClient());
  const { getDeliveries } = useDeliveries(httpAxiosClient.current);

  useEffect(() => {
    (async () => {
      const deliveries = await getDeliveries();

      setDeliveries(deliveries);
    })();
  }, [getDeliveries]);

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
