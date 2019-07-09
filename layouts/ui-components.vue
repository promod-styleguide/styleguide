<template>
  <div>
    <sprite />
    <div class="grid">
      <nav class="submenu">
        <div class="logo">
          <nuxt-link to="/">
            <img src="~/static/img/logo.svg" alt="logo promod"></img>
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
      <Menu />
      <div class="container">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import sprite from '~/components/sprite.vue'
import Menu from '~/components/menu.vue'
export default {
  components: {
    sprite,
    Menu
  }
}
</script>
