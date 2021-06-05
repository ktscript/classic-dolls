<template>
  <v-container id="about-us" class="my-100 md-max:my-67">
    <v-row class="items-center md-max:justify-center">
      <v-col>
        <p class="text-70 tttest" style="margin-bottom:30px;">Лицензия</p>
        <p class="text-24 lg-max:text-24 md-max:text-center">
          Ностальгия – в тренде. Ее легко монетизировать. Она  вдохновляет потребителей тратить деньги, потому что обещает немедленную отдачу в виде счастливых воспоминаний и комфорта, она снимает скуку, снижает чувство одиночества и тревогу. Чаще покупают продукцию Classic dolls для себя, иногда – для детей до 6 лет. Образы Classic Dolls – узнаваемы ЦА, они включили в себя все отличительные элементы пластиковых кукол прошлых лет.
        </p>
      </v-col>
      <v-col cols="12" md="5" class="md-max:flex md-max:justify-center md-max:mt-35">
        <img v-lazy="require('/assets/images/plates.png')" class="max-w-570 lg-max:max-w-full md-max:max-w-10/12 max-h-445" alt="classic-dolls">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'DescLicense  '
}
</script>

<style scoped>
.lg-max\:text-70 {
    font-size: 70px;
}
</style>
