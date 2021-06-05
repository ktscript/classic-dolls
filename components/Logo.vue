<template>
  <img
    src="~/assets/images/logo.png"
    alt="Classic Dolls"
    :width="width"
    :height="height"
  >
</template>
<script>
export default {
  name: 'Logo',
  props: {
    width: {
      type: Number,
      default: 150
    },
    height: {
      type: Number,
      default: 35
    }
  }
}
</script>
