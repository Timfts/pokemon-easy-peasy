import { action } from 'easy-peasy'


export default {
  // properties
  openModals: {},
  // computed properties

  // actions
  setOpenModal: action(({openModals}, {modalName, data}) =>{
    openModals[modalName] = {open: true, data}
  }),

  setCloseModal: action(({openModals}, modalName) => {
    openModals = delete openModals[modalName]
  }),
  //thunks

}