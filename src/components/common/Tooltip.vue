<template>
  <div class="tooltip-wrapper" v-tooltip="{
    content: content, 
    placement: position, 
    classes: color,
    trigger: trigger,
    container: container}">
    <slot></slot>
  </div>
</template>

<script>
import { VTooltip, VClosePopover } from 'v-tooltip'

export default {
  props: {
    content: {
      required: true,
      type: String
    },
    position: {
      defeault: 'top'
    },
    color: {
      default: 'dark'
    },
    trigger: {
      default: 'hover'
    },
    container: ''
  },
  directives: {
    'tooltip': VTooltip,
    'close-popover': VClosePopover
  }
}
</script> 