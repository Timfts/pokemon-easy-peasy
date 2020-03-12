import { useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

function useHome() {
  const { PokemonModel, ModalModel } = useStoreActions(actions => actions);
  const { fetchPokemonsList } = PokemonModel;
  const { setOpenModal } = ModalModel

  const { pokemonsList } = useStoreState(state => state.PokemonModel);

  useEffect(() => {
    fetchPokemonsList();
  }, []);

  function openModal(modalName){
    setOpenModal({modalName})
  }

  return {
    name: "teste",
    pokemonsList,
    openModal
  };
}

export default useHome;
