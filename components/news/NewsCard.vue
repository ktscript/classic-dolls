<template>
  <div class="news-card">
    <div class="news_image_preview">
      <img
        v-lazy="imageSrc"
        :alt="newsItem.title"
        class="border border-solid border-pink rounded-25"
      >
    </div>
    <div class="p-5 mt-10">
      <div class="text-18 date">
        {{ formatDate(newsItem.createdAt) }}
      </div>
      <div class="text-18 text-pink font-bold">
        {{ newsItem.title }}
      </div>
      <a v-if="newsItem.externalReference" target="_blank" :href="newsItem.externalReference" class="max-w-247 text-center block text-white bg-pink rounded-25 px-27 py-10 cursor-pointer outline-none mt-35">
        Читать полностью
      </a>
      <button v-else @click="openModal()" class="max-w-247 text-center text-white bg-pink rounded-25 px-30 py-10 cursor-pointer outline-none mt-35">
        Читать полностью
      </button>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'NewsCard',
  props: {
    newsItem: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageSrc () {
      if (!this.newsItem?.image) {
        return require('~/assets/images/news_placeholder.svg')
      } else {
        return {
          src: this.newsItem.image,
          error: '~/assets/images/news_placeholder.svg'
        }
      }
    },
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
    formatDate (date) {
      return dayjs(date).format('DD MMMM YYYY')
    },
    openModal () {
      this.currentModalName = 'news-modal'
      this.$store.dispatch('news/setReadingNews', this.newsItem)
      this.$nextTick(() => {
        this.$store.dispatch('ui/setModal')
        this.$store.dispatch('ui/setOverlay')
      })
    }
  }
}
</script>

<style scoped>
  .news_image_preview {
    @apply h-240 relative
  }
  .news_image_preview > img {
    @apply rounded-20 absolute object-cover w-full h-240
  }
  .date {
    @apply text-base mt-10
  }
  .title {
    @apply text-20 font-bold mt-8
  }
  .description {
    @apply mt-10 text-sm mb-10
  }
  .description {
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
