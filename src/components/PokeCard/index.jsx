import React from "react";

import PokeCardStyle from "./poke-card.module.scss";
import usePokeCard from "./poke-card.hook";

const PokeCard = ({ id: pokemonId, modalToOpen, name }) => {
  const { openModal } = usePokeCard(pokemonId, modalToOpen);

  return (
    <div className={PokeCardStyle.root} onClick={openModal}>
      <figure className={PokeCardStyle.pokemonImage}>
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`}
          alt="pokemon"
        />
      </figure>
      <p className={PokeCardStyle.title}>{name}</p>
    </div>
  );
};

export default PokeCard;
