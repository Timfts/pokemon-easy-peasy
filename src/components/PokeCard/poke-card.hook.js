import { useStoreActions } from "easy-peasy";

function usePokeCard(pokemonId, modalToOpen) {
  const { setOpenModal } = useStoreActions(actions => actions.ModalModel);
  function openModal() {
    setOpenModal({ modalName: modalToOpen, data: { id: pokemonId } });
  }

  return {
    openModal
  };
}

export default usePokeCard;
