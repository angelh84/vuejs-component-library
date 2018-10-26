<template>
  <div class="field-wrapper toggle" :class="parentClasses">
    <input
      :id="id"
      :class="fieldClass"
      type="checkbox"
      :name="name"
      :disabled="disabled"
      :selected="isSelected"/>
    <label 
      :for="id" class="toggle-label" 
      :class="{right: position === 'right', 'on': isSelected}" 
      @click="toggleValue">
        <span class="toggle-switch"></span>
        <span class="fa-check checkmark"></span>
        <span class="label-text-wrapper">{{ label }}</span>
      </label>
  </div>
</template>

<script>
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
  props: {
    id: '',
    label: null,
    name: '',
    fieldClass: '',
    tag: '',
    disabled: '',
    position: '',
    size: '',
    /**
     * The value that the input must have
     * CAN USE SYNC
     * @type {String, Number, Boolean}
     */
    value: {
      required: true,
      type: [String, Number, Boolean]
    },
    checkValue: {
      required: false,
      type: [String, Number, Boolean],
      default: true
    },
    uncheckValue: {
      required: false,
      type: [String, Number, Boolean],
      default: false
    }
  },
  computed: {
    isSelected: function () {
      return this.value === this.checkValue
    }
  },
  methods: {
    toggleValue: function () {
      if (this.value === this.checkValue) {
        this.$emit('update:value', this.uncheckValue)
      } else {
        this.$emit('update:value', this.checkValue)
      }
    }
  }
}
</script>

