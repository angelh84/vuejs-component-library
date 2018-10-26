<template>
  <dropdown-multiselect :value="selectedColumns" @update:value="updateValue" placeholder="Select Columns to Show" :options="processedColumns" selectedLabel="Columns Selected" name="column_selector" class="filter-columns" :compact="true">
  </dropdown-multiselect>
</template>

<script>
import DropdownMultiselect from '@/components/forms/DropdownMultiselect'
import _ from 'lodash'

export default {
  data: function () {
    return {
      selectedColumns: [],
      processedColumns: [],
      loaded: false
    }
  },
  props: {
    columns: {
      required: true,
      type: Array
    }
  },
  components: {
    DropdownMultiselect
  },
  methods: {
    updateValue: function (columns) {
      // Cycle through each column in the datatable
      _.map(this.columns, (mc, index) => {
        // Get the label & title
        let label = this.$parent.columns[index][0]
        let title = this.$parent.columns[index][2]

        // Check if the current column is on the selected columns of the multiselect
        let found = _.find(columns, (fc) => {
          return fc === mc[0]
        })
        if (found !== undefined) {
          // We replace the column item with a new one, this way VueJS can keep track of the change
          this.$parent.columns.splice(index, 1, [label, true, title])
        } else {
          // We replace the column item with a new one, this way VueJS can keep track of the change
          this.$parent.columns.splice(index, 1, [label, false, title])
        }
      })
    },

    loadColumns: function () {
      if (!this.loaded) {
        // Load all the datatable columns into an array that the multiselect can use as options
        this.processedColumns = _.map(this.$parent.columns, (o) => {
          return {
            id: o[0], // 0 is the name, which we are using this as the id
            text: o[2] // 2 is the title
          }
        })

        // Load all the datatable columns into an array to set as selected values
        this.selectedColumns = _.map(this.$parent.columns, (o) => {
          return o[0] // 0 is the name, which we are using as the id
        })
        this.loaded = true
      }
    }
  },
  mounted: function () {
    this.loadColumns()
  }
}
</script>

<style lang="scss" scoped>
  .filter-columns {
    display: inline-block;
    max-width: auto;
    min-width: 50px;
  }
</style>