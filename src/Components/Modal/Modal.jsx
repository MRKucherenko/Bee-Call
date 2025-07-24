import { useEffect } from "react";
import * as CS from "./modal.styled";
import { IoClose } from "react-icons/io5";

export const Modal = ({ children, toggleModal }) => {
  useEffect(() => {
    const closeByEsc = (event) => {
      if (event.code === "Escape") {
        toggleModal();
      }
    };
    window.addEventListener("keydown", closeByEsc);
    return () => {
      window.removeEventListener("keydown", closeByEsc);
    };
  }, []);

  const closeByClick = (event) => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  return (
    <CS.Overlay onClick={closeByClick}>
      <CS.InnerModal>
        {children}
        <CS.CloseButton onClick={toggleModal} type="button">
          <IoClose />
        </CS.CloseButton>
      </CS.InnerModal>
    </CS.Overlay>
  );
};
