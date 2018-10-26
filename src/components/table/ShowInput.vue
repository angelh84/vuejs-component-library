<template>
  <div class="datatable-show-input">
    Display &nbsp;&nbsp;&nbsp;
    <dropdown-select :value="value" @update:value="updateValue" :options="options" class="datatable-field-wrapper" :compact="true"></dropdown-select>
  </div>
</template>

<script>
import DropdownSelect from '@/components/forms/DropdownSelect'

export default {
  data () {
    return {

    }
  },
  components: {
    DropdownSelect
  },
  props: {
    value: {
      type: Number,
      required: false,
      default: 10
    },
    options: {
      type: Array,
      required: false,
      default: function () {
        return [
          10,
          25,
          50,
          100
        ]
      }
    }
  },
  methods: {
    updateValue: function (value) {
      this.$emit('update:value', +value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .datatable-field-wrapper {
    display: inline-block;
    max-width: 50px;
    min-width: auto;
  }
  .datatable-show-input {
    display: inline-block;
  }
</style>