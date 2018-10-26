<template>
  <div class="wrapper button-content">
    <h1>Buttons</h1>
    <span class="headline-divider"></span>
    <p>Use buttons and links to trigger actions. Buttons can contain a combination of a clear label and an icon while links are always text. Buttons can take a variety of sizes based on their placement within the application.</p>

    <h2>Writing Labels</h2>
    <p>Button labels are title case and are as short as possible, while clearly explaining what happens when the button is pressed.</p>
    <ul class="text-center">
      <li><button class="btn-primary" type="button">Button Primary</button></li>
      <li><button class="btn-outline" type="button">Button Outline</button></li>
      <li><button class="btn-standard" type="button">Button Standard</button></li>
      <li><button class="btn-standard fa-pencil" type="button">Button w/ Icon</button></li>
      <li><button class="btn-standard fa-refresh icon-right" type="button">Button w/ Right Icon</button></li>
      <li><button class="btn-icon fa-calendar" type="button"></button></li>
    </ul>

    <h2>Minium Spacing & Sizing</h2>
    <p>All buttons should adhere to the minimum spacing and sizing requirements</p>

    <h2>Navigation (sandwich) Menu</h2>
    <p>This button is useful when trying to consolidate a navigation for smaller screens or menu options within a table.</p>
    <MenuPopup>
      <ul>
        <li>
          <a href="#">
            <i class="material-icons">home</i>Home
          </a>
        </li>
        <li>
          <a href="#">
            <i class="material-icons">build</i>Tools
          </a>
        </li>
        <li>
          <a href="#">
            <i class="material-icons">credit_card</i>Payment
          </a>
        </li>
        <li>
          <a href="#">
            <i class="material-icons">lock</i>Security
          </a>
        </li>
      </ul>
    </MenuPopup>
    <h2>Custom Menu (opens at the left end of the button)</h2>
    <MenuPopup align="left">
      <template slot="button" slot-scope="{ toggle }">
        <button class="btn-icon fa-bars" type="button" @click="toggle"></button>
      </template>
      <ul>
        <li>
          <a href="#">
            <i class="material-icons">home</i>Home
          </a>
        </li>
        <li>
          <a href="#">
            <i class="material-icons">build</i>Tools
          </a>
        </li>
        <li>
          <a href="#">
            <i class="material-icons">credit_card</i>Payment
          </a>
        </li>
        <li>
          <a href="#">
            <i class="material-icons">lock</i>Security
          </a>
        </li>
      </ul>
    </MenuPopup>

    <MenuPopup align="left">
      <template slot="button" slot-scope="{ toggle }">
        <button class="btn-standard fa-wrench" type="button" @click="toggle">Button w/ Icon long enough to see the menu below is on the left</button>
      </template>
      <ul>
        <li>
          <a href="#">
            <i class="material-icons">home</i>Home
          </a>
        </li>
        <li>
          <a href="#">
            <i class="material-icons">build</i>Tools
          </a>
        </li>
        <li>
          <a href="#">
            <i class="material-icons">credit_card</i>Payment
          </a>
        </li>
        <li>
          <a href="#">
            <i class="material-icons">lock</i>Security
          </a>
        </li>
      </ul>
    </MenuPopup>

    <h2 class="code-headline">Code</h2>
    <div class="code-box">
      <iframe width="100%" height="300" src="//jsfiddle.net/2snkosgo/1/embedded/html,css,result/" allowpaymentrequest allowfullscreen="allowfullscreen" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
import MenuPopup from '@/components/common/MenuPopup'

export default {
  components: {
    MenuPopup
  },
  data () {
    return {

    }
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


  .popup-menu-container {
    margin-left: 90px;

  }

</style>
