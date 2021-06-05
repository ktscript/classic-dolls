<template>
  <v-container id="about-us" class="my-100 md-max:my-67">
    <v-row class="items-center md-max:justify-center">
      <v-col>
        <p class="text-70 tttest" style="margin-bottom:30px;">О нас</p>
        <p class="text-24 lg-max:text-24 md-max:text-center">
          Classic dolls – это первый лицензионный life-style проект в России, который базируется на сильной продающей ЭМОЦИИ – теплом чувстве ностальгии по игрушкам из детства. Прототипом образов стала кукла, изготовленная на Первом НИИ игрушек в России в 1976 году, 45 лет назад. На ее базе, впоследствии, создавались все пластиковые куклы в России.
        </p>
        <p class="text-24 lg-max:text-24 md-max:text-center">
          Мимо все более актуального ТРЕНДА на ностальгию - невозможно пройти, особенно, если ваша аудитория – МИЛЛЕНИАЛЫ
        </p>
      </v-col>
      <v-col cols="12" md="5" class="md-max:flex md-max:justify-center md-max:mt-35">
        <img v-lazy="require('/assets/images/dolls_about.png')" class="max-w-425 lg-max:max-w-full md-max:max-w-10/12 max-h-488" alt="classic-dolls">
      </v-col>
    </v-row>
    <v-row class="items-center md-max:justify-center">
      <v-col>
        <div class="bg-pale border border-dashed p-45 relative">
          <div class="text-32 md-max:text-32 p-0">
            Куклы - это главная радость девчачьего детства! С ней играли, дружили, ее воспитывали, часами одевали и причесывали, ей доверяли тайны, с ней ходили на прогулку.
  О ней мечтало 90% девочек Советского Союза. В то же время Куклы давно перестали быть просто игрушками. С ними связана целая история поколений, их коллекционируют, сочиняют песни и снимают фильмы.
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'DescAbout'
}
</script>

<style scoped>
.lg-max\:text-70 {
    font-size: 70px;
}
</style>
