import { useStoreState } from 'easy-peasy'
import { useEffect } from 'react'

function usePokemonModal(modalName){
  const { openModals } = useStoreState(state => state.ModalModel)

  useEffect(() => {
  // pega id da store 
  // faz o fetch do pokemon
  // roda quando inicia , não quando abre
  }, [])

  return{pokemonName:'teste'}
}

export default usePokemonModal