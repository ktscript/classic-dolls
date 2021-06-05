<template>
  <footer class="footer relative md-max:overflow-x-hidden w-full">
    <img
      class="bg-img max-w-full md-max:max-w-575 absolute bottom-0 left-0 md-max:-left-1/3"
      src="~/assets/images/podval.png"
    >
    <v-container class="mt-80">
      <v-row class="justify-end pb-50 md-max:pb-10 pt-100 md-max:pt-30">
        <img v-lazy="require('/assets/images/leon.png')" class="w-116 md-max:w-50 max-h-101 md-max:max-h-50 md-max:mr-20" alt="Леон Наталья">
      </v-row>
    </v-container>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter'
}
</script>

<style scoped>
.bg-img{
  z-index: -1;
}
</style>
