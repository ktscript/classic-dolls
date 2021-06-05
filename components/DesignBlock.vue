<template>
  <v-container id="gallery" class="my-100 md-max:my-67">
    <h2 v-if="images && images.length" class="text-70 lg-max:text-35 font-bold mb-30 text-pink md-max:text-center">
      Дизайны
    </h2>
    <v-row v-if="images && images.length" class="container justify-between">
      <vueper-slides
        ref="newsCarousel"
        class="carousel no-shadow w-full"
        :visible-slides="visibleSlides"
        :gap="2"
        :arrows="windowWidth > 767"
        slide-multiple
        bullets-outside
      >
        <vueper-slide
          v-for="(image, index) in images"
          :key="index"
        >
          <template #content>
            <div class="flex justify-center items-center py-5 px-10">
              <img
                class="border border-solid border-pink rounded-25 box-border"
                :src="image.image"
                alt="classic-dolls"
              >
            </div>
          </template>
        </vueper-slide>
        <template #bullet>
          <div class="bullet" />
        </template>
      </vueper-slides>
      <!--      <client-only>-->
      <!--        <vue-gallery-slideshow :images="images" :index="index" @close="index = null" />-->
      <!--      </client-only>-->
    </v-row>
  </v-container>
</template>

<script>
// import VueGallerySlideshow from 'vue-gallery-slideshow'
import { VueperSlide, VueperSlides } from 'vueperslides'
import { mapState } from 'vuex'
import { getApiUrl } from '~/helpers/helper'
export default {
  name: 'DesignBlock',
  components: {
    VueperSlides,
    VueperSlide
  },
  data () {
    return {
      slideshowIndex: null,
      images: [],
      windowWidth: null
    }
  },
  computed: {
    ...mapState({
      config: state => state.config
    }),
    carouselActivated () {
      return this.news?.length > 3
    },
    visibleSlides () {
      if (this.windowWidth < 767) {
        return 1
      }
      return 2
    }
  },
  mounted () {
    window.addEventListener('resize', this.setWindowWidth)
    this.setWindowWidth()
  },
  beforeMount () {
    this.loadImage()
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
    },
    loadImage () {
      const requestOptions = {
        url: `${getApiUrl(this.config)}${this.config.designImages}`,
        method: 'GET'
      }
      this.$axios(requestOptions).then((result) => {
        this.images = result.data
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error)
      })
    }
  }
}
</script>

<style scoped>
  .carousel /deep/ .vueperslides__parallax-wrapper {
    padding-bottom: 36% !important;
  }
  .carousel /deep/ .vueperslides__arrow {
    background-color: #ff4079;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    color: white;
    transform: none;
    top: calc(50% - 60px);
  }
  .carousel /deep/ .vueperslides__arrow svg {
    height: 55px;
  }
  .carousel /deep/ .vueperslides__arrow--prev {
    left: -5.5em;
  }
  .carousel /deep/ .vueperslides__arrow--next {
    right: -5.5em;
  }
  .carousel /deep/ .bullet {
    background-color: #f4c7d1;
    color: #f4c7d1;
    width: 15px;
    height: 15px;
    display: none;
  }
  .carousel /deep/ .vueperslides__bullets {
    flex-wrap: wrap;
  }
  .carousel /deep/ .vueperslides__bullet--active .bullet {
    background-color: #ff4079;
    color: #ff4079;
  }
  @screen lg-max {
    .carousel /deep/ .vueperslides__arrow--prev {
      left: -55px;
    }
    .carousel /deep/ .vueperslides__arrow--next {
      right: -55px;
    }
  }
  @screen md-max {
    .carousel /deep/ .bullet {
      display: block;
    }
    .carousel /deep/ .vueperslides__arrow {
      display: none;
    }
  }
  @screen sm-max {
    .carousel /deep/ .vueperslides__parallax-wrapper {
      padding-bottom: 73% !important;
    }
  }
</style>
