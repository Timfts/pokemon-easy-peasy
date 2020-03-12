import { makeRequest } from './http'
import { PokemonList } from '../api/schemas/pokemon'
import { GET_POKEMON_LIST } from '../api/endpoints'
import createEndpoint from '../utils/url'


export default {
  getPokemon: (id) => {
      console.log('')
  },
  getAllPokemons: async () => {
    const url = createEndpoint({
      endpoint: GET_POKEMON_LIST,
      data:{
        listLimit: 30
      }
    })
    return await makeRequest({url, schema:PokemonList})
  }
}