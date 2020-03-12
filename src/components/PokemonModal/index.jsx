import React from 'react'
import Modal from "../Modal";
import usePokemonModal from "./pokemon-card";

const PokemonModal = ({ modalName }) => {
  

  return (
    <Modal modalName={modalName}>
      <p>pokemonInfo</p>
    </Modal>
  );
};

export default PokemonModal;
