<template>
  <div class="wrapper button-content">
    <h1>Tables</h1>
    <span class="headline-divider"></span>
    <p>Data tables are used to communicate a group of related information into a grid format for better readablity and relational understanding. </p>

    <h2>Basic Tables</h2>
    <p>Basic tables are used as the base for all tables. Any additional functionality or features are added on top of the base styling. Typically, tables span 100% width inside their container. </p>

    <h2>Tables</h2>
    <h3>Normal Table</h3>

    <data-table :data="tableData" table-key="offerId">
      <template slot="table.headers">
        <normal-header name="actions">Actions</normal-header>
        <sortable-header name="offerId">Offer ID</sortable-header>
        <sortable-header name="name">Name</sortable-header>
        <sortable-header name="comission">Commission</sortable-header>
        <sortable-header name="type">Type</sortable-header>
        <sortable-header name="progress">Inventory</sortable-header>
        <sortable-header name="status">Status</sortable-header>
      </template>
      <template slot="table.row" slot-scope="{ item }">
        <td><button class="btn-clear fa-navicon actions-button"></button></td>
        <td>{{ item.offerId }}</td>
        <td><span class="fa-circle"></span> {{ item.name }}</td>
        <td>{{ item.comission }}</td>
        <td>{{ item.type }}</td>
        <td class="progress-bar-parent">
          <div class="progress-bar" :class="item.status"><span :style="{width: item.progress / item.total * 100 + '%'}"></span></div>
          {{ item.progress }} / {{ item.total }}
        </td>
        <td class="label-cell"><span :class="'label-' + item.status">{{ item.status }}</span></td>
      </template>
      <template slot="controls.filters">
        <filter-input property="status" label="Status"></filter-input>
        <filter-input property="type" label="Type" all-label="All Types"></filter-input>
        <filter-input property="name" label="Name"></filter-input>
      </template>
    </data-table>

       <h3>Table without headers neither columns format (RAW)</h3>
    <data-table :data="tableData" table-key="offerId">
    </data-table>
    <br/>

    <h3>Table that can hide columns</h3>
    <data-table :data="tableData" table-key="offerId" :formatter="formatRow" :source="tableSource" :column-selector="true">
      <template slot="table.headers">
        <normal-header name="actions" title="Actions">Actions</normal-header>
        <sortable-header name="offerId" title="Offer ID">Offer ID</sortable-header>
        <sortable-header name="name" title="Name">Name</sortable-header>
        <sortable-header name="comission" title="Comission">Commission</sortable-header>
        <sortable-header name="type" title="Type">Type</sortable-header>
        <sortable-header name="percentProgress" title="Inventory">Inventory</sortable-header>
        <sortable-header name="status" title="Status">Status</sortable-header>
      </template>
      <td slot="trow.actions" slot-scope="{ item }">
        <button class="btn-clear fa-navicon actions-button"></button>
      </td>
      <td slot="trow.offerId" slot-scope="{ item }">{{ item.offerId }}</td>
      <td slot="trow.name" slot-scope="{ item}">
        <span class="fa-circle"></span> {{ item.name }}
      </td>
      <td slot="trow.comission" slot-scope="{ item }">{{ item.comission_text }}</td>
      <td slot="trow.type" slot-scope="{ item }">{{ item.type }}</td>
      <td slot="trow.percentProgress" slot-scope="{ item }" class="progress-bar-parent">
        <div class="progress-bar" :class="item.status"><span :style="{width: item.percentProgress + '%'}"></span></div>
        {{ item.progress }} / {{ item.total }}
      </td>
      <td slot="trow.status" slot-scope="{ item }" class="label-cell">
        <span :class="'label-' + item.status">{{ item.status }}</span>
      </td>
    </data-table>

  </div>
</template>

<script>
  import _ from 'lodash'
  import DataTable from '@/components/common/DataTable'
  import tableData from '@/data/tableData.json'
  import NormalHeader from '@/components/table/NormalHeader'
  import SortableHeader from '@/components/table/SortableHeader'
  import FilterInput from '@/components/table/FilterInput'

  export default {
    components: {
      DataTable,
      NormalHeader,
      SortableHeader,
      FilterInput
    },
    data () {
      return {
        tableData: tableData
      }
    },
    methods: {
      // These 2 methods are for the datatable
      // formatRow is the function that receives the row/item of the table and formats
      // it up to how the template needs, here can even add additional fields for
      // searching and filtering
      formatRow: function (item) {
        let newItem = _.cloneDeep(item)
        newItem.percentProgress = (item.progress / item.total) * 100
        newItem.comission_text = '$' + String(item.comission)

        return newItem
      },
      // tableSource is the dynamic source of the table, this is meant
      // as a way to populate the table dynamically
      tableSource: function (columns, size, page, search, filters, sorters, orders) {
        return new Promise((resolve, reject) => {
          resolve(this.tableData)
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
