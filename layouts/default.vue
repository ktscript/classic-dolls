<template>
  <div>
    <v-col cols="12" />
    <main-header :links="links" />
    <nuxt />
    <overlay />
    <main-footer />
    <sidebar v-if="String(currentModalName) === 'sidebar'" :links="links" class="mr-auto" @close="close" />
    <news-modal v-else-if="String(currentModalName) === 'news-modal'" @close="close" />
    <contact-modal v-else-if="String(currentModalName) === 'contact-modal'" @close="close" />
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
import { mapState } from 'vuex'
import NewsModal from '~/components/news/NewsModal.vue'
import ContactModal from '~/components/contact-form/ContactModal.vue'
import Overlay from '~/components/Overlay.vue'
import MainHeader from '~/components/main-header/MainHeader'
import MainFooter from '~/components/MainFooter.vue'
import Sidebar from '~/components/main-header/Sidebar'

export default {
  components: {
    NewsModal,
    Overlay,
    MainHeader,
    Sidebar,
    ContactModal,
    MainFooter
  },
  data () {
    return {
      links: [
        {
          title: 'Новости',
          link: '/#news'
        }, {
          title: 'Галерея',
          scrollToId: 'gallery'
        }, {
          title: 'О нас',
          link: '/about'
        }, {
          title: 'Лицензия',
          link: '/license'
        }, {
          title: 'Контакты',
          scrollToId: 'main-contact'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      modalIsVisible: state => state.ui.modalIsVisible
    }),
    currentModalName: {
      get () {
        return this.$store.state.ui.currentModalName
      },
      set (value) {
        this.$store.dispatch('ui/setCurrentModalName', value)
      }
    }
  },
  methods: {
    close () {
      if (!this.isLoader) {
        this.$store.dispatch('ui/setModal', false)
        this.$store.dispatch('ui/setOverlay', false)
        debounce(() => {
          this.currentModalName = ''
        }, 300)()
      }
    }
  }
}
</script>
