<template>
  <div class="tabs-wrapper" :class="{ horizontal: orientation === 'horizontal' || orientation === '', 'vertical clearfix': orientation === 'vertical'}">
    <div class="tabs-nav">
      <ul>
        <li v-for="(options, index) in nav" :key="index" :class="{'selected': selectedIndex === index}">
          <button type="button" @click="selectedIndex = index">{{ options }}</button>
        </li>
      </ul>
    </div>
    <div class="tabs-content">
      <slot :name="selectedTab"></slot>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  data: function () {
    // The index itself can be a custom string, so
    // if the navigation is an object get the first key
    let defaultIndex = this.nav instanceof Array ? 0 : _.keys(this.nav)[0]
    return {
      selectedIndex: defaultIndex
    }
  },
  props: {
    orientation: {
      default: '',
      required: false,
      validator: function (value) {
        return value === 'horizontal' || value === 'vertical' || value === ''
      }
    },
    nav: {
      type: [Array, Object],
      required: true
    }
  },
  computed: {
    // Get the selected tab slot name
    selectedTab: function () {
      let tabName = ''
      // If the navigation is an array, the tab name is the element in the position
      if (this.nav instanceof Array) {
        tabName = this.nav[this.selectedIndex]
      } else {
        // Else the navigation is an object and the tab name is the index given
        tabName = this.selectedIndex
      }
      return 'tab.' + tabName
    }
  }
}
</script> 

<style lang="scss">
  .tabs-wrapper {
    ul {
        margin: 0;
    }

    li {
      display: inline-block;
      border-bottom: 2px solid $neutral-50;
      margin: 0;
      @include transition(all 0.5s);

      &.selected {
        border-bottom: 2px solid $primary-purple;
        
        button {
            font-weight: 500;
            color: $primary-squid;
        }
      }
    }

    button {
      color: $neutral-90;
      font-weight: 400;
      padding-left: 30px;
      padding-right: 30px;

      &:hover {
          color: $neutral-400;
      }
    }

    &.vertical {
      display: flex;
      flex-direction: row;
      align-content: stretch;
      align-items: stretch;

        li {
            display: block;
            border-bottom: 0;
            border-right: 2px solid $neutral-50;
            &.selected {
                border-right: 2px solid $primary-purple;
            }
        }

        ul {
          width: 150px; 
        }

        .tabs-nav {
          float: left;
        }

        .tabs-content {
          text-align: left;
          padding-left: 30px;
          float: left;
        }

        button {
          padding-top: 25px;
          padding-bottom: 25px;
          line-height: 0;
        }
    }

    &.horizontal {
      .tabs-content {
        padding-top: 25px;
      }
    }
  }
</style>