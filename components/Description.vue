<template>
  <v-container id="about-us" class="my-100 md-max:my-67">
    <v-row class="items-center md-max:justify-center">
      <v-col>
        <p class="text-40 lg-max:text-24 md-max:text-center">
          Любовь к старым игрушкам и позитивные воспоминания с ними связанные
          стали основой для рождения нового лицензированного проекта,
          основанного на стилизованных образах кукол из 80-х
        </p>
      </v-col>
      <v-col cols="12" md="5" class="md-max:flex md-max:justify-center md-max:mt-35">
        <img v-lazy="require('/assets/images/ocherednaya.png')" class="max-w-425 lg-max:max-w-full md-max:max-w-10/12 max-h-488" alt="classic-dolls">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Description'
}
</script>

<style scoped>
</style>
