import React from "react";
import useHome from "./home.hook";
import HomeStyle from "./home.module.scss";

import HomeCardGrid from "./components/HomeCardGrid";
import PokeCard from "../../components/PokeCard";
import Modal from "../../components/Modal";

const HomePage = () => {
  const { pokemonsList, openModal } = useHome();
  return (
    <div className={HomeStyle.root}>
      <button onClick={() => openModal("modalTeste")}>abrir modal</button>
      <Modal modalName="modalTeste">
        <p>teste</p>
      </Modal>
      <HomeCardGrid>
        {pokemonsList.map(({ name }, index) => (
          <PokeCard key={`pokeCard-${index}`} id={index + 1} name={name} />
        ))}
      </HomeCardGrid>
    </div>
  );
};

export default HomePage;
