<template>
  <transition :name="animationName">
    <div v-if="modalIsVisible" ref="modal" class="modal bg-white rounded-10">
      <slot />
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
import debounce from 'lodash/debounce'

export default {
  name: 'Modal',
  props: {
    animationName: {
      type: String,
      default: 'fade-in-down'
    },
    modalName: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      preventRouterGo: false
    }
  },
  computed: {
    ...mapState({
      modalIsVisible: state => state.ui.modalIsVisible,
      overlay: state => state.ui.overlay
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
  watch: {
    '$route.query.modal' () {
      if (!this.$route.query.modal) {
        this.preventRouterGo = true
        this.$store.dispatch('ui/setModal', false)
        this.$store.dispatch('ui/setOverlay', false)
        debounce(() => {
          this.currentModalName = ''
        }, 300)()
      }
    }
  },
  beforeMount () {
    this.$router.push({
      query: { ...this.$route.query, modal: 'active' }
    })
  },
  beforeDestroy () {
    if (!this.currentModalName && !this.preventRouterGo) {
      // const query = { ...this.$route.query }
      // delete query.modal
      // this.$router.push({ query })
      this.$router.go(-1)
    }
  }

}
</script>

<style scoped></style>
