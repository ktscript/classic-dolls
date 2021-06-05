<template>
  <div class="header w-full border-b border-solid border-palePink">
    <img class="zanaves" src="~/assets/images/zanaves.png" alt="zanaves">
    <v-container class="navbar mt-40 md-max:mt-0">
      <v-row class="py-30 md-max:py-20 w-full justify-between items-center px-80 mobile-max:px-20">
        <span class="max-w-167 md-max:max-w-148 mr-10">
          <img src="@/assets/images/logo.png" alt="Classic Dolls">
        </span>
        <ul class="lg-max:hidden flex justify-end items-center">
          <template v-for="item in links">
            <li :key="item.title" class="ml-20 xlg:ml-40">
              <NuxtLink v-if="item.link" :to="item.link" class="text-24 hover:text-palePink">
                {{ item.title }}
              </NuxtLink>
              <div v-else class="text-24 hover:text-palePink cursor-pointer" @click="scrollTo(item.scrollToId)">
                {{ item.title }}
              </div>
            </li>
          </template>
        </ul>
        <burger-menu class="hidden lg-max:block" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BurgerMenu from './BurgerMenu'

export default {
  name: 'MainHeader',
  components: {
    BurgerMenu
  },
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  methods: {
    scrollTo (id) {
      const elem = document.getElementById(id)
      if (elem) {
        const elOffsetTop = elem.offsetTop
        window.scrollTo({ top: elOffsetTop - 120, behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
  .zanaves {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
  }
  .navbar {
    @apply py-15 flex items-center justify-between;
    @screen xss-max {
      @apply pr-55;
    }
  }
</style>
