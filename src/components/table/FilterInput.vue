<template>
  <div class="datatable-filter-input">
    {{ label_text }} :
    <dropdown-select :value="value" @update:value="updateValue" :options="optionsProcessed" class="datatable-field-wrapper" :compact="true"></dropdown-select>
  </div>
</template>

<script>
import _ from 'lodash'
import DropdownSelect from '@/components/forms/DropdownSelect'

export default {
  data () {
    return {
      value: '-',
      label_text: '',
      optionsProcessed: []
    }
  },
  components: {
    DropdownSelect
  },
  props: {
    options: {
      type: Array,
      required: false,
      default: function () {
        return []
      }
    },
    property: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: null
    },
    allLabel: {
      type: String,
      required: false,
      default: 'All'
    }

  },
  methods: {
    getOptions: function () {
      // Get a list of possible values
      let attributes = _.map(this.$parent.formattedData, (e) => {
        return {id: e[this.property], text: e[this.property]}
      })

      // Create a list of options by removing duplicates and sorting it alphabetically
      let options = _.uniqBy(attributes, e => e.id)

      return options
    },
    generateLabel: function () {
      return _.startCase(this.property)
    },
    updateValue: function (value) {
      // Remove the current filter
      if (value === '-') {
        let index = _.findIndex(this.$parent.filters, this.property)
        if (index !== -1) {
          this.$parent.filters.splice(index, 1)
        }
      } else {
        let index = _.findIndex(this.$parent.filters, this.property)

        // If not new, then replace it with splice
        // (important to use splice since VueJS can detect this change)
        if (index !== -1) {
          this.$parent.filters.splice(index, 1, {
            [this.property]: value
          })
        } else {
          // If new, push it
          this.$parent.filters.push({
            [this.property]: value
          })
        }
      }
      this.value = value
    },
    addAll: function (options) {
      let allLabel = {
        id: '-',
        text: this.allLabel
      }

      return [allLabel].concat(options)
    }
  },
  mounted: function () {
    // Set the options
    if (this.options.length === 0) {
      this.optionsProcessed = this.addAll(this.getOptions())
    } else {
      this.optionsProcessed = this.addAll(this.options)
    }

    // Set the label
    if (this.label === null) {
      this.label_text = this.generateLabel()
    } else {
      this.label_text = this.label
    }
  }
}
</script>

<style lang="scss" scoped>
  .datatable-filter-input {
    display: inline-block;
    margin-right: 20px;
  }
  .datatable-field-wrapper {
    display: inline-block;
    max-width: auto;
    min-width: 50px;
  }
</style>