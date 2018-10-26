<template>
  <form>
    <slot :form-errors="errors" :form-fields="fields">
    </slot>
  </form>
</template>

<script>
import _ from 'lodash'

export default {
  $_veeValidate: {
    validator: 'new'
  },
  data: function () {
    return {

    }
  },
  methods: {
    validate: function () {
      this.$validator.validateAll()
    },
    clearErrors: function () {
      this.errors.clear()
    },
    addErrors: function (errors) {
      _.forEach(errors, (value, key) => {
        this.errors.add(value)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>