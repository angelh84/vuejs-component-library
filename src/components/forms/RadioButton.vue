<template>
  <div class="field-wrapper radio" :class="parentClasses">
    <input
      :id="id"
      :class="fieldClass"
      type="radio"
      :name="name"
      :disabled="disabled"
      :selected="selectedValue == value"/>
    <label 
      :for="id" 
      class="radio-label" 
      :class="{right: position === 'right', 'selected': selectedValue == value}" 
      @click="onSelect"><span>{{ label }}</span></label>
  </div>
</template>

<script>
import validationBase from '@/mixins/validationBase.js'

export default {
  data: function () {
    return {
      parentClasses: {
        disabled: this.disabled === 'disabled',
        valid: this.tag === 'valid',
        error: this.tag === 'error',
        help: this.tag === 'help'
      }
    }
  },
  mixins: [
    validationBase
  ],
  props: {
    id: '',
    label: null,
    name: {
      default: null
    },
    fieldClass: '',
    tag: '',
    disabled: '',
    position: '',
    /**
     * The value that the input must have
     * CAN USE SYNC
     * @type {String, Number}
     */
    value: {
      type: [String, Number],
      default: -1
    },
    selectedValue: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    onSelect: function () {
      if (this.value !== this.selectedValue) {
        this.$emit('update:value', this.selectedValue)
        this.validateIfPresent(this.selectedValue)
      }
    }
  }
}
</script>