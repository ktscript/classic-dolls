<template>
  <div class="modal-wrapper">
    <div class="absolute w-full h-full z-negative" @click="$emit('close')" />
    <div class="absolute w-3/4 smx-max:w-full">
      <modal
        class="news_container"
        modal-name="news-modal"
      >
        <div v-if="readingNews" class="news">
          <div class="news_title">
            {{ readingNews.title }}
          </div>
          <div class="news_card pr-15" v-html="readingNews.content" />
        </div>
        <div v-else>
          Данные отсутствуют
        </div>
        <div class="crest_ico absolute w-20 h-20" @click="$emit('close')" />
      </modal>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import 'vueperslides/dist/vueperslides.css'
import Modal from '~/components/Modal'

export default {
  name: 'ImagesModal',
  components: {
    Modal
  },
  computed: {
    ...mapState({
      readingNews: state => state.news.readingNews
    }),
    imageSrc () {
      if (!this.readingNews?.image) {
        return require('~/assets/images/news_placeholder.svg')
      } else {
        return {
          src: this.readingNews.image,
          error: '~/assets/images/news_placeholder.svg'
        }
      }
    }
  }
}
</script>

<style scoped>
  .crest_ico {
    background: center no-repeat url("~assets/images/icons/exit.svg");
    top: 20px;
    right: 20px;
  }
  .news {
    max-height: 85vh;
    overflow: auto;
  }
  .news_img > img {
    @apply rounded-10
  }
  .news {
    @apply flex flex-col items-center
  }
  .news_title {
    @apply font-bold text-20 my-20 text-center
  }
  .news_card {
    @apply text-base
  }
  .news_container {
    @apply py-30 px-60 relative;
  }
  @screen sm-max {
    .news_container {
      @apply px-15 pb-30 pt-60
    }
    .news_title {
      @apply font-bold my-10
    }
    .news_card {
      @apply text-sm
    }
  }
</style>
