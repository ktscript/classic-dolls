<template>
  <div>
    <desc-license />
    <custom-hr />
    <formula-license />
    <custom-hr />
    <design-block />
    <custom-hr />
    <contact-form />
  </div>
</template>

<script>
import FormulaLicense from '../components/FormulaLicense.vue'
import DescLicense from '../components/DescLicense.vue'
import DesignBlock from '~/components/DesignBlock.vue'
import ContactForm from '~/components/contact-form/ContactForm'
import CustomHr from '~/components/CustomHr'

export default {
  components: {
    FormulaLicense,
    DesignBlock,
    ContactForm,
    CustomHr,
    DescLicense
  }
}
</script>
