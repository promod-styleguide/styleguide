<template>
  <div>
    <sprite />
    <div class="grid">
      <nav class="submenu">
        <div class="logo">
          <nuxt-link to="/">
            <img src="/logo.svg" alt="logo promod"></img>
            <h1>WEB DESIGN SYSTEM</h1>
          </nuxt-link>
        </div>
        <h5>COMPONENTS</h5>
        <ul>
          <li>
            <nuxt-link to="/ui-components/buttons">
              Buttons
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/ui-components/alerts">
              Alerts
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/ui-components/tags">
              Tags
            </nuxt-link>
          </li>
        </ul>
        <h5>FORM ELEMENTS</h5>
        <ul>
          <li>
            <nuxt-link to="/ui-components/inputs">
              Inputs
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <nav class="menu">
        <ul>
          <li>
            <nuxt-link to="/design-elements/colors">
              Design Elements
            </nuxt-link>
          </li>
          <li class="active">
            <nuxt-link to="/ui-components/buttons">
              UI Components
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="container">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import sprite from '~/components/sprite.vue'
export default {
  components: {
    sprite
  }
}
</script>
