<template>
  <v-container class="my-67 md-max:my-25 lg-max:my-25">
    <v-row class="justify-center items-center">
      <v-col cols="12" md="6" class="lg-max:flex lg-max:flex-col lg-max:justify-center lg-max:items-center md-max:order-2">
        <img v-lazy="require('/assets/images/big-logo.png')" class="max-w-470 xss-max:max-w-10/12">
        <p class="text-52 lg-max:text-35 tttest">Куклы из детства</p>
        <p class="text-30 lg-max:text-20">Новый лицензированный проект</p>
      </v-col>
      <v-col cols="12" md="6" class="flex justify-center items-center lg-max:mb-35">
        <img class="md-max:max-w-10/12" src="~/assets/images/all-dolls.png" alt="dolls">
      </v-col>
    </v-row>
  </v-container>
</template>
