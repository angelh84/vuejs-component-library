<template>
  <div class="wrapper button-content">
    <h1>Tooltips</h1>

    <p>Use tooltips to identify or add a small amount of information to an element. Typically, tooltips are used to help users understand the meaning or purpose of icons, showing the full version of truncated text, or displaying the alt text for an image. Sxale tooltips replace standard browser tooltips when more emphasis is required. Tooltips do not receive input focus.</p>
    <p>When writing tooltips, be short and concise. When you need to add more than a single line of extra information, consider using inline notifications instead.</p>

    <h2>Behavior & Style</h2>
    
    <p>The position of tooltips is flexible and will change depending on how close the element is to the edge of the screen. Tooltips are triggered on hover on desktop, and tap on mobile devices. Tooltips can be styled as light or dark depending on the surrounding UI elements. </p>

    <!-- Usage https://github.com/Akryum/v-tooltip#usage -->
    <ul class="tooltip-list" style="text-align: center">
      <li>
        <Tooltip content="Hello World!">
          <button class="fa-angle-up btn-standard" type="button">On Hover Top</button>
        </Tooltip>
      </li>
      <li>
        <Tooltip content="Hello World!" color="light">
          <button class="fa-angle-up btn-standard" type="button">On Hover Top Light</button>
        </Tooltip>
      </li>
      <li>
        <Tooltip content="Hello World!" position="right">
          <button class="fa-angle-right btn-standard" type="button">On Hover Right</button>
        </Tooltip>
      </li>
      <li>
        <Tooltip content="Hello World!" position="bottom">
          <button class="fa-angle-down btn-standard" type="button">On Hover Bottom</button>
        </Tooltip>
      </li>
      <li>
        <Tooltip content="Hello World!" position="left">
          <button class="fa-angle-down btn-standard" type="button">On Hover Left</button>
        </Tooltip>
      </li>
      <li>
        <Tooltip content="Hello World!" trigger="click">
          <button class="fa-angle-up btn-standard" type="button">On Click</button>
        </Tooltip>
      </li>
    </ul>
    
  </div>
</template>

<script>
  import Tooltip from '@/components/common/Tooltip'

  export default {
    components: {
      Tooltip
    },
    data () {
      return {
        tooltip: ''
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
</style>
