<template>
  <notifications :group="group" :position="position">
    <div slot="body" slot-scope="props">
      <span class="notification-icon"></span>
      <button class="notification-dismiss" @click="props.close">
        <i class="fa fa-times" aria-hidden="true"></i>
      </button>
      <p class="notification-title">
        {{props.item.title}}
      </p>
      <p class="notification-message" v-html="props.item.text"></p>
    </div>
  </notifications>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  props: {
    group: '',
    title: '',
    content: '',
    type: '',
    position: {
      default: 'bottom right'
    }
  },
  methods: {
    show: function () {
      this.$notify({
        group: this.group,
        title: this.title,
        text: this.content,
        position: this.position,
        duration: -1
      })
    }
  }
}
</script>