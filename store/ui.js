export const state = () => ({
  currentModalName: '',
  modalIsVisible: false,
  overlay: false,
  isLoader: false,
  currentStep: null,
  notification: {
    type: '',
    title: '',
    description: ''
  },
  galleryImages: [],
  galleryIndex: null
})

export const mutations = {
  setOverlay (state, flag) {
    state.overlay = flag
  },
  setCurrentModalName (state, name) {
    state.currentModalName = name
  },
  setModal (state, visibility) {
    state.modalIsVisible = visibility
  },
  setActiveStep (state, step) {
    state.currentStep = step
  },
  setNotification (state, notification) {
    state.notification = notification
  },
  setGallery (state, { gallery, index }) {
    state.galleryImages = gallery
    state.galleryIndex = index
  }
}

export const actions = {
  setModal ({ commit }, flag = true) {
    commit('setModal', flag)
  },
  setCurrentModalName ({ commit }, name) {
    commit('setCurrentModalName', name)
  },
  setOverlay ({ commit }, flag = true) {
    commit('setOverlay', flag)
  },
  setActiveStep ({ commit }, step) {
    commit('setActiveStep', step)
  },
  setNotification ({ commit }, { type = 'success', title = 'Операция прошла успешно', description = '' }) {
    type = ['success', 'error'].includes(type) ? type : 'success'
    commit('setNotification', { type, title, description })
  },
  setGallery ({ commit }, { gallery, index }) {
    commit('setGallery', { gallery, index })
  }
}
