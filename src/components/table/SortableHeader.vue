<template>
  <th v-show="shown()" @click="cycleSort">
    <button :class="getClass()">
      <slot></slot>
    </button>
  </th>
</template>

<script>
import _ from 'lodash'

export default {
  data: function () {
    return {
      sort: ''
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
    }
  },
  methods: {
    shown: function () {
      let column = _.find(this.$parent.columns, (o) => o[0] === this.name)
      return column !== undefined ? column[1] : false
    },
    getClass: function () {
      if (this.sort === 'asc') {
        return 'sort-ascend'
      } else if (this.sort === 'desc') {
        return 'sort-descend'
      } else {
        return ''
      }
    },
    cycleSort: function () {
      if (this.sort === '') {
        this.sort = 'asc'
        this.addSort(this.name)
      } else if (this.sort === 'asc') {
        this.sort = 'desc'
        this.changeSort(this.name)
      } else {
        this.sort = ''
        this.removeSort(this.name)
      }
    },

    addSort: function (name) {
      this.$parent.sorters.push(name)
      this.$parent.orders.push('asc')
    },
    changeSort: function (name) {
      let index = this.$parent.sorters.indexOf(name)
      this.$parent.orders.splice(index, 1, 'desc')
    },
    removeSort: function (name) {
      let index = this.$parent.sorters.indexOf(name)
      this.$parent.sorters.splice(index, 1)
      this.$parent.orders.splice(index, 1)
    }
  },
  mounted: function () {
    let column = _.find(this.$parent.columns, (o) => o[0] === this.name)
    if (column === undefined) {
      this.$parent.columns.push([this.name, true, this.title !== undefined ? this.title : this.name])
    }

    let index = this.$parent.sorters.indexOf(this.name)
    if (index > -1) {
      this.sort = this.$parent.orders[index]
    }
  }
}
</script>

<style lang="css" scoped>
</style>