<template>
  <div class="field-wrapper" :class="parentClasses">
    <label 
      class="form-label" 
      :class="{show: value.length > 0 && label !== null}"
    >{{ label !== null ? label : '&nbsp;' }}</label>
    <slot></slot>
    <textarea
      ref="input"
      @input="updateValue"
      :id="id"
      class="form-field textarea"
      :class="fieldClass"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :value="value"
      :attribute="attribute"
      :description="description"
      :disabled="disabled"
      v-on="$listeners"
      @blur="focusLost"
      ></textarea>
    <span v-if="!errorAvailable()" class="field-description italic">{{ description !== null ? description : '&nbsp;' }}</span>
    <span v-else class="field-description italic">{{ errors.first(name) }}</span>
  </div>
</template>

<script>
import validationBase from '@/mixins/validationBase.js'

export default {
  data: function () {
    return {
      hasContent: false
    }
  },
  mixins: [
    validationBase
  ],
  props: {
    id: '',
    placeholder: '',
    label: {
      default: null
    },
    type: {
      default: 'text'
    },
    name: '',
    /**
     * The value that the input must have
     * CAN USE SYNC
     * @type {String, Number}
     */
    value: {
      required: true,
      default: ''
    },
    fieldClass: '',
    attribute: '',
    description: {
      default: null
    },
    tag: '',
    disabled: ''
  },
  computed: {
    parentClasses: function () {
      return {
        disabled: this.disabled === 'disabled',
        valid: this.tag === 'valid',
        error: this.tag === 'error' || this.errorAvailable(),
        help: this.tag === 'help'
      }
    }
  },
  methods: {
    focus: function () {
      this.$refs.input.focus()
    },
    updateValue: function (event) {
      let value = event.target.value
      this.$emit('update:value', value)

      if (this.validationMode === 'active') {
        this.validateIfPresent(value)
      }
    },

    focusLost: function (event) {
      if (this.validationMode === 'onBlur') {
        this.validateIfPresent(this.value)
      }
    }
  }
}
</script>