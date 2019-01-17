export default {
  state: {
    ships: [],
  },
  mutations: {
    addShip(state, newShip) {
      state.ships.push(newShip);
    },
  },
};
