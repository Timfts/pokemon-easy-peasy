import { action, thunk, computed, persist } from "easy-peasy";
import pokemonService from "../../services/pokemon";

export default persist(
  {
    // props
    pokemonsList: [],
    error: "",
    isLoading: false,

    // computed
    totalPokemons: computed(state => state.pokemonsList.length),
    // actions
    setPokemonsList: action((state, payload) => {
      state.pokemonsList = payload
    }),
    setError: action((state, error) => {
      state.error = error.message;
    }),
    //thunks
    fetchPokemonsList: thunk(async ({ setPokemonsList, setError }) => {
      try {
        const pokemonList = await pokemonService.getAllPokemons();
        setPokemonsList(pokemonList.results);
      } catch (e) {
        setError(e);
      }
    })
  },
  {
    whitelist: ["pokemonsList"]
  }
);
