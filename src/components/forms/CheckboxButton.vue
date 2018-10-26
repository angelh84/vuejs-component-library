<template>
  <div class="field-wrapper checkbox" :class="parentClasses">
    <input
      :id="id"
      :class="fieldClass"
      type="checkbox"
      :name="name"
      :disabled="disabled"
      :checked="isChecked"/>
    <label 
      :for="id" class="checkbox-label" 
      :class="{right: position === 'right', 'checked': isChecked}" 
      @click="toggleValue"><span>{{ label }}</span></label>
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
    isChecked: function () {
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