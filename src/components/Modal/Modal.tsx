import { useEffect } from "react";
import "./Modal.css";
import { useSearchParams } from "react-router-dom";

interface ModalProps {
  code: string;
  isError?: boolean;
}

const Modal = ({ code, isError = false }: ModalProps): React.ReactElement => {
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    setTimeout(() => {
      setSearchParams({});
    }, 1000);
  });

  let message: string;

  switch (code) {
    case "new-ok":
      message = "Successfully delivered";
      break;
    case "error":
      message = "Error on delivery";
      break;
    default:
      message = "";
  }

  return (
    <div className={`modal${isError ? " modal--error" : ""}`}>
      <div className="modal__text">{message}</div>
    </div>
  );
};

export default Modal;
