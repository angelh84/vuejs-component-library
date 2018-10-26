<template>
  <div class="pagination">
    <button @click="changePage(value - 1)" class="previous"></button>
    <button
      v-for="page in pagesShown"
      @click="changePage(value + page - middlePage)"
      :class="{active: page == middlePage}"
      v-if="value + page - middlePage > 0 && value + page - middlePage <= max"
      >
        {{ value + page - middlePage }}
    </button>
    <button @click="changePage(value + 1)" class="next"></button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {

    }
  },
  computed: {
    max: function () {
      return Math.ceil(this.total / this.size)
    }
  },
  props: {
    value: {
      type: Number,
      required: true
    },
    size: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    pagesShown: {
      type: Number,
      required: false,
      default: 11
    }
  },
  methods: {
    changePage: function (value) {
      // If the page is valid, then change the page
      if (value > 0 && value <= this.max) {
        this.$emit('input', value)
      }
    }
  },
  created: function () {
    this.middlePage = Math.ceil(this.pagesShown / 2)
  }
}
</script>

<style lang="css" scoped>
</style>