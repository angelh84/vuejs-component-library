<template>
  <div class="wrapper banner-notification-content">
    <h1>Banner Notifications</h1>
    <span class="headline-divider"></span>

    <h2>Banner Style</h2>
    <p>Banners can come in different types depending on the nature of the messaging to the user. Banners should remain fixed just below the main header bar and span the full width of the screen.</p>

    <banner-notification class="banner-critical" :resolve="{text: 'Link to resolve issue', url: 'https://www.aol.com'}">This is a critical error banner. It is imperative the user resolves this issue before proceeding.</banner-notification>

    <ol>
      <li><strong>Icon</strong> - Icon and color are selected based on notification type. The border of the banner should match the icon color</li>
      <li><strong>Message</strong> - Short but descriptive message about the type of banner or action.</li>
      <li><strong>Action</strong> (required) - Single link to resolve the error/warning or learn more in the case of info or promo banners.</li>
	    <li><strong>Close Icon</strong> - Used to dismiss the banner. Once dismissed the banner should not show again during the users session.</li>
    </ol>

    <h2>Banner Type</h2>
    <p>Banners can come in 4 options and their use should be relevant to the message provided. Error, Warning, Info and Promo.  Promo banners can contain a 200px by 40px image or logo.</p>

    <banner-notification></banner-notification>
    <banner-notification class="banner-critical" :resolve="{text: 'Link to resolve issue', url: 'https://www.aol.com'}">This is a critical error banner. It is imperative the user resolves this issue before proceeding.</banner-notification>
    <banner-notification class="banner-warning" :resolve="resolve">This is a warning message. Something may happen soon if not addressed.</banner-notification>
    <banner-notification class="banner-info" :resolve="{text: 'Guide me to the promised land', url: 'http://www.yahoo.com'}">Hey user, here is something that may interest you. Would you like to learn more?</banner-notification>
    <banner-notification class="banner-promo" :resolve="resolve" :PromoImage="PromoImage">Hey user, here is something that may interest you. Would you like to learn more?</banner-notification>
  </div>
</template>

<script>
import BannerNotification from '@/components/common/BannerNotification'
import PromoImage from '@/assets/image/promo-image.png'

export default {
  data () {
    return {
      resolve: {
        text: 'Yes, tell me more!',
        url: 'http://www.google.com'
      },
      PromoImage: PromoImage
    }
  },
  components: {
    BannerNotification,
    PromoImage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .button-content {
    li {
      display: inline-block;
      list-style-type: none;
      margin-bottom: 30px;
    }
  }
</style>
