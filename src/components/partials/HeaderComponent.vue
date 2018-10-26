<template>
  <div class="wrapper">
    <a href="/"><Logo class="center-block"></Logo></a>
    <ul class="navigation">
      <li class="nav-header">COMPONENTS</li>
      <li>
        <router-link to="/buttons" :class="{'active-route': $route.path == '/buttons'}">Buttons</router-link>
      </li>
      <li>
        <router-link to="/text-fields" :class="{'active-route': $route.path == '/text-fields'}">Text Fields</router-link>
      </li>
      <li>
        <router-link to="/notifications" :class="{'active-route': $route.path == '/notifications'}">Notifications</router-link>
      </li>
      <li>
        <router-link to="/banner-notifications" :class="{'active-route': $route.path == '/banner-notifications'}">Banners</router-link>
      </li>
      <li>
        <router-link to="/modals" :class="{'active-route': $route.path == '/modals'}">Modals</router-link>
      </li>
      <li>
        <router-link to="/tables" :class="{'active-route': $route.path == '/tables'}">Tables</router-link>
      </li>
      <li>
        <router-link to="/tooltips" :class="{'active-route': $route.path == '/tooltips'}">Tooltips</router-link>
      </li>
      <li>
        <router-link to="/tabs-and-accordions" :class="{'active-route': $route.path == '/tabs-and-accordions'}">Tabs & Accordions</router-link>
      </li>
      <li>
        <router-link to="/loaders" :class="{'active-route': $route.path == '/loaders'}">Spinners & Loaders</router-link>
      </li>
      <li>
        <router-link to="/selects" :class="{'active-route': $route.path == '/selects'}">Selects</router-link>
      </li>
      <li class="nav-header">PATTERNS</li>
      <li>
        <router-link to="/buttons">Forms</router-link>
      </li>
      <li>
        <router-link to="/buttons">Media Upload</router-link>
      </li>
      <li>
        <router-link to="/datepickers">Datepickers</router-link>
      </li>
      <li>
        <router-link to="/buttons">Wizard</router-link>
      </li>
      <li>
        <router-link to="/buttons">Global Navigation</router-link>
      </li>
      <li>
        <router-link to="/buttons">Charts & Graphs</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Validation'}" :class="{'active-route': $route.path == '/validation'}">Validation Form</router-link>
      </li>
      
    </ul>
  </div>
</template>

<script>
import Logo from '@/components/common/Logo'

export default {
  components: {
    Logo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  #logo {
    width: 125px;
    height: 65px;
  }

  .navigation {
    text-align: left;
    margin-top: 35px;

    a {
      display: block;
      color: #ADB6C7;
      margin: 0;
      font-weight: normal;
      
      &:hover, 
      &:focus {
        color: #808898;
        text-decoration: none;
      }

      &.active-route {
        color: $neutral-800;
        font-weight: 500;
      }
    }

    li {
      position: relative;
      list-style-type: none;
      margin-bottom: 8px;

      &.nav-header {
        color: #7A87A1;
        font-size: 11px;
        font-weight: 500;
        margin-top: 40px;
        margin-bottom: 20px;

        &:first-of-type {
          margin-top: 0;
        }
      }
    }
  }

  .active-route {
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 10px;
      left: -55px;
      height: 2px;
      width: 50px;
      background-color: $primary-purple;
    }
  }
</style>
