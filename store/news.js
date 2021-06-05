import { getApiUrl } from '~/helpers/helper'

export const state = () => ({
  list: [],
  readingNews: null
})

export const mutations = {
  setNews (state, news) {
    state.list = news
  },
  setReadingNews (state, news) {
    state.readingNews = news
  }
}

export const actions = {
  loadNews ({ commit, rootState }) {
    const requestOptions = {
      url: `${getApiUrl(rootState.config)}${rootState.config.news.list}`,
      method: 'GET'
    }
    this.$axios(requestOptions).then((result) => {
      if (result.status === 200) {
        commit('setNews', result.data)
      }
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
  },
  setReadingNews ({ commit }, news) {
    commit('setReadingNews', news)
  }
}
