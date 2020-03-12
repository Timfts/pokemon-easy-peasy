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
    setPokemonsList: action(({pokemonList}, payload) => {
      pokemonList = payload
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
      } finally {
        
      }
    })
  },
  {
    whitelist: ["pokemonsList"]
  }
);
