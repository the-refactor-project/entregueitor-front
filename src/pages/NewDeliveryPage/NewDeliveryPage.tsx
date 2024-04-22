import DeliveryForm from "@/components/DeliveryForm";
import { NewDeliveryData } from "@/components/DeliveryForm/types";
import { UiContext } from "@/context/UiContext";
import { useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const NewDeliveryPage = (): React.ReactElement => {
  const navigate = useNavigate();
  const [, setSearchParams] = useSearchParams();
  const { setIsLoading } = useContext(UiContext);

  const createDelivery = async (deliveryData: NewDeliveryData) => {
    setIsLoading(true);

    const response = await fetch(`${import.meta.env.VITE_API_URL}/deliveries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deliveryData),
    });

    setIsLoading(false);

    if (response.status === 201) {
      navigate("/deliveries?message=new-ok");
      return;
    }

    setSearchParams({
      message: "error",
      error: "",
    });
  };

  return (
    <>
      <h2>New delivery</h2>
      <DeliveryForm createDelivery={createDelivery} />
    </>
  );
};

export default NewDeliveryPage;
