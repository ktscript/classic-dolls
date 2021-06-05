export const state = () => ({
  config: {}
})

export const mutations = {
  setConfig (state, config) {
    state.config = config
  }
}

export const actions = {
  nuxtServerInit ({ commit }) {
    commit('setConfig', require('~/config/index.js'))
  }
}

export const strict = false
