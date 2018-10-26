<template>
  <div class="field-wrapper" :class="parentClasses">
    <label 
      class="form-label show"
      >{{ label !== null ? label : '&nbsp;' }}</label>
    <date-picker
      :value="value"
      @input="updateValue"
      :name="name"
      :input-class="fieldClass + ' form-field'"
    ></date-picker>
    <span v-if="!errorAvailable()" class="field-description italic">{{ description !== null ? description : '&nbsp;' }}</span>
    <span v-else class="field-description italic">{{ errors.first(name) }}</span>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import validationBase from '@/mixins/validationBase.js'
import moment from 'moment'

export default {
  data: function () {
    return {

    }
  },
  mixins: [
    validationBase
  ],
  components: {
    'date-picker': Datepicker
  },
  props: {
    value: {
      required: true,
      type: Date
    },
    label: {
      default: null
    },
    description: {
      default: null
    },
    name: '',
    fieldClass: ''
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
    updateValue: function (value) {
      this.$emit('update:value', value)
      this.validateIfPresent(moment(value).format('YYYY/MM/DD'))
      console.log(this.$validator.fields)
    },

    // This addition to the rules is
    // needed for the date validations to work
    extraRules: function () {
      return 'date_format:YYYY/MM/DD'
    }
  }
}
</script>

<style lang="css" scoped>
</style>