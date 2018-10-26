<template>
  <th v-show="shown()">
    <slot></slot>
  </th>
</template>

<script>
import _ from 'lodash'

export default {
  data: function () {
    return {
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
    }
  },
  mounted: function () {
    let column = _.find(this.$parent.columns, (o) => o[0] === this.name)
    if (column === undefined) {
      this.$parent.columns.push([this.name, true, this.title !== undefined ? this.title : this.name])
    }
  }
}
</script>

<style lang="css" scoped>
</style>