import { createStore } from 'vuex'
import general from './modules/general'

export default createStore({
  modules: {
    general,
  },
})
