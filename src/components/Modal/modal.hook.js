import { useState, useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

function useModalComponent(modalName) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { openModals } = useStoreState(state => state.ModalModel);
  const { setCloseModal } = useStoreActions(actions => actions.ModalModel);

  useEffect(() => {
    if (openModals[modalName]) {
      setIsModalOpen(true);
    }
  }, [openModals]);

  function closeModal() {
    setCloseModal(modalName);
    setIsModalOpen(false);
  }

  return {
    isModalOpen,
    closeModal
  };
}

export default useModalComponent;
