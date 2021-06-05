<template>
  <div class="image mr-40 md-max:mr-20 rounded-10 overflow-hidden relative cursor-pointer transform hover:scale-95 duration-500" @click="click()">
    <img v-lazy="require('/assets/images/heart.png')" alt="Узнать больше" class="w-210 md-max:w-150">
    <p class="text-24 md-max:text-18 absolute top-50 md-max:top-35 left-47 md-max:left-25 transform -rotate-26">
      Узнать<br> больше
    </p>
  </div>
</template>
<script>
export default {
  name: 'Heart',
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>
