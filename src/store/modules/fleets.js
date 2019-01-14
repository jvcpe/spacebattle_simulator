export default {
  state: {
    selectedFleet: {},
    fleets: [
      {
        id: 0,
        name: 'Fleet n°1',
        nb_vessels: 3,
      },
      {
        id: 1,
        name: 'Fleet n°2',
        nb_vessels: 8,
      },
      {
        id: 3,
        name: 'Fleet n°3',
        nb_vessels: 5,
      },
    ],
  },
  mutations: {
    selectFleet(state, {fleet}) {
      state.selectedFleet = fleet;
    },
  },
};
