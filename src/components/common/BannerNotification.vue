<template>
  <div :class="{'banner-critical': classNotPresent}">
    <div class="wrapper">
      <img v-if="PromoImage" class="banner-image" :src="PromoImage">
      <span class="banner-notification-icon icon"></span>
      <p class="promo-message"><slot>There has been an error, please try again.</slot></p>
      <a v-if="resolve" class="banner-resolve-link" :href="resolve.url" target="_blank">{{ resolve.text.replace(/ /g, '&nbsp;') }}</a>
      <button class="banner-close icon-cross"></button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['resolve', 'PromoImage'],
  data () {
    return {
      classNotPresent: false
    }
  },
  mounted () {
    this.classNotPresent = !this.$el.classList.length
  }
}
</script>