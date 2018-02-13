// initial state
const state = {
  count: 99
}

// getters
const getters = {
  count: state => state.count
}

// actions
// const actions = {
//   getAllProducts ({ commit }) {
//     shop.getProducts(products => {
//       commit('setProducts', products)
//     })
//   }
// }

// mutations
const mutations = {
  increment (state) {
    state.count++
  }
}

export default {
  state,
  getters,
  // actions,
  mutations
}
