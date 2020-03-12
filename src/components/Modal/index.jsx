import React from "react";
import { createPortal } from "react-dom";

import useModalComponent from "./modal.hook";
import ModalStyle from "./modal.module.scss";

const Modal = ({ children, modalName }) => {
  const { isModalOpen, closeModal } = useModalComponent(modalName);

  const InnerModal = isModalOpen && (
    <div className={ModalStyle.root}>
      <div className={ModalStyle.header}>
        <button className={ModalStyle.close} onClick={closeModal}>
          Fechar
        </button>
      </div>
      {children}
    </div>
  );

  return createPortal(InnerModal, document.querySelector("#modal-context"));
};

export default Modal;
