<template>
  <li class="accordion-body" :class="{'opened': isOpened}">
    <p class="accordion-title" @click="showAccordion(isOpened)">{{ title }}</p>
    <div class="accordion-content">
      <slot></slot>
    </div>
  </li>
</template>

<script>
export default {
  data () {
    return {
      isOpened: false
    }
  },
  props: {
    title: ''
  },
  methods: {
    showAccordion: function (opened) {
      this.$parent.$children.forEach(element => {
        element.isOpened = false
      })
      this.isOpened = !opened
    }
  }
}
</script> 