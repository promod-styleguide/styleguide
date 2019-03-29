<template>
  <div>
    <sprite />
    <div class="grid">
      <nav class="submenu">
        <div class="logo">
          <nuxt-link to="/">
            <img src="logo.svg" alt="logo promod"></img>
            <h1>WEB DESIGN SYSTEM</h1>
          </nuxt-link>
        </div>
        <h5>DESIGN</h5>
        <ul>
          <li>
            <nuxt-link to="/design-elements/colors">
              Colors
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/design-elements/typography">
              Typography
            </nuxt-link>
          </li>
        </ul>
        <h5>ICONS</h5>
        <ul>
          <li>
            <nuxt-link to="/design-elements/rating-icons">
              Rating
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/design-elements/country-icons">
              Country
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/design-elements/social-icons">
              Social
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/design-elements/interface-icons">
              Interface
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <nav class="menu">
        <ul>
          <li class="active">
            <nuxt-link to="/design-elements/colors">
              Design Elements
            </nuxt-link>
          </li>
          <li>
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
