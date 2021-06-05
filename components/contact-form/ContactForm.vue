<template>
  <v-container id="main-contact" class="my-100 md-max:my-80">
    <v-row>
      <v-col cols="12" md="8" class="flex justify-between items-center md-max:justify-center">
        <h2 class="text-70 lg-max:text-35 font-bold mb-30 text-pink">
          Контакты
        </h2>
        <div class="md-max:hidden z-bubble">
          <Heart @click="openModal" />
        </div>
      </v-col>
    </v-row>
    <v-row class="contact">
      <div class="bg-pale border border-dashed p-45 relative">
        <div class="text-48 md-max:text-32 p-0">
          Леон Наталья
        </div>
        <div class="flex flex-wrap items-center justify-between">
          <a :href="`mailto:${'natalia@leon-fashion.com'}`" class="flex items-center mr-20">
            <span class="mail_ico w-36 h-36 md-max:w-22 md-max:h-22 mr-10" />
            <span class="text-32 md-max:text-22">{{ 'natalia@leon-fashion.com' }}</span>
          </a>
          <a :href="`tel:${'+79032635335'}`" class="flex items-center mr-20">
            <span class="phone_ico w-36 h-36 md-max:w-22 md-max:h-22" />
            <span class="text-30 md-max:text-22">{{ '+7(903)263-53-35' }}</span>
          </a>
          <a :href="`tel:${'+34665028188'}`" class="flex items-center">
            <span class="phone_ico w-36 h-36 md-max:w-22 md-max:h-22" />
            <span class="text-30 md-max:text-22">{{ '+3(466)502-81-88' }}</span>
          </a>
        </div>
        <div class="md:hidden absolute -bottom-1/2 mobile-max:-bottom-1/3 right-0">
          <Heart @click="openModal" />
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import Heart from './Heart'
export default {
  name: 'ContactForm',
  components: {
    Heart
  },
  computed: {
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
    openModal () {
      this.currentModalName = 'contact-modal'
      this.$nextTick(() => {
        this.$store.dispatch('ui/setModal')
        this.$store.dispatch('ui/setOverlay')
      })
    }
  }
}
</script>

<style scoped>
  .contact {
    margin-top: -35px;
  }
  .phone_ico {
    background: center no-repeat url("~assets/images/icons/phone.svg");
    background-size: 36px;
  }
  .mail_ico {
    background: center no-repeat url("~assets/images/icons/mail.svg");
    background-size: 36px;
  }
  @screen md-max {
    .phone_ico {
    background-size: 22px;
  }
  .mail_ico {
    background-size: 22px;
  }
  }
</style>
