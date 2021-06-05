<template>
  <div class="burger-menu">
    <button class="focus:outline-none" @click="openSidebar">
      <img src="~assets/images/icons/burger-menu.svg" alt="burger menu">
    </button>
  </div>
</template>

<script>
export default {
  name: 'BurgerMenu',
  data () {
    return {}
  },
  computed: {
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
    openSidebar () {
      this.currentModalName = 'sidebar'
      this.$nextTick(() => {
        this.$store.dispatch('ui/setModal')
        this.$store.dispatch('ui/setOverlay')
      })
    }
  }
}
</script>

<style scoped></style>
