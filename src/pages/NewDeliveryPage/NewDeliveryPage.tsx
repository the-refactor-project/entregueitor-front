import { HttpAxiosClient } from "@/HttpClient/HttpAxiosClient";
import DeliveryForm from "@/components/DeliveryForm";
import { NewDeliveryData } from "@/components/DeliveryForm/types";
import useDeliveries from "@/hooks/useDeliveries";
import { useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const NewDeliveryPage = (): React.ReactElement => {
  const navigate = useNavigate();
  const [, setSearchParams] = useSearchParams();
  const httpAxiosClient = useRef(new HttpAxiosClient());
  const { createDelivery } = useDeliveries(httpAxiosClient.current);

  const onCreateDelivery = async (deliveryData: NewDeliveryData) => {
    try {
      await createDelivery({
        ...deliveryData,
        week: +deliveryData.week,
      });

      navigate("/deliveries?message=new-ok");
    } catch {
      setSearchParams({
        message: "new-error",
        error: "",
      });
    }
  };

  return (
    <>
      <h2>New delivery</h2>
      <DeliveryForm createDelivery={onCreateDelivery} />
    </>
  );
};

export default NewDeliveryPage;
