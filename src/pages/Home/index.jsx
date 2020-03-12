import React from "react";
import useHome from "./home.hook";
import HomeStyle from "./home.module.scss";

import HomeCardGrid from "./components/HomeCardGrid";
import PokeCard from "../../components/PokeCard";
import PokemonModal from "../../components/PokemonModal";

const HomePage = () => {
  const { pokemonsList, openModal } = useHome();
  return (
    <div className={HomeStyle.root}>
      <button onClick={() => openModal("pokemonModal")}>abrir modal</button>
      <PokemonModal modalName="pokemonModal" />
      <HomeCardGrid>
        {pokemonsList.map(({ name }, index) => (
          <PokeCard
            modalToOpen="pokemonModal"
            key={`pokeCard-${index}`}
            id={index + 1}
            name={name}
          />
        ))}
      </HomeCardGrid>
    </div>
  );
};

export default HomePage;
