<template>
  <div ref="container" class="modal-small modal-container" :class="{active: modalActive}" @click.self="goBack()">
    <div class="modal-wrapper">
      <button class="modal-dismiss icon-cross" type="button" @click="goBack()"></button>
      <div class="modal-title"><slot>This is a 400 pixel wide modal</slot></div>
      <hr>
      <div class="modal-body">
        <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.</p>
        <p>Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn-clear" @click="goBack()">Cancel</button>
        <button type="button" class="btn-primary" @click="goBack()">Apply</button>
      </div>
    </div>
  </div>
</template>

<script>
import modalBase from '@/components/mixins/modalBase'

export default {
  mixins: [
    modalBase
  ]
}
</script>