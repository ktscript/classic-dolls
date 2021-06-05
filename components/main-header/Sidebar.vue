<template>
  <div class="modal-wrapper">
    <div class="absolute w-full h-full z-negative" @click="$emit('close')" />
    <div class="sidebar fixed inset-y-0 right-0 z-modal overflow-y-auto">
      <modal animation-name="fade-in-left" modal-name="sidebar">
        <div class="sidebar-modal bg-white px-30 h-screen">
          <ul class="flex flex-col">
            <template v-for="(item, index) in links">
              <li :key="index" class="mt-25">
                <a v-if="item.link" :href="item.link" target="_blank">
                  {{ item.title }}
                </a>
                <div v-else class="text-24 hover:text-palePink cursor-pointer" @click="scrollTo(item.scrollToId)">
                  {{ item.title }}
                </div>
              </li>
            </template>
          </ul>
        </div>
      </modal>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Modal from '~/components/Modal'

export default {
  name: 'Sidebar',
  components: {
    Modal
  },
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapState({
      news: state => state.news.list,
      faqList: state => state.settings.faq
    })
  },
  mounted () {
    window.addEventListener('resize', this.calculateViewport)
    this.calculateViewport()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.calculateViewport)
  },
  methods: {
    calculateViewport () {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    },
    scrollTo (id) {
      const elem = document.getElementById(id)
      if (elem) {
        const elOffsetTop = elem.offsetTop
        window.scrollTo({ top: elOffsetTop - 120, behavior: 'smooth' })
        this.$store.dispatch('ui/setCurrentModalName', '')
        this.$store.dispatch('ui/setOverlay', false)
        this.$store.dispatch('ui/setModal', false)
      }
    }
  }
}
</script>

<style scoped>
  .sidebar-modal  {
    height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);
  }
  .contact-us::before {
    @apply mr-9;
    height: 20px;
    content: url("~assets/images/icons/phone.svg");
    display: block;
  }
  .mail-us::before {
    @apply mr-9;
    height: 23px;
    content: url("~assets/images/icons/mail.svg");
    display: block;
  }
</style>
