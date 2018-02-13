import Vue from 'vue'
import Vuex from 'vuex'
import aa from './modules/aa'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    aa
  }
})
