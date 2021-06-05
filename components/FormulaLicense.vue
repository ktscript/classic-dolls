<template>
  <v-container class="my-100 md-max:my-67">
    <v-row class="justify-between items-center">
      <v-col cols="12" md="5" class="flex justify-center items-center">
        <img class="image max-w-550 lg-max:max-w-full md-max:max-w-10/12 mr-10" src="~/assets/images/image-disc.png">
      </v-col>
      <v-col cols="12" md="7" class="text-centere flex flex-col items-center">
        <div class="flex flex-wrap justify-start">
          <div v-for="(item, i) in formulaLicense" :key="i" class="inline-flex w-full">
            <div class="rounded-full bg-pink w-54 h-54 max-w-54 max-h-54 lg-max:w-30 lg-max:h-30 lg-max:max-w-30 lg-max:max-h-30 flex justify-center items-center">
              <svg
                class="max-w-7/12"
                width="30"
                height="27"
                viewBox="0 0 30 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.8182 0C18.8247 0 16.5288 1.66599 15 4.14522C13.4709 1.66554 11.1748 0 8.18182 0C5.86264 0 3.74655 0.969121 2.22355 2.7288C0.789727 4.38561 0 6.59817 0 8.95905C0 11.5261 0.972546 13.8993 3.06055 16.4278C4.89127 18.6447 7.51945 20.9252 10.5627 23.566C11.6878 24.5423 12.8513 25.5518 14.0877 26.6535C14.3471 26.8845 14.6735 27 15 27C15.3265 27 15.6529 26.8845 15.9123 26.6534C17.1487 25.5517 18.3121 24.5422 19.4373 23.5659C22.4805 20.9252 25.1087 18.6446 26.9395 16.4277C29.0275 13.8994 30 11.5261 30 8.95905C30 4.13172 26.6593 0 21.8182 0Z" fill="#F7ECEB" />
              </svg>
            </div>
            <p class="w-full text-24 lg-max:text-24 pl-34 md-max:pl-10 box-border mb-34 md-max:mb-20">
              {{ item }}
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'FormulaLicense',
  data () {
    return {
      formulaLicense: [
        '«Вспомнить вкус детства»',
        'Ретро-коллекции сверкают на подиумах',
        'Продукты «КАК У БАБУШКИ В ДЕРЕВНЕ»',
        'Фильмы о прекрасных годах «МИР, ДРУЖБА, ЖВАЧКА»',
        'Мы “СОСТАРИВАЕМ” новые фотографии в INSTAGRAM',
        'FACEBOOK напоминает о том, чем мы занимались 10 ЛЕТ НАЗАД'
      ]
    }
  },
  methods: {
    scrollToContacts () {
      const elOffsetTop = document.getElementById('contacts').offsetTop
      window.scrollTo({ top: elOffsetTop - 120, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.outlined-btn /deep/ {
  color: #ff4079;
  outline: #ff4079;
  padding: 35px 45px !important;
}
</style>
