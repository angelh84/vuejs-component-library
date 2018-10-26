<template>
  <div class="wrapper">
    <h1>Welcome</h1>
    <span class="headline-divider">&nbsp;</span>
    <p>This design system reflects the patterns and components that underpin any software platform. These patterns and components provide a unified language and consistent look and feel when designing features for the user interface. By following these guidelines and usage standards, you will provide a consistent, intuitive and pleasurable experience for users.</p>
    <h3>Design Principles</h3>
    <p>The following core principles are used to shape design decisions for this UI Kit. By understanding the hierarchy of user needs we are able to craft the best user experience possible for all clients, internal and external. These principle should be reference in order of importance when making any design decisions. </p>
    <div class="padding-div">&nbsp;</div>
    <div class="design-principle-box">
      <span class="principle-number">1</span>
      <img :src="clarityIcon" alt="Clarity Icon">
      <h3>CLARITY</h3>
      <p>Eliminate ambiguity. Enable people to see, understand and act with confidence</p>
    </div>
    <div class="design-principle-box">
      <span class="principle-number">2</span>
      <img :src="efficiencyIcon" alt="Efficiency Icon">
      <h3>EFFICIENCY</h3>
      <p>Streamline and optimize workflows. Intelligently anticipate needs to help people work better, smarter, and faster.</p>
    </div>
    <div class="design-principle-box">
      <span class="principle-number">3</span>
      <img :src="consistencyIcon" alt="Consistency Icon">
      <h3>CONSISTENCY</h3>
      <p>Create familiarity and strengthen intuition by applying the same solution to the same problem.</p>
    </div>
    <div class="design-principle-box">
      <span class="principle-number">4</span>
      <img :src="beautyIcon" alt="Beauty Icon">
      <h3>BEAUTY</h3>
      <p>Demonstrate respect for people’s time and attention through thoughtful and elegant craftsmanship.</p>
    </div>
  </div>
</template>

<script>
  import clarityIcon from '@/assets/image/clarity-icon.png'
  import efficiencyIcon from '@/assets/image/efficiency-icon.png'
  import consistencyIcon from '@/assets/image/consistency-icon.png'
  import beautyIcon from '@/assets/image/beauty-icon.png'

  export default {
    components: {
    },
    data () {
      return {
        clarityIcon: clarityIcon,
        efficiencyIcon: efficiencyIcon,
        consistencyIcon: consistencyIcon,
        beautyIcon: beautyIcon
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .design-principle-box {
      float: left;
      margin-right: 35px;
      width: 240px;
      min-height: 320px;
      background-color: #fff;
      padding: 25px;
      margin-bottom: 25px;
      @include box-shadow(0, 0, 20px, rgba(0,0,0,0.1));

      img {
        width: 120px;
        margin: -15px auto 0;
      }

      p {
        margin: 0;
      }

      .principle-number {
        font-size: 48px;
        font-weight: bold;
        color: #E1E3EA;
        font-family: $roboto;
      }

      h3 {
        text-align: center;
      }

      .padding-div {
        height: 100px;
      }
    }
</style>
