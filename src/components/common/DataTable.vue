<template>
  <div class="data-table-container">
    <div class="data-table-header">
      <div>
        <div class="wrapper-left">
          <slot name="controls.search">
            <input-field :value.sync="search" placeholder="Search" class="data-table-search icon-search4"></input-field>
          </slot>
        </div>
        <div class="wrapper-right">
          <slot name="controls.filters" v-if="formattedData.length > 0">
          </slot>
          <slot name="controls.columns" v-if="columnSelector && columns.length > 0">
            <column-selector :columns="columns"></column-selector>
          </slot>
          <slot name="extras.buttons">
          </slot>
        </div>
      </div>
    </div>
    
    <table class="data-table">
      <thead>
        <tr>
          <slot name="table.headers">
            <!-- If no headers is found, then the first element keys are printed as headers -->
            <th v-for="val, key in processedData[0]">{{ key }}</th>
          </slot>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in processedData" :key="row[tableKey]">
          <!--
            The default uses an slot named table.row, if it is found the whole td is rendered as one
          -->
          <slot name="table.row" :item="row">
            <!--
              If the columns are defined, then print each of the column referenced slots in order
            -->
            <template v-if="columns.length > 0">
              <template v-for="val, key in columns" v-if="val[1]">
                <template v-if="typeof $scopedSlots['trow.' + val[0]] === 'function'">
                  <slot :name="'trow.' + val[0]" :item="row">
                  </slot>
                </template>
                <!-- If no slot is found with the column name, the column is rendered as-is from the source -->
                <td v-else>{{row[val[0]]}}</td>
              </template>
            </template>
            <!--
              If no trow is found, and no columns are registered then just print every element as raw data
            -->
            <template v-if="columns.length === 0">
              <template v-for="val, key in row">
                <td>{{ val }}</td>
              </template>
            </template>
          </slot>
        </tr>
      </tbody>
    </table>
    <div class="data-table-footer">
      <div>
        <div class="wrapper-left">
          <slot name="controls.showing" :page="page" :size="size" :total="total">
            <span class="showing-info">
              Showing
              <strong>{{ total > 0 ? (page - 1) * size + 1 : 0 }}</strong>
              to
              <strong>{{ page * size < total ? page * size : total }}</strong>
              of
              <strong>{{ total }}</strong>
              entries
            </span>
          </slot>
          <slot name="controls.size" :size="size" v-if="formattedData.length > 0">
            <show-input :value.sync="size"></show-input>
          </slot>
        </div>
        <div class="wrapper-right">
          <slot name="pagination" :page="page" :size="size" :total="total" v-if="formattedData.length > 0">
            <pagination-input v-model="page" :size="size" :total="total"></pagination-input>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputField from '@/components/forms/InputField'
import ShowInput from '@/components/table/ShowInput'
import PaginationInput from '@/components/table/PaginationInput'
import FilterInput from '@/components/table/FilterInput'
import ColumnSelector from '@/components/table/ColumnSelector'

import _ from 'lodash'

export default {
  data: function () {
    return {
      columns: [],
      formattedData: [],
      size: 10,
      page: 1,
      total: 0,
      search: '',
      filters: [],
      sorters: [],
      orders: []
    }
  },
  components: {
    FilterInput,
    ShowInput,
    PaginationInput,
    InputField,
    ColumnSelector
  },
  props: {
    /**
     * An array of objects with all the data.
     * @type Array
     */
    data: {
      type: Array,
      required: true
    },

    /**
     * Can be included to format the data before it is rendered,
     * default format is just the item itself, no extra formatting
     * @type Function
     */
    formatter: {
      type: Function,
      required: false,
      default: function (item) {
        return item
      }
    },

    /**
     * Defines the source function which will be used in case the component needs data,
     * @type {Object}
     */
    source: {
      type: Function,
      required: false
    },

    /**
     * Defines the key with which the table will distingish between different rows
     * also defines the default ordering
     * @type {String}
     */
    tableKey: {
      type: String,
      required: true
    },

    /**
     * Defines whether or not to show the column Selector, also this option is necessary to
     * specify every column in the form of headers
     * @type {Boolean}
     */
    columnSelector: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  watch: {
    data: function (val) {
      this.formatData(val)
    },
    size: function (newVal, oldVal) {
      // Change the page with new size according to the first element shown right now
      let currentResult = oldVal * (this.page - 1)
      this.page = Math.floor(currentResult / newVal) + 1
    },
    search: function (val) {
      // Reset pagination when a search is done
      this.page = 1
    },
    filters: function (val) {
      // Reset pagination when filters are applied
      this.page = 1
    }
  },
  computed: {
    processedData: function () {
      // Filter
      let processedData = this.filterData(this.formattedData)

      // Search
      processedData = _.filter(processedData, (item) => {
        return this.searchData(item, this.search)
      })

      // Sort
      processedData = this.sortData(processedData)

      // Set total
      this.total = processedData.length

      // Paginate
      processedData = _.filter(processedData, (item, index) => {
        return this.paginateData(index)
      })

      return processedData
    }
  },
  methods: {
    // Methods for the DataTable computed property to work
    filterData: function (data) {
      // No filtering is done without any filters
      if (this.filters.length === 0) {
        return data
      }

      // Filter the data
      // For each row in the dataset
      return _.filter(data, (item) => {
        // Check if the item matches all the filters
        return _.every(this.filters, (filter) => {
          let key = _.head(_.keys(filter))
          // Match the property and value against the filter
          return _.matchesProperty(key, filter[key])(item)
        })
      })
    },
    searchData: function (row, terms) {
      // Trim the terms and separate them by spaces
      let termsArray = _.split(_.trim(terms), ' ')

      // Get the first term
      let term = _.toLower(termsArray[0])

      // Get the rest of terms
      let rest = _.join(_.takeRight(termsArray, termsArray.length - 1), ' ')

      // If the first term is empty, then we just skip the whole search
      if (term === '') {
        return true
      } else {
        // If the term matches any of the elements in the row, return true
        let match = _.some(row, (element) => {
          if (typeof element === 'string') {
            return _.includes(_.toLower(_.deburr(element)), term)
          } else {
            return false
          }
        })

        // Match the rest of the terms again recursively
        return match && this.searchData(row, rest)
      }
    },
    sortData: function (data) {
      return _.orderBy(data, this.sorters, this.orders)
    },
    paginateData: function (index) {
      let start = this.size * (this.page - 1)
      let end = this.size * this.page - 1
      return index >= start && index <= end
    },

    formatData: function (data) {
      this.formattedData = _.map(data, (item) => {
        return this.formatter(item)
      })
    },

    loadData: function () {
      // If the data has any item then format it
      if (this.data.length > 0) {
        this.formatData(this.data)
      } else {
        if (this.source === undefined) {
          return
        }
        this.source(
          this.columns,
          this.size,
          this.page,
          this.search,
          this.filters,
          this.sorters,
          this.orders
        ).then((data) => {
          this.formatData(data)
        })
      }
    },
    reloadData: function () {
      if (this.source === undefined) {
        return
      }
      this.source(
        this.columns,
        this.size,
        this.page,
        this.search,
        this.filters,
        this.sorters,
        this.orders
      ).then((data) => {
        this.formatData(data)
      })
    }
  },
  mounted: function () {
    this.loadData()
  }
}
</script>

<style lang="scss" scoped>
  .showing-info {
    display: inline-block;
    margin-right: 60px;
  }
  
  .settings-button,
  .refresh-button,
  .generic-button {
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 25px;
    &::before {
      font-size: 14px;
      margin: 0;
    }
  }
</style>