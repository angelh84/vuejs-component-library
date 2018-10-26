<template>
  <input-field placeholder="Search" class="data-table-search icon-search4" :value="value" @input="updateValue($event.target.value)"></input-field>
</template>

<script>
import InputField from '@/components/forms/InputField'

export default {
  data: function () {
    return {
    }
  },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  components: {
    InputField
  },
  methods: {
    updateValue: function (value) {
      this.$emit('input', this.$refs.filter.value)
    }
  }
}
</script>

<style lang="css" scoped>
</style>