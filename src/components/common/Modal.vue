<template>
  <div ref="container" class="modal-container" :class="{active: modal}" @click.self="closeModal()">
    <div class="modal-wrapper">
      <button class="modal-dismiss icon-cross" type="button" @click="closeModal()"></button>
      <div class="modal-title"><slot name="modal-title"></slot></div>
      <hr>
      <div class="modal-body">
        <slot name="modal-body"></slot>
      </div>
      <div class="modal-footer">
        <slot name="modal-footer">
          <button type="button" class="btn-clear" @click="closeModal()">Cancel</button>
          <button type="button" class="btn-primary" @click="closeModal()">Apply</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['modal'],
  methods: {
    closeModal: function () {
      let $this = this
      this.$refs.container.classList.remove('active')
      setTimeout(function () {
        document.body.classList.remove('modal-active')
        $this.close()
      }, 400)
    },
    close: function () {
      this.$emit('close')
    }
  },
  watch: {
    modal: function (showVal) {
      if (showVal) {
        document.body.classList.add('modal-active')
      } else {
        document.body.classList.remove('modal-active')
      }
    }
  }
}
</script>