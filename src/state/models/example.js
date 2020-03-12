import { action, thunk, computed } from "easy-peasy";


export default {
  // properties
  user: null,
  items: {},

  // computed properties
  isLoggedIn: computed(state => state.user !== null),
  // actions
  // modify state handlers

  saved: action((state, payload) => {
    state.items[payload.id] = payload;
  }),

  //thunks
  // use service to make the requests and update the state
  save: thunk(async (actions, payload) => {
    const todo = await mockService.saveTodo(payload);
    actions.saved(todo);
  })
};
