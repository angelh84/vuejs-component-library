<template>
  <div id="app">
    <header class="header">
      <header-component/>
    </header>
    <main class="main-content">
      <router-view/>
    </main>
  </div>
</template>

<script>
import HeaderComponent from '@/components/partials/HeaderComponent'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    HeaderComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  #app {
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: stretch;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
  }

  .header {
    position: relative;
    flex: 0 0 235px;
    padding-top: 20px;
    @include box-shadow(4px, 0, 20px, rgba(0, 0, 0, 0.15));
    overflow: auto;
  }

  .main-content {
    width: 100%;
    overflow: auto;
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
    background-color: $neutral-10;
  }

  .text-center {
    text-align: center;
  }
  
  .headline-divider {
    display: block;
    font-size: 1px;
    width: 80px;
    height: 1px;
    border-bottom: 1px solid $primary-purple;
    margin-bottom: 20px;
  }
</style>