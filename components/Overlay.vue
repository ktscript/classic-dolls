<template>
  <div
    v-if="isVisible"
    class="overlay fixed inset-0 bg-black z-overlay opacity-50"
    @click.self="close"
  />
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Overlay',
  computed: {
    ...mapState({
      isVisible: state => state.ui.overlay,
      isLoader: state => state.ui.isLoader
    }),
    currentModalName: {
      get () {
        return this.$store.state.ui.currentModalName
      },
      set (value) {
        this.$store.dispatch('ui/setCurrentModalName', value)
      }
    }
  },
  methods: {
    close () {
      if (!this.isLoader) {
        this.$store.dispatch('ui/setModal', false)
        this.$store.dispatch('ui/setOverlay', false)
        this.$nextTick(() => {
          this.currentModalName = ''
        })
      }
    }
  }
}
</script>

<style scoped>
</style>
