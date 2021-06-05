<template>
  <div class="modal-wrapper">
    <div class="absolute w-full h-full z-negative" @click="$emit('close')" />
    <div class="absolute w-3/4 smx-max:w-full">
      <modal
        class="contact_container"
        modal-name="news-modal"
      >
        <div class="call-me bg-white rounded-20 flex flex-col items-center">
          <div class="title text-24 mb-30">
            За подробной информацией, медиа-планом и стильным fashion guide для различных категорий товаров обращайтесь:
          </div>
          <div class="max-w-575 md-max:max-w-315">
            <v-text-field
              v-model.trim="callMe.firstName"
              placeholder="Ваше имя"
              type="text"
              required
              class="w-400 mb-10 text-14"
              :validations="[
                {
                  condition: $v.callMe.firstName.$error && !$v.callMe.firstName.required,
                  text: 'Обязательное поле'
                }
              ]"
              @blur="$v.callMe.firstName.$touch()"
            />
          </div>
          <div class="max-w-575 md-max:max-w-315">
            <v-text-field
              v-model.trim="callMe.phoneNumber"
              placeholder="Телефон"
              type="text"
              required
              class="w-400 mb-10"
              :validations="[
                {
                  condition: $v.callMe.phoneNumber.$error && !$v.callMe.phoneNumber.required,
                  text: 'Обязательное поле'
                },
                {
                  condition: $v.callMe.phoneNumber.$error && !$v.callMe.phoneNumber.checkPhoneNumberLength,
                  text: 'Неверный телефонный номер'
                }
              ]"
              @blur="$v.callMe.phoneNumber.$touch()"
            />
          </div>
          <div class="max-w-575 md-max:max-w-315">
            <v-text-field
              v-model.trim="callMe.email"
              placeholder="email"
              type="text"
              class="w-400 mb-15"
            />
          </div>
          <div class="max-w-575 md-max:max-w-315">
            <v-text-field
              v-model.trim="callMe.time"
              placeholder="Удобное время для звонка"
              type="text"
              class="w-400 mb-15"
            />
          </div>
          <div class="max-w-575 md-max:max-w-315">
            <v-btn
              class="default rounded-39 w-full button-submit py-15"
              :loading="loading"
              outlined
              @click="handleCallMe"
            >
              Оставить заявку
            </v-btn>
          </div>
          <div class="text-24">
            {{ error }}
          </div>
          <div v-show="thanks" class="text-24">
            {{ thanks }}
          </div>
        </div>
        <div class="crest_ico absolute w-20 h-20" @click="$emit('close')" />
      </modal>
    </div>
  </div>
</template>
<script>
import 'vueperslides/dist/vueperslides.css'
import { required, email } from 'vuelidate/lib/validators'
import { mapState } from 'vuex'
import { getApiUrl } from '~/helpers/helper'
import Modal from '~/components/Modal'

export default {
  name: 'ContactModal',
  components: {
    Modal
  },
  data () {
    return {
      callMe: {
        firstName: '',
        phoneNumber: '',
        time: '',
        agree: false
      },
      loading: false,
      error: '',
      thanks: ''
    }
  },
  validations: {
    callMe: {
      firstName: {
        required
      },
      email: {
        required,
        email
      },
      phoneNumber: {
        required
      }
    }
  },
  computed: {
    ...mapState({
      config: state => state.config
    })
  },
  methods: {
    checkValids () {
      this.$v.callMe.$touch()
      return !this.$v.callMe.$invalid
    },
    handleCallMe () {
      this.thanks = ''
      this.error = ''
      if (this.checkValids()) {
        this.loading = true
        const requestOptions = {
          url: `${getApiUrl(this.config)}${this.config.handleCallMe}`,
          method: 'POST',
          data: {
            sender: this.callMe.firstName,
            phone: this.callMe.phoneNumber,
            time: this.callMe.time,
            email: this.callMe.email
          }
        }
        this.$axios(requestOptions).then(() => {
          this.callMe.firstName = ''
          this.callMe.phoneNumber = ''
          this.callMe.time = ''
          this.callMe.email = ''
          this.$v.$reset()
        }).catch((error) => {
          this.error = error.message
        }).finally(() => {
          this.loading = false
          this.thanks = 'Спасибо, форма отправлена'
        })
      } else {
        this.error = 'заполните все поля'
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
  .contact_container {
    @apply py-30 px-60 relative;
  }
  @screen sm-max {
    .contact_container {
      @apply px-15 pb-30 pt-60
    }
  }
</style>
<style scoped lang="scss">
  .button-submit {
    transition: all 0.3s ease-in-out;
    @apply text-white bg-pink border border-pink;
  }
  .button-submit:hover,
  .button-submit:active {
    @apply text-pink bg-white border border-pink;
  }
  @screen sms-max {
    .call-me {
      width: 100%;
    }
    .title {
      font-size: 22px;
      margin-bottom: 20px;
    }
    .button-submit:hover,
    .button-submit:active {
      @apply text-white bg-pink border border-pink;
    }
  }
</style>
