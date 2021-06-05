<template>
  <div
    id="news"
    class="overflow-hidden"
  >
    <transition name="show-down">
      <div v-if="news && news.length" class="container news_block mt-60 md-max:mt-0">
        <!-- desktop view -->
        <div class="news-carousel">
          <vueper-slides
            ref="newsCarousel"
            class="no-shadow"
            fixed-height="500px"
            :visible-slides="visibleSlides"
            :touchable="windowWidth < 768"
            :gap="2"
            :arrows="windowWidth > 767"
            slide-multiple
            bullets-outside
          >
            <vueper-slide
              v-for="(newsItem, index) in news"
              :key="index"
            >
              <template
                #content
              >
                <news-card :news-item="newsItem" />
              </template>
            </vueper-slide>
            <template #bullet>
              <div class="bullet" />
            </template>
          </vueper-slides>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { VueperSlide, VueperSlides } from 'vueperslides'
import { mapState } from 'vuex'
import NewsCard from '~/components/news/NewsCard'

export default {
  name: 'News',
  components: {
    VueperSlides,
    VueperSlide,
    NewsCard
  },
  data () {
    return {
      windowWidth: null
    }
  },
  computed: {
    ...mapState({
      news: state => state.news.list &&
        Array.isArray(state.news.list) &&
        state.news.list.sort((a, b) => b.id - a.id)
    }),
    carouselActivated () {
      return this.news?.length > 3
    },
    isSmallTab () {
      return this.windowWidth < 1024 && this.windowWidth > 767
    },
    visibleSlides () {
      if (this.windowWidth < 767) {
        return 1
      }
      return this.isSmallTab ? 2 : 3
    }
  },
  mounted () {
    window.addEventListener('resize', this.setWindowWidth)
    this.setWindowWidth()
  },
  methods: {
    setWindowWidth () {
      this.windowWidth = window.innerWidth
    },
    slideNext () {
      this.$refs.newsCarousel.next()
    },
    slidePrev () {
      this.$refs.newsCarousel.previous()
    }
  }
}
</script>

<style scoped>
  .news_block {
    @apply py-40
  }
  .news-carousel /deep/ .vueperslides__arrow {
    background-color: #ff4079;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    color: white;
    transform: none;
  }
  .news-carousel /deep/ .vueperslides__arrow svg {
    height: 55px;
  }
  .news-carousel /deep/ .vueperslides__arrow--prev {
    left: -5.5em;
  }
  .news-carousel /deep/ .vueperslides__arrow--next {
    right: -5.5em;
  }
  .news-carousel /deep/ .bullet {
    background-color: #f4c7d1;
    color: #f4c7d1;
    width: 15px;
    height: 15px;
    display: none;
  }
  .news-carousel /deep/ .vueperslides__bullets {
    flex-wrap: wrap;
  }
  .news-carousel /deep/ .vueperslides__bullet--active .bullet {
    background-color: #ff4079;
    color: #ff4079;
  }
  @screen lg-max {
    .news_block {
      @apply px-100 py-30
    }
  }
  @screen sms-max {
    .news_block {
      @apply px-50
    }
  }
  @screen sm-max {
    .news-carousel /deep/ .bullet {
      display: block;
    }
    .news-carousel /deep/ .vueperslides__arrow {
      display: none;
    }
    .news_block {
      @apply px-15
    }
  }
</style>
