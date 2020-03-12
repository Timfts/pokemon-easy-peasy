import React from "react";

import PokeCardStyle from "./poke-card.module.scss";

const PokeCard = ({ id, name }) => {
  return (
    <div className={PokeCardStyle.root}>
      <figure className={PokeCardStyle.pokemonImage}>
        <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt="pokemon" />
      </figure>
      <p className={PokeCardStyle.title}>{name}</p>
    </div>
  );
};

export default PokeCard;
