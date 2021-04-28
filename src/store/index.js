import Vue from 'vue'
import Vuex from 'vuex'
import contactFormService from '../services/contactFormService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async getContactFormData(state, payload){
    const response =   await contactFormService.getContactFormData(payload);
    return response;
    }
  },
  modules: {
  }
})
