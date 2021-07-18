<template>
  <div class="notification-wrapper">
    <notifications :group="group" :position="position" />
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  props: {
    showOnLoad: true,
    group: '',
    title: {
      required: true,
      type: String
    },
    message: '',
    position: {
      default: 'bottom right'
    }
  },
  methods: {
    show: function () {
      this.$notify({
        group: this.group,
        title: this.title,
        text: this.message,
        duration: 1000
      })
    }
  },
  watch: {
    showOnLoad: function (isShowing) {
      if (isShowing) {
        this.show()
      }
    }
  },
  mounted: function () {
    // console.log(el)
    this.show()
  }
}
</script>