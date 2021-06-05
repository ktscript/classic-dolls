<template>
  <div>
    <top-block />
    <news />
    <custom-hr />
    <description />
    <custom-hr />
    <formula-success />
    <custom-hr />
    <design-block />
    <custom-hr />
    <contact-form />
  </div>
</template>

<script>
import TopBlock from '~/components/TopBlock.vue'
import FormulaSuccess from '~/components/FormulaSuccess.vue'
import DesignBlock from '~/components/DesignBlock.vue'
import News from '~/components/news/News'
import ContactForm from '~/components/contact-form/ContactForm'
import CustomHr from '~/components/CustomHr'
import Description from '~/components/Description.vue'

export default {
  components: {
    TopBlock,
    FormulaSuccess,
    DesignBlock,
    News,
    ContactForm,
    CustomHr,
    Description
  },
  beforeMount () {
    this.$store.dispatch('news/loadNews')
  }
}
</script>
