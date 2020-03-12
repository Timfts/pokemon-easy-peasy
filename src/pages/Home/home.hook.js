import { useEffect } from "react";
import { PokemonList as schema } from "../../api/schemas/pokemon";
import { useStoreActions, action } from "easy-peasy";

function useHome() {
  const getPokemons = useStoreActions(
    actions => !console.log(actions) && actions.PokemonModel.fetchPokemonsList
  );

  useEffect(() => {
    getPokemons()
    /*     const response = {
      count: 5,
      results: [
        {
          name: "teste",
          url: "teste"
        }
      ]
    };
    const test = schema.cast(response, { stripUnknown: true });
    console.log(test); */
  }, []);

  return {
    name: "teste"
  };
}

export default useHome;
