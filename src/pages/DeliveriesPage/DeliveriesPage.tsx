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
  const { getDeliveries, deleteDelivery } = useDeliveries(
    httpAxiosClient.current
  );

  useEffect(() => {
    (async () => {
      const deliveries = await getDeliveries();

      setDeliveries(deliveries);
    })();
  }, [getDeliveries]);

  const onDeleteDelivery = async (
    deliveryId: number,
    deliveryOwner: string,
    deliveryWeek: number
  ) => {
    setIsLoading(true);

    try {
      deleteDelivery(deliveryOwner, deliveryWeek);

      setSearchParams({
        message: "delete-ok",
      });

      setDeliveries((deliveries) =>
        deliveries.filter((delivery) => delivery.id !== deliveryId)
      );
    } catch (error) {
      setSearchParams({
        message: "delete-error",
        error: "",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h2>Deliveries</h2>
      <DeliveriesList
        deliveries={deliveries}
        deleteDelivery={onDeleteDelivery}
      />
    </>
  );
};

export default DeliveriesPage;
