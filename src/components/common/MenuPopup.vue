<template>
  <div class="popup-menu-container" :class="{opened: menuShown}" v-doc-click="hideMenu">
    <slot name="button" :toggle="toggleMenu">
      <button class="popup-menu-button" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </slot>
    <transition name="ease-out">
        <div class="popup-menu" :class="align" v-show="menuShown">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import DocClick from '@/directives/docClick'

export default {
  data () {
    return {
      menuShown: false
    }
  },
  directives: {
    DocClick: DocClick
  },
  props: {
    align: {
      default: 'right',
      required: false,
      validator: (value) => {
        return value === 'right' || value === 'left'
      }
    }
  },
  methods: {
    toggleMenu: function () {
      this.menuShown = !this.menuShown
    },
    hideMenu: function () {
      this.menuShown = false
    }
  },
  watch: {
  }
}
</script>

<style lang="scss">
  .popup-menu-container {
    position: relative;
    display: inline-block;
  }

  .popup-menu-button {
    padding: 5px;

    span {
      display: block;
      width: 25px;
      height: 3px;
      background-color: #333;
      margin-bottom: 4px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .popup-menu {
    position: absolute;
    z-index: 100;
    min-width: 120px;
    background-color: #fff;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.20);
    border-radius: 2px;
    padding: 5px 15px;

    &.right {
      right: 0;
    }

    &.left {
      left: 0;
    }

    &.center {
      margin: auto;
    }

    ul, 
    ol {
      margin: 0;
      padding: 0;
    }

    ul li,
    ol li {
      display: block;
      padding: 0;
      margin: 0;
      text-align: left;
    }

    a {
      display: block;
      text-decoration :none;
      color: #333;
      font-weight: 400;
      padding-top: 5px;
      padding-bottom: 5px;
      margin: 0;

        &:focus {
          text-decoration: underline;
        }

        &:hover {
          color: #808080;
        }
    }

    i {
      display: inline-block;
      vertical-align: middle;
      font-size: 15px;
      margin-right: 7px;
    }
  }
</style>