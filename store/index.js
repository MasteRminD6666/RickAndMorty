// state
export const state = () => ({
  items: [],
  counter: 0,
  products: [],
});

// getters
export const getters =  {
  getRickAndMorty(state) {
    return state.products;
  },
  getMorityId: (state) =>(id)=>{
    return state.products.find(product => product.id == id)
  } 
};

// actions
import axios from "axios";
export const actions = {
  getMority({ commit }) {
    //hit the api here
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      commit("addRickAndMorty", response.data.results);
    });
  },

};
// mutations
export const mutations = {
  addRickAndMorty(state, rickAndMorty) {
    state.products = rickAndMorty;
  },

};
