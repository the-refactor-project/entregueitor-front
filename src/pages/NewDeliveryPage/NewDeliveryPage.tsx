import DeliveryForm from "@/components/DeliveryForm";
import { NewDeliveryData } from "@/components/DeliveryForm/types";
import { useNavigate, useSearchParams } from "react-router-dom";

const NewDeliveryPage = (): React.ReactElement => {
  const navigate = useNavigate();
  const [, setSearchParams] = useSearchParams();

  const createDelivery = async (deliveryData: NewDeliveryData) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/deliveries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deliveryData),
    });

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
