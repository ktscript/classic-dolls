<template>
  <div>
    <desc-about />
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
import FormulaSuccess from '~/components/FormulaSuccess.vue'
import DesignBlock from '~/components/DesignBlock.vue'
import ContactForm from '~/components/contact-form/ContactForm'
import CustomHr from '~/components/CustomHr'
import DescAbout from '~/components/DescAbout.vue'
import Description from '~/components/Description.vue'

export default {
  components: {
    FormulaSuccess,
    DesignBlock,
    ContactForm,
    CustomHr,
    DescAbout,
    Description
  }
}
</script>
