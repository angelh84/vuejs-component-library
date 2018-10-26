export default {
  data: function () {
    return {
      modalActive: true
    }
  },
  methods: {
    goBack: function () {
      this.modalActive = false
      setTimeout(() => {
        // Get the route stack
        console.log(this.$route)
        console.log(this.$router)
        let routeStack = this.$route.matched
        if (routeStack.length >= 2) {
          // If there are enough routes to go back in the stack, go to the parent route
          let parentRoute = routeStack[routeStack.length - 2]
          this.$router.push({
            name: parentRoute.name,
            params: this.$route.params,
            query: this.$route.query
          })
        } else {
          // Else just go back on the navigation history
          this.$routes.back()
        }
      }, 400)
    }
  },
  mounted: function () {
    document.body.classList.add('modal-active')
  },
  destroyed: function () {
    document.body.classList.remove('modal-active')
  }
}
